import axios from "axios";

export const sendToBackend = async (audioBlob: Blob) => {
  const formData = new FormData();
  formData.append("audio", audioBlob, "chunk.webm");

  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/audio/input",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure Content-Type is set to multipart/form-data
        },
      }
    );

    console.log("Backend response:", response.data);
  } catch (error) {
    console.error("Error sending audio to backend:", error);
  }
};
