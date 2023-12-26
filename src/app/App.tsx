import "./styles/index.scss";
import { FC, useState } from "react";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { Toggle } from "shared/ui/toggle";
import { classNames } from "shared/lib/classNames/classNames";

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [togglerState, setTogglerState] = useState<(string & "on") | "off">(
    "off"
  );
  const onClickToggle = () => {
    setTogglerState((prev) => (prev === "on" ? "off" : "on"));
    toggleTheme();
  };
  return (
    <div className={classNames('app', {}, [theme])}>
      <Toggle size="large" status={togglerState} onClick={onClickToggle} />
      <AppRouter />
    </div>
  );
};

export default App;
