'use client';
import React, { useEffect } from 'react';
import { createContext } from 'react';

type Status = 'success' | 'error' | 'info';

export const NotificationContext = createContext();

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notification, setNotification] = React.useState<{
    message: string;
    status: Status;
  } | null>(null);
  const [isNotificationVisible, setIsNotificationVisible] =
    React.useState(false);

  useEffect(() => {
    if (notification) {
      setIsNotificationVisible(true);
    }
  }, [notification]);

  return (
    <NotificationContext.Provider
      value={{
        notification,
        setNotification,
        isNotificationVisible,
        setIsNotificationVisible,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
