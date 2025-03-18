function App() {
  try {
    return (
      <React.Fragment>
        <Navbar />
        <Hero />
        <Services />
        <PricingTable />
        <Users />
        <ContactForm />
        <Footer />
      </React.Fragment>
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
    return <div data-name="error-fallback">Something went wrong. Please try again later.</div>;
  }
}

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
