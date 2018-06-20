/*//console.log("hello");
import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};
ReactDOM.render(<Index />, document.getElementById("index"));
*/

import React from 'react';
import ReactDOM from 'react-dom';

//import registerServiceWorker from 'registerServiceWorker';
import Home from './components/home/Home.jsx';

ReactDOM.render(<Home />, document.getElementById('index'));
//registerServiceWorker();