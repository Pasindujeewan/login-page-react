import LoginPage from "./pages/LoginPage";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
