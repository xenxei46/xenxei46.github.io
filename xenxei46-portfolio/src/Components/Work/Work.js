import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FaFolder } from "react-icons/fa";
function Work (){
    return(
    <div className="work  items-center w-[80%] lg:w-[80%] h-full " id="work">
      <div className="flex justify-center items-center h-[90%]">
        <div class="grid gird-cols-12 grid-cols-3 gap-4">
              <a href="https://2wj-app.vercel.app"><div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg"><div><div className=" flex justify-center w-full"><FaFolder/></div><h2 className=" flex justify-center w-full">Angular</h2><p className="project flex justify-center w-full">2wj.com</p></div></div></a>
              <a href="https://tour-of-heroes-ashy.vercel.app/"><div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg"><div><div className=" flex justify-center w-full"><FaFolder/></div><h2 className=" flex justify-center w-full">Angular</h2><p className="project flex justify-center w-full">Tour of heroes</p></div></div></a>
              <a href="https://www.blinkhub.network/"><div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg"><div><div className=" flex justify-center w-full"><FaFolder/></div><h2 className=" flex justify-center w-full">Angular</h2><p className="project flex justify-center w-full">IRestcountries</p></div></div></a>
              <a href="https://www.blinkhub.network/"><div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg"><div><div className=" flex justify-center w-full"><FaFolder/></div><h2 className=" flex justify-center w-full">React</h2><p className="project flex justify-center w-full">Blink-hub</p></div></div></a>
              <a href="https://codesandbox.io/dashboard/sandboxes/?workspace=4db0f85c-b627-4a89-9673-115ffbf90454"><div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg"><div><div className=" flex justify-center w-full"><FaFolder/></div><h2 className=" flex justify-center w-full">React</h2><p className="project flex justify-center w-full">Wiikoi-mart</p></div></div></a>
              <a href="https://codesandbox.io/dashboard/sandboxes/?workspace=4db0f85c-b627-4a89-9673-115ffbf90454"><div className="bg-zinc-900 w-20 h-20 md:w-40 md:h-40 lg:w-40 lg:h-28 hover:bg-green-400 hover:text-black flex justify-center items-center rounded-lg"><div><div className=" flex justify-center w-full"><FaFolder/></div><h2 className=" flex justify-center w-full">Angular</h2><p className="project flex justify-center w-full">XEN-Crypt</p></div></div></a>   
        </div>
      </div>
    </div>
    )
}





export default Work;