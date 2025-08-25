/**
 * Utility functions for virtual keyboard handling
 */

/**
 * Check if the device supports visualViewport API
 */
export function supportsVisualViewport(): boolean {
  return typeof window !== 'undefined' && 'visualViewport' in window;
}

/**
 * Get the current viewport height
 */
export function getViewportHeight(): number {
  if (supportsVisualViewport()) {
    return window.visualViewport!.height;
  }
  return window.innerHeight;
}

/**
 * Check if the current device is mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth <= 1024;
}

/**
 * Safely add/remove body classes for virtual keyboard
 */
export function setBodyKeyboardClass(isOpen: boolean): void {
  if (typeof document === 'undefined') return;
  
  if (isOpen) {
    document.body.classList.add('keyboard-open');
  } else {
    document.body.classList.remove('keyboard-open');
  }
}

/**
 * Ensure proper viewport meta tag for mobile devices
 */
export function ensureViewportMetaTag(): void {
  if (typeof document === 'undefined') return;
  
  let viewportMeta = document.querySelector('meta[name="viewport"]');
  
  if (!viewportMeta) {
    viewportMeta = document.createElement('meta');
    viewportMeta.setAttribute('name', 'viewport');
    document.head.appendChild(viewportMeta);
  }
  
  // Set a mobile-friendly viewport
  const content = viewportMeta.getAttribute('content') || '';
  if (!content.includes('width=device-width')) {
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  }
}

/**
 * Scroll element into view when keyboard opens
 */
export function scrollElementIntoView(element: HTMLElement): void {
  if (!element) return;
  
  // Use a more reliable scroll method
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  });
}

/**
 * Debounce function to prevent excessive updates
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
