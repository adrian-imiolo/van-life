import React, { useEffect, useState } from "react";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div className="van_item" key={van.id}>
      <img src={van.imageUrl} />
      <div className="van_info">
        <div>
          <h3>{van.name}</h3>
          <p className={`van_style ${van.type}`}>
            {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
          </p>
        </div>
        <div className="van_price">
          <h3>${van.price}</h3>
          <span>/day</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="van_main">
      <h3>Explore our van options</h3>
      <div className="filters">
        <button className="van_type">Simple</button>
        <button className="van_type">Luxury</button>
        <button className="van_type">Rugged</button>
        <button className="clear_filter">Clear filters</button>
      </div>
      <div className="van_items_container">{vanElements}</div>
    </div>
  );
}
