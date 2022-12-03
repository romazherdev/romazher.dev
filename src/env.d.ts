/// <reference types="@astrojs/image/client" />
type ThemeValue = 'auto' | 'light' | 'dark';
interface Window {
  theme: {
    eventName: string;
    value: ThemeValue;
    set: (theme: ThemeValue) => void;
  };
}
