/**
 * Number of active scroll locks on the document body.
 * Used to handle multiple components requesting scroll lock.
 * When the count is greater than 0, body scroll stays locked.
 */
let scrollLockedCount = 0;

/**
 * Locks the scroll of the <body> element.
 * Only sets `overflow: hidden` if this is the first lock.
 */
export function lockBodyScroll() {
  if (scrollLockedCount === 0) {
    document.body.style.overflow = "hidden";
  }
  scrollLockedCount++;
}

/**
 * Unlocks the scroll of the <body> element.
 * Only removes the lock (resets overflow) when all locks are released.
 */
export function unlockBodyScroll() {
  scrollLockedCount = Math.max(0, scrollLockedCount - 1);
  if (scrollLockedCount === 0) {
    document.body.style.overflow = "";
  }
}

/**
 * Checks if the body scroll is currently locked.
 * @returns {boolean} `true` if scroll is locked, `false` otherwise.
 */
export function isBodyScrollLocked() {
  return scrollLockedCount > 0;
}