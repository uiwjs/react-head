import React, { type ElementType, type ComponentPropsWithoutRef, useMemo } from 'react';
import { createPortal } from 'react-dom';

export const HeadElement = <T extends ElementType<any> = 'link'>(props: { as?: T } & ComponentPropsWithoutRef<T>) => {
  const { as: Com = 'link', ...other } = props;
  const reset = other as ComponentPropsWithoutRef<T>;
  const comp = <Com data-head={true} {...reset} />;

  useMemo(() => {
    const name = props.name;
    let selector = '';
    if (props.as && /(base|title)/.test(props.as as string)) {
      selector = `${props.as}:not([data-head])`;
    }
    if (props.as === 'meta' && name) {
      selector = `meta[name="${name}"]:not([data-head])`;
    }
    if (props.as === 'meta' && props.charSet) {
      selector = `meta[charset]:not([data-head])`;
    }
    if (props.as === 'link' && props.rel == 'icon') {
      selector = `link[rel="icon"]:not([data-head])`;
    }
    if (selector) {
      const dom = document.querySelector(selector);
      dom?.remove();
    }
  }, []);
  return createPortal(comp, document.head);
};
