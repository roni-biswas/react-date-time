import React , { useEffect, useState } from 'react';
import './DateTime.css';

function DateTime() {

    const [currentTime, setTime] = useState('');

    

    const today = new Date();
    const date = today.toLocaleDateString();
    const currentDate = date.replaceAll('/', '-');

    useEffect(() => {
        const time = setInterval(() => {
          setTime(() => {
              return (new Date().toLocaleTimeString());
          });
        }, 1000);
    
        return () => {
          clearInterval(time);
        };

      }, []);
    
    let curDate = today.getHours();
    let greeting = '';
    const cssColor = {};

    if( curDate >= 1 && curDate < 12)
    {
        greeting = 'Good Morning';
        cssColor.color = 'green';
    }
    else if( curDate >= 12 && curDate < 18)
    {
        greeting = 'Good Afternoon';
        cssColor.color = 'orange';
    }
    else if( curDate >= 18 && curDate < 21)
    {
        greeting = 'Good Evening';
        cssColor.color = 'midnightblue';
    }
    else 
    {
        greeting = 'Good Night';
        cssColor.color = 'black';
    }
    


  return (
    <div className='dateTime'>
      <div className="show__date__time">
          <p>Current Date is : { currentDate }</p>     
          <p>Current Time is : { currentTime }</p>     
      </div>
      <div className="day__wish">
          <h1>
              Hello Everybody,
                <span style={cssColor}>{greeting}</span>
          </h1>
      </div>
    </div>
  )
}

export default DateTime
