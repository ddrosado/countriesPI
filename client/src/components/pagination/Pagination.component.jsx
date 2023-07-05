import "./pagination.styles.css"


function Pagination({pagination, allCountries, countriesPerPage}) {

const pageNumber = []; // needed pages
const totalPages = Math.ceil(allCountries/countriesPerPage)

for (let i = 0; i < totalPages; i++) {
    pageNumber.push(i+1)
}

    
      return (
    
        <div className="pagination-container">
  <ul className="pagination">
    <li className="icon">
      <a href="#"><span className="fas fa-angle-left"></span>Previous</a>
    </li>
    {pageNumber && pageNumber.map((page) => (
      <li key={page}>
        <a href="#" onClick={() => pagination(page)}>{page}</a>
      </li>
    ))}
    <li className="icon">
      <a href="#">Next<span className="fas fa-angle-right" ></span></a>
    </li>
  </ul>
</div>
      )
    }
    
    export default Pagination;