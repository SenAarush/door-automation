interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    variant: 'secondary' | 'primary';
}

export const Button: React.FC<Props> = (props) => {
    const { variant, title } = props;
    return (
        <button className={`text-sm font-medium px-4 py-2 transition-colors duration-300 w-full rounded-sm shadow hover:cursor-pointer ${variant == 'primary' ?
            ' hover:bg-purple-300 text-purple-700 hover:text-stone-50' :
            ' bg-purple-700 hover:bg-purple-200 text-stone-50 hover:text-purple-700'}`}
            {...props}
        >
            {title}
        </button>
    )
}