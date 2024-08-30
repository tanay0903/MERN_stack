import React from 'react'
import CountRestaurant from './CountRestaurant'
import Restaurant from './Restaurant'
// import Menu from './Menu';

export default function Home() {
  return (
    <div>
      <CountRestaurant/>
      <section>
        <div className="sort">
          <button className="sort_veg p-3">Pure Veg</button>
          <button className="sort_rev p-3">Sort By Review</button>
          <button className="sort_rate p-3">Sort By Rating</button>
        </div>
        <div className="row mt-4">
          <Restaurant/>
          <Restaurant/>
          <Restaurant/>
          <Restaurant/>
          <Restaurant/>
          <Restaurant/>
          <Restaurant/>
          <Restaurant/>
        </div>
        
      </section>
    </div>
  );
}
