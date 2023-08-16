const Pagination = ({pages, setCurrentPage, currentPage}) => {
    return (
        
            <ul className="ul-page">
                {
                pages.map((page) => (
                    <li className={`li-page ${currentPage === page && "bg-green-500 aspect-square"}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>
                ))
                }
            </ul>
        
    
    )
}

export default Pagination