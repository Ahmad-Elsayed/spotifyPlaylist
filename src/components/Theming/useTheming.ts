import { useContext } from 'react';
import { ThemingContext } from './ThemingContextProvider';

export default function () {
  const { colors, changeColorTheme } = useContext(ThemingContext);

  return {
    colors,
    changeColorTheme,
  };
}
