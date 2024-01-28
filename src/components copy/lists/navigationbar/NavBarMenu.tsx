'use client'

import Link from "next/link";

import { useState } from 'react'
import Image from 'next/image'
import chevron_down from '@public/chevron_down.svg'
import monitor_smartphone from '@public/monitor_smartphone.svg'
import shirt from '@public/shirt.svg'
import lamp from '@public/lamp.svg'
import shapes from '@public/shapes.svg'
import car from '@public/car.svg'


const categorySubHeadings = {
    electoronics: {
      title: 'electronics',
      subheadings: [ 'phones', 'tablets', 'monitors', 'consoles', 'pc', 'desktops', ],
      icon: monitor_smartphone
    },
    toys: {
      title: 'toys',
      subheadings: [ 'all', ],
      icon: shapes
    },
    car: {
      title: 'car',
      subheadings: [ 'body', 'engine', 'tyres', 'interior', 'model' , ],
      icon: car
    },
    home: {
      title: 'home',
      subheadings: [ 'appliances', 'bedroom', 'kitchen', 'bath room', 'living room', ],
      icon: lamp
    },
    fashion: {
      title: 'fashion',
      subheadings: [ 'hats', 'shirts', 'pants', 'shoes', 'socks', 'beanies', ],
      icon: shirt
    },
}

interface Subheadings {
    title: string,
    subheadings: Array<string>,
    icon: any
}

const MenuColoumnSections = ({ subHeadings } :{ subHeadings: Subheadings } ) => {

    const title = subHeadings.title
    const subheadings = subHeadings.subheadings
    const icon = subHeadings.icon

    return (
        <div>
            <h1 className="pb-5 text-gray-400 font-semibold flex gap-3">{title}<Image src={icon} alt={`${title} icon`} className="opacity-80" /></h1>
            {subheadings.map( subheading => (
                <div key={subheading} className="text-start">
                    <Link href={`/lists/${title}/${subheading}`} className="hover:text-blue-700 text-muted-foreground font-bold" >{subheading}</Link><br/>
                    
                </div>
            ))}
        </div>
    )
}

//

const NavBarMenu = () => {

    const headings = [ "latest", "popular", "category" ]
    const [hovered, setHovered] = useState( -1 | 0 | 1 | 2 )

    const handleMouseOver = (number: number) => {
        setHovered(number);

    }

    window.addEventListener('mousemove', (event) => {
        if ( event.clientY > 470 ) {
            setHovered(-1)
        }
    });

    window.addEventListener('wheel', () => {
        setHovered(-1)
    });
    
    return (
        <div className="max-lg:hidden">
            {/* navbar dynamic links */}
            <div className={`w-full flex justify-center gap-10 ${ hovered !== -1 ? 'mb-16' : 'mb-5'}`}>
                { headings.map( ( heading, index ) => (
                    <div onMouseOver={() => {handleMouseOver(index)}} key={index} className="cursor-pointer">
                        <p className={`hover:cursor-pointer transition duration-1000 flex gap-2 ${ hovered == index && 'text-blue-700'}`} onMouseOver={() => {handleMouseOver(index)}}>
                            {heading}
                            <Image src={chevron_down} alt="nav menu icon" width={15} height={15} className={`opacity-50 transition duration-500 ${ hovered == index && 'rotate-180 opacity-70' }`} />
                        </p>
                    </div>
                ))}
            </div>

            
            <div className={`overflow-hidden transition-all ease-linear duration-300 ${ hovered !== -1 ? 'max-h-[500px] h-[280px]' : 'h-0'}`}>

                {/* shop latest menu */}
                <div className={`max-h-0 overflow-hidden transition-all ease-linear duration-1000 gap-28 w-full font-extrabold ${ hovered === 0 ? 'max-h-[300px] flex h-[300px]' : 'max-h-0 hidden'}`} >
                    <MenuColoumnSections subHeadings={categorySubHeadings.electoronics}/>
                    <MenuColoumnSections subHeadings={categorySubHeadings.toys}/>
                    <MenuColoumnSections subHeadings={categorySubHeadings.home}/>
                    <MenuColoumnSections subHeadings={categorySubHeadings.fashion}/>
                </div>

                {/* popular menu */}
                <div className={`max-h-0 overflow-hidden transition-all ease-linear duration-1000 gap-28 w-full font-extrabold ${ hovered === 1 ? 'max-h-[400px] flex h-[400px]' : 'max-h-0 hidden'}`} >
                    <MenuColoumnSections subHeadings={categorySubHeadings.electoronics}/>
                    <MenuColoumnSections subHeadings={categorySubHeadings.fashion}/>
                    <MenuColoumnSections subHeadings={categorySubHeadings.home}/>
                </div>

                {/* category menu */}
                <div className={`max-h-0 overflow-hidden transition-all ease-linear duration-1000 gap-28 w-full font-extrabold ${ hovered === 2 ? 'max-h-[280px] flex h-[280px]' : 'max-h-0 hidden'}`} >
                    <MenuColoumnSections subHeadings={categorySubHeadings.fashion}/>
                    <MenuColoumnSections subHeadings={categorySubHeadings.electoronics}/>
                    <MenuColoumnSections subHeadings={categorySubHeadings.toys}/>
                </div>
            </div>

        </div>
    )
} 

export default NavBarMenu;