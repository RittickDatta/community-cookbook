'use client';
import { AuthContextProvider } from './auth-context';
import { ThemeContextProvider } from './theme-context';

export default function ContextProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ThemeContextProvider>
  );
}
