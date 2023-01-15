import {sectionsData} from '../../data/sections.js'
import "./Sections.css"
import React from 'react'

export default function Sections(props) {
    return(
        <div className='sections'>
            <h1>Current Page: {props.page}</h1>
            {/* Go through each entry of sections */}
            {sectionsData.map(section => {
                if(section.is_link){
                    return(
                        //What shows if it's a link
                        <a className="section-link" href={section.link} target="_blank" rel='noreferrer'>
                            <div className='section-indiv'>
                                <img className="section-image" src={section.image} alt="" srcset="" />
                                <h3>{section.name}</h3>
                            </div>
                        </a>
                        
                    )
                } else {
                    return(
                        //If it's not a link, we will set up a modal.
                        <div className='section-indiv' onClick={() => {props.settingPage(section.page_redirect)}}>
                            <img className="section-image" src={section.image} alt="" srcset="" />
                            <h3>{section.name}</h3>
                        </div>
                    )
                }
                
            })}
        </div>
    )
}