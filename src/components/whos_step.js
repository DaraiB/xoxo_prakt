import React from "react";
import { useState, useEffectб, props  } from 'react';
import { Card } from 'antd';
// import '../App.css';
// import "../Style/main.css";
import {winner, xIsNext, squares, calculateWinner} from './game_cool';

const Whos_steps = (props) => {
    const { xIsNext } = props;
    let status =  (xIsNext ? 'X' : 'O');
    

    // const x = calculateWinner(squares);
    // let status;
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    // }
    
    return (
        <>
            
                <div style={{
                    width: 350,
                    height: 30,
                    // marginLeft: 30,
                    // marginTop: 30,
                    // marginTop: 200,
                    backgroundColor: "#373745",
                    borderRadius: "12px",
                    alignItems: 'center',
                    color: "red",
                    // justifyContent: 'center',
                    }}  class="parent">
                <div class="child" style={{
                    color: "red",
                    // justifyContent: 'center',
                    }}>
                    <span class= "bolno">Ходит {(status)} Пупкин Владлен</span>
                </div>
            </div>    
        </>
    );
};

export default Whos_steps;