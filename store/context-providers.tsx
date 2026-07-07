'use client';
import { AuthContextProvider } from './auth-context';
import { FilterContextProvider } from './filter-context';
import { NotificationProvider } from './notification-context';
import { ThemeContextProvider } from './theme-context';

export default function ContextProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <NotificationProvider>
          <FilterContextProvider>{children}</FilterContextProvider>
        </NotificationProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}
