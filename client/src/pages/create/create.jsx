import './create.styles.css'
import Navbar from '../../components/navbar/Navbar.component';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validation from './validation';
import { getCountries, postActivity, getActivity } from '../../redux/asyncActions';


function Create() {

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getCountries())
}, [dispatch])

useEffect(() => {
        dispatch(getActivity())
    }, [dispatch])

// const [errors, setErrors] = useState({})
const[formData, setFormData] = useState({
  "name": "",
  "difficulty": "",
  "duration": "",
  "season": "",
  "country": []
})

const handleChange = e => {
  const name = e.target.name;
  const value = e.target.value;
  setFormData({
      ...formData, 
      [name]: value
  });
  // setErrors(
  //     validation({
  //     ...formData,
  //     [name]: value
  //     })
  // );
}

const handleSubmit = e => {
  e.preventDefault();
  dispatch(postActivity(formData))
  setFormData({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: []
  })
};

const handleSelect = (event) => {
  const selected = event.target.value;
    setFormData({
      ...formData,
      country: [...formData.country, selected],
    });
  }



const countries = useSelector((state) => state.countries.countries);



console.log(countries.id)

  return (
<div>
<Navbar/>
{console.log(formData)}
      <div className='form-container'> 

  <form onSubmit = {handleSubmit}>
    <div className='form-box'>
  <label>
    <p>Actividad</p>
    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
  </label>
  </div>

  <div className='form-box'>
  <label>
    <p>Duración estimada (horas)</p>
    <input type="text" name="duration" value={formData.duration} onChange={handleChange}/>
  </label>
  </div>

  <div className='form-box'>
  <label>
    <p>Dificultad</p>
    <input type="text" name="difficulty" value={formData.difficulty} onChange={handleChange}/>
  </label>
  </div>

  <div className='form-box'>
  <label>
    <p>Temporada</p>
    <input type="text" name="season" value={formData.season} onChange={handleChange}/>
  </label>
  </div>

  <div className='form-box'> 
  <label>
  <p>Países</p>
  <select name="country" onChange={handleSelect} className='form-select'>
  {countries.map((country) => (
    
    <option 
    key={country.id}
    value={country.id}>
      {country.name}
      </option>
  ))}
</select>
  </label>
  </div>

  <div className='form-box'> 
  <input type="submit" value="Submit" />
  </div>


</form>


      </div>
      </div>
  )
}

export default Create;





/* <form>
    <div className='form-box'>
  <label>
    <p>Actividad</p>
    <input type="text" name="name" />
  </label>
  </div>


  <div className='form-box'>
  <label>
  <p>Duración estimada (horas)</p>
    <input type="number" name="duration" min="0" max="24"/>
  </label>
  </div>


  <div className='form-box'>
  <label>
  <p>Dificultad</p>
    <input type="range" name="difficulty" min="1" max="5" />
  </label>
  </div>

  
  <div className='form-box'> 
  <label>
  <p>Temporada</p>
    <label>
      <input type="radio" name="season" value="Spring" /> Primavera
    </label>
    <label>
      <input type="radio" name="season" value="Summer" /> Verano
    </label>
    <label>
      <input type="radio" name="season" value="Autumn" /> Otoño
    </label>
    <label>
      <input type="radio" name="season" value="Winter" /> Invierno
    </label>
  </label>
  </div>

  
  <div className='form-box'> 
  <label>
  <p>Países</p>
    <select name="where">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </label>
  </div>
  
  <div className='form-box'> 
  <input type="submit" value="Submit" />
  </div>
</form> */