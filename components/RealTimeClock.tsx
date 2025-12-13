'use client'; 

import { useEffect, useState } from 'react';

const RealTimeClock = () => {
  
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  
  useEffect(() => {
    
    const updateTime = () => {
      
      const now = new Date();
      
      
      const newTime = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
      });
      
    
      const newDate = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

      setTime(newTime);
      setDate(newDate);
    };

    
    updateTime();

    
    const timer = setInterval(updateTime, 60000); 

    
    return () => clearInterval(timer);
  }, []);

  
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
      <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
    </div>
  );
};

export default RealTimeClock;