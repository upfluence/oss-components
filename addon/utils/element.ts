export function hasOverflow(element: HTMLElement): boolean {
  if (!Array.from(element.children).length) {
    return element.offsetWidth < element.scrollWidth;
  }

  return Array.from(element.children).some((child: HTMLElement) => {
    return hasOverflow(child);
  });
}
