'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('theme') as Theme;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);

        // Apply theme immediately
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(initialTheme);
    }, []);

    useEffect(() => {
        if (mounted) {
            const root = document.documentElement;

            // Remove both classes first
            root.classList.remove('light', 'dark');

            // Add the current theme class
            root.classList.add(theme);

            // Save to localStorage
            localStorage.setItem('theme', theme);

            console.log('Theme changed to:', theme);
            console.log('HTML classes:', root.classList.toString());
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === 'light' ? 'dark' : 'light';
            console.log('Toggling theme from', prev, 'to', newTheme);
            return newTheme;
        });
    };

    if (!mounted) {
        return <div className="light">{children}</div>;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        // Return default values during SSR
        return { theme: 'light' as Theme, toggleTheme: () => { } };
    }
    return context;
}
