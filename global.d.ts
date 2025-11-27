// global.d.ts
declare global {
  interface Window {
    [key: string]: any;
  }

  const window: Window & typeof globalThis;
  const document: Document;
  const localStorage: Storage;
  const IntersectionObserver: typeof globalThis.IntersectionObserver;
}
// global.d.ts

// IntersectionObserver type
interface IntersectionObserverEntry {
  readonly time: DOMHighResTimeStamp;
  readonly rootBounds: DOMRectReadOnly | null;
  readonly boundingClientRect: DOMRectReadOnly;
  readonly intersectionRect: DOMRectReadOnly;
  readonly isIntersecting: boolean;
  readonly intersectionRatio: number;
  readonly target: Element;
}

declare var IntersectionObserver: {
  prototype: IntersectionObserver;
  new (
    callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void,
    options?: IntersectionObserverInit
  ): IntersectionObserver;
};

// Optional: allow any property on window
interface Window {
  [key: string]: any;
}

// Export empty to make this a module
export {};

export {};
