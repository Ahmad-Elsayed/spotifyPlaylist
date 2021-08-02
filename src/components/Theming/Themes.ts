import { darkThemeColors, lightThemeColors } from '../../assets';

export enum Themes {
  dark = 'Dark',
  light = 'Light',
}

export const themesColors = {
  [Themes.dark]: darkThemeColors,
  [Themes.light]: lightThemeColors,
};
