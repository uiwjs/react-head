import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Heade from '../core/src';

test('renders baseElement', () => {
  const { debug, baseElement } = render(
    <Heade>
      <Heade.Title>learn react</Heade.Title>
    </Heade>
  );
  expect(baseElement.innerHTML).toBe('<div></div>');
});
