import { useState } from "react"
import ResidentCard from "./ResidentCard"
import Pagination from "./Pagination"

const Resident = ({residents}) => {

  /*PAGINADO DE RESIDENTES*/
  const [currentPage, setCurrentPage] = useState(1)

  const RESIDENTS_PER_PAGE = 18

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE 
  const residentsInPage = residents.slice(sliceStart, sliceEnd)

  const pages = []
  for(let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }
  
  return (
    <>
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

      <section className="cards-container">
        {
        residentsInPage.map((resident) => <ResidentCard key={resident} residentUrl={resident}/> )
        }
      </section>

      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

    </>
    
  )
}

export default Resident
