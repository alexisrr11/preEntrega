const IMGBB_API_KEY = "";
const ENDPOINT = "";

export const uploadImage = async(file) => {
    const formatdata = new FormData();
    FormatDate.append("image", file);
    try {
        const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`,{
            method: "POST",
            body: formatdata,
        });
        const data = await response.json();
        if(!data.success){
            throw new Error("Error al subir la imagen");
        }
        return data.data.url;
    } catch (error) {
        console.error("Error imgbb", error)
        throw error;
    }
}