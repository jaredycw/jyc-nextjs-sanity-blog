 "use client"
import React, { useState, useEffect } from 'react';


export default function RandomItemDisplay({ items }: any){
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const maxIndex = items.length - 1;
    const index = Math.floor(Math.random() * (maxIndex + 1));
    setRandomIndex(index);
  }, [items]);

  return (
     <div>
      {randomIndex !== null && (
        <div key={items.id} className="motto-wrapper">
          <div className="motto-upper">{items[randomIndex].blackWording}</div>
          <div className="motto-capper">{items[randomIndex].greyWording}</div>
        </div>
        
      )}
    </div>
  );
}