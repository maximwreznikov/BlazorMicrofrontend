import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

declare global {
    interface Window {
        renderPSApp:Function; 
    }
}



if (!process.env.PRODUCTION) {
    ReactDOM.render(<App/>, document.getElementById("react-app"));
}
else {
    window.renderPSApp = () => {
        ReactDOM.render(<App/>, document.getElementById("react-app"));
    };
}

