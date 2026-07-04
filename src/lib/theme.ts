export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function getStoredTheme(): Theme | null {
  const value = localStorage.getItem(STORAGE_KEY);
  return value === "light" || value === "dark" ? value : null;
}

export function setStoredTheme(theme: Theme): void {
  localStorage.setItem(STORAGE_KEY, theme);
}

export function resolveInitialTheme(): Theme {
  return getStoredTheme() ?? "light";
}

export function oppositeTheme(theme: Theme): Theme {
  return theme === "light" ? "dark" : "light";
}
