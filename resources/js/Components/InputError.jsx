export default function InputError({ message }) {
    return (
        <p className="mt-1 min-h-[1.25rem] text-sm text-red-700 dark:text-red-300" role="alert">
            {message}
        </p>
    );
}
