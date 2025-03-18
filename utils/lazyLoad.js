function useLazyLoad(elementRef, threshold = 0.1) {
  try {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold }
      );

      const currentElement = elementRef.current;
      if (currentElement) {
        observer.observe(currentElement);
      }

      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [elementRef, threshold]);

    return isVisible;
  } catch (error) {
    console.error('LazyLoad hook error:', error);
    reportError(error);
    return true; // Default to visible in case of error
  }
}

function LazyImage({ src, alt, className, placeholderSrc }) {
  try {
    const imageRef = React.useRef(null);
    const isVisible = useLazyLoad(imageRef);
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    const placeholder = placeholderSrc || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMWYxZjEiLz48L3N2Zz4=';
    
    return (
      <div data-name="lazy-image-container" className="relative" ref={imageRef}>
        <img 
          data-name="lazy-image"
          src={isVisible ? src : placeholder}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div data-name="lazy-image-placeholder" className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
      </div>
    );
  } catch (error) {
    console.error('LazyImage component error:', error);
    reportError(error);
    return <img data-name="fallback-image" src={src} alt={alt} className={className} />;
  }
}
