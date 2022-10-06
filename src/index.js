import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, ComponentContainer } from "./styles/GlobalStyle";
import { theme } from "./styles/Theme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ComponentContainer>
        <Router />
      </ComponentContainer>
    </ThemeProvider>
  </Provider>
);
