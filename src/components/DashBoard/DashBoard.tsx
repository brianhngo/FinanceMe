import React from 'react';
import SideBar from './SideBar';
import Content from './Content';

export default function DashBoard() {
  return (
    <section className="flex w-screen h-screen">
      <div className="w-64">
        <SideBar />
      </div>
      <div className="flex-grow">
        <Content />
      </div>
    </section>
  );
}
