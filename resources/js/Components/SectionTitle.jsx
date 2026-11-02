export default function SectionTitle({ title, children }) {
    return (
        <>
            <h2 className="font-heading font-bold text-3xl md:text-4xl">{title}</h2>
            {children && <p className="mt-3 text-muted max-w-prose">{children}</p>}
        </>
    );
}
