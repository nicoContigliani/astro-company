// import { useState } from 'react';

// const services = [
//   { name: "Desarrollo Web", link: "/servicios/desarrollo-web" },
//   { name: "Mantenimiento de Sistemas", link: "/servicios/mantenimiento-sistemas" },
//   { name: "Ciberseguridad", link: "/servicios/ciberseguridad" },
//   { name: "Cloud Computing", link: "/servicios/cloud-computing" },
//   { name: "Inteligencia Artificial", link: "/servicios/inteligencia-artificial" },
// ];

// const industries = [
//   { name: "Sector Salud", link: "/soluciones/sector-salud" },
//   { name: "Pymes Industriales", link: "/soluciones/pymes-industriales" },
//   { name: "Sector Financiero", link: "/soluciones/sector-financiero" },
//   { name: "Retail", link: "/soluciones/retail" },
//   { name: "Educación", link: "/soluciones/educacion" },
// ];

// export default function InteractiveMenu() {
//   const [activeMenu, setActiveMenu] = useState(null);

//   return (
//     <>
//       <ul className="nav-menu">
//         <li>
//           <a href="/" className="nav-link">Inicio</a>
//         </li>
//         <li 
//           onMouseEnter={() => setActiveMenu('services')} 
//           onMouseLeave={() => setActiveMenu(null)}
//         >
//           <a href="/servicios" className="nav-link">Servicios</a>
//         </li>
//         <li 
//           onMouseEnter={() => setActiveMenu('industries')} 
//           onMouseLeave={() => setActiveMenu(null)}
//         >
//           <a href="/soluciones" className="nav-link">Soluciones por Industria</a>
//         </li>
//         <li>
//           <a href="#contacto" className="nav-link">Contacto</a>
//         </li>
//       </ul>

//       {/* Mega menú para servicios */}
//       {activeMenu === 'services' && (
//         <div 
//           className="mega-menu" 
//           onMouseEnter={() => setActiveMenu('services')} 
//           onMouseLeave={() => setActiveMenu(null)}
//         >
//           <div className="container">
//             <h3>Nuestros Servicios</h3>
//             <div className="mega-menu-grid">
//               {services.map((service, index) => (
//                 <a key={index} href={service.link} className="mega-menu-item">
//                   {service.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Mega menú para industrias */}
//       {activeMenu === 'industries' && (
//         <div 
//           className="mega-menu" 
//           onMouseEnter={() => setActiveMenu('industries')} 
//           onMouseLeave={() => setActiveMenu(null)}
//         >
//           <div className="container">
//             <h3>Soluciones por Industria</h3>
//             <div className="mega-menu-grid">
//               {industries.map((industry, index) => (
//                 <a key={index} href={industry.link} className="mega-menu-item">
//                   {industry.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .mega-menu {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           width: 100%;
//           background: white;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//           padding: 2rem 0;
//           z-index: 999;
//         }
        
//         .mega-menu-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//           gap: 1rem;
//         }
        
//         .mega-menu-item {
//           display: block;
//           padding: 1rem;
//           border-radius: 8px;
//           background: #f5f5f7;
//           transition: all 0.3s ease;
//         }
        
//         .mega-menu-item:hover {
//           background: var(--primary);
//           color: white;
//         }
        
//         @media (max-width: 768px) {
//           .nav-menu {
//             display: none;
//           }
//         }
//       `}</style>
//     </>
//   );
// }



import { useState, useEffect } from 'react';

const services = [
  { 
    name: "Desarrollo Web", 
    link: "/servicios/desarrollo-web",
    description: "Sitios y aplicaciones web a medida para tu negocio",
    icon: "🌐"
  },
  { 
    name: "Mantenimiento de Sistemas", 
    link: "/servicios/mantenimiento-sistemas",
    description: "Soporte continuo para tus sistemas existentes",
    icon: "🔧"
  },
  { 
    name: "Ciberseguridad", 
    link: "/servicios/ciberseguridad",
    description: "Protección de datos y sistemas contra amenazas",
    icon: "🔒"
  },
  { 
    name: "Cloud Computing", 
    link: "/servicios/cloud-computing",
    description: "Soluciones en la nube escalables y seguras",
    icon: "☁️"
  },
  { 
    name: "Inteligencia Artificial", 
    link: "/servicios/inteligencia-artificial",
    description: "Sistemas inteligentes para automatizar procesos",
    icon: "🤖"
  },
];

const industries = [
  { 
    name: "Sector Salud", 
    link: "/soluciones/sector-salud",
    description: "Sistemas especializados para el sector salud",
    icon: "🏥"
  },
  { 
    name: "Pymes Industriales", 
    link: "/soluciones/pymes-industriales",
    description: "Soluciones para pequeñas y medianas empresas",
    icon: "🏭"
  },
  { 
    name: "Sector Financiero", 
    link: "/soluciones/sector-financiero",
    description: "Tecnología segura para instituciones financieras",
    icon: "💳"
  },
  { 
    name: "Retail", 
    link: "/soluciones/retail",
    description: "Sistemas para comercio minorista",
    icon: "🛒"
  },
  { 
    name: "Educación", 
    link: "/soluciones/educacion",
    description: "Plataformas educativas y de gestión",
    icon: "🎓"
  },
];

export default function InteractiveMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Botón de menú móvil */}
      {isMobile && (
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
      
      {/* Menú principal */}
      <ul className={`nav-menu ${mobileMenuOpen ? 'nav-menu-open' : ''}`}>
        <li>
          <a href="/" className="nav-link">Inicio</a>
        </li>
        <li 
          onMouseEnter={!isMobile ? () => setActiveMenu('services') : undefined}
          onClick={isMobile ? () => setActiveMenu(activeMenu === 'services' ? null : 'services') : undefined}
        >
          <a href="/servicios" className="nav-link">
            Servicios {isMobile && <span className="dropdown-arrow">{activeMenu === 'services' ? '▲' : '▼'}</span>}
          </a>
        </li>
        <li 
          onMouseEnter={!isMobile ? () => setActiveMenu('industries') : undefined}
          onClick={isMobile ? () => setActiveMenu(activeMenu === 'industries' ? null : 'industries') : undefined}
        >
          <a href="/soluciones" className="nav-link">
            Soluciones por Industria {isMobile && <span className="dropdown-arrow">{activeMenu === 'industries' ? '▲' : '▼'}</span>}
          </a>
        </li>
        <li>
          <a href="#contacto" className="nav-link">Contacto</a>
        </li>
      </ul>

      {/* Mega menú para servicios */}
      {activeMenu === 'services' && (
        <div 
          className="mega-menu" 
          onMouseEnter={!isMobile ? () => setActiveMenu('services') : undefined}
          onMouseLeave={!isMobile ? () => setActiveMenu(null) : undefined}
        >
          <div className="container">
            <h3>Nuestros Servicios</h3>
            <div className="mega-menu-grid">
              {services.map((service, index) => (
                <a key={index} href={service.link} className="mega-menu-item">
                  <div className="mega-menu-icon">{service.icon}</div>
                  <div className="mega-menu-content">
                    <h4>{service.name}</h4>
                    <p>{service.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mega menú para industrias */}
      {activeMenu === 'industries' && (
        <div 
          className="mega-menu" 
          onMouseEnter={!isMobile ? () => setActiveMenu('industries') : undefined}
          onMouseLeave={!isMobile ? () => setActiveMenu(null) : undefined}
        >
          <div className="container">
            <h3>Soluciones por Industria</h3>
            <div className="mega-menu-grid">
              {industries.map((industry, index) => (
                <a key={index} href={industry.link} className="mega-menu-item">
                  <div className="mega-menu-icon">{industry.icon}</div>
                  <div className="mega-menu-content">
                    <h4>{industry.name}</h4>
                    <p>{industry.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Overlay para móviles */}
      {isMobile && mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>
      )}

      <style jsx>{`
        :root {
          --primary: #2563eb;
          --primary-dark: #1d4ed8;
          --text-dark: #1f2937;
          --text-light: #6b7280;
          --bg-light: #f9fafb;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        /* Menú principal */
        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-link {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .nav-link:hover {
          color: var(--primary);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        /* Mega menú */
        .mega-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          box-shadow: var(--shadow);
          padding: 2rem 0;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }
        
        .mega-menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .mega-menu-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: 12px;
          background: var(--bg-light);
          transition: all 0.3s ease;
          text-decoration: none;
          color: var(--text-dark);
        }
        
        .mega-menu-item:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4);
        }
        
        .mega-menu-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .mega-menu-content h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
        }
        
        .mega-menu-content p {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        /* Menú móvil */
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }
        
        .mobile-menu-toggle span {
          width: 2rem;
          height: 0.25rem;
          background: var(--text-dark);
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }
        
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 5;
        }
        
        /* Animaciones */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: flex;
          }
          
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 80%;
            max-width: 300px;
            background: white;
            flex-direction: column;
            padding: 5rem 1.5rem 2rem;
            gap: 0;
            z-index: 10;
            transition: right 0.3s ease;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          }
          
          .nav-menu-open {
            right: 0;
          }
          
          .nav-menu li {
            width: 100%;
            border-bottom: 1px solid #eee;
          }
          
          .nav-link {
            padding: 1rem 0;
            width: 100%;
          }
          
          .mega-menu {
            position: static;
            box-shadow: none;
            padding: 0;
            margin: 0.5rem 0 1rem;
            animation: none;
          }
          
          .mega-menu-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          
          .mega-menu-item {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
}