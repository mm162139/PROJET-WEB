import React from 'react';
import Navigation from '../components/Navigation';
import Widget1 from '../components/widget1';
import Widget2 from '../components/widget2';
import'../styles/styles.css';

const Home = () => {
  return(
    <div class="home">
      <Navigation />
      <div class="homecontent">
      	<div class="content">
      		<h1>Home </h1>
      		<Widget1/>
      		<Widget2/>

      	</div>
      </div>
    </div>
    );

};

export default Home;