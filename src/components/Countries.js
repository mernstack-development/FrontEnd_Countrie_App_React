import { useState, useEffect } from "react";
import Article from "./Article";

export default function Countries() {
    const [countries, setCountries] = useState([]); 
    const [searchText, setSearchText] = useState("");
    const regions = [
      {
        name: "Europe",
      },
      {
        name: "Asia",
      },
      {
        name: "Africa",
      },
      {
        name: "Oceania",
      },
      {
        name: "Americas",
      },
      {
        name: "Antarctic",
      },
    ];

    useEffect(() => {
        const getCountries = async () => {
            try {
                const API_respond = await fetch("https://restcountries.com/v3.1/all");
                const API_data = await API_respond.json();
                setCountries(API_data);     /* Slice(0,10) function will limited data ro show only 10 record */
            }catch(error){
                console.log(error)
            }
        };


        getCountries();    
    }, []);

    async function searchCountry() {
        try {
          const API_respond_SearchCountry = await fetch(
            `https://restcountries.com/v3.1/name/${searchText}`
          );
          const API_data_SearchCountry = await API_respond_SearchCountry.json();
          setCountries(API_data_SearchCountry);
        } catch (error) {
          console.error(error);
        }
      }
    
      async function filterByRegion(region) {
        try {
          const API_respond_RegionFilter = await fetch(
            `https://restcountries.com/v3.1/region/${region}`
          );
          const API_data_RegionFilter = await API_respond_RegionFilter.json();
          setCountries(API_data_RegionFilter);
        } catch (error) {
          console.error(error);
        }
      }

    function handleSearchCountry(e) {
        e.preventDefault();
        searchCountry();
      }
    
      function handleFilterByRegion(e) {
        e.preventDefault();
        filterByRegion();
      }


    return ( 
        <>
            {/* Setting error bundle for if the counties exixst */}
            { !Countries ? (
                <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-2xl dark:text-white" >
                    Loading data from the server...
                </h1>
            ) : ( 
                <section className="container mx-auto p-1">
                    {/* form */}
                    <form
                        autoComplete="off"
                        className="max-w-4xl md:flex-1"   
                        onSubmit={handleSearchCountry} 
                    >
                        <input 
                            type="text" 
                            name="search" 
                            id="search" 
                            placeholder="search for a country by name" 
                            required 
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="py-3 px-4 text-gray-600 placeholder-gray-600 w-full shadow rounded outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all duration-200"
                        />
                    </form>

                    <form onSubmit={handleFilterByRegion}>
                        <select
                            name="filter-by-region"
                            id="filter-by-region"
                            className="w-52 py-3 px-4 outline-none shadow rounded text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700"
                            value={regions.name}
                            onChange={(e) => filterByRegion(e.target.value)}
                        >
                            {regions.map((region, index) => (
                            <option key={index} value={region.name}>
                                {region.name}
                            </option>
                            ))}
                        </select>
                    </form>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-col-4">
                        {countries.map((country) => (
                            <Article key={country.name.common} {...country} />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}