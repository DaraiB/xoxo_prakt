import React, { Component, useState }  from 'react';
// import React, {  } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import React from 'react';
import Timer from './components/timer';
import Game_cool from './components/game_cool';
import { Card } from 'antd';
import Players_card from './components/players';
import { Button, Row, Col, message } from 'antd';
// import Whos_steps from './components/whos_step';


function App() {
	const [isTimerActive, setIsTimerActive] = useState(false);
	
	// let items = [
	// 	[ 'x', 'x', 'x'],
	// 	['x', 'x', 'x'],
	// 	['x', 'x', 'x'],
	// 	];
	// 	console.log(items[0][0]); // 1
	// 	console.log(items[1][1]); // 5
	// 	console.log(items[2][2]); // 9
	// 	console.log(items[1][2]); // 8
	// 	console.log(items);

	// 	let item00 = items[0][0]; // 1
	// 	let item01 = items[0][1]; //2
	// 	let item02 = items[0][2]; //3
	// 	let item10 = items[1][0]; //4
	// 	let item11 = items[1][1]; //5
	// 	let item12 = items[1][2]; //6
	// 	let item20 = items[2][0]; //7
	// 	let item21 = items[2][1]; //8
	// 	let item22 = items[2][2]; //9
		
		const [currentPlayer, setCurrentPlayer] = useState('x');

		const handleButtonClick = (e) => {
		  const currentValue = e.target.textContent;
		  if (currentValue === 'x' || currentValue === 'o') {
			return;
		  }
	  
		  if (currentPlayer === 'x') {
			e.target.textContent = 'x';
			setCurrentPlayer('o');
		  } else {
			e.target.textContent = 'o';
			setCurrentPlayer('x');
		  }
		};

		
	return (
		<>
		<React.Fragment>
		<div style={{
			height: '100vh',
			width: '100wh',	
			display: "flex",
			flexDirection: 'column'
		}}>
			<Navbar/>
			<div style={{
				display: 'flex',
				flexGrow: 1,
				position: 'inherit'
			}}>
				<div style={{
					display: "flex",
					position: 'absolute'
				}}>
					<Players_card></Players_card>
				</div>
				<div style={{
					flexGrow: 1,
				}}
				>
					<div style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',						
					}}>
						<Timer key={isTimerActive} activate={isTimerActive}></Timer>
					</div>
					<div style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
						<Game_cool
							onGameStart={()=>setIsTimerActive(true)}
							onGameStop={()=>setIsTimerActive(false)}
						>
						</Game_cool>
					</div>
				</div>
			</div>
		</div>
			{/* <p>ТИПО ИГРА ТУТ</p>
			<p>{item00}|{item01}|{item02}</p>
			<p>___</p>
			<p>{item10}|{item11}|{item12}</p>
			<p>___</p>
			<p>{item20}|{item21}|{item22}</p>


			<div>
				<p>
					<button className='btn_xo' onClick={handleButtonClick}>	AAA </button>
				<p>|</p>
					<button className='btn_xo' onClick={handleButtonClick}> AAA</button>
				<p>|</p>
					<button className='btn_xo' onClick={handleButtonClick}> AAA</button>
			</p>
    		</div> */}

		</React.Fragment>

		</>
	);

};

export default App;


// //ахуеть это компонент App
// export default class App extends Component{
//   constructor(props){
//     super(props);
//     // this.data=initialData;
//     };
  


//   //а это метод если шо
//   render(){
//     return(
//       // <div> 
//       //   <nav className="navbar is-white is-fixed-top "> 
//       //     <div className="navbar-brand">
//       //       <span className='navbar-item is-uppercase '>
//       //         ХОХО
//       //       </span>
//       //     </div>
            
//       //     {/* <div className='center'> */}
//       //       <a class="navbar-item">
//       //         Игровое поле
//       //       </a>

//       //       <a class="navbar-item">
//       //         Рейтинг
//       //       </a>

//       //       <a class="navbar-item">
//       //         Активные игроки
//       //       </a>

//       //       <a class="navbar-item">
//       //         История игр
//       //       </a>

//       //       <a class="navbar-item">
//       //         Список игроков
//       //       </a>
//       //     {/* </div>   */}
//       //   </nav>


//         <main className="content px-6 mt-6">
//           <h1> Крестики нолики</h1>

//         </main>

//       // </div>
//     );
//   }
// 

