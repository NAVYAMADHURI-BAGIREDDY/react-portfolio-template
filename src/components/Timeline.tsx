import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h4 className="vertical-timeline-element-title">Institute Effectiveness and Research</h4>
            <h4 className="vertical-timeline-element-subtitle">Houston,Tx</h4>
            <p>
            AI, Machine Learning, Data Science, Statistics, Python, R, Tableau, Geoscience Applications, Climate Modeling, Policy Analysis, Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date=" Jan 2024- Dec 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h4 className="vertical-timeline-element-title">Masters in Engineering Data science  CGPA - 3.92,University of Houston</h4>
            <p>Python, R, Machine Learning, Deep Learning, NLP, Data Analysis, SQL, Cloud Computing, Tableau, Git</p>

            
            <></>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date=" Jan 2024- Dec 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h4 className="vertical-timeline-element-title">Data Engineer</h4>
            <h4 className="vertical-timeline-element-subtitle">Houston,TX</h4>
            <p>ETL pipelines,Automation</p>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - July 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h4 className="vertical-timeline-element-title">Data science for energy transtition</h4>
            <h4 className="vertical-timeline-element-subtitle">Houston,Tx - Apprenticeship</h4>
            <p>
            AI, Machine Learning, Data Science, Statistics, Python, R, Tableau, Geoscience Applications, Climate Modeling, Policy Analysis, Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2021 - December 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Analyst - Deloitte</h3>
            <p>Azure,Databricks,Java, J2EE,Bitbucket,HTML/CSS/JavaScript, AWS, Oracle, MySQL, REST/SOAP Services, JUnit, Git, Agile</p>
            
            <p>
              
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2018 - August 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h4 className="vertical-timeline-element-title">Bachelors in Electrical & Electronics Engineering,CGPA - 3.8 
              </h4>
              <p>C,C++,Python,Java,Full stack web development,Data structures</p>
            
            <p>
              
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;