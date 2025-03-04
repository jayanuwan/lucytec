import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { configureStore, Tuple } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../src/reducers";
import rootSaga from "../src/saga";
import { makeServer } from "../src/mock";

makeServer();

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
