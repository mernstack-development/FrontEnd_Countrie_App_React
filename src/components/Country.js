import React, {useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../country.css'

const Country = () => {
    const [country, setCountry] = useState([])
    const  {name} = useParams()

    useEffect(() => {
        const fetchCountryData = async () => {
          const response = await fetch(
            `https://restcountries.com/v2/name/${name}`
          )
          const country = await response.json()
          setCountry(country)
        
        }
    
        fetchCountryData()
      }, [name])


  return (
    <>
        <section className="country">
            <Link to="/" className="btn btn-light">
            <i className="fas fa-arrow-left"></i> Back Home
            </Link>

            {country.map((c) => {
                const {
                    numericCode,
                    flag,
                    name,
                    nativeName,
                    population,
                    region,
                    subregion,
                    capital,
                    topLevelDomain,
                    currencies,
                    languages,
                    borders,
                } = c


                return(
                    <article key={numericCode}>
                        <div className="country-inner">
                            <div className="flag">
                                <img src={flag} alt={name} />
                            </div>

                            <div className="country-details">
                                <h2>{name}</h2>
                            </div>




                        </div>

                    </article>
                )









            })}

        
        </section>
       
    </>
  )
}

export default Country