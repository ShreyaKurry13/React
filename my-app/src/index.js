import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import projectRoute from './projectRoute';

// console.log(React);
// console.log(ReactDOM);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);

// root.render('Hello world');

// var username = "Shreya!";

// root.render(
//     <>
//     <h1>Hello {username}😜!!!</h1>
//     <hr/>
//     <h2>Hello {username}</h2>
//     </>
// );

root.render( projectRoute );