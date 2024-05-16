import { useRef } from "react";

import "../Style/main.css";
import "../pictures/logo.jpg";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>

            <div className="navbar-brand">

			<div class="navbar-item"><img
                className="small"
                src="xoxo.png"
                alt="no image" style={{height: '20px',}}
                /></div>


            </div>

			<nav ref={navRef}>
				<a class="navbar-item" href="/#">Игровое поле</a>
				<a class="navbar-item" href="/#">Рейтинг</a>
				<a class="navbar-item" href="/#">Активные игроки</a>
				<a class="navbar-item" href="/#">История игр</a>
                <a class="navbar-item" href="/#">Список игроков</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
			</button>
		</header>
	);
}

export default Navbar;