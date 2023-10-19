import React, { type ElementType, type ComponentPropsWithoutRef, useMemo } from 'react';
import { createPortal } from 'react-dom';

export const HeadElement = <T extends ElementType<any> = 'link'>(props: { as?: T } & ComponentPropsWithoutRef<T>) => {
  const { as: Com = 'link', ...other } = props;
  const reset = other as ComponentPropsWithoutRef<T>;
  const comp = <Com data-head={true} {...reset} />;

  useMemo(() => {
    const name = props.name;
    let selecter = '';
    if (props.as && /(base|title)/.test(props.as as string)) {
      selecter = `${props.as}:not([data-head])`;
    }
    if (props.as === 'meta' && name) {
      selecter = `meta[name="${name}"]:not([data-head])`;
    }
    if (props.as === 'meta' && props.charSet) {
      selecter = `meta[charset]:not([data-head])`;
    }
    if (selecter) {
      const dom = document.querySelector(selecter);
      dom?.remove();
    }
  }, []);
  return createPortal(comp, document.head);
};
