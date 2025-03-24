import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Verify React is loaded correctly in the application
console.log('React version in consumer app:', React.version);
console.log('ReactDOM available:', typeof ReactDOM !== 'undefined');

// Make sure DOM is fully loaded before rendering
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    try {
      const root = createRoot(rootElement);
      root.render(<React.StrictMode>
        <App />
      </React.StrictMode>);
    } catch (error) {
      console.error('Error rendering app:', error);
      // Fallback rendering in case of errors
      rootElement.innerHTML = `
        <div style="padding: 20px; color: red;">
          <h2>Error loading application</h2>
          <p>Please check the console for details.</p>
        </div>
      `;
    }
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();