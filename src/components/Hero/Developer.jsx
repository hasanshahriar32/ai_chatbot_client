import { HeroTitle } from "./hero";
import { RiExternalLinkLine } from "react-icons/ri";
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
          {/* <span className="hidden visible">Visit my</span>{" "} */}
          <span>
            Portfolio <RiExternalLinkLine />
            {/* add svg icon of redirect */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </HeroTitle>
      </button>
    </div>
  );
};

export default Developer;
