function ServiceCard({ service }) {
  try {
    const { icon, title, description } = service;
    const cardRef = React.useRef(null);
    const isVisible = useLazyLoad(cardRef, 0.2);
    
    return (
      <div 
        data-name="service-card" 
        ref={cardRef} 
        className={`service-card ${isVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        <div data-name="service-content" className="service-content">
          <div data-name="service-icon" className="service-icon">
            <i className={`fas ${icon}`}></i>
          </div>
          <h3 data-name="service-title" className="service-title">{title}</h3>
          <p data-name="service-description" className="service-description">{description}</p>
          
          <div data-name="service-action" className="mt-6">
            <a 
              data-name="service-link" 
              href="#contact" 
              className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
            >
              Learn More
              <i className="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ServiceCard component error:', error);
    reportError(error);
    return null;
  }
}
