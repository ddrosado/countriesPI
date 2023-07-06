import styles from'./create.styles.css'
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

const [validForm, setValidForm] = useState(false);
const [errors, setErrors] = useState({})
const[formData, setFormData] = useState({
  "name": "",
  "difficulty": "",
  "duration": "",
  "season": "noseason",
  "country": []
})

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setFormData({
    ...formData,
    [name]: value
  });
  setErrors(validation({
    ...formData, [name]: value
  }));
};


const handleSelectCountries = (event) => {
  const selected = event.target.value;
  setFormData({
    ...formData,
    country: [...formData.country, selected], // multiple selection
  });
};

const handleSelectSeason = (event) => {
  const selected = event.target.value;
  setFormData({
    ...formData,
    season: selected,
  });
};

const countries = useSelector((state) => state.countries.countries);
const activity = useSelector((state) => state.countries.activity);
console.log(activity)


const handleSubmit = e => {
  e.preventDefault();
  const formErrors = validation(formData);
  setErrors(formErrors);
  if (Object.keys(formErrors).length === 0) {
  dispatch(postActivity(formData))
  }
  setFormData({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: []
  })
};


useEffect(() => {
  setValidForm(Object.keys(errors).length === 0);
}, [errors]);

useEffect(() => {
  setValidForm(false); // default 
}, []);

  return (
<div>
<Navbar/>

      <div className='form-container'> 

  <form onSubmit = {handleSubmit}>
    <div className='form-box'>
  <label>
    <p>Actividad</p>
    <input 
    type="text" 
    name="name" 
    value={formData.name} 
    onChange={handleChange}
    placeholder="Nombre de la actividad"
    className='input-class'/> 
      {errors.name && <p className="error">{errors.name}</p>}
  </label>
  </div>

  <div className='form-box'>
  <label>
    <p>Duración estimada (horas)</p>
    <input 
    type="text" 
    name="duration" 
    value={formData.duration} 
    onChange={handleChange}
    placeholder="Duración"
    className='input-class'/>
    {errors.duration && <p className="error">{errors.duration}</p>}
  </label>
  </div>

  <div className='form-box'>
  <label>
    <p>Dificultad</p>
    <input 
    type="text" 
    name="difficulty" 
    value={formData.difficulty} 
    onChange={handleChange}
    placeholder="1-5"
    className='input-class'/>
    {errors.difficulty && <p className="error">{errors.difficulty}</p>}
  </label>
  </div>

  <div className='form-box'>
  <label>
    <p>Temporada</p>
    <select 
    name="season" 
    onChange={handleSelectSeason} 
    className='form-select'>
      <option value="noseason">Todo el año</option>
      <option value="invierno">Invierno</option>
      <option value="verano">Verano</option>
      <option value="otoño">Otoño</option>
      <option value="primavera">Primavera</option>
    </select>
  </label>
  </div>

  <div className='form-box'> 
  <label>
  <p>Países</p>
  <select name="country" onChange={handleSelectCountries} className='form-select'>
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
  <div className='button-container'>
  <button type="submit" value="Submit" disabled={!validForm} className='button-class'>Crear</button>
  </div>
  </div>


</form>


      </div>
      <div className='empty-box'></div>
      </div>
    
  )
  
}

export default Create;

