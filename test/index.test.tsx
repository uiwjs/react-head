import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-environment-jsdom';
import React from 'react';
import Head from '../core/src';

test('renders baseElement', () => {
  const { baseElement } = render(
    <Head>
      <Head.Title>learn react</Head.Title>
    </Head>
  );
  expect(baseElement.innerHTML).toBe('<div></div>');
});

it('renders the correct content in <title> tag', () => {
  const { getByTestId } = render(
    <Head>
      <Head.Title data-testid="title-meta">learn react</Head.Title>
    </Head>,
    {
      container: document.head
    }
  );

  const metaElement = getByTestId('title-meta');
  expect(metaElement).toBeInTheDocument();
  expect(metaElement.tagName).toBe('TITLE');
  expect(metaElement.getAttribute('data-head')).toBe('true');
});

it('renders the correct content in <meta name="keywords"> tag', () => {
  const { getByTestId } = render(
    <Head>
      <Head.Meta data-testid="keywords-meta" name="keywords" content="react-head,uiw,uiwjs" />
    </Head>,
    {
      container: document.head
    }
  );
  const metaElement = getByTestId('keywords-meta');
  expect(metaElement).toBeInTheDocument();
  expect(metaElement.tagName).toBe('META');
  expect(metaElement.getAttribute('data-head')).toBe('true');
  expect(metaElement.getAttribute('content')).toBe('react-head,uiw,uiwjs');
});

it('renders the correct content in <meta charSet=""> tag', () => {
  const { getByTestId } = render(
    <Head>
      <Head.Meta data-testid="charset-meta" charSet="utf-8" />
    </Head>,
    {
      container: document.head
    }
  );
  const metaElement = getByTestId('charset-meta');
  expect(metaElement).toBeInTheDocument();
  expect(metaElement.tagName).toBe('META');
  expect(metaElement.getAttribute('data-head')).toBe('true');
  expect(metaElement.getAttribute('charset')).toBe('utf-8');
});

it('renders the correct content in <link> tag', () => {
  const { getByTestId } = render(
    <Head>
      <Head.Link data-testid="rel-meta" rel="canonical" href="https://uiwjs.github.io" />
    </Head>,
    {
      container: document.head
    }
  );
  const metaElement = getByTestId('rel-meta');
  expect(metaElement).toBeInTheDocument();
  expect(metaElement.tagName).toBe('LINK');
  expect(metaElement.getAttribute('data-head')).toBe('true');
  expect(metaElement.getAttribute('rel')).toBe('canonical');
});

it('renders the correct content in <base> tag', () => {
  const { getByTestId } = render(
    <Head>
      <Head.Base data-testid="base-meta" target="_blank" />
    </Head>,
    {
      container: document.head
    }
  );
  const metaElement = getByTestId('base-meta');
  expect(metaElement).toBeInTheDocument();
  expect(metaElement.tagName).toBe('BASE');
  expect(metaElement.getAttribute('data-head')).toBe('true');
  expect(metaElement.getAttribute('target')).toBe('_blank');
});

it('renders the correct content in <style> tag', () => {
  const css = `.box-test { color: red; }`
  const { getByTestId } = render(
    <Head>
      <Head.Style data-testid="style-meta">
        {css}
      </Head.Style>
    </Head>,
    {
      container: document.head
    }
  );
  const metaElement = getByTestId('style-meta');
  expect(metaElement).toBeInTheDocument();
  expect(metaElement.tagName).toBe('STYLE');
  expect(metaElement.getAttribute('data-head')).toBe('true');
  expect(metaElement.innerHTML).toBe(css);
});

it('renders the correct content in <script> tag', () => {
  const css = `console.log('test')`
  const { getByTestId } = render(
    <Head>
      <Head.Script data-testid="script-meta">
        {css}
      </Head.Script>
    </Head>,
    {
      container: document.head
    }
  );
  const metaElement = getByTestId('script-meta');
  expect(metaElement).toBeInTheDocument();
  expect(metaElement.tagName).toBe('SCRIPT');
  expect(metaElement.getAttribute('data-head')).toBe('true');
  expect(metaElement.innerHTML).toBe(css);
});