let scrollLockedCount = 0;

export function lockBodyScroll() {
  if (scrollLockedCount === 0) {
    document.body.style.overflow = "hidden";
  }
  scrollLockedCount++;
}

export function unlockBodyScroll() {
  scrollLockedCount = Math.max(0, scrollLockedCount - 1);
  if (scrollLockedCount === 0) {
    document.body.style.overflow = "";
  }
}