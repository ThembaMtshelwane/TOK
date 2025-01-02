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
      <div>Model demo</div>
      <div>Results</div>
    </section>
  );
}
