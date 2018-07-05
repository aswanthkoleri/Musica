import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Action from './components/action';
import MainApp from './components/mainApp';
import 'normalize.css/normalize.css';
import './assets/styles.scss';

const Layout =(props)=>{
    return (
        <div>
        <Header/>
        {props.children}
        <Footer/>
        </div>
    ); 
};


ReactDOM.render((<Layout>
	<MainApp/>
	</Layout>),document.getElementById('app')); 

