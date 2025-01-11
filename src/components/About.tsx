const About = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2 items-center lg:px-5 my-20 gap-4">
      <div className="hidden md:block h-full w-full aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/cvC_deZuDDg"
          title="Acoustics at Chichen Itza"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="px-5">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-5">
          History
        </h2>
        <div className="md:hidden h-full w-full aspect-video mb-4">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/cvC_deZuDDg"
            title="Acoustics at Chichen Itza"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          blanditiis est laborum doloremque debitis beatae excepturi eius ad, id
          voluptas perspiciatis molestias accusantium, quas dolore velit ut quod
          architecto commodi facere esse aspernatur ratione sint! Laborum fugit
          magni sint et! Omnis asperiores laboriosam alias vitae molestias
          maiores molestiae deserunt id. Sint, temporibus animi voluptatibus
          voluptate at error necessitatibus earum aspernatur! Eos ullam id
          architecto tempora quibusdam maiores molestiae vitae. Nihil nobis,
          illo consequuntur blanditiis illum inventore sint architecto,
          repellendus fuga porro accusamus nesciunt repudiandae officiis
          accusantium quisquam natus obcaecati dolor perspiciatis minima. Neque
          ea voluptas ipsum consequatur animi alias nulla obcaecati perspiciatis
          corrupti aut a, dolor, debitis doloremque maxime sapiente dolorem
          laborum ducimus nesciunt natus. Reiciendis corrupti blanditiis
          possimus impedit officia nisi, placeat eaque rerum, deserunt esse
          dolor quos nostrum omnis. Quis nulla recusandae nobis nam maiores
          velit ad perspiciatis odit repellat maxime. Rerum, reiciendis earum
          quidem odio nobis deleniti!
        </p>
      </div>
    </div>
  );
};

export default About;
