import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyles";
import { lightTheme } from "./theme";


function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen></ReactQueryDevtools>
      </ThemeProvider>
    </>
  );
}

export default App;
