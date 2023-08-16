const LocationInfo = ({currentLocation}) => {



        return (
        <section className="location-info">
            <div className="location-info__div"> 
                <h2 className="location-name">Welcome to the {currentLocation?.name} dimension!</h2>
                <ul>
                    <li>Type: {currentLocation?.type}</li>
                    <li>Dimension: {currentLocation?.dimension}</li>
                    <li>Residents: {currentLocation?.residents.length} resident/s</li>
                </ul>
            </div>
          
        </section>
    );
};

export default LocationInfo;