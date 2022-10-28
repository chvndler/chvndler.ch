import * as React from 'react';

type CalloutProps = {
  title: string;
  children: React.ReactNode;
};

export const Callout = ({ title, children }: CalloutProps) => {
  return (
    <div className="callout">
      <div className="flex content">
        <div className="flex column">
          <strong>{title}</strong>
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
};
