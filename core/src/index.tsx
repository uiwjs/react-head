import React, { PropsWithChildren, type FC } from 'react';
import { HeadElement } from './elements/HeadElement';

const Internal: FC<PropsWithChildren> = ({ children }) => children;
const Title: FC<React.HTMLAttributes<HTMLTitleElement>> = (props) => <HeadElement {...props} as="title" />;
const Meta: FC<React.MetaHTMLAttributes<HTMLMetaElement>> = (props) => <HeadElement {...props} as="meta" />;
const Link: FC<React.LinkHTMLAttributes<HTMLLinkElement>> = (props) => <HeadElement {...props} as="link" />;
const Base: FC<React.BaseHTMLAttributes<HTMLBaseElement>> = (props) => <HeadElement {...props} as="base" />;
const Style: FC<React.StyleHTMLAttributes<HTMLStyleElement>> = (props) => <HeadElement {...props} as="style" />;
const Script: FC<React.ScriptHTMLAttributes<HTMLScriptElement>> = (props) => <HeadElement {...props} as="script" />;

type InternalComponent = typeof Internal & {
  Meta: typeof Meta;
  Title: typeof Title;
  Link: typeof Link;
  Base: typeof Base;
  Style: typeof Style;
  Script: typeof Script;
};

const Head: InternalComponent = Internal as InternalComponent;
Head.Meta = Meta;
Head.Title = Title;
Head.Link = Link;
Head.Base = Base;
Head.Style = Style;
Head.Script = Script;

export default Head;
