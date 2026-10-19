
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

const labelsFirst = [
    "Python", "SQL", "Scala", "Java", "PySpark",
    "Apache Spark", "Spark SQL", "Hadoop", "Hive", "HiveQL",
    "Databricks", "Cloudera", "ETL / ELT",
    "Data Pipelines", "Data Modeling", "Data Migration",
    "Batch Processing", "Data Aggregation"
];

const labelsSecond = [
    "AWS", "Amazon S3", "AWS Glue", "Amazon EMR",
    "AWS Lambda", "Amazon Athena", "Amazon RDS",
    "Amazon Redshift", "AWS IAM",
    "Microsoft Azure", "Azure Databricks",
    "ADLS Gen2", "Azure SQL Database",
    "Azure Synapse Analytics", "Azure Data Factory",
    "Azure Logic Apps", "Cloud Data Warehousing"
];

const labelsThird = [
    "Power BI", "Tableau", "SQL Reporting",
    "Dashboard Development", "KPI Reporting",
    "PostgreSQL", "MySQL", "Oracle", "SQL Server",
    "Dimensional Modeling", "Star Schema",
    "Snowflake Schema", "Data Visualization",
    "Data Analysis", "Data Profiling"
];

const labelsFourth = [
    "Apache Airflow", "Informatica", "Talend",
    "Control-M", "Git", "GitHub", "Azure Repos",
    "Bitbucket", "Jenkins", "CI/CD", "DevSecOps",
    "PyTest", "Unit Testing", "Data Validation",
    "Data Reconciliation", "Data Quality",
    "JSON", "XML", "CSV", "Parquet", "Avro", "ORC"
];

const labelsFifth = [
    "Scikit-learn", "TensorFlow", "PyTorch",
    "Pandas", "NumPy", "Machine Learning",
    "Predictive Modeling", "Statistical Analysis",
    "Time-Series Forecasting", "NLP",
    "OpenAI", "Hugging Face", "LangChain",
    "LlamaIndex", "Groq", "Qdrant", "Streamlit"
];

const expertiseCards = [
    {
        icon: faDatabase,
        title: "Data Engineering & Big Data",
        description:
            "I build scalable data pipelines and distributed processing workflows that transform raw data into reliable, analytics-ready datasets. My focus includes ETL/ELT development, data modeling, large-scale processing, and efficient data integration.",
        skills: labelsFirst
    },
    {
        icon: faCloud,
        title: "Cloud Data Platforms",
        description:
            "I work with cloud data services to build data storage, integration, and processing solutions. I focus on connecting data sources, developing cloud-based pipelines, and supporting scalable analytical workloads across AWS and Azure.",
        skills: labelsSecond
    },
    {
        icon: faChartLine,
        title: "BI, Analytics & Visualization",
        description:
            "I transform complex datasets into interactive dashboards, meaningful KPIs, and actionable business insights. My work includes SQL analysis, data modeling, reporting automation, and visualizations that support data-driven decisions.",
        skills: labelsThird
    },
    {
        icon: faShieldHalved,
        title: "Data Quality, Integration & DevOps",
        description:
            "I support reliable data operations through workflow orchestration, integration tools, automated testing, data validation, version control, and CI/CD practices. I focus on building maintainable pipelines with consistent and trustworthy outputs.",
        skills: labelsFourth
    },
    {
        icon: faBrain,
        title: "Machine Learning & AI",
        description:
            "I develop predictive models and data-driven applications using machine learning and modern AI frameworks. My interests include feature engineering, model evaluation, natural language processing, and integrating language models into practical applications.",
        skills: labelsFifth
    }
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <div className="expertise-heading">

                    <h1>Expertise</h1>
                   
                </div>

                <div className="skills-grid">
                    {expertiseCards.map((card) => (
                        <div className="skill" key={card.title}>
                            <div className="skill-icon">
                                <FontAwesomeIcon
                                    icon={card.icon}
                                    size="2x"
                                />
                            </div>

                            <h3>{card.title}</h3>
                            <p>{card.description}</p>

                            <div className="flex-chips">
                                <span className="chip-title">
                                    Technologies & skills
                                </span>

                                <div className="chip-list">
                                    {card.skills.map((label) => (
                                        <Chip
                                            key={label}
                                            className="chip"
                                            label={label}
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
