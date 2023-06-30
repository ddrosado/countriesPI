import './home.styles.css'
import Cards from '../../components/cards/cards.component'
import Navbar from '../../components/navbar/Navbar.component'

function Home() {


  return (

      <div>
        <Navbar/>
        <div className='home-container'>
        <p>Home</p>
        </div>
        <Cards/>
      </div>
  )
}

export default Home;
