function PricingTable() {
  try {
    const pricingRef = React.useRef(null);
    const isVisible = useLazyLoad(pricingRef);
    
    // Pricing data
    const pricingPlans = [
      {
        id: 'basic',
        name: 'Basic',
        price: '29',
        period: 'per month',
        features: [
          { text: 'Single Website', included: true },
          { text: '10 GB Storage', included: true },
          { text: '10,000 Monthly Visitors', included: true },
          { text: 'Basic Analytics', included: true },
          { text: 'Email Support', included: true },
          { text: 'Custom Domain', included: false },
          { text: 'Advanced Analytics', included: false },
          { text: 'Priority Support', included: false }
        ],
        isFeatured: false,
        cta: 'Get Started'
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '79',
        period: 'per month',
        features: [
          { text: 'Up to 5 Websites', included: true },
          { text: '50 GB Storage', included: true },
          { text: '100,000 Monthly Visitors', included: true },
          { text: 'Advanced Analytics', included: true },
          { text: 'Priority Email Support', included: true },
          { text: 'Custom Domain', included: true },
          { text: 'SEO Tools', included: true },
          { text: '24/7 Phone Support', included: false }
        ],
        isFeatured: true,
        badge: 'Popular',
        cta: 'Start Now'
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: '199',
        period: 'per month',
        features: [
          { text: 'Unlimited Websites', included: true },
          { text: '500 GB Storage', included: true },
          { text: 'Unlimited Monthly Visitors', included: true },
          { text: 'Advanced Analytics & Reports', included: true },
          { text: 'Priority Support', included: true },
          { text: 'Custom Domains', included: true },
          { text: 'Advanced SEO Tools', included: true },
          { text: '24/7 Dedicated Support', included: true }
        ],
        isFeatured: false,
        cta: 'Contact Us'
      }
    ];
    
    return (
      <section data-name="pricing-section" id="pricing" className="section" ref={pricingRef}>
        <div data-name="pricing-container" className="container mx-auto px-4">
          <h2 data-name="pricing-title" className="section-title">Pricing Plans</h2>
          <p data-name="pricing-subtitle" className="section-subtitle">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>
          
          <div data-name="pricing-container" className="pricing-container">
            {pricingPlans.map((plan) => (
              <div 
                data-name={`pricing-card-${plan.id}`}
                key={plan.id} 
                className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}
              >
                <div data-name="pricing-header" className="pricing-header">
                  {plan.badge && (
                    <span data-name="pricing-badge" className="pricing-badge">{plan.badge}</span>
                  )}
                  <h3 data-name="pricing-title" className="pricing-title">{plan.name}</h3>
                  <div data-name="pricing-price" className="pricing-price">${plan.price}</div>
                  <div data-name="pricing-period" className="pricing-period">{plan.period}</div>
                </div>
                
                <ul data-name="pricing-features" className="pricing-features">
                  {plan.features.map((feature, index) => (
                    <li 
                      data-name={`pricing-feature-${index}`}
                      key={index} 
                      className={`pricing-feature ${!feature.included ? 'disabled' : ''}`}
                    >
                      <i className={`fas ${feature.included ? 'fa-check' : 'fa-times'}`}></i>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                
                <div data-name="pricing-action" className="pricing-action">
                  <a 
                    data-name="pricing-button"
                    href="#contact" 
                    className={`btn ${plan.isFeatured ? 'btn-primary' : 'btn-outline'} w-full`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div data-name="pricing-guarantee" className="text-center mt-12">
            <p data-name="guarantee-text" className="text-gray-600">
              <i className="fas fa-shield-alt text-blue-500 mr-2"></i>
              All plans come with a 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('PricingTable component error:', error);
    reportError(error);
    return null;
  }
}
