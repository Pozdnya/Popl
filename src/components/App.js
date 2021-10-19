import { ThemeProvider } from "@material-ui/core";
import Theme from "./ui/Theme";
import Wrapper from "./ui/Wrapper/Wrapper";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper />
    </ThemeProvider>
  );
}

export default App;
