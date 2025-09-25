// // import React, { useState } from 'react';
// // import {
// //     EmailShareButton,
// //     FacebookShareButton,
// //     LinkedinShareButton,
// //     TwitterShareButton,
// //     WhatsappShareButton,
// //     EmailIcon,
// //     FacebookIcon,
// //     LinkedinIcon,
// //     TwitterIcon,
// //     WhatsappIcon,
// // } from 'react-share';

// // const Contacto = () => {
// //     const shareUrl = 'https://www.companiesall.com';
// //     const title = 'Soluciones Tecnológicas para tu Empresa | CompaniesAll';
// //     const [hoveredButton, setHoveredButton] = useState(null);

// //     return (
// //         <section id="contacto" className="mac-contact-section">
// //             <div className="container">
// //                 <div className="contact-content">
// //                     <div className="contact-header">
// //                         <span className="contact-subtitle">Conectemos</span>
// //                         <h2 className="contact-title">Hablemos sobre tu próximo proyecto</h2>
// //                         <p className="contact-description">
// //                             ¿Tienes una visión o necesitas optimizar tus procesos?
// //                             Conectemos a través de nuestras redes.
// //                         </p>
// //                     </div>

// //                     <div className="mac-share-container">
// //                         <div className="share-buttons-grid">
// //                             <div
// //                                 className={`share-button-wrapper ${hoveredButton === 'facebook' ? 'hovered' : ''}`}
// //                                 onMouseEnter={() => setHoveredButton('facebook')}
// //                                 onMouseLeave={() => setHoveredButton(null)}
// //                             >
// //                                 <FacebookShareButton
// //                                     url={shareUrl}
// //                                     quote={title}
// //                                     className="mac-share-button"
// //                                 >
// //                                     <div className="button-content">
// //                                         <FacebookIcon size={42} round={true} />
// //                                         <span className="button-label">Facebook</span>
// //                                     </div>
// //                                 </FacebookShareButton>
// //                             </div>

// //                             <div
// //                                 className={`share-button-wrapper ${hoveredButton === 'twitter' ? 'hovered' : ''}`}
// //                                 onMouseEnter={() => setHoveredButton('twitter')}
// //                                 onMouseLeave={() => setHoveredButton(null)}
// //                             >
// //                                 <TwitterShareButton
// //                                     url={shareUrl}
// //                                     title={title}
// //                                     className="mac-share-button"
// //                                 >
// //                                     <div className="button-content">
// //                                         <TwitterIcon size={42} round={true} />
// //                                         <span className="button-label">Twitter</span>
// //                                     </div>
// //                                 </TwitterShareButton>
// //                             </div>

// //                             <div
// //                                 className={`share-button-wrapper ${hoveredButton === 'linkedin' ? 'hovered' : ''}`}
// //                                 onMouseEnter={() => setHoveredButton('linkedin')}
// //                                 onMouseLeave={() => setHoveredButton(null)}
// //                             >
// //                                 <LinkedinShareButton
// //                                     url={shareUrl}
// //                                     title={title}
// //                                     className="mac-share-button"
// //                                 >
// //                                     <div className="button-content">
// //                                         <LinkedinIcon size={42} round={true} />
// //                                         <span className="button-label">LinkedIn</span>
// //                                     </div>
// //                                 </LinkedinShareButton>
// //                             </div>

// //                             <div
// //                                 className={`share-button-wrapper ${hoveredButton === 'whatsapp' ? 'hovered' : ''}`}
// //                                 onMouseEnter={() => setHoveredButton('whatsapp')}
// //                                 onMouseLeave={() => setHoveredButton(null)}
// //                             >
// //                                 <WhatsappShareButton
// //                                     url={shareUrl}
// //                                     title={title}
// //                                     className="mac-share-button"
// //                                 >
// //                                     <div className="button-content">
// //                                         <WhatsappIcon size={42} round={true} />
// //                                         <span className="button-label">WhatsApp</span>
// //                                     </div>
// //                                 </WhatsappShareButton>
// //                             </div>

// //                             <div
// //                                 className={`share-button-wrapper ${hoveredButton === 'email' ? 'hovered' : ''}`}
// //                                 onMouseEnter={() => setHoveredButton('email')}
// //                                 onMouseLeave={() => setHoveredButton(null)}
// //                             >
// //                                 <EmailShareButton
// //                                     url={shareUrl}
// //                                     subject={title}
// //                                     className="mac-share-button"
// //                                 >
// //                                     <div className="button-content">
// //                                         <EmailIcon size={42} round={true} />
// //                                         <span className="button-label">Email</span>
// //                                     </div>
// //                                 </EmailShareButton>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <div className="mac-contact-info">
// //                         <p className="info-text">O escríbenos directamente a:</p>
// //                         <a href="mailto:info@companiesall.com" className="mac-email-link">info@companiesall.com</a>
// //                     </div>
// //                 </div>
// //             </div>

// //             <style jsx>{`
// //         .mac-contact-section {
// //           padding: 5rem 0;
// //           background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
// //           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
// //           color: #333;
// //           position: relative;
// //           overflow: hidden;
// //           border-radius: 2%;
// //           box-shadow: 5px 15px 16px rgba(0, 0, 0, 0.4);
// //           margin-botton:2%;
// //           padding-bottom: 5%;
// //           margin-bottom: 1%;
// //         }
        
// //         .mac-contact-section::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           height: 1px;
// //           background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
// //         }
        
// //         .container {
// //           max-width: 1000px;
// //           margin: 0 auto;
// //           padding: 0 2rem;
// //         }
        
// //         .contact-content {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           gap: 3rem;
// //         }
        
// //         .contact-header {
// //           text-align: center;
// //           max-width: 600px;
// //         }
        
// //         .contact-subtitle {
// //           display: block;
// //           font-size: 0.9rem;
// //           font-weight: 600;
// //           color: #0071e3;
// //           text-transform: uppercase;
// //           letter-spacing: 0.1em;
// //           margin-bottom: 1rem;
// //         }
        
// //         .contact-title {
// //           font-size: 2.5rem;
// //           font-weight: 600;
// //           letter-spacing: -0.5px;
// //           margin: 0 0 1rem 0;
// //           background: linear-gradient(135deg, #2c3e50, #1a1a1a);
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //         }
        
// //         .contact-description {
// //           font-size: 1.2rem;
// //           line-height: 1.6;
// //           color: #666;
// //           margin: 0;
// //         }
        
// //         .mac-share-container {
// //           width: 100%;
// //           max-width: 800px;
// //         }
        
// //         .share-buttons-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
// //           gap: 1.2rem;
// //           justify-content: center;
// //         }
        
// //         .share-button-wrapper {
// //           transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
// //           border-radius: 18px;
// //           padding: 4px;
// //           background: rgba(255, 255, 255, 0.7);
// //           backdrop-filter: blur(10px);
// //           border: 1px solid rgba(255, 255, 255, 0.5);
// //           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
// //         }
        
// //         .share-button-wrapper.hovered {
// //           transform: translateY(-5px) scale(1.03);
// //           box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
// //           background: rgba(255, 255, 255, 0.9);
// //         }
        
// //         .mac-share-button {
// //           width: 100%;
// //           height: 100%;
// //           border: none;
// //           background: transparent;
// //           cursor: pointer;
// //           border-radius: 14px;
// //           padding: 1.2rem 0.5rem;
// //           transition: all 0.3s ease;
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //         }
        
// //         .button-content {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           gap: 0.8rem;
// //         }
        
// //         .button-label {
// //           font-size: 0.9rem;
// //           font-weight: 500;
// //           color: #444;
// //           transition: color 0.2s ease;
// //         }
        
// //         .share-button-wrapper.hovered .button-label {
// //           color: #0071e3;
// //         }
        
// //         .mac-contact-info {
// //           text-align: center;
// //           margin-top: 1.5rem;
// //         }
        
// //         .info-text {
// //           font-size: 1rem;
// //           color: #666;
// //           margin-bottom: 0.5rem;
// //         }
        
// //         .mac-email-link {
// //           font-size: 1.1rem;
// //           color: #0071e3;
// //           text-decoration: none;
// //           font-weight: 500;
// //           transition: all 0.2s ease;
// //           position: relative;
// //         }
        
// //         .mac-email-link::after {
// //           content: '';
// //           position: absolute;
// //           bottom: -2px;
// //           left: 0;
// //           width: 0;
// //           height: 1px;
// //           background: #0071e3;
// //           transition: width 0.3s ease;
// //         }
        
// //         .mac-email-link:hover::after {
// //           width: 100%;
// //         }
        
// //         @media (max-width: 768px) {
// //           .contact-title {
// //             font-size: 2rem;
// //           }
          
// //           .contact-description {
// //             font-size: 1.1rem;
// //           }
          
// //           .share-buttons-grid {
// //             grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
// //             gap: 1rem;
// //           }
// //         }
        
// //         @media (max-width: 480px) {
// //           .mac-contact-section {
// //             padding: 3rem 0;
// //           }
          
// //           .share-buttons-grid {
// //             grid-template-columns: repeat(2, 1fr);
// //           }
// //         }
// //       `}</style>
// //         </section>
// //     );
// // };

// // export default Contacto;



// import {
//     EmailShareButton,
//     FacebookShareButton,
//     LinkedinShareButton,
//     TwitterShareButton,
//     WhatsappShareButton,
//     EmailIcon,
//     FacebookIcon,
//     LinkedinIcon,
//     TwitterIcon,
//     WhatsappIcon,
// } from 'react-share';

// const Contacto = () => {
//     const shareUrl = 'https://www.companiesall.com';
//     const title = 'Soluciones Tecnológicas para tu Empresa | CompaniesAll';

//     return (
//         <section id="contacto" className="mac-contact-section">
//             <div className="container">
//                 <div className="contact-content">
//                     <div className="contact-header">
//                         <span className="contact-subtitle">Conectemos</span>
//                         <h2 className="contact-title">Hablemos sobre tu próximo proyecto</h2>
//                         <p className="contact-description">
//                             ¿Tienes una visión o necesitas optimizar tus procesos?
//                             Conectemos a través de nuestras redes.
//                         </p>
//                     </div>

//                     <div className="mac-share-container">
//                         <div className="share-buttons-grid">
//                             {/* Eliminamos el estado de 'hover' en favor de CSS */}
//                             <div className="share-button-wrapper">
//                                 <FacebookShareButton
//                                     url={shareUrl}
//                                     quote={title}
//                                     className="mac-share-button"
//                                 >
//                                     <div className="button-content">
//                                         <FacebookIcon size={42} round={true} />
//                                         <span className="button-label">Facebook</span>
//                                     </div>
//                                 </FacebookShareButton>
//                             </div>

//                             <div className="share-button-wrapper">
//                                 <TwitterShareButton
//                                     url={shareUrl}
//                                     title={title}
//                                     className="mac-share-button"
//                                 >
//                                     <div className="button-content">
//                                         <TwitterIcon size={42} round={true} />
//                                         <span className="button-label">Twitter</span>
//                                     </div>
//                                 </TwitterShareButton>
//                             </div>

//                             <div className="share-button-wrapper">
//                                 <LinkedinShareButton
//                                     url={shareUrl}
//                                     title={title}
//                                     className="mac-share-button"
//                                 >
//                                     <div className="button-content">
//                                         <LinkedinIcon size={42} round={true} />
//                                         <span className="button-label">LinkedIn</span>
//                                     </div>
//                                 </LinkedinShareButton>
//                             </div>

//                             <div className="share-button-wrapper">
//                                 <WhatsappShareButton
//                                     url={shareUrl}
//                                     title={title}
//                                     className="mac-share-button"
//                                 >
//                                     <div className="button-content">
//                                         <WhatsappIcon size={42} round={true} />
//                                         <span className="button-label">WhatsApp</span>
//                                     </div>
//                                 </WhatsappShareButton>
//                             </div>

//                             <div className="share-button-wrapper">
//                                 <EmailShareButton
//                                     url={shareUrl}
//                                     subject={title}
//                                     className="mac-share-button"
//                                 >
//                                     <div className="button-content">
//                                         <EmailIcon size={42} round={true} />
//                                         <span className="button-label">Email</span>
//                                     </div>
//                                 </EmailShareButton>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mac-contact-info">
//                         <p className="info-text">O escríbenos directamente a:</p>
//                         <a href="mailto:info@companiesall.com" className="mac-email-link">info@companiesall.com</a>
//                     </div>
//                 </div>
//             </div>

//             <style jsx>{`
//                 .mac-contact-section {
//                     padding: 5rem 0;
//                     background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
//                     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//                     color: #333;
//                     position: relative;
//                     overflow: hidden;
//                     border-radius: 2%;
//                     box-shadow: 5px 15px 16px rgba(0, 0, 0, 0.4);
//                     margin-bottom: 1%; /* Corregido de 'margin-botton' a 'margin-bottom' */
//                     padding-bottom: 5%;
//                 }
                
//                 .mac-contact-section::before {
//                     content: '';
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     height: 1px;
//                     background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
//                 }
                
//                 .container {
//                     max-width: 1000px;
//                     margin: 0 auto;
//                     padding: 0 2rem;
//                 }
                
//                 .contact-content {
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                     gap: 3rem;
//                 }
                
//                 .contact-header {
//                     text-align: center;
//                     max-width: 600px;
//                 }
                
//                 .contact-subtitle {
//                     display: block;
//                     font-size: 0.9rem;
//                     font-weight: 600;
//                     color: #0071e3;
//                     text-transform: uppercase;
//                     letter-spacing: 0.1em;
//                     margin-bottom: 1rem;
//                 }
                
//                 .contact-title {
//                     font-size: 2.5rem;
//                     font-weight: 600;
//                     letter-spacing: -0.5px;
//                     margin: 0 0 1rem 0;
//                     background: linear-gradient(135deg, #2c3e50, #1a1a1a);
//                     -webkit-background-clip: text;
//                     -webkit-text-fill-color: transparent;
//                 }
                
//                 .contact-description {
//                     font-size: 1.2rem;
//                     line-height: 1.6;
//                     color: #666;
//                     margin: 0;
//                 }
                
//                 .mac-share-container {
//                     width: 100%;
//                     max-width: 800px;
//                 }
                
//                 .share-buttons-grid {
//                     display: grid;
//                     grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
//                     gap: 1.2rem;
//                     justify-content: center;
//                 }

//                 .share-button-wrapper {
//                     transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//                     border-radius: 18px;
//                     padding: 4px;
//                     background: rgba(255, 255, 255, 0.7);
//                     backdrop-filter: blur(10px);
//                     border: 1px solid rgba(255, 255, 255, 0.5);
//                     box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
//                     cursor: pointer; /* Añadido para indicar que es clickeable */
//                 }

//                 .share-button-wrapper:hover {
//                     transform: translateY(-5px) scale(1.03);
//                     box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
//                     background: rgba(255, 255, 255, 0.9);
//                 }
                
//                 .mac-share-button {
//                     width: 100%;
//                     height: 100%;
//                     border: none;
//                     background: transparent;
//                     cursor: pointer;
//                     border-radius: 14px;
//                     padding: 1.2rem 0.5rem;
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                 }
                
//                 .button-content {
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                     gap: 0.8rem;
//                 }
                
//                 .button-label {
//                     font-size: 0.9rem;
//                     font-weight: 500;
//                     color: #444;
//                     transition: color 0.2s ease;
//                 }
                
//                 .share-button-wrapper:hover .button-label {
//                     color: #0071e3;
//                 }
                
//                 .mac-contact-info {
//                     text-align: center;
//                     margin-top: 1.5rem;
//                 }
                
//                 .info-text {
//                     font-size: 1rem;
//                     color: #666;
//                     margin-bottom: 0.5rem;
//                 }
                
//                 .mac-email-link {
//                     font-size: 1.1rem;
//                     color: #0071e3;
//                     text-decoration: none;
//                     font-weight: 500;
//                     transition: all 0.2s ease;
//                     position: relative;
//                 }
                
//                 .mac-email-link::after {
//                     content: '';
//                     position: absolute;
//                     bottom: -2px;
//                     left: 0;
//                     width: 0;
//                     height: 1px;
//                     background: #0071e3;
//                     transition: width 0.3s ease;
//                 }
                
//                 .mac-email-link:hover::after {
//                     width: 100%;
//                 }
                
//                 @media (max-width: 768px) {
//                     .contact-title {
//                         font-size: 2rem;
//                     }
                    
//                     .contact-description {
//                         font-size: 1.1rem;
//                     }
                    
//                     .share-buttons-grid {
//                         grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
//                         gap: 1rem;
//                     }
//                 }
                
//                 @media (max-width: 480px) {
//                     .mac-contact-section {
//                         padding: 3rem 0;
//                     }
                    
//                     .share-buttons-grid {
//                         grid-template-columns: repeat(2, 1fr);
//                     }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default Contacto;



import React from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
} from 'react-share';

const Contacto = () => {
    const shareUrl = 'https://www.companiesall.com';
    const title = 'Soluciones Tecnológicas para tu Empresa | CompaniesAll';

    return (
        <section id="contacto" className="mac-contact-section">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-header">
                        <span className="contact-subtitle">Conectemos</span>
                        <h2 className="contact-title">Hablemos sobre tu próximo proyecto</h2>
                        <p className="contact-description">
                            ¿Tienes una visión o necesitas optimizar tus procesos?
                            Conectemos a través de nuestras redes.
                        </p>
                    </div>

                    <div className="mac-share-container">
                        <div className="share-buttons-grid">
                            {/* Uso de CSS para el efecto de hover */}
                            <div className="share-button-wrapper">
                                <FacebookShareButton
                                    url={shareUrl}
                                    quote={title}
                                    className="mac-share-button"
                                >
                                    <div className="button-content">
                                        <FacebookIcon size={42} round={true} />
                                        <span className="button-label">Facebook</span>
                                    </div>
                                </FacebookShareButton>
                            </div>

                            <div className="share-button-wrapper">
                                <TwitterShareButton
                                    url={shareUrl}
                                    title={title}
                                    className="mac-share-button"
                                >
                                    <div className="button-content">
                                        <TwitterIcon size={42} round={true} />
                                        <span className="button-label">Twitter</span>
                                    </div>
                                </TwitterShareButton>
                            </div>

                            <div className="share-button-wrapper">
                                <LinkedinShareButton
                                    url={shareUrl}
                                    title={title}
                                    className="mac-share-button"
                                >
                                    <div className="button-content">
                                        <LinkedinIcon size={42} round={true} />
                                        <span className="button-label">LinkedIn</span>
                                    </div>
                                </LinkedinShareButton>
                            </div>

                            <div className="share-button-wrapper">
                                <WhatsappShareButton
                                    url={shareUrl}
                                    title={title}
                                    className="mac-share-button"
                                >
                                    <div className="button-content">
                                        <WhatsappIcon size={42} round={true} />
                                        <span className="button-label">WhatsApp</span>
                                    </div>
                                </WhatsappShareButton>
                            </div>

                            <div className="share-button-wrapper">
                                <EmailShareButton
                                    url={shareUrl}
                                    subject={title}
                                    className="mac-share-button"
                                >
                                    <div className="button-content">
                                        <EmailIcon size={42} round={true} />
                                        <span className="button-label">Email</span>
                                    </div>
                                </EmailShareButton>
                            </div>
                        </div>
                    </div>

                    <div className="mac-contact-info">
                        <p className="info-text">O escríbenos directamente a:</p>
                        <a href="mailto:info@companiesall.com" className="mac-email-link">info@companiesall.com</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* ... tu CSS se mantiene casi igual, con la diferencia de que ahora se usan pseudoclases directamente ... */
                .mac-contact-section {
                    padding: 5rem 0;
                    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                    color: #333;
                    position: relative;
                    overflow: hidden;
                    border-radius: 2%;
                    box-shadow: 5px 15px 16px rgba(0, 0, 0, 0.4);
                    margin-bottom: 1%;
                    padding-bottom: 5%;
                }
                
                .mac-contact-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
                }
                
                .container {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                
                .contact-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3rem;
                }
                
                .contact-header {
                    text-align: center;
                    max-width: 600px;
                }
                
                .contact-subtitle {
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #0071e3;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 1rem;
                }
                
                .contact-title {
                    font-size: 2.5rem;
                    font-weight: 600;
                    letter-spacing: -0.5px;
                    margin: 0 0 1rem 0;
                    background: linear-gradient(135deg, #2c3e50, #1a1a1a);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .contact-description {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    color: #666;
                    margin: 0;
                }
                
                .mac-share-container {
                    width: 100%;
                    max-width: 800px;
                }
                
                .share-buttons-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 1.2rem;
                    justify-content: center;
                }

                .share-button-wrapper {
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    border-radius: 18px;
                    padding: 4px;
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                }

                .share-button-wrapper:hover {
                    transform: translateY(-5px) scale(1.03);
                    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
                    background: rgba(255, 255, 255, 0.9);
                }
                
                .mac-share-button {
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    border-radius: 14px;
                    padding: 1.2rem 0.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .button-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.8rem;
                }
                
                .button-label {
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #444;
                    transition: color 0.2s ease;
                }
                
                /* Pseudoclase para el hover del label */
                .share-button-wrapper:hover .button-label {
                    color: #0071e3;
                }
                
                .mac-contact-info {
                    text-align: center;
                    margin-top: 1.5rem;
                }
                
                .info-text {
                    font-size: 1rem;
                    color: #666;
                    margin-bottom: 0.5rem;
                }
                
                .mac-email-link {
                    font-size: 1.1rem;
                    color: #0071e3;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.2s ease;
                    position: relative;
                }
                
                .mac-email-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: #0071e3;
                    transition: width 0.3s ease;
                }
                
                .mac-email-link:hover::after {
                    width: 100%;
                }
                
                @media (max-width: 768px) {
                    .contact-title {
                        font-size: 2rem;
                    }
                    
                    .contact-description {
                        font-size: 1.1rem;
                    }
                    
                    .share-buttons-grid {
                        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                        gap: 1rem;
                    }
                }
                
                @media (max-width: 480px) {
                    .mac-contact-section {
                        padding: 3rem 0;
                    }
                    
                    .share-buttons-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </section>
    );
};

export default Contacto;