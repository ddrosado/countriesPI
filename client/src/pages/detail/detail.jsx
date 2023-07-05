import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detail.styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/asyncActions';
import Navbar from '../../components/navbar/Navbar.component';



function Detail() {
  
  const { id } = useParams() //  { id: "ITA" }
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])
  


const detail = useSelector(state => state.countries.details);
  // console.log(detail2)
  // const detail2 = useSelector(state => state.countries.activity);
  // console.log(detail2)
  const activities = detail.Activities;
  console.log(activities)
  




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
    </div>   
    </div>
    
    
    <div className='activities-container'>
      <div className='activities-title'><h1>Actividades</h1></div>
      
  {activities  ? (
    activities.map(activity => (
      <div className='activity' key={activity.id}>

        <div className='activity-container'>
          <h1 className='activities-name'>{activity.name}</h1>
        </div>
        
        <div className='activity-container'>
          <p className='activities-box'>
            <span className='activities-class'>Dificultad </span> {activity.difficulty}
          </p>
          
          <div className='activity-container'>
          <p className='activities-box'>
          <span className='activities-class'>Duración </span>
          {activity.duration === "1" ? (
          <span>{activity.duration} hora</span>
        ) : (
          <span>{activity.duration} horas</span>
        )}
          </p></div>

          <div className='activity-container'>
          <p className='activity-container'>
            <span className='activities-class'>Temporada </span> 
            {activity.season === "noseason" ? 
            'Disponible todo el año' 
            : activity.season} 
          </p>
          </div>



        </div> 
      </div>
    ))
  ) : (
    <p>No se encontraron actividades</p>
  )}
</div>
    


    </div>




  <div className='empty-box-detail'></div>
</div>

      
  )
}

export default Detail;



