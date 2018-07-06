import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Action from './components/action';
import MainApp from './components/mainApp';
import 'normalize.css/normalize.css';
import './assets/styles.scss';

const Layout =(props)=>{
    return (
        <div>
        <Header/>
        {props.children}
        </div>
    ); 
};


ReactDOM.render((<Layout>
	<MainApp/>
	</Layout>),document.getElementById('app')); 

