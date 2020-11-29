import React, {useState, useEffect} from 'react';
import './Nav.css'

function Nav(){

	const [show, handleShow] = useState(false);

	useEffect(()=>{
		window.addEventListener("scroll",()=>{
			if (window.scrollY > 100){
				handleShow(true);
			} else handleShow(false);
		});

		return ()=>{
			window.removeEventListener("scroll");
		};
	}, []);

	return(

	  <div className={`Nav ${show && "nav-black"}`}>

	  <img 
	  className='logo'
	  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
	  
	    <img 
	  className='avatar'
	  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP2K11ufxDe63Xydx2v0GbO5wzzvxFl9juw&usqp=CAU" alt="Avatar"/>

	  </div>


	)
}

export default Nav;