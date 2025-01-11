import axios from "axios";
import { useEffect, useState } from "react";

const Demo = () => {
  const [impulseResponse, setImpulseResponse] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Define an async function to handle API call
    const fetchImpulseResponse = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://tok-model-jd4k.vercel.app/systems/best_impulse_response"
        );
        // Set the data in state
        setImpulseResponse(response.data.impulse_response);
      } catch (err) {
        console.error("Error fetching the impulse response:", err);
        setError("Unable to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchImpulseResponse();
  }, []);

  console.log('impulse_response: ', impulseResponse);
  

  return (
    <div className="min-h-screen gap-4 text-white relative px-5 py-10">
      <div className="absolute inset-0 bg-black -z-10 opacity-75"></div>
      <img
        src="bg.jpg"
        alt=""
        className="absolute -z-20 inset-0 h-full w-full object-cover object-center  opacity-100"
      />
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
            The system demo
          </h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            placeat! Nobis veniam, minus qui obcaecati aliquid mollitia
            blanditiis cumque quaerat?
          </p>
          <div className="grid h-screen gap-4 place-items-center my-4 md:grid-cols-3 md:h-[50vh] max-w-[320px] md:max-w-[1024px] mx-auto ">
            <div className="size-48 md:size-60 lg:size-80 animate-pulse-custom">
              <img src="hand-clap.png" className="scale-95" alt="" />
            </div>

            <div className="bg-red-600 rounded-full size-48 md:size-60 lg:size-80 place-items-center place-content-center">
              {isLoading ? <p>Loading...</p> : <img src="system.jpg" alt="" className="h-full w-full object-cover object-center rounded-full"/>}
            </div>

            <div className=" rounded-full size-48 md:size-60 lg:size-80 animate-pulse-custom flex">
              <img
                src="q-bird.png"
                className="h-full w-full object-cover object-center"
                alt=""
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            placeat! Nobis veniam, minus qui obcaecati aliquid mollitia
            blanditiis cumque quaerat?
          </p>
        </>
      )}
    </div>
  );
};

export default Demo;
