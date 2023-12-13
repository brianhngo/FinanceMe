import React from 'react';
import TestContent from './TestContent';
import CashFlow from './CashFlow';
import AmountSaved from './AmountSaved';
import UpcomingBills from './UpcomingBills';
export default function RightContent() {
  return (
    <div className="w-full h-full grid grid-rows-1 md:grid-rows-5">
      <div className="row-span-1 md:row-span-2">
        <TestContent />
      </div>
      <div className="row-span-1 md:row-span-1">
        <CashFlow />
      </div>
      <div className="row-span-1 md:row-span-1">
        <AmountSaved />
      </div>
      <div className="row-span-1 md:row-span-1">
        <UpcomingBills />
      </div>
    </div>
  );
}
