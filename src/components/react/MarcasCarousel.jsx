
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MarcasCarousel = () => {
    // Datos de ejemplo de marcas
    const marcas = [
        {
            id: 1,
            nombre: "Riders Pedidos YA",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/PedidosYa.jpg"
        },
        {
            id: 2,
            nombre: "Podología Integral Cuyo",
            logo: "https://instagram.fmdz7-1.fna.fbcdn.net/v/t51.2885-19/503649359_18334584121166484_4454261005955251972_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fmdz7-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QElKOuNsw3uFpHn4lgPuN7g9gxl8kSm9KxikcJRE9MajFXQ2_QfbaNEACsa6Z36efBZWh-pAU6Ou6TAzhIWY3Ri&_nc_ohc=EOzyW7-YnbgQ7kNvwGuSeLE&_nc_gid=DSKp6HWT4yPRPUbe2Zy45A&edm=AEYEu-QBAAAA&ccb=7-5&oh=00_AfbpMo-FQl-x6g7LpkD0cZJQBiZr2dh4EK-vqgfRBlHHvw&oe=68D356A1&_nc_sid=ead929"
        },
        {
            id: 3,
            nombre: "Estudios de Abogados Contigliani",
            logo: "https://static.vecteezy.com/system/resources/thumbnails/000/585/723/small/07-01.jpg"
        },

        {
            id: 4,
            nombre: "Constructora Conti",
            logo: "https://www.shutterstock.com/image-vector/safety-helmet-sign-vector-icon-600nw-2560586405.jpg"

        },

        // ... resto de las marcas
    ];

    // Configuración responsive del carrusel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 6,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: { max: 1200, min: 968 },
            items: 5,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: { max: 968, min: 768 },
            items: 4,
            partialVisibilityGutter: 20
        },
        smallTablet: {
            breakpoint: { max: 768, min: 480 },
            items: 3,
            partialVisibilityGutter: 10
        },
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 2,
            partialVisibilityGutter: 10
        }
    };

    // Función para manejar errores de carga de imágenes
    const handleImageError = (e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
    };

    return (
        <section className="marcas-carousel-section">
            <div className="container">
                <div className="carousel-header">
                    <h2 className="carousel-title">Marcas que nos apoyan</h2>
                    <p className="carousel-subtitle">
                        Colaboramos con las empresas más innovadoras del mercado
                    </p>
                </div>

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    itemClass="carousel-item"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    showDots={true}
                >
                    {marcas.map((marca) => (
                        <div key={marca.id} className="marca-card">
                            <div className="marca-logo-container">
                                <img
                                    src={marca.logo}
                                    alt={marca.nombre}
                                    className="marca-logo"
                                    onError={handleImageError}
                                />
                                <div className="marca-logo-fallback">
                                    {marca.nombre.charAt(0)}
                                </div>
                            </div>
                            <span className="marca-name">{marca.nombre}</span>
                        </div>
                    ))}
                </Carousel>
            </div>

            <style jsx>{`
        .marcas-carousel-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f9fafb 0%, #f2f4f7 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          position: relative;
          overflow: hidden;
        }
        
        .marcas-carousel-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .carousel-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .carousel-title {
          font-size: 2.2rem;
          font-weight: 600;
          letter-spacing: -0.5px;
          margin: 0 0 0.5rem 0;
          background: linear-gradient(135deg, #2c3e50, #1a1a1a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .carousel-subtitle {
          font-size: 1.1rem;
          color: #666;
          margin: 0;
        }
        
        .marca-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.4);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          margin: 0.5rem;
          height: 180px;
          justify-content: center;
        }
        
        .marca-card:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 
            0 15px 40px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }
        
        .marca-logo-container {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 16px;
          padding: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          position: relative;
        }
        
        .marca-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: all 0.3s ease;
        }
        
        .marca-logo-fallback {
          width: 100%;
          height: 100%;
          display: none;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: bold;
          color: #555;
          background: #f0f0f0;
          border-radius: 8px;
        }
        
        .marca-card:hover .marca-logo {
          transform: scale(1.1);
        }
        
        .marca-name {
          font-size: 0.9rem;
          font-weight: 500;
          color: #444;
          text-align: center;
          margin-top: 0.5rem;
        }
        
        :global(.carousel-container) {
          padding: 1rem 0;
        }
        
        :global(.carousel-item) {
          display: flex;
          justify-content: center;
        }
        
        :global(.react-multi-carousel-dot button) {
          border: none;
          background: rgba(0, 0, 0, 0.1);
          width: 10px;
          height: 10px;
          margin: 0 5px;
        }
        
        :global(.react-multi-carousel-dot--active button) {
          background: #007aff;
          transform: scale(1.2);
        }
        
        :global(.react-multiple-carousel__arrow) {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.1);
          min-width: 40px;
          min-height: 40px;
          z-index: 1;
        }
        
        :global(.react-multiple-carousel__arrow::before) {
          color: #333;
        }
        
        :global(.react-multiple-carousel__arrow:hover) {
          background: white;
        }
        
        /* Responsive para móviles */
        @media (max-width: 768px) {
          .marcas-carousel-section {
            padding: 3rem 0;
          }
          
          .container {
            padding: 0 1rem;
          }
          
          .carousel-title {
            font-size: 1.8rem;
          }
          
          .carousel-subtitle {
            font-size: 1rem;
          }
          
          .marca-logo-container {
            width: 60px;
            height: 60px;
          }
          
          .marca-card {
            padding: 1rem;
            height: 150px;
          }
        }
        
        @media (max-width: 480px) {
          .carousel-title {
            font-size: 1.5rem;
          }
          
          .carousel-subtitle {
            font-size: 0.9rem;
          }
          
          .marca-logo-container {
            width: 50px;
            height: 50px;
            padding: 0.5rem;
          }
          
          .marca-name {
            font-size: 0.8rem;
          }
          
          .marca-card {
            height: 130px;
          }
        }
      `}</style>
        </section>
    );
};

export default MarcasCarousel;
