
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDatabase,
    faCloud,
    faChartLine,
    faBrain,
    faShieldHalved
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const expertiseCards = [
    {
        icon: faDatabase,
        title: "Data Engineering",
        description: "Building data pipelines, processing large datasets, and transforming raw data into reliable, analytics-ready information.",
        skills: ["Python", "SQL", "PySpark", "Spark", "Hadoop", "Hive", "Databricks", "ETL / ELT", "Data Modeling"]
    },
    {
        icon: faCloud,
        title: "Cloud Platforms",
        description: "Working with cloud platforms to build data pipelines, manage storage, and support scalable data processing.",
        skills: ["AWS", "S3", "AWS Glue", "Azure", "Azure Databricks", "ADLS Gen2", "Azure Data Factory", "Redshift", "Synapse"]
    },
    {
        icon: faChartLine,
        title: "Analytics & BI",
        description: "Analyzing data and creating dashboards, reports, and KPIs to support better business decisions.",
        skills: ["Power BI", "Tableau", "SQL", "PostgreSQL", "MySQL", "Oracle", "Data Analysis", "Data Visualization"]
    },
    {
        icon: faShieldHalved,
        title: "Data Quality & DevOps",
        description: "Improving data reliability through automated testing, workflow orchestration, and version control.",
        skills: ["Airflow", "Informatica", "Talend", "Git", "GitHub", "CI/CD", "PyTest", "Data Validation", "Data Quality"]
    },
    {
        icon: faBrain,
        title: "Machine Learning & AI",
        description: "Developing predictive models and AI applications using machine learning and modern AI frameworks.",
        skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Machine Learning", "NLP", "OpenAI", "LangChain"]
    }
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>

                <div className="skills-grid">
                    {expertiseCards.map((card) => (
                        <div className="skill" key={card.title}>
                            <div className="skill-icon">
                                <FontAwesomeIcon icon={card.icon} size="2x" />
                            </div>

                            <h3>{card.title}</h3>
                            <p>{card.description}</p>

                            <div className="flex-chips">
                                <span className="chip-title">Skills</span>

                                <div className="chip-list">
                                    {card.skills.map((skill) => (
                                        <Chip
                                            key={skill}
                                            className="chip"
                                            label={skill}
                                            size="small"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;
