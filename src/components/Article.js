import React from 'react'

import {Link} from "react-router-dom"
export default function Article({flags,name, population,region,subregion,ccn3}) {
    
    return (
        <>
           <Link to={`/${ccn3}`}>
                <article className='bg-white hover:bg-gray-200 rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 shadow-md overflow-hidden'>
                    <img src={flags.svg} alt="" className="md:h-72 w-full object-cover " />
                    <div className='p-4'>
                        <h2 className='font-bold text-lg text-gray-800 mb-2 dark:text-white'>{name.common}</h2>
                        <ul className='flex flex-col items-start justify-start gap-0.1 dark:text-gray-400'>
                            <li>Population: {population.toLocaleString()}</li>
                            <li>Region: {region}</li>
                            <li>Subregion: {subregion}</li>
                        </ul>
                    </div>
                </article> 
           </Link>
        </>
    );
    
}
