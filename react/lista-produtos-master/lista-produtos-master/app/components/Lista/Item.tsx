interface ItemProps {
    id?: number;
    category?: string;
    price?: string;
    stocked?: boolean;
    name?: string;
    children?: React.ReactNode;
}

export default function Item({children, id, category, price, stocked, name,  ...props}:ItemProps) {
    return (
        <li>
            <p>{name}</p>
            <span>{category}</span>
        </li>
    )
}