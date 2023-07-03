import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detail.styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/asyncActions';
import Navbar from '../../components/navbar/Navbar.component';


function Detail() {
  
  const { id } = useParams() // this hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the Route path
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

const detail = useSelector(state => state.countries.details)

return (
<div className='detail-container'>
<Navbar/>
<div className='country-container'>

       <div className='parent'>
    <div className='detail-flag'>
      <img src={detail.image} className='flag-class'/>
      </div>

    <div className='country-name'>
      <h1 className='detail-name'>{detail.name}</h1></div>
      <div className='country-continent'><h2>{detail.continent}</h2></div>
      <div className='country-details'>
      <p className='detail-box'><span className='detail-class'>Capital</span> {detail.capital}</p>
      <p className='detail-box'><span className='detail-class'>Subregión</span> {detail.subregion}</p>
      <p className='detail-box'><span className='detail-class'>Extensión</span> {detail.area} km²</p>
      <p className='detail-box'><span className='detail-class'>Habitantes</span> {detail.population}</p>
    </div></div></div>

    <div className='activity-countainer'>


    


      </div>
      <div className='empty-box-detail'></div>
      </div>
  )
}

export default Detail;