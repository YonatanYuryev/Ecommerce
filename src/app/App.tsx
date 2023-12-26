import "./styles/index.scss";
import { FC } from "react";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { Toggle } from "shared/ui/toggle";

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme}>
      <Toggle size="large" status="on" />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
