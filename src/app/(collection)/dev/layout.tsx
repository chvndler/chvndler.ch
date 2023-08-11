import React from 'react';

export default function FullWidthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='flex w-full flex-col md:flex-row'>{children}</div>;
}

/*
<div class="w-full flex flex-col md:flex-row">
  <div class="md:w-1/2 p-4">
    <!-- Insert content here -->
    <p>This is column 1.</p>
  </div>
  <div class="md:w-1/2 p-4">
    <!-- Insert content here -->
    <p>This is column 2.</p>
  </div>
</div>

*/
