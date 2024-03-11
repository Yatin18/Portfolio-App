import React from 'react'
import './Tech.css'
import { TechList } from '../../utils/TechList'

function Tech() {
  return (
   <div id='skills'>
    <div className="container  tech">
        <h2 className='mt-3 text-center '>Technical Skills</h2>
        <hr />
        <p className='text-center'>👉 Techincal Skills including Programming ,Framework,Development and APIs</p>
        <div className="row">
        
            {TechList.map(tech=>(
                <div key={tech.key} className="col-md-3">
                   <div className="card m-2" >
                    <div className="card-body">
                        <div className="card-pic">
                            <tech.icon ></tech.icon>
                        </div>
                        <h5 className="card-title">{tech.name}</h5>
                    
                    </div>
                    </div>
                   
                </div>
            ))}
        </div>
    </div>
   </div>
  )
}

export default Tech
