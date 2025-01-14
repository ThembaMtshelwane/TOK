export const sendToBackend = async (audioBlob: Blob) => {
  const formData = new FormData();
  formData.append("audio", audioBlob, "chunk.webm");

  try {
    await fetch("/api/clap", {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    console.error("Error sending audio to backend:", error);
  }
};
