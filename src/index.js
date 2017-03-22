import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ItemList from './components/ItemList';

const store = configureStore();
const app = document.getElementById("app");

render(<Provider store={store}>
            <ItemList />
        </Provider>, app);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React from "react";
// import {render} from "react-dom";
// import ItemList from "./components/ItemList";

// const app = document.getElementById("app");

// render(<ItemList />, app);