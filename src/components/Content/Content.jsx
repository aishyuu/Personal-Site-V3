import Sections from "../section/Sections"
import About from "../About/About"
import React from 'react'
import Projects from "../Projects/Projects"

export default function Content() {
    const [page, setPage] = React.useState('Default')

    return(
        <div>
            <div>
                <img className='main-logo' src="images/2000_logo.png" alt="" />
            </div>

            {
            page === 'Default' ? <Sections page={page} settingPage={setPage}/> 
            : page === 'About' ? <About />
            : page === 'Projects' ? <Projects />
            : <h1>404, page not found</h1>
            }
        </div>
    )
}