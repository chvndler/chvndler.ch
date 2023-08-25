import * as React from 'react';

export interface MuxVideoProperties {
  name?: string;
  title: string;
  id: string;
  poster?: string;
  url?: string;
}

export interface OtherPagesProps {
  url: string;
  target?: string;
  type: string;
  title: string;
  content: string;
}

export interface ConnectTemplate {
  url: string;
  target?: string;
  type: string;
  title: string;
}

export interface ComponentBase {
  slug: string;
  title: string;
  excerpt: string;
  url: string;
  component: React.ComponentType<any>;
}
