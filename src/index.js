import React from "react";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, hashHistory } from "react-router";

import "./website/index.css";
import "react-select/dist/react-select.css";

import App from "./website/App";
import Intro from "./website/intro/Intro";

// Examples
import Form from "./website/examples/FormExample";
import Dynamic from "./website/examples/DynamicExample";
import List from "./website/examples/ListExample";
import KeyValue from "./website/examples/KeyValueExample";
import Errors from "./website/examples/ErrorExample";

// Tests
import TextEditTest from "./website/tests/TextEditTests";
import ChooserTest from "./website/tests/ChooserTests";

import API from "./website/API";

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Intro} />
                <Route path="example/contact" component={Form} />
                <Route path="example/dynamic" component={Dynamic} />
                <Route path="example/list" component={List} />
                <Route path="example/keyvalue" component={KeyValue} />
                <Route path="example/errors" component={Errors} />
                <Route path="test/textedit" component={TextEditTest} />
                <Route path="test/chooser" component={ChooserTest} />
                <Route path="api/:component" component={API} />
            </Route>
        </Router>
    ),
    document.getElementById("root")
);
