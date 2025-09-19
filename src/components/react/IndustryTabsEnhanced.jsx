// // En src/components/IndustryTabs.jsx
// import React, { useState } from 'react';

// const IndustryTabsClient = ({ industries }) => {
//   const [activeIndustry, setActiveIndustry] = useState(0);
  
//   return (
//     <div className="industry-tabs-container">
//       <div className="industry-tabs">
//         {industries.map((industry, index) => (
//           <button
//             key={index}
//             className={`industry-tab ${index === activeIndustry ? 'active' : ''}`}
//             onClick={() => setActiveIndustry(index)}
//           >
//             <span className="industry-tab-icon">{industry.icon}</span>
//             <span className="industry-tab-text">{industry.name}</span>
//             <span className="tab-indicator"></span>
//           </button>
//         ))}
//       </div>
      
//       <div className="industry-content">
//         <div className="industry-header">
//           <span className="industry-icon">{industries[activeIndustry].icon}</span>
//           <div>
//             <h3>Soluciones para {industries[activeIndustry].name}</h3>
//             <p className="industry-description">{industries[activeIndustry].description}</p>
//           </div>
//         </div>
        
//         <div className="industry-challenges-solutions">
//           <div className="industry-section">
//             <div className="section-header">
//               <h4>Desafíos Comunes</h4>
//               <div className="section-divider"></div>
//             </div>
//             <ul className="industry-list">
//               {industries[activeIndustry].challenges.map((challenge, i) => (
//                 <li key={i}>
//                   <span className="list-icon">⚡</span>
//                   {challenge}
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           <div className="industry-section">
//             <div className="section-header">
//               <h4>Nuestras Soluciones</h4>
//               <div className="section-divider"></div>
//             </div>
//             <ul className="industry-list">
//               {industries[activeIndustry].solutions.map((solution, i) => (
//                 <li key={i}>
//                   <span className="list-icon">✅</span>
//                   {solution}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
        
//         <div className="industry-cta">
//           <a href={industries[activeIndustry].link} className="btn">
//             <span>Descubrir soluciones para {industries[activeIndustry].name}</span>
//             <span className="btn-arrow">→</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustryTabsClient;




// En src/components/IndustryTabsEnhanced.jsx
import React, { useState } from 'react';

const IndustryTabsEnhanced = ({ industries }) => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  
  return (
    <div className="industries-enhanced-container">
      <div className="section-header">
        <h2>Soluciones Especializadas por Industria</h2>
        <p>Desarrollamos tecnología a medida para los desafíos específicos de cada sector</p>
      </div>
      
      <div className="industry-tabs">
        {industries.map((industry, index) => (
          <button
            key={index}
            className={`industry-tab ${index === activeIndustry ? 'active' : ''}`}
            onClick={() => setActiveIndustry(index)}
          >
            <span className="industry-tab-icon">{industry.icon}</span>
            <span className="industry-tab-text">{industry.name}</span>
            <span className="tab-indicator"></span>
          </button>
        ))}
      </div>
      
      <div className="industry-content">
        <div className="industry-header">
          <span className="industry-icon">{industries[activeIndustry].icon}</span>
          <div>
            <h3>Soluciones para {industries[activeIndustry].name}</h3>
            <p className="industry-description">{industries[activeIndustry].description}</p>
          </div>
        </div>
        
        <div className="industry-details-grid">
          <div className="industry-section">
            <div className="section-header-mini">
              <h4>Desafíos Comunes</h4>
              <div className="section-divider"></div>
            </div>
            <ul className="industry-list">
              {industries[activeIndustry].challenges.map((challenge, i) => (
                <li key={i}>
                  <span className="list-icon">⚠️</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="industry-section">
            <div className="section-header-mini">
              <h4>Nuestras Soluciones</h4>
              <div className="section-divider"></div>
            </div>
            <ul className="industry-list">
              {industries[activeIndustry].solutions.map((solution, i) => (
                <li key={i}>
                  <span className="list-icon">✅</span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="industry-section">
            <div className="section-header-mini">
              <h4>Tecnologías Implementadas</h4>
              <div className="section-divider"></div>
            </div>
            <ul className="industry-list">
              {industries[activeIndustry].technologies?.map((tech, i) => (
                <li key={i}>
                  <span className="list-icon">🛠️</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="industry-section">
            <div className="section-header-mini">
              <h4>Beneficios Obtenidos</h4>
              <div className="section-divider"></div>
            </div>
            <ul className="industry-list">
              {industries[activeIndustry].benefits?.map((benefit, i) => (
                <li key={i}>
                  <span className="list-icon">📈</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="industry-case-study">
          <h4>Casos de Éxito</h4>
          <p>{industries[activeIndustry].caseStudy}</p>
        </div>
        
        <div className="industry-cta">
          <a href={industries[activeIndustry].link} className="btn">
            <span>Descubrir más soluciones para {industries[activeIndustry].name}</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndustryTabsEnhanced;