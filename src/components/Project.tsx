import React from "react";

import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
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
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;