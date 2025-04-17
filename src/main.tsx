import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { reportWebVitals } from './lib/web-vitals'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Report web vitals in development
if (import.meta.env.DEV) {
  reportWebVitals(console.log);
}

// Report web vitals in production to analytics
if (import.meta.env.PROD) {
  reportWebVitals((metric) => {
    // Send to analytics service
    console.log(`Web Vital: ${metric.name} - ${metric.value} (${metric.rating})`);
    
    // Uncomment and modify when you have analytics set up
    /*
    window.gtag?.('event', 'web_vitals', {
      metric_name: metric.name,
      metric_value: metric.value,
      metric_rating: metric.rating,
    });
    */
  });
}

// Register service worker for production only
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}