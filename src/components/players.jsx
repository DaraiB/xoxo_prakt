import React from "react";
import { useState, useEffect  } from 'react';
import { Card } from 'antd';
import '../App.css';

const Players_card = () => {

    
    
    return (
        <>
            <Card
                title="Игроки"
                bordered={false}
                style={{
                width: 350,
                height: 180,
                marginLeft: 30,
                marginTop: 30,
                }}
            >
                <div>
                    <p>Пупкин Владлен Игоревич</p>
                    <p>Процент побед</p>
                </div>
                <p></p>
                <div>
                    <p>Плюшкина Екатерина Викторовна</p>
                    <p>Процент побед</p>
                </div>
            </Card>
        </>
    );
};

export default Players_card;