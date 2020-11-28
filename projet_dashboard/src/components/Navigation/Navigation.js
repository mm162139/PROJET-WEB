import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return(
    <div class="sidebar"> 
    	<div class="id"> 
    		<div class="idContent"> 
	    		<img src="../../../public/therock.jpg" alt="logo PS5"/>
	    		<h3>SONY PS5</h3>
    		</div>
      	</div>

      	<div classname="navigation">
      		<ul> 
      			<li>
	      			<NavLink exact to="/" activeClassName= "navActive">
		      			<span>Home</span>
		      		</NavLink>
	      		</li>
	      		<li>
	      			<NavLink exact to="/Admin" activeClassName= "navActive">
		      			<span>Admin</span>
		      		</NavLink>
	      		</li>
		      		
      		</ul>
      		<div class="signature">
      			<p>HYSENI-MENARD-POPIELSKI</p>
      		</div>
      	</div>

    </div>
    );

};

export default Navigation;