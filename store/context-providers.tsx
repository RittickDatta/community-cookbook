"use client";
import { ThemeContextProvider } from "./theme-context";

export default function ContextProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  );
}