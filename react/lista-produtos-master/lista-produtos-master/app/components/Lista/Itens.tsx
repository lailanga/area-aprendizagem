interface ItensProps {
    category?: string;
    id?: string;
    price?: number;
    stocked?: boolean;
    name?: string;
    children?: React.ReactNode;
}

export default function Itens({children, category, id, price, stocked, name, ...props}:ItensProps) {
    return (
        <li>
            <p>{name}</p>
            <span>R$ {price} kg</span>
            {children}
        </li>
    )
}