import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.css';
import cx  from 'classnames';


export type ButtonVariant = 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    disabled?: boolean;
    variant?: ButtonVariant;
}

export const Button: FC <ButtonProps> = (props) => {
    const {children, className, type = 'button', variant='primary'} = props;
    return (
        <button 
        type={type}
        className={cx(cls.button, cls[variant], className)}>
            {children}
        </button>
    );
};