import Image from "next/image";
import Link from "next/link";

import NavBarMenu from "./NavBarMenu";
import drafting_compass from '@public/drafting_compass.svg'
import filter from '@public/filter.svg'


const NavBar = () => {

  return (

    <div className="fixed z-50 top-0 flex justify-center w-full border-b-2 border-opacity-30 border-gray-200 pt-3 mb-3 pb-3 backdrop-blur-2xl bg-white/80">
      <div className="w-full max-w-[1680px] lg:px-16 max-lg:px-8">
        <div className="flex lg:justify-center w-full">
          {/* company name */}
          <div className="lg:w-[20%] w-full">
            <Link href={'/lists'} className="text-muted-foreground w-full font-bold h-fit ">seeran <span className="text-blue-700">lists</span></Link>
          </div>
          {/* navbar dynamic menu */}
          <div className="p-0 lg:w-[60%]">
            <NavBarMenu/>
          </div>
          {/* user username */}
          <div className="lg:w-[20%] w-full justify-end flex gap-10 ">
            <Link href={'lists/list'} className="transition ease-in-out duration-300 max-sm:hidden hover:text-blue-700 text-gray-400 font-bold p-0 m-0 h-fit w-fit">list</Link>
            <Link href={'/dashboard'} className="text-blue-700 h-fit font-bold">username</Link>
          </div>
        </div>

        {/* searchbar */}
        <div className="mt-2 mb-1 p-0">
          <div className="flex justify-center md:gap-10 gap-2">
          <input
            type="text"
            placeholder={`search anything`}
            className='hover:border-blue-700 bg-transparent focus:border-blue-500 border-gray-500 w-full max-w-5xl min-w-[290px] flex border-2 drop-shadow-lg rounded-full pl-7'
          />
            <Image src={drafting_compass} alt="radius icon" className="h-fit w-fit max-lg:hidden rounded-full transition ease-in-out mt-1 p-3 duration-500 hover:opacity-50 cursor-pointer" />
            <Image src={filter} alt="filter icon" className="h-fit w-fit rounded-full transition ease-in-out mt-1 p-3 duration-500 hover:opacity-50 cursor-pointer" />
          </div>
        </div>
        
      </div>
    </div>
      
  )
}

export default NavBar;