"use client";
import { NotificationContext } from "@/store/notification-context";
import { useContext } from "react";
import NotificationBar from "../notificatio-bar/NotificationBar";

export default function Footer() {
  const { notification, isNotificationVisible } = useContext(NotificationContext);
  return (
    <footer className="bg-white p-1">
      {isNotificationVisible && notification && <NotificationBar message={notification.message} status={notification.status} />}
      <p>
        &copy; 2026 Cookbook Community by Rittick Datta. All rights reserved.
      </p>
    </footer>
  );
}
