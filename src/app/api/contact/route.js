import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import pool from "@/helper/db";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const name = formData.get("name");
        const phone = formData.get("phone");
        const email = formData.get("email");
        const message = formData.get("message");

        const unique_id = uuid();

        // ✅ Correct SQL (columns match table)
        await pool.execute(
            "INSERT INTO contact (id, name, email, phone, message, date) VALUES (?, ?, ?, ?, ?, NOW())",
            [unique_id, name, email, phone, message]
        );

        // Email transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            },
            tls: { rejectUnauthorized: false }
        });

        // Admin email
        await transporter.sendMail({
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: "Royal Hoses - Contact Form",
            html: `
                <h3>New Contact Form Submission</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Message:</b> ${message}</p>
            `
        });

        // User confirmation
        await transporter.sendMail({
            from: process.env.MY_EMAIL,
            to: email,
            subject: "Thank You for Contacting Royal Hoses",
            html: `
                <h2>Hello ${name},</h2>
                <p>Thank you for contacting Royal Hoses. We will get back to you shortly.</p>
            `
        });

        return NextResponse.json({
            message: "Message Sent Successfully!",
            success: true,
        });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Failed to send query",
            success: false,
        });
    }
}
