import React from "react";
import ReactDOM from "react-dom";
import App from './App';

window.renderLSApp = () => {
    const domElement =
        document.getElementById("react-app") ||
        document.querySelector("#react-app");

    if (domElement) {
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            domElement);
    }
};