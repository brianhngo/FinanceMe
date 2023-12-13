import React from 'react';

import Transactions from './Transactions';
import MonthlyBreakdown from './MonthlyBreakdown';
export default function LeftContent({ uid }): React.FC {
  return (
    <section className="w-full h-full grid grid-rows-1 md:grid-rows-3 gap-4">
      <div className="row-span-1 md:row-span-1">
        <MonthlyBreakdown uid={uid} />
      </div>
      <div className="row-span-1 md:row-span-2 ">
        <Transactions uid={uid} />
      </div>
    </section>
  );
}
