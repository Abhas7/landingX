function Navbar() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    
    React.useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return (
      <nav 
        data-name="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div data-name="navbar-container" className="container mx-auto px-4 flex justify-between items-center">
          <a 
            data-name="navbar-logo" 
            href="#" 
            className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}
          >
            LandingX
          </a>
          
          <div data-name="navbar-menu-toggle" className="md:hidden">
            <button
              data-name="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 focus:outline-none ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
          
          <div 
            data-name="navbar-links-desktop" 
            className={`hidden md:flex items-center space-x-8 ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <a data-name="nav-link-home" href="#" className="hover:text-blue-500 transition-colors">Home</a>
            <a data-name="nav-link-services" href="#services" className="hover:text-blue-500 transition-colors">Services</a>
            <a data-name="nav-link-pricing" href="#pricing" className="hover:text-blue-500 transition-colors">Pricing</a>
            <a data-name="nav-link-users" href="#users" className="hover:text-blue-500 transition-colors">Users</a>
            <a data-name="nav-link-contact" href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            <a 
              data-name="nav-link-cta" 
              href="#contact" 
              className={`btn ${
                scrolled ? 'btn-primary' : 'btn-outline border-white text-white hover:bg-white hover:text-blue-500'
              }`}
            >
              Get Started
            </a>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div 
          data-name="navbar-mobile-menu"
          className={`md:hidden bg-white shadow-lg absolute w-full left-0 transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 py-5' : 'max-h-0 overflow-hidden py-0'
          }`}
        >
          <div data-name="mobile-links" className="container mx-auto px-4 flex flex-col space-y-4">
            <a data-name="mobile-link-home" href="#" className="text-gray-800 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a data-name="mobile-link-services" href="#services" className="text-gray-800 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a data-name="mobile-link-pricing" href="#pricing" className="text-gray-800 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a data-name="mobile-link-users" href="#users" className="text-gray-800 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Users</a>
            <a data-name="mobile-link-contact" href="#contact" className="text-gray-800 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a data-name="mobile-link-cta" href="#contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Get Started</a>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    reportError(error);
    return null;
  }
}
