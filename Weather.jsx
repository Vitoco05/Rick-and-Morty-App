import { useState } from "react";

const Weather = ({ weatherInfo }) => {
    
    const [isCelsius, setIsCelsius] = useState(true)

    const kelvinToCelcius = (tempKelvin) => {
        return (tempKelvin - 273.15).toFixed(1)
    }

    const kelvinToFahrenheit = (temp) => {
        return (((temp - 273.15) * 9/5) + 32).toFixed(1)
    }

    const handleChangeUnitTemp = () => {
        setIsCelsius(!isCelsius)
    }
    const resultTempConversion = isCelsius ? kelvinToCelcius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)


    
    return (
        <section className="text-center">
            <h2 className="text-4xl pb-8">{weatherInfo?.name}, {weatherInfo?.sys.country}.</h2>

            <section className="grid gap-4 sm:grid-cols-[1fr_auto]">
                {/* seccion superior */}
                <section className="bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center">
                    <h4 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h4>
                    <span className="text-6xl">{resultTempConversion}°{isCelsius ? "C" : "F"}</span>
                    <div>
                        {
                            weatherInfo && <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                        }
                        
                    </div>
                </section>

                {/* seccion inferior */}
                <section className="bg-white/60 p-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">

                    <article className="flex gap-2 items-center">
                        <div className="w-[18px]">
                            <img src={"/Images/wind.png"} alt="" />
                        </div>
                        <span className="text-2xl">{weatherInfo?.wind.speed}m/s</span>
                    </article>

                    <article className="flex mx-auto gap-2 items-center">
                        <div className="w-[18px]">
                            <img src={"/Images/humidity.png"} alt="" />
                        </div>
                        <span className="text-2xl">{weatherInfo?.main.humidity}%</span>
                    </article>

                    <article className="flex gap-2 items-center">
                        <div className="w-[18px]">
                            <img src={"/Images/pressure.png"} alt="" />
                        </div>
                        <span className="text-2xl">{weatherInfo?.main.pressure}hPa</span>
                    </article>
                    
                </section>
            </section>       

            <button onClick={handleChangeUnitTemp} className="mt-4 bg-white/60 text-black w-36 h-8 rounded-2xl hover:bg-orange-500 hover:text-white ">Cambiar a {isCelsius ? "°F" : "°C"}</button>
        </section>
    );
};

export default Weather;