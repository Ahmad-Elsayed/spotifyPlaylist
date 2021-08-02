import React, { createContext, useState } from 'react';
import { ThemeContext } from '../../types';
import { Themes, themesColors } from './Themes';

const ThemingContext = createContext<ThemeContext>({
  colors: themesColors[Themes.light],
  changeColorTheme: () => {},
});

function ThemingContextProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setTheme] = useState<Themes>(Themes.light);

  function changeColorTheme() {
    const newAppTheme =
      colorTheme === Themes.light ? Themes.dark : Themes.light;

    setTheme(newAppTheme);
  }

  return (
    <ThemingContext.Provider
      value={{ colors: themesColors[colorTheme], changeColorTheme }}>
      {children}
    </ThemingContext.Provider>
  );
}

export { ThemingContextProvider, ThemingContext };
