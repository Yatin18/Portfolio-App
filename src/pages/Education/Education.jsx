import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from "react-icons/io5"
function Education() {
  return (
    <div id='education'>
    <div className="container edu">
        <h2 className='mt-3 text-center '>Education details..</h2>
        <hr />
    </div>
    <div className="vct">
    <VerticalTimeline >
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoSchool title='Degree'></IoSchool>}   >
        <h3 className="vertical-timeline-element-title">Bachelor of Enginnering in Computer Science</h3>
        <h4 className="vertical-timeline-element-subtitle">Chandigarh University, Mohali</h4>
        <p>
         7.9 CGPA 
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoSchool title='Degree'></IoSchool>}   >
        <h3 className="vertical-timeline-element-title">Intermediate Education(10+2)</h3>
        <h4 className="vertical-timeline-element-subtitle">Government Sen. Sec. School Garhshankar,Punjab</h4>
        <p>
         9.4 CGPA 
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - 2018"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoSchool title='Degree'></IoSchool>}   >
        <h3 className="vertical-timeline-element-title">Matriculation</h3>
        <h4 className="vertical-timeline-element-subtitle">Manav Public School Garhshankar</h4>
        <p>
        8.9 CGPA 
        </p>
    </VerticalTimelineElement>
    </VerticalTimeline>
    </div>

    </div>
  )
}

export default Education
