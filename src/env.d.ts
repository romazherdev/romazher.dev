/// <reference types="@astrojs/image/client" />
type ThemeValue = 'light' | 'dark';
interface Window {
  theme: {
    eventName: string;
    value: ThemeValue;
    set: (theme: ThemeValue) => void;
  };
}
