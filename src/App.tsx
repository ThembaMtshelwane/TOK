export default function App() {
  return (
    <section>
      <div className="h-screen relative sm:grid grid-cols-2 ">
        <div className="px-5 flex flex-col justify-center h-full max-w-[450px] mx-auto md:max-w-[680px]">
          <h1 className="text-5xl md:text-6xl  lg:text-7xl mt-10 mb-2 font-semibold">
            The Digital Modelling of the Temple of Kulkukan
          </h1>
          <p className="text-justify text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            alias blanditiis nulla ducimus soluta possimus rerum impedit a
            nesciunt nisi eveniet rem deleniti dolores illum consequatur ab eos
            velit debitis saepe placeat sapiente! Deleniti, officiis. Eum
            veritatis, ex nihil facilis debitis iste rerum reprehenderit
            officiis error molestiae officia omnis alias.
          </p>
        </div>
        <div>
          <img
            src="intro.jpg"
            alt="temple of kulkukan"
            className="w-full h-full object-cover object-center opacity-45 absolute top-0 -z-10 sm:relative sm:opacity-100 sm:h-screen"
          />
        </div>
      </div>
      <div className="min-h-screen gap-4 text-white relative px-5 py-10">
        
        <img src="bg.jpg" alt="" className="absolute -z-20 inset-0 h-full w-full object-cover object-center  opacity-100"/>

      <div className="absolute inset-0 bg-black -z-10 opacity-75"></div>

        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
          The system demo
        </h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          placeat! Nobis veniam, minus qui obcaecati aliquid mollitia blanditiis
          cumque quaerat?
        </p>

        <div className="grid h-screen gap-4 place-items-center my-4 md:grid-cols-3 md:h-[50vh] max-w-[320px] md:max-w-[1024px] mx-auto ">
          <div className="bg-red-600 rounded-full size-48 md:size-60 lg:size-80 animate-pulse-custom"></div>
          <div className="bg-red-600 rounded-full size-48 md:size-60 lg:size-80"></div>
          <div className="bg-red-600 rounded-full size-48 md:size-60 lg:size-80 animate-pulse-custom"></div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          placeat! Nobis veniam, minus qui obcaecati aliquid mollitia blanditiis
          cumque quaerat?
        </p>
      </div>
      <div>Results</div>
    </section>
  );
}
