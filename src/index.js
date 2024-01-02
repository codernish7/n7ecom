import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppContxtProvider } from "./context/ProductContext";
import { FilterProviderFn } from "./context/filterContext";
import { CartProviderFn } from "./context/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<AppContxtProvider>
    <FilterProviderFn>
        <CartProviderFn>
            <App />
        </CartProviderFn>
    </FilterProviderFn>
</AppContxtProvider>);


reportWebVitals();
