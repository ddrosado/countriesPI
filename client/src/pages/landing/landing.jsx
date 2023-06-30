import './landing.styles.css'
import bgvideo from '../../assets/videos/bgvideo.mp4';
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className='landing-hero'>
      <video autoPlay loop muted playsInline className="back-video">
        <source src={bgvideo} type="video/mp4" />
      </video>

    <div className='landing-container'>

    <div className='landing-welcome'>
    <h1>
      <p>Descubre la magia</p> 
      de los países del mundo</h1>
    </div>

    <div className='landing-button-container'>
        <button onClick={() => navigate("/home")} className="landing-button">Explorar</button>
      </div>
      
    </div>

    </div>
  );
}

export default Landing;