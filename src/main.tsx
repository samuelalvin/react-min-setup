import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./app/app"

const main = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(
    main,
    document.getElementById("main")
);