const Achievement = () => {
  return (
    <div className=" flex justify-center flex-col-reverse items-center">
      <div className="my-10 z-10">
        <h1 className="text-5xl font-bold text-center md:text-left mb-10">
          Achievement
        </h1>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsjinnovationbangladesh%2Fposts%2F755492423248336&show_text=true&width=500"
          className="w-screen px-[5%] sm:w-[550px] h-[696px] hidden sm:block"
          style={{
            border: "none",
            overflow: "hidden",
            // backgroundColor: "transparent !!important",
          }}
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsjinnovationbangladesh%2Fposts%2F755492423248336&show_text=true&width=300"
          className=" px-[5%]  w-[389px] rounded-lg h-[565px] block sm:hidden"
          style={{
            border: "none",
            overflow: "hidden",
            // backgroundColor: "transparent !!important",
          }}
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Achievement;
