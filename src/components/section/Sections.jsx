import {sectionsData} from '../../data/sections.js'
import "./Sections.css"

export default function Sections() {
    return(
        <div className='sections'>
            {sectionsData.map(section => {
                if(section.is_link){
                    return(
                        <a className="section-link" href={section.link} target="_blank" rel='noreferrer'>
                            <div className='section-indiv'>
                                <img className="section-image" src={section.image} alt="" srcset="" />
                                <h3>{section.name}</h3>
                            </div>
                        </a>
                        
                    )
                } else {
                    return(
                        <div className='section-indiv'>
                            <img className="section-image" src={section.image} alt="" srcset="" />
                            <h3>{section.name}</h3>
                        </div>
                    )
                }
                
            })}
        </div>
    )
}