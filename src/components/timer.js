import React from "react";
import { useState, useEffect  } from 'react';

const Timer = ({activate = false}) => {
    const [seconds, setSeconds] = useState(0);
    const [menut, setMenut] = useState(0);
    const [isActive, setIsActive] = useState(activate);
    const [interval, setIntervalState] = useState(null);

    function toggle() {
        // if (isActive ){
        //     reset();
        // }
        // if (!isActive ){
        //     start();
        // }
        if(isActive)
            reset()
        else
            setIsActive(!isActive);
    }

    function reset() {
        // stopp();
        clearInterval(interval)
        setSeconds(0);
        setMenut(0);
        setIsActive(false);
    }

    useEffect(() => {
        console.log(isActive);
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds >= 59) {
                    setMenut(menut => menut + 1);
                    setSeconds(0);
                } else {
                    setSeconds(seconds => seconds + 1);
                }
            }, 1000);
            setIntervalState(interval)
        } else {
            clearInterval(interval);
            reset()
        }
        return () => clearInterval(interval);
    }, [isActive, menut, seconds]);
    
    
    
    return (
        <>
        <div key={isActive} style={{ 
        justifyContent: 'center',
        }}>
        <div style={{ 
            width: 180, 
            height: 80, 
            // margin: "50px auto", 
            textAlign: "center",
            // paddingTop: 30,
            fontSize: 50,
            backgroundColor: "#ededed",
            borderRadius: "12px",
            marginTop: 30,
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <p style={{ 
                paddingTop: 10,
                fontSize: 50,
            }}>
                {menut}  {seconds}
            </p>
        </div>
            <div className="row">
                    <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Пауза' : 'Начать игру'}
                    </button>

            </div> 

        </div>
        {/* <button style={{backgroundColor: "red",}} className="button" onClick={reset}>
                    <p >Reset</p>
                    </button> */}
        </>
    );
};

export default Timer;