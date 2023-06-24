import React from 'react';

type GridItemProps = {
  index: number;
  item: string;
};

const GridLayout = ({ item }: { item: string }) => {
  const gridItems = [
    'ARCHT _ 050',
    'ARCHT _ 049',
    'ARCHT _ 048',
    'ARCHT _ 047',
    'ARCHT _ 046',
    'ARCHT _ 045',
    'ARCHT _ 044',
    'ARCHT _ 043',
    'ARCHT _ 042',
    'ARCHT _ 041',
    'ARCHT _ 040',
    'ARCHT _ 039',
    'ARCHT _ 038',
    'ARCHT _ 037',
    'ARCHT _ 036',
    'ARCHT _ 035',
    'ARCHT _ 034',
    'ARCHT _ 033',
    'ARCHT _ 032',
    'ARCHT _ 031',
    'ARCHT _ 030',
    'ARCHT _ 029',
    'ARCHT _ 028',
    'ARCHT _ 027',
    'ARCHT _ 026',
    'ARCHT _ 025',
    'ARCHT _ 024',
    'ARCHT _ 023',
    'ARCHT _ 022',
    'ARCHT _ 021',
    'ARCHT _ 020',
    'ARCHT _ 019',
    'ARCHT _ 018',
    'ARCHT _ 017',
    'ARCHT _ 016',
    'ARCHT _ 015',
    'ARCHT _ 014',
    'ARCHT _ 013',
    'ARCHT _ 012',
    'ARCHT _ 011',
    'ARCHT _ 010',
    'ARCHT _ 009',
    'ARCHT _ 008',
    'ARCHT _ 007',
    'ARCHT _ 006',
    'ARCHT _ 005',
    'ARCHT _ 004',
    'ARCHT _ 003',
    'ARCHT _ 002',
    'ARCHT _ 001',
  ];

  return (
    <div className='grid-layout'>
      {gridItems.map((item, index: number) => (
        <div
          key={index}
          className={`grid-item ${
            index === 2 ||
            index === 9 ||
            index === 13 ||
            index === 18 ||
            index === 21 ||
            index === 24 ||
            index === 31
              ? 'span-2'
              : index === 2 ||
                index === 4 ||
                index === 16 ||
                index === 20 ||
                index === 23 ||
                index === 30
              ? 'span-3'
              : 'grid-item-'.concat(index.toString())
          }`}
        >
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
};

export { GridLayout };
