import React from 'react';

export default function InteractiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section id='ui-gallery'>{children}</section>;
}
