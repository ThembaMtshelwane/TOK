import { useState, useRef } from "react";
import { sendToBackend } from "../api";

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const handleStartRecording = async () => {
    try {
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Create a MediaRecorder with audio/webm format
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm",
      });

      // Handle data available (audio chunks)
      mediaRecorder.ondataavailable = async (event) => {
        if (event.data.size > 0) {
          await sendToBackend(event.data); // Send the raw audio chunk
        }
      };

      // Start recording in 0.1s chunks
      mediaRecorder.start(100); // Record in 100ms chunks
      mediaRecorderRef.current = mediaRecorder;

      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const handleStopRecording = () => {
    // Stop the MediaRecorder
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
    }

    setIsRecording(false);
  };

  return (
    <div
      onClick={isRecording ? handleStopRecording : handleStartRecording}
      className={`system-component ${isRecording && "animate-pulse-custom"}`}
    >
      <img src="hand-clap.png" className="scale-95" alt="" />
    </div>
  );
};

export default AudioRecorder;
