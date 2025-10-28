import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            {/* section-1 */}
             <div>
                <Link to={"/signup"}>

                  <div>
                    <div>
                        <p className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between'>Become an Instructor</p>
                        <FaArrowRight />
                    </div>
                  </div>
                </Link>
             </div>


            {/* section-2 */}



            {/* section-3 */}



            {/* footer */}
        </div>
    );
}

export default Home;