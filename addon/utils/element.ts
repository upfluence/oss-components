export function hasOverflow(element: HTMLElement): boolean {
  if (!Array.from(element.children).length) {
    return element.offsetWidth < element.scrollWidth;
  }

  return Array.from(element.children).some((child: Element) => {
    return hasOverflow(child as HTMLElement);
  });
}
