type MetricName = 'CLS' | 'FID' | 'LCP' | 'TTFB' | 'FCP';

interface WebVitalMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

type ReportHandler = (metric: WebVitalMetric) => void;

// Thresholds for each metric based on Google's recommendations
const thresholds = {
  CLS: { good: 0.1, poor: 0.25 }, // Cumulative Layout Shift
  FID: { good: 100, poor: 300 },  // First Input Delay (ms)
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint (ms)
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte (ms)
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint (ms)
};

// Helper to determine rating based on thresholds
const getRating = (name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const metric = thresholds[name];
  if (value <= metric.good) return 'good';
  if (value <= metric.poor) return 'needs-improvement';
  return 'poor';
};

// Function to report web vitals to analytics
export const reportWebVitals = (onReport: ReportHandler): void => {
  if (typeof window === 'undefined') return;

  // We need to load web-vitals dynamically since it's a client-side only library
  import('web-vitals').then(({ getCLS, getFID, getLCP, getTTFB, getFCP }) => {
    getCLS((metric) => {
      const webVitalMetric: WebVitalMetric = {
        name: 'CLS',
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        rating: getRating('CLS', metric.value),
      };
      onReport(webVitalMetric);
    });

    getFID((metric) => {
      const webVitalMetric: WebVitalMetric = {
        name: 'FID',
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        rating: getRating('FID', metric.value),
      };
      onReport(webVitalMetric);
    });

    getLCP((metric) => {
      const webVitalMetric: WebVitalMetric = {
        name: 'LCP',
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        rating: getRating('LCP', metric.value),
      };
      onReport(webVitalMetric);
    });

    getTTFB((metric) => {
      const webVitalMetric: WebVitalMetric = {
        name: 'TTFB',
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        rating: getRating('TTFB', metric.value),
      };
      onReport(webVitalMetric);
    });

    getFCP((metric) => {
      const webVitalMetric: WebVitalMetric = {
        name: 'FCP',
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        rating: getRating('FCP', metric.value),
      };
      onReport(webVitalMetric);
    });
  });
};

/**
 * To use this module, add the following to your main.tsx:
 * 
 * import { reportWebVitals } from './lib/web-vitals';
 * 
 * // Log web vitals to console in development
 * if (import.meta.env.DEV) {
 *   reportWebVitals(console.log);
 * }
 * 
 * // Or send to analytics in production
 * if (import.meta.env.PROD) {
 *   reportWebVitals((metric) => {
 *     // Send to Google Analytics, Mixpanel, etc.
 *     // Example for Google Analytics:
 *     window.gtag?.('event', metric.name, {
 *       value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
 *       metric_id: metric.id,
 *       metric_value: metric.value,
 *       metric_delta: metric.delta,
 *       metric_rating: metric.rating,
 *     });
 *   });
 * }
 */ 