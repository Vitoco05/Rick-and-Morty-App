import LocationInfo from './components/LocationInfo'
import { useState, useEffect } from 'react'
import axios from 'axios' 
import './App.css'
import LocationForm from './components/LocationForm';
import Resident from './components/Resident';


function App() {

    const randomLocation = Math.floor(Math.random() * (126 - 1) + 1);

    const [currentLocation, setCurrentLocation] = useState(null)
   
    const handleSubmit = (e) => {
        e.preventDefault()
        const newLocation = e.target.newLocation.value

        const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
        
        axios
        .get(URL)
        .then(({data}) => setCurrentLocation(data))
        .catch((err) => console.error(err))
    }
    

    useEffect(() => {
      
        const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`
        
        axios
        .get(URL)
        .then(({data}) => setCurrentLocation(data))
        .catch((err) => console.error(err))
    }, [])
   


    return (
        <>
        <header className='header'>
            <div className='header-image'>                
                <img src="/Images/fondo.png" />
            </div>
        </header>
        <main className="main min-h-screen text-white">
            <LocationForm handleSubmit={handleSubmit}/>
            <LocationInfo currentLocation={currentLocation}/>
            <Resident residents={currentLocation?.residents ?? []}/>
        </main>
        </>
        
    )
}

export default App
