import { useContext, useState } from "react";
// import AiQuery from "../../components/FormComposed/AiQuery/AiQuery";
import AiQuery2 from "../../../components/FormComposed/AiQuery/AiQuery2";
import AiSetting from "../../../components/FormComposed/AiSetting/AiSetting";
import AiSetting2 from "../../../components/FormComposed/AiSetting/AiSetting2";
import { AiContext } from "../../../Contexts/FormContext/FormContext";
import { Link } from "react-router-dom";

const Compose = () => {
  const { aiConfig } = useContext(AiContext);
  const [aiConfigState, setAiConfigState] = useState(true);
  return (
    <div className=" ">
      {aiConfig?.length === 0 ? (
        <div className="min-h-[90vh]">
          <nav aria-label="Tabs" className="mx-[5%] mt-2 md:mt-7">
            <ul className="flex border-b border-dashed border-base-300 text-center">
              <li className="flex-1">
                <Link
                  onClick={() => setAiConfigState(true)}
                  className={`${
                    aiConfigState
                      ? `block bg-gray-100 p-4 text-sm font-medium text-gray-500 ring-1 ring-inset ring-accent-focus text-accent-focus bg-base-100 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100`
                      : `block p-4 text-sm font-medium text-gray-500  hover:text-white/80 text-grey-200 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100`
                  }`}
                  href=""
                >
                  <span className="absolute inset-x-0 -bottom-px h-px w-full "></span>
                  Academic Help
                </Link>
              </li>

              <li className="flex-1">
                <Link
                  onClick={() => setAiConfigState(false)}
                  className={`${
                    !aiConfigState
                      ? `block bg-gray-100 p-4 text-sm font-medium text-gray-500 ring-1 ring-inset ring-info text-info bg-base-100 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100`
                      : `block p-4 text-sm font-medium text-gray-500  hover:text-white/80 text-grey-200 hover:bg-gray-100 focus:outline-none focus:text-gray-700 focus:bg-gray-100`
                  }`}
                  href=""
                >
                  Admission Help
                </Link>
              </li>
            </ul>
          </nav>
          {!aiConfigState ? <AiSetting2 /> : <AiSetting />}
        </div>
      ) : (
        <AiQuery2 />
      )}
    </div>
  );
};

export default Compose;
