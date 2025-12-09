import React from "react";

import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/google search engine.png';
import mock04 from '../assets/images/multimodal.png';
import mock05 from '../assets/images/salesdashboard.png';
import mock06 from '../assets/images/health.png';
import mock07 from '../assets/images/datawarehouse.png';
import mock08 from '../assets/images/Screenshot 2025-12-06 at 5.28.37 PM.png';
import mock09 from '../assets/images/timeprediction.png';
import mock10 from '../assets/images/tomato.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
        <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Multi-modal AI Guardian</h2></a>
                <h4>Artificial Intelligence, Machine Learning, NLP , Deep Learning , Gen AI , Web development</h4>
                <p>Full-scope AI system combining image classification, ad-content validation, conversational chatbot integration, OCR and speech-to-text processing, and spam-detection models. Built to analyze images, authenticate advertising content, support multi-turn user queries, convert visual/audio data into readable text, and filter email/SMS threats using machine-learning pipelines.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Google Search Engine</h2></a>
                <h4>Artificial Intelligence, Machine Learning , NLP ,Gen AI ,Web Development</h4>
                <p>Custom search engine built using the Google Custom Search API, enhanced with NLP preprocessing, GenAI summarization, and machine-learning–based ranking. The system analyzes query intent, retrieves and restructures search results, generates concise natural-language summaries, and improves relevance through behavioral ranking metrics. MongoDB is used to store queries, results, and user interaction data for continuous optimization.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NAVYAMADHURI-BAGIREDDY/TOMATO-FOOD-ORDER-master" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NAVYAMADHURI-BAGIREDDY/TOMATO-FOOD-ORDER-master" target="_blank" rel="noreferrer"><h2>Tomato Food Order</h2></a>
                <h4>React • Node.js • Express.js • MongoDB • Vite • REST API</h4>
                <p>Full-stack food ordering app with React UI, Node/Express backend, and MongoDB storage. Features authentication, dynamic menus, and modular API architecture.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NAVYAMADHURI-BAGIREDDY/Datascienceproject-withdeployment" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/posts/folioworks_entrylevel-newgraduate-firstjob-activity-7393739232726548482-O7xZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtN0R4B8_iGf5eRvM8EacfL8u3bOmqi9vk" target="_blank" rel="noreferrer"><h2>Delivery Time prediction  with deployment</h2></a>
                <h4>Python • Scikit-learn • Pandas • NumPy • YAML • Logging • Flask </h4>
                <p>End-to-end ML pipeline for automated data ingestion, preprocessing, model training, and prediction. Trained and evaluated Linear Regression, Decision Tree, Random Forest, and Gradient Boosting models to select the best-performing regressor</p>
            </div>
            <div className="project">
                <a href="https://github.com/NAVYAMADHURI-BAGIREDDY/AZUREDataFactory-NYCEnd2EndProject" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NAVYAMADHURI-BAGIREDDY/AZUREDataFactory-NYCEnd2EndProject" target="_blank" rel="noreferrer"><h2>AZURE Data Engineering Project</h2></a>
                <h4>Azure Data Factory • Azure Data Lake • Azure Databricks • PySpark • ETL Pipelines • Power BI</h4>
                <p>Built a cloud-based ETL pipeline using Azure services to ingest NYC dataset from a web source, store it in Azure Data Lake, transform and clean the data in Azure Data Factory and Databricks, and deliver analytics dashboards for insights.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NAVYAMADHURI-BAGIREDDY/SQL-Datawarehouse-Project" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NAVYAMADHURI-BAGIREDDY/SQL-Datawarehouse-Project" target="_blank" rel="noreferrer"><h2>SQL Dataware House & Analytics Project</h2></a>
                <h4>SQL Server • ETL • Data Modeling • Medallion Architecture • Star Schema • SQL • Reporting & Analytics</h4>
                <p>Designed and implemented a modern data warehouse using Medallion Architecture. Raw ERP and CRM data is ingested into SQL Server (Bronze), cleansed and standardized (Silver), and transformed into a business-ready star schema (Gold). Built ETL pipelines, resolved data quality issues, and created analytical SQL reports to deliver insights on customers, products, and sales.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NAVYAMADHURI-BAGIREDDY/HealthCare-Analytics-Dashboard/tree/main" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NAVYAMADHURI-BAGIREDDY/HealthCare-Analytics-Dashboard/tree/main" target="_blank" rel="noreferrer"><h2>Health Care Data Analytics Management</h2></a>
                <h4>Power BI • DAX • Power Query • Data Cleaning • Data Modeling • Data Visualization</h4>
                <p>Built a comprehensive Power BI dashboard for healthcare administrators to monitor and improve patient flow and service quality. The dashboard includes metrics for total visits, waiting times, treatment satisfaction, demographic distributions, referrals, and historical trends.
                Data was cleaned and transformed in Power Query, and analytical measures were developed using DAX to calculate KPIs like Total Visits, Average Waiting Time, Satisfaction Rate, and Referral Percentage. The final dashboard enables hospitals to identify operational issues, optimize efficiency, and improve patient care.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NAVYAMADHURI-BAGIREDDY/Sales-and-Customer-Dashboard" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NAVYAMADHURI-BAGIREDDY/Sales-and-Customer-Dashboard" target="_blank" rel="noreferrer"><h2>Sales Analytics Dashboard</h2></a>
                <h4>Tableau • Excel/CSV • Data Modeling • Calculated Fields • Data Cleaning • KPI Analytics</h4>
                <p>Interactive dashboard analyzing global sales, profit, and quantity trends across EU and Non-EU markets. Includes KPI tracking, subcategory performance analysis, and time-series trends to identify growth opportunities, low-performing segments, and overall business health.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;