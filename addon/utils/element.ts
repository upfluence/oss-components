export type OverflowDirection = 'horizontal' | 'vertical';

export function hasOverflow(element: HTMLElement, direction: OverflowDirection = 'horizontal'): boolean {
  if (!Array.from(element.children).length) {
    switch (direction) {
      case 'horizontal':
        return element.offsetWidth < element.scrollWidth;
      case 'vertical':
        return element.offsetHeight < element.scrollHeight;
    }
  }

  return Array.from(element.children).some((child: Element) => {
    return hasOverflow(child as HTMLElement, direction);
  });
}
