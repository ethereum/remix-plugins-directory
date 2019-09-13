import { Theme } from "./type";

export interface ThemeApi {
  events: {
    themeChanged: (theme: Theme) => void
  };
  methods: {
    getThemes(): Theme;
    switchTheme(name: string): void;
  };
}

