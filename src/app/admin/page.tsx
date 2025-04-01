'use client';

import { useEffect } from 'react';
import { ContentEditor } from '@/components/admin/ContentEditor';

export default function AdminPage() {
    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch('/api/auth/me');
            if (!res.ok) {
                window.location.href = '/login';
            }
        };
        checkAuth();
    }, []);

    const handleSuccess = () => {
        // Handle successful content update
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Content Management</h1>
            <ContentEditor onSuccess={handleSuccess} />
        </div>
    );
}