import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    className?: string;
    href?: string;
}

export default function Button({
    variant = 'primary',
    children,
    className = '',
    href,
    ...props
}: ButtonProps) {
    const variantClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
    };

    const classes = `btn ${variantClasses[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={classes}
            {...props}
        >
            {children}
        </button>
    );
}
