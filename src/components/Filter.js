import React from 'react'

const Filter = () => {

  window.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementById('search')

    search.addEventListener('input', (e) => {
      const {value} = e.target

      const countryName = document.querySelectorAll('.country-name')

      countryName.forEach((name) => {
        if (name.innerText.toLowerCase().includes(value.toLowerCase())){
          name.parentElement.parentElement.style.display = 'block'
        } else {
          name.parentElement.parentElement.style.display = 'none'
        }
      })
    })
  })

  return (
    <>
      <form className="form" id="form" >
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Country"
        />

        <div className="select">
          <select
            name="select"
            id="select"
          >
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>
    </>
  )
}

export default Filter