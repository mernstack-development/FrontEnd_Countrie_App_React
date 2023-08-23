import React from 'react'

const Filter = () => {
  return (
    <section className='filter'>
        <form className='form-control'>
            <input type='search' name='search' id='search' placeholder='search by country...'></input>
        </form>

        <div className='region-filter'>
            <select name='SelectRegion' id='SelectRegion' className='SelectRegion'>
                <option value="Filter region">Filter by Region</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Filter