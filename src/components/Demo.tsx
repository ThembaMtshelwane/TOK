const Demo = () => {
  return (
    <div className="min-h-screen gap-4 text-white relative px-5 py-10">
      <img
        src="bg.jpg"
        alt=""
        className="absolute -z-20 inset-0 h-full w-full object-cover object-center  opacity-100"
      />

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
  );
};

export default Demo;