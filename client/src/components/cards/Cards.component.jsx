import './cards.styles.css'
import Card from '../card/Card.component';

function Cards({currentCountries}) {
  
  return (

      <div className='cards-container'>
     <Card/>
     <div className='card-container'>
     {currentCountries.map((country) => (
          <div key={country.id} className='card'>
            <img src={country.image} alt={country.name} className='flag' />
            <h1 className='country-name'>{country.name}</h1>
            <h2 className='country-continent'>{country.continent}</h2>
            <button className='card-button'>Ver detalle</button>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Cards;