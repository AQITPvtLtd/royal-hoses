const { httpAxios } = "@/helper/httphelper";

export async function form(formData) {
    try {
        const result = await httpAxios.post("/api/contact", formData).then((response) => response.data);
        return result;
    } catch (error) {
        console.log("Error in contact form service:", error);
    }
}
