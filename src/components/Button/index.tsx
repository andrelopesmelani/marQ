import { FC, ReactNode } from 'react';
import './styles.scss'

interface ButtonProps<T extends ReactNode> {
    title: string;
    icon?: T;
    onClick: () => void;
    className?: string;
}

const Button: FC<ButtonProps<ReactNode>> = ({ title, icon, onClick, className, ...rest }) => {
    return (
        <button {...rest} onClick={onClick} className={`button ${className}`}>
            {icon}
            {title}
        </button>
    );
};

export default Button;