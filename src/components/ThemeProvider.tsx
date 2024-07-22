"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <NextThemeProvider themes={["light", "dark"]} {...props}>
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
