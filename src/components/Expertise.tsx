import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "SQL",
    "PostgreSQL",
    "Snowflake",
    "Databricks",
    "Apache Spark",
    "Hadoop",
    "Kafka",
    "Airflow",
    "Python (Pandas, PySpark)",
    "Power BI",
    "Tableau"
];

const labelsSecond = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "Postman",
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Selenium"
];

const labelsThird = [
    "OpenAI",
    "Hugging Face",
    "LangChain",
    "LlamaIndex",
    "Groq",
    "Qdrant",
    "Streamlit",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>📊 Data Analytics & Data Engineering</h3>
                    <p>I specialize in analyzing complex datasets, building ETL/ELT pipelines, and optimizing data workflows for scalable analytics. I have experience with SQL-based data processing, cloud data warehouses, and big data frameworks for distributed computing. My work spans data modeling, pipeline automation, and dashboard development for actionable insights.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Full Stack Web Development & DevOps</h3>
                    <p>I build scalable web applications from scratch and ensure smooth deployment through DevOps practices. With strong proficiency in both frontend + backend development and CI/CD automation, I deliver production-ready solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning, Data Science & AI</h3>
                    <p>I develop machine learning models and AI-driven applications, including enterprise-grade GenAI solutions. My work spans predictive modeling, natural language processing, and building intelligent systems that integrate with modern platforms..</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;