/**
 * TrustedForm utility to safely load the TrustedForm script only once per page
 */

// Global variable to track if TrustedForm has been loaded
let trustedFormLoaded = false;

/**
 * Loads the TrustedForm script if it hasn't been loaded yet
 * This function ensures the script is only loaded once per page
 */
export function loadTrustedFormScript(): void {
  // If the script is already loaded, don't load it again
  if (trustedFormLoaded) {
    console.log('TrustedForm script already loaded, skipping');
    return;
  }

  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return;
  }

  // Check if the script is already in the DOM
  const existingScript = document.querySelector('script[src*="trustedform.js"]');
  if (existingScript) {
    console.log('TrustedForm script already in DOM, skipping');
    trustedFormLoaded = true;
    return;
  }

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
    console.log('TrustedForm script loaded successfully');
  } catch (error) {
    console.error('Error loading TrustedForm script:', error);
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
