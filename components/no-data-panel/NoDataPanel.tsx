type Props = {
    message: string;
    ActionBtn: React.ReactNode;
}

export default function NoDataPanel({message, ActionBtn}: Props){
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-500 text-lg mb-4">{message}</p>
            {ActionBtn}
        </div>
    )
}