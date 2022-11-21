import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FaFolder } from "react-icons/fa";
function Work (){
    return(
    <div className="work  items-center w-[80%] lg:w-[80%] h-full " id="work">
      <div className="flex justify-center items-center h-[90%]">
        <div class="grid gird-cols-12 grid-cols-3 gap-4">
              <div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg"><div><div className="bg-red-400 flex justify-center w-full"><FaFolder/></div><h2 className="">Angular</h2><p>2WJ.com</p></div></div>
              <div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg"><div><h2>2wj.com</h2><p>Api: Angular</p></div></div>
              <div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg"><div><h2>2wj.com</h2><p>Api: Angular</p></div></div>
              <div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg"><div><h2>2wj.com</h2><p>Api: Angular</p></div></div>
              <div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg"><div><h2>2wj.com</h2><p>Api: Angular</p></div></div>
              <div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg "><div><h2>2wj.com</h2><p>Api: Angular</p></div></div>
              <a href="github.com/xenxei46"><div className=" hover:text-green-400 w-[100%] flex justify-center"><span>See more</span><span className="px-2 flex items-center"><FontAwesomeIcon icon={faCaretRight}/></span></div></a>
        </div>
      </div>
    </div>
    )
}





export default Work;