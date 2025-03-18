function Footer() {
  try {
    return (
      <footer data-name="footer" className="bg-gray-900 text-white py-16">
        <div data-name="footer-container" className="container mx-auto px-4">
          <div data-name="footer-content" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div data-name="footer-about">
              <h3 data-name="footer-brand" className="text-2xl font-bold mb-5">LandingX</h3>
              <p data-name="footer-description" className="text-gray-400 mb-6">
                We create beautiful and functional landing pages that convert visitors into customers across India.
              </p>
              <div data-name="footer-social" className="flex space-x-4">
                <a data-name="social-facebook" href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a data-name="social-twitter" href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a data-name="social-instagram" href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a data-name="social-linkedin" href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div data-name="footer-links">
              <h4 data-name="footer-links-title" className="text-lg font-semibold mb-5">Quick Links</h4>
              <ul data-name="footer-links-list" className="space-y-3">
                <li><a data-name="footer-link-home" href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a data-name="footer-link-services" href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a data-name="footer-link-pricing" href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a data-name="footer-link-users" href="#users" className="text-gray-400 hover:text-white transition-colors">Users</a></li>
                <li><a data-name="footer-link-contact" href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div data-name="footer-services">
              <h4 data-name="footer-services-title" className="text-lg font-semibold mb-5">Our Services</h4>
              <ul data-name="footer-services-list" className="space-y-3">
                <li><a data-name="footer-service-web" href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                <li><a data-name="footer-service-ui" href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a data-name="footer-service-marketing" href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a data-name="footer-service-branding" href="#" className="text-gray-400 hover:text-white transition-colors">Branding</a></li>
                <li><a data-name="footer-service-consulting" href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            
            <div data-name="footer-newsletter">
              <h4 data-name="footer-newsletter-title" className="text-lg font-semibold mb-5">Stay Updated</h4>
              <p data-name="footer-newsletter-text" className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
              <form data-name="newsletter-form" className="flex flex-col space-y-3">
                <input 
                  data-name="newsletter-input"
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button 
                  data-name="newsletter-button"
                  type="submit" 
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div data-name="footer-bottom" className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p data-name="footer-copyright" className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} LandingX India. All rights reserved.
            </p>
            <div data-name="footer-legal-links" className="flex flex-wrap justify-center space-x-6">
              <a data-name="footer-terms" href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a data-name="footer-privacy" href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a data-name="footer-cookies" href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    reportError(error);
    return null;
  }
}
