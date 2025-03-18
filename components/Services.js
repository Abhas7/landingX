function Services() {
  try {
    const servicesRef = React.useRef(null);
    const isVisible = useLazyLoad(servicesRef);
    
    // Services data
    const services = [
      {
        id: 'webdev',
        icon: 'fa-code',
        title: 'Web Development',
        description: 'We build modern, responsive websites optimized for performance, search engines, and conversions.'
      },
      {
        id: 'uiux',
        icon: 'fa-palette',
        title: 'UI/UX Design',
        description: 'Our design team creates intuitive user experiences and stunning interfaces that engage your audience.'
      },
      {
        id: 'marketing',
        icon: 'fa-bullhorn',
        title: 'Digital Marketing',
        description: 'Drive traffic and increase conversions with our data-driven digital marketing strategies.'
      },
      {
        id: 'branding',
        icon: 'fa-layer-group',
        title: 'Branding',
        description: 'Establish a strong brand identity with our comprehensive branding services and strategies.'
      },
      {
        id: 'seo',
        icon: 'fa-search',
        title: 'SEO Optimization',
        description: 'Improve your search engine rankings and drive organic traffic with our SEO expertise.'
      },
      {
        id: 'ecommerce',
        icon: 'fa-shopping-cart',
        title: 'E-Commerce Solutions',
        description: 'Build powerful online stores with secure payment gateways and optimized user experience.'
      }
    ];
    
    return (
      <section data-name="services-section" id="services" className="section" ref={servicesRef}>
        <div data-name="services-container" className="container mx-auto px-4">
          <h2 data-name="services-title" className="section-title">Our Services</h2>
          <p data-name="services-subtitle" className="section-subtitle">
            We offer a wide range of services to help your business grow and succeed in the digital world.
          </p>
          
          <div 
            data-name="services-grid" 
            className={`services-grid ${isVisible ? 'fade-in visible' : 'fade-in'}`}
          >
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    reportError(error);
    return null;
  }
}
