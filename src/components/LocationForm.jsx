const LocationForm = ({handleSubmit}) => {
  return (
    
    <form className="form" onSubmit={handleSubmit}>

      <div className="location-container">
      <input 
        id="newLocation"
        min={1} 
        max={126} 
        placeholder="Type a location id..." 
        type="number"
        className="locationForm-input"
        required
         />
      <button className="button-location">
        Search
      </button>
      </div>
      
    </form>
  )
}

export default LocationForm
