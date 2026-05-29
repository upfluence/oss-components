export type OverflowDirection = 'horizontal' | 'vertical';

export function hasOverflow(element: HTMLElement, direction: OverflowDirection = 'horizontal'): boolean {
  if (!Array.from(element.children).length) {
    return direction === 'horizontal'
      ? element.offsetWidth < element.scrollWidth
      : element.offsetHeight < element.scrollHeight;
  }

  return Array.from(element.children).some((child: Element) => {
    return hasOverflow(child as HTMLElement, direction);
  });
}
