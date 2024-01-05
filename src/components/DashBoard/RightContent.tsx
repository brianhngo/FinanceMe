import React from 'react';
import TestContent from './TestContent';
import MonthlyTrends from './MonthlyTrends';
import AmountSaved from './AmountSaved';
import UpcomingBills from './UpcomingBills';
export default function RightContent({ uid }) {
  return (
    <div className="w-full h-full grid grid-rows-4  md:grid-rows-5">
      <div
        className="row-span-1 md:row-span-2"
        onClick={(e) => {
          e.preventDefault();
        }}>
        <TestContent userIdentifer={uid} />
      </div>
      <div
        className="row-span-1 mt-3 md:row-span-1"
        onClick={(e) => {
          e.preventDefault();
        }}>
        <MonthlyTrends userIdentifer={uid} />
      </div>
      <div
        className="row-span-1 mt-3 md:row-span-1"
        onClick={(e) => {
          e.preventDefault();
        }}>
        <AmountSaved userIdentifer={uid} />
      </div>
      <div
        className="row-span-1 mt-3 md:row-span-1"
        onClick={(e) => {
          e.preventDefault();
        }}>
        <UpcomingBills userIdentifer={uid} />
      </div>
    </div>
  );
}
