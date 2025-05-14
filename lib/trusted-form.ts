/**
 * TrustedForm utility to safely load the TrustedForm script only once per page
 */

// Global variable to track if TrustedForm has been loaded
let trustedFormLoaded = false;

// Enable debug mode for TrustedForm
const DEBUG = true;

/**
 * Loads the TrustedForm script if it hasn't been loaded yet
 * This function ensures the script is only loaded once per page
 */
export function loadTrustedFormScript(): void {
  // If the script is already loaded, don't load it again
  if (trustedFormLoaded) {
    if (DEBUG) console.log('[TrustedForm Debug] Script already loaded, skipping');
    return;
  }

  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return;
  }

  // Check if the script is already in the DOM
  const existingScript = document.querySelector('script[src*="trustedform.js"]');
  if (existingScript) {
    if (DEBUG) console.log('[TrustedForm Debug] Script already in DOM, skipping');
    trustedFormLoaded = true;
    return;
  }
  
  if (DEBUG) console.log('[TrustedForm Debug] Loading script...');

  try {
    // Create and append the TrustedForm script
    const tf = document.createElement('script');
    tf.type = 'text/javascript';
    tf.async = true;
    tf.src = 'https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
      new Date().getTime() + Math.random();
    
    // Add a unique ID to identify this script
    tf.id = 'trustedform-script-' + Math.random().toString(36).substring(2, 9);
    
    // Add a data attribute to mark this as loaded by our utility
    tf.setAttribute('data-loaded-by', 'trusted-form-utility');
    
    // Add the script to the DOM
    const s = document.getElementsByTagName('script')[0];
    if (s && s.parentNode) {
      s.parentNode.insertBefore(tf, s);
    } else {
      // Fallback if no script tag is found
      document.head.appendChild(tf);
    }
    
    // Add the tracking pixel
    const img = document.createElement('img');
    img.src = 'https://api.trustedform.com/ns.gif';
    img.style.display = 'none';
    document.body.appendChild(img);
    
    // Mark as loaded
    trustedFormLoaded = true;
    if (DEBUG) console.log('[TrustedForm Debug] Script loaded successfully');
    
    // Set up a MutationObserver to monitor when the certificate URL is populated
    if (DEBUG) {
      setTimeout(() => {
        const certUrlField = document.getElementById('xxTrustedFormCertUrl') as HTMLInputElement;
        if (certUrlField) {
          console.log('[TrustedForm Debug] Certificate field found:', certUrlField);
          console.log('[TrustedForm Debug] Current certificate value:', certUrlField.value);
          
          // Set up an interval to check for the certificate URL
          const checkInterval = setInterval(() => {
            if (certUrlField.value) {
              console.log('[TrustedForm Debug] Certificate URL generated:', certUrlField.value);
              clearInterval(checkInterval);
            }
          }, 1000);
          
          // Clear the interval after 10 seconds to avoid memory leaks
          setTimeout(() => clearInterval(checkInterval), 10000);
        } else {
          console.log('[TrustedForm Debug] Certificate field not found');
        }
      }, 2000);
    }
  } catch (error) {
    console.error('[TrustedForm Debug] Error loading script:', error);
  }
}

/**
 * Creates the hidden input field for TrustedForm
 * This should be called in each form where TrustedForm is needed
 */
export function createTrustedFormField(): HTMLInputElement {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.id = 'xxTrustedFormCertUrl';
  input.name = 'xxTrustedFormCertUrl';
  return input;
}
