import { FC, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./theme/ThemeContext";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import NotfoundPage from "./pages/NotfoundPage";
const App: FC = () => {
  const isBrowserDefaulDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("default-theme");
    const browserDefault = isBrowserDefaulDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());
  const basename = document.querySelector("base")?.getAttribute("href") ?? "/";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HashRouter basename={basename}>
        <div className={`theme-${theme}`}>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotfoundPage />} />
            </Routes>
          </Layout>
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  );
};

export default App;
