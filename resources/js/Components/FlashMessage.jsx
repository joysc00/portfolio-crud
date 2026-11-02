import { usePage } from '@inertiajs/react';

export default function FlashMessage() {
    const { flash } = usePage().props;
    if (!flash?.success) return null;

    return (
        <div className="mb-6 rounded-lg border border-accent bg-sage p-4 text-sm" role="status">
            {flash.success}
        </div>
    );
}
