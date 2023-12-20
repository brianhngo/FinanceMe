import React from 'react';
import TestContent from './TestContent';
import MonthlyTrends from './MonthlyTrends';
import AmountSaved from './AmountSaved';
import UpcomingBills from './UpcomingBills';
export default function RightContent({ uid }) {
  return (
    <div className="w-full h-full grid grid-rows-1 md:grid-rows-5">
      <div className="row-span-1 md:row-span-2">
        <TestContent userIdentifer={uid} />
      </div>
      <div className="row-span-1 md:row-span-1">
        <MonthlyTrends userIdentifer={uid} />
      </div>
      <div className="row-span-1 md:row-span-1">
        <AmountSaved userIdentifer={uid} />
      </div>
      <div className="row-span-1 md:row-span-1">
        <UpcomingBills />
      </div>
    </div>
  );
}
