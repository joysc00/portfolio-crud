import { useState } from 'react';

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function ContactForm() {
    const [values, setValues] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const submit = (e) => {
        e.preventDefault();
        const next = {};
        if (!values.name.trim()) next.name = 'Please enter your name.';
        if (!emailOk(values.email)) next.email = 'Please enter a valid email address.';
        if (values.message.trim().length < 10) next.message = 'Message must be at least 10 characters.';
        setErrors(next);
        if (Object.keys(next).length === 0) {
            setSuccess(`Thanks, ${values.name}! Your message is ready to send.`);
            setValues({ name: '', email: '', message: '' });
        } else {
            setSuccess('');
        }
    };

    const field = (id, label, el) => (
        <div>
            <label htmlFor={id} className="block text-sm font-medium">{label}</label>
            {el}
            <p className="mt-1 text-sm text-red-700 dark:text-red-300" role="alert">{errors[id]}</p>
        </div>
    );
    const set = (id) => (e) => setValues({ ...values, [id]: e.target.value });
    const inputCls = 'mt-1 w-full rounded-lg border border-line bg-bg px-3';

    return (
        <form onSubmit={submit} noValidate className="rounded-2xl bg-card border border-line p-6 md:p-8 space-y-5">
            {field('name', 'Name', <input id="name" type="text" value={values.name} onChange={set('name')} className={`${inputCls} min-h-[44px]`} />)}
            {field('email', 'Email', <input id="email" type="email" value={values.email} onChange={set('email')} className={`${inputCls} min-h-[44px]`} />)}
            {field('message', 'Message', <textarea id="message" rows="5" value={values.message} onChange={set('message')} className={`${inputCls} py-2`} />)}
            <button type="submit" className="min-h-[44px] px-6 rounded-full bg-accent text-onaccent font-semibold hover:opacity-90 transition">Send message</button>
            {success && <p className="rounded-lg bg-sage p-3 text-sm" role="status">{success}</p>}
        </form>
    );
}
