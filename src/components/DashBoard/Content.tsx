import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

export default function Content({ uid }): React.FC {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 md:col-span-1 border border-r-black bg-pink-100">
        <LeftContent uid={uid} />
      </div>
      <div className="col-span-2 md:col-span-2">
        <RightContent uid={uid} />
      </div>
    </div>
  );
}
