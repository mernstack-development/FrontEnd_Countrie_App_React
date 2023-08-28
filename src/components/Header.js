import React from 'react'

const Header = () => {
  const moon = document.querySelector('.fa-moon')

  moon.addEventListener('click', () => {
    document.body.classList.toggle('light-theme')
  })


  return (
    <>
        <header className='header'>
            <div>
                <h1>Where in the world?</h1>
            </div>
            <div>
                <i class="fas fa-moon"></i>
            </div>
        </header>
    </>
  )
}

export default Header