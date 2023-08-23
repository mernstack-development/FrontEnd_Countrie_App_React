import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Get_All_Countries_url = 'https://restcountries.com/v2/all'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const fetchCountryData = async () => {
        const response = await fetch(Get_All_Countries_url)
        const countries = await response.json()
        setCountries(countries)
       /*  console.log(countries) */
    }


    useEffect(() => {
       fetchCountryData()
    }, [])

    const removeCountry = ( numericCode ) => {
        const newCountry = countries.filter(
            (country) => country.numericCode !== numericCode
        )
        setCountries(newCountry)
    }


  return (
    <>
        <section className='grid'>
            {countries.map((country) => {
                const { numericCode, name, population, region, capital, flags} = country

                return(
                    <article key={numericCode} >
                        <div>
                            <img src={flags.png} alt={name}></img>
                            <div className='details'>
                                <h3>{name}</h3>
                                <h4>
                                    population: <span>{population}</span>
                                </h4>
                                <h4>
                                    Region: <span>{region}</span>
                                </h4>
                                <h4>
                                    Capital: <span>{capital}</span>
                                </h4>
                                <div className='buttons'>
                                    <Link 
                                        to={`/countries/${name}`} 
                                        className='btn'>Learn More
                                    </Link>
                                    <button 
                                        className='btn' 
                                        onClick={() => removeCountry(numericCode)}>Remove Country
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                )
            })}
        </section>
    </>
  )
}

export default Countries