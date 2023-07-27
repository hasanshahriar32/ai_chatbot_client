import { HeroTitle } from "./hero";

const Developer = () => {
  const handleClick = () => {
    console.log("clicked");
    //go to a link in a new window
    window.open("https://shahriarhasan.vercel.app", "_blank");
  };
  return (
    <div className="w-full m-auto justify-center">
      <button
        onClick={handleClick}
        className="z-30 btn btn-ghost btn-link cursor-pointer"
      >
        <HeroTitle className=" text-center hover:shadow-lg shadow translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Visit my portfolio
        </HeroTitle>
      </button>
    </div>
  );
};

export default Developer;
