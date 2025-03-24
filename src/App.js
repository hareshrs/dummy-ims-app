import React, { useEffect, useState } from 'react';
import './'

function App() {
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    const loadExternalComponents = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://rm-mfe-cud8g6eqddb4hgca.eastus2-01.azurewebsites.net/remote-monitoring.js';
        script.async = true;
        
        // Create a promise to track when the script loads
        const loadPromise = new Promise((resolve, reject) => {
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Failed to load components'));
        });
        
        document.head.appendChild(script);
        await loadPromise;
        
        // Check if components are registered after script loads
        if (
          customElements.get('rm-mfe') &&
          customElements.get('rm-mfe-rn')
        ) {
          setComponentsLoaded(true);
        } else {
          throw new Error('Components failed to register');
        }
      } catch (error) {
        console.error('Error loading components:', error);
        setLoadError(error.message);
      }
    };
    
    loadExternalComponents();
  }, []);

  if (loadError) {
    return <div>Error loading components: {loadError}</div>;
  }

  if (!componentsLoaded) {
    return <div>Loading components...</div>;
  }

  return (
    <div>
      <h1>React 18.3 App</h1>
      {/* Use your custom elements once loaded */}
      <rm-mfe label="Click Me" variant="primary"></rm-mfe>
      <rm-mfe-rn title="My Card" description="Loaded from external source"></rm-mfe-rn>
    </div>
  );
}

export default App;