import React from 'react';
import PieChart from './PieChart';
import Transactions from './Transactions';
export default function LeftContent({ uid }): React.FC {
  return (
    <section className="w-full h-full grid grid-rows-1 md:grid-rows-3 gap-4">
      <div className="row-span-1 md:row-span-1">
        <PieChart />
      </div>
      <div className="row-span-1 md:row-span-2 ">
        <Transactions uid={uid} />
      </div>
    </section>
  );
}
