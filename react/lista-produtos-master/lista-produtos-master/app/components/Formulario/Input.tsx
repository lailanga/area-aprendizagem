
interface inputProps {
    type?: string | undefined;
    placeholder?: string | undefined;
    value?: any;
    children?: React.ReactNode;
    onChange?: any;
    tag?: any;
}

export default function Input({tag, type, placeholder, value, onChange, children, ...props}:inputProps) {
    return (
        <input id={tag} name={tag} type={type} placeholder={placeholder} value={value} onChange={onChange} {...props}>
            {children}
        </input>
    );
}