import Image from "next/image";

import star from '@public/star.svg'


const listings = [
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
    {
        lister: 'koketso',
        listing: 'car',
        time_listed: '15:09',
        listing_img: null
    },
]

const HomePage = () => {
    return (
        <div>
            <div className="w-full pb-10 xl:px-14 lg:px-10 md:px-6 p-2">
                <div className="grid grid-cols-6 max-2xl:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-[950px]:grid-cols-2 max-[640px]:grid-cols-1 place-items-center ">
                    { listings.map((listing, index) => (
                        <div key={index} className="w-full p-5">
                            <div className="cursor-pointer w-full mb-2">
                                <Image src={'https://source.unsplash.com/random/'} alt="pictures" height={0} width={0} className="object-cover w-full rounded-2xl aspect-square"/>
                            </div>
                            <div className="">
                                <div className="flex">
                                    <p className="cursor-pointer text-gray-600 font-bold w-fit">{listing.lister}</p>
                                    <div className="w-full flex justify-end">
                                        <Image src={star} alt="rating"  className="w-4 h-4 mt-1 mr-2 opacity-75"/>
                                        <p className="text-gray-500 ">4.7</p>
                                    </div>
                                </div> 
                                <p className="cursor-pointer ">{listing.listing}</p>
                                <div className="flex">
                                    <p className="w-full text-gray-600 font-bold">R2,000</p>
                                    <p className="w-full text-end">{listing.time_listed}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage;