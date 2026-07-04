import { NotificationContext } from "@/store/notification-context";
import { useContext, useEffect } from "react";

type Props = {
    message: string;
    status: 'success' | 'error' | 'info';
}

export default function NotificationBar({ message, status }: Props) {
    const { setIsNotificationVisible } = useContext(NotificationContext);

    const handleClose = () => {
        setIsNotificationVisible(false);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsNotificationVisible(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, [setIsNotificationVisible]);

    return (
        <div onClick={handleClose} className={`fixed bottom-0 left-0 right-0 p-4 text-white ${status === 'success' ? 'bg-green-500' : status === 'error' ? 'bg-red-500' : 'bg-blue-500'} flex justify-between items-center`}>
            <p>{message}</p>
            <span>{status}</span>
        </div>
    )
}