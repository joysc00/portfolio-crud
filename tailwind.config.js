import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg)', text: 'var(--text)', muted: 'var(--muted)',
                accent: 'var(--accent)', sage: 'var(--sage)', card: 'var(--card)',
                line: 'var(--line)', onaccent: 'var(--onaccent)',
            },
            fontFamily: {
                heading: ['Fraunces', 'Georgia', 'serif'],
                body: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms],
};
