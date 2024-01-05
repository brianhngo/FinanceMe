import React from 'react';

import Transactions from './Transactions';
import MonthlyBreakdown from './MonthlyBreakdown';
export default function LeftContent({ uid }): React.FC {
  return (
    <section className="w-full h-full  grid grid-rows-1 md:grid-rows-2  md:gap-[100px]">
      <div
        className="row-span-1  md:row-span-1"
        onClick={(e) => {
          e.preventDefault();
        }}>
        <MonthlyBreakdown uid={uid} />
      </div>
      <div
        className="row-span-1 md:row-span-1 "
        onClick={(e) => {
          e.preventDefault();
        }}>
        <Transactions uid={uid} />
      </div>
    </section>
  );
}
