import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Countries from './components/Countries'
import Header from './components/Header'
import Filter from './components/Filter'
import Country from './components/Country'

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Filter/>} />
        </Routes>
        
        <Routes>
          <Route exact path="/" element={<Countries/>} />
        </Routes>

        <Routes>
          <Route path="/countries/:name" element={<Country/>} />
        </Routes>
    </Router>
  
  )
   
    
}

export default App;


// Video Link: https://www.youtube.com/watch?v=c9Er4oqgPMM&t=0s
//Time: 55:26