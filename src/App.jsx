import './App.css';
import { sectionsData } from './data/sections.js'

export default function App() {
  return (
    <div className="App">
      <div>
        <img className='main-logo' src="images/2000_logo.png" alt="" />
      </div>

      <div className='sections'>
        {sectionsData.map(section => {
          return(
            <div class='section-indiv'>
              <img className="section-image" src={section.image} alt="" srcset="" />
              <h3>{section.name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}
