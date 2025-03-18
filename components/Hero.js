function Hero() {
  try {
    const heroRef = React.useRef(null);
    const isVisible = useLazyLoad(heroRef, 0.1);
    
    return (
      <section data-name="hero" ref={heroRef} className="hero" id="home">
        <LazyImage 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="Hero background"
          className="hero-bg"
        />
        <div data-name="hero-overlay" className="hero-overlay"></div>
        
        <div data-name="hero-content" className="hero-content">
          <h1 
            data-name="hero-title" 
            className={`hero-title ${isVisible ? 'animate-fade-in-up' : ''}`}
          >
            Create Stunning Landing Pages
          </h1>
          <p 
            data-name="hero-subtitle" 
            className={`hero-subtitle ${isVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}
          >
            Boost your business with our professional web design and development services.
            We help you stand out in the digital landscape.
          </p>
          <div 
            data-name="hero-buttons" 
            className={`hero-buttons ${isVisible ? 'animate-fade-in-up animation-delay-400' : ''}`}
          >
            <a 
              data-name="hero-btn-primary" 
              href="#services" 
              className="btn btn-primary"
            >
              Our Services
            </a>
            <a 
              data-name="hero-btn-secondary" 
              href="#contact" 
              className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-500"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <style jsx="true">{`
          .animate-fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s ease forwards;
          }
          
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    reportError(error);
    return null;
  }
}
