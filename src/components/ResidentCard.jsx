import axios from "axios"
import { useEffect, useState } from "react"

const ResidentCard = ({residentUrl}) => {

  const [residentInfo, setResidentInfo] = useState(null)

  useEffect(() => {
    axios.get(residentUrl)
    .then(({data}) => setResidentInfo(data))
    .catch((error) => console.error(error))
  }, [])

  /*------COLOR STATUS------*/

  const colorStatus = () => {
    let status = "";

    if(residentInfo?.status === "Alive") {
      status = "alive"  
    } else if (residentInfo?.status === "Dead") {
      status = "dead"
    } else {
      status = "unknown"
    }

    return status;
  }

  return ( 
    <article className="resident-card">
      <header className="header-card">

        <div className="status">
          <img src={residentInfo?.image} />
        
          <div className="status-img">
            <div className={colorStatus()}></div>
            {residentInfo?.status}
          </div>
        </div>
       
      </header>
      <section className="info-section">
        <h3 className="text-[28px] font-semibold">{residentInfo?.name}</h3>
        
            <li className="text-xl font-semibold"><span className="text-base font-medium text-slate-400">Gender:</span> {residentInfo?.gender}</li>
            <li className="text-xl font-semibold"><span className="text-base font-medium text-slate-400">Status:</span> {residentInfo?.status}</li>
            <li className="text-xl font-semibold"><span className="text-base font-medium text-slate-400">Times apper:</span> {residentInfo?.episode.length}</li>
        
      </section>
    </article>
  )
}

export default ResidentCard
