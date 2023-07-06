import "./pagination.styles.css"


function Pagination({pagination, allCountries, countriesPerPage, nextPage, prevPage, currentPage}) {

const pageNumber = []; // needed pages
const totalPages = Math.ceil(allCountries/countriesPerPage) // calculate the total number of pages

for (let i = 0; i < totalPages; i++) {
    pageNumber.push(i+1) // populate the pageNumber array with the page numbers
  }


  
      return (
    
        <div className="pagination-container">
  <ul className="pagination">
    <li className="icon">
      <a href="#" onClick={() => currentPage > 1 && prevPage(currentPage)}><span className="fas fa-angle-left"></span>Previous</a>
    </li>
    {pageNumber && pageNumber.map((page) => (
      <li key={page}>
        <a href="#" onClick={() => pagination(page)}>{page}</a>
      </li>
    ))}
    <li className="icon">
      <a href="#" onClick={() => currentPage < totalPages && nextPage(currentPage)}>Next<span className="fas fa-angle-right" ></span></a>
    </li>
  </ul>

</div>
      )
}
    
    export default Pagination;