function ContactForm() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitSuccess, setSubmitSuccess] = React.useState(false);
    const formRef = React.useRef(null);
    const isVisible = useLazyLoad(formRef);
    
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.subject.trim()) {
        newErrors.subject = 'Subject is required';
      }
      
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      } else if (formData.message.trim().length < 10) {
        newErrors.message = 'Message is too short (minimum 10 characters)';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
      
      // Clear error for this field when user types
      if (errors[name]) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: undefined
        }));
      }
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (validateForm()) {
        setIsSubmitting(true);
        
        // Simulate form submission with timeout
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        }, 1500);
      }
    };
    
    return (
      <section data-name="contact-section" id="contact" className="section bg-gray-50" ref={formRef}>
        <div data-name="contact-container" className="container mx-auto px-4">
          <h2 data-name="contact-title" className="section-title">Get In Touch</h2>
          <p data-name="contact-subtitle" className="section-subtitle">
            Have questions or need more information? Fill out the form below and we'll get back to you soon.
          </p>
          
          <div data-name="contact-content" className="contact-container">
            <div data-name="contact-info" className="contact-info">
              <div data-name="contact-info-item" className="contact-info-item">
                <div data-name="contact-info-icon" className="contact-info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div data-name="contact-info-content" className="contact-info-content">
                  <h4>Our Location</h4>
                  <p>42 Tech Park, Whitefield, Bangalore, Karnataka 560066, India</p>
                </div>
              </div>
              
              <div data-name="contact-info-item" className="contact-info-item">
                <div data-name="contact-info-icon" className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div data-name="contact-info-content" className="contact-info-content">
                  <h4>Email Us</h4>
                  <p>info@landingx.in</p>
                  <p>support@landingx.in</p>
                </div>
              </div>
              
              <div data-name="contact-info-item" className="contact-info-item">
                <div data-name="contact-info-icon" className="contact-info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div data-name="contact-info-content" className="contact-info-content">
                  <h4>Call Us</h4>
                  <p>+91 80123 45678</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              
              <div data-name="contact-info-item" className="contact-info-item">
                <div data-name="contact-info-icon" className="contact-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div data-name="contact-info-content" className="contact-info-content">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM (IST)</p>
                </div>
              </div>
            </div>
            
            <div data-name="contact-form-container" className="contact-form">
              {submitSuccess && (
                <div data-name="form-success" className="form-success">
                  <i className="fas fa-check-circle mr-2"></i>
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}
              
              <form data-name="contact-form" onSubmit={handleSubmit}>
                <div data-name="form-group" className="form-group">
                  <label data-name="form-label" className="form-label" htmlFor="name">Your Name</label>
                  <input
                    data-name="form-input-name"
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${errors.name ? 'border-red-500' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div data-name="form-error" className="form-error">{errors.name}</div>}
                </div>
                
                <div data-name="form-group" className="form-group">
                  <label data-name="form-label" className="form-label" htmlFor="email">Your Email</label>
                  <input
                    data-name="form-input-email"
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? 'border-red-500' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div data-name="form-error" className="form-error">{errors.email}</div>}
                </div>
                
                <div data-name="form-group" className="form-group">
                  <label data-name="form-label" className="form-label" htmlFor="subject">Subject</label>
                  <input
                    data-name="form-input-subject"
                    type="text"
                    id="subject"
                    name="subject"
                    className={`form-control ${errors.subject ? 'border-red-500' : ''}`}
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <div data-name="form-error" className="form-error">{errors.subject}</div>}
                </div>
                
                <div data-name="form-group" className="form-group">
                  <label data-name="form-label" className="form-label" htmlFor="message">Your Message</label>
                  <textarea
                    data-name="form-textarea"
                    id="message"
                    name="message"
                    className={`form-control form-textarea ${errors.message ? 'border-red-500' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <div data-name="form-error" className="form-error">{errors.message}</div>}
                </div>
                
                <button
                  data-name="form-submit"
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span data-name="loading-text">
                      <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ContactForm component error:', error);
    reportError(error);
    return null;
  }
}
