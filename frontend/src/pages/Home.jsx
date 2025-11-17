import React from "react";
import {FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/Homepage/HighlightText";

const Home = () => {
    return (
        <div>
            {/* Section 1 */}
           <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
            {/* Become a Instructor Button */}
            <Link to={"/signup"}>
            <div className="group mx-auto mt-16 w-fit rounded-full bg-[#161D29] p-1 font-bold text-[#999DAA] drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
              <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-[#000814]">
                <p>Become an Instructor</p>
                <FaArrowRight />
             </div>
           </div>
            </Link>

            {/* Heading */}
              <div className="text-center text-4xl font-semibold">
                  Empower Your Future with
                  <HighlightText text={"Coding Skills"} />
             </div>
           </div>

           {/* section 2 */}


           {/* section 3 */}


           {/* Footer */}
        </div>   
    )
}

export default Home;