'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type PageData = {
    id: number;
    slug: string;
    title: string;
    description: string | null;
    content: any;
    createdAt: string;
    updatedAt: string;
};

type PageContentProps = {
    initialData?: PageData | null;
    section: string;
    isEditable?: boolean;
};

export default function PageContent({ initialData, section, isEditable = false }: PageContentProps) {
    const [pageData, setPageData] = useState<PageData | null>(initialData || null);
    const [loading, setLoading] = useState(!initialData);
    const [error, setError] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState<any>(initialData?.content || {});
    const router = useRouter();

    // Fetch page data if not provided as initialData
    useEffect(() => {
        if (!initialData) {
            fetchPageData();
        }
    }, [section]);

    const fetchPageData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`/api/pages/${section}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch ${section} page data`);
            }

            const data = await response.json();
            setPageData(data);
            setEditedContent(data.content);
        } catch (err) {
            console.error('Error fetching page data:', err);
            setError('Failed to load page content. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            setLoading(true);
            const response = await fetch(`/api/pages/${section}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: pageData?.title || section.charAt(0).toUpperCase() + section.slice(1),
                    description: pageData?.description || '',
                    content: editedContent,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save page content');
            }

            const updatedData = await response.json();
            setPageData(updatedData);
            setIsEditing(false);
            router.refresh(); // Refresh the page to show updated content
        } catch (err) {
            console.error('Error saving page content:', err);
            setError('Failed to save changes. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Function to render content based on its type
    const renderContent = () => {
        if (!pageData || !pageData.content) {
            return <div className="p-4 text-gray-500">No content available for this section.</div>;
        }

        // If we're in editing mode and the user is allowed to edit
        if (isEditing && isEditable) {
            return (
                <div className="space-y-4">
                    {Object.entries(editedContent).map(([key, value]) => (
                        <div key={key} className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </label>
                            {typeof value === 'string' ? (
                                <textarea
                                    className="w-full p-2 border rounded-md"
                                    value={value as string}
                                    rows={5}
                                    onChange={(e) => setEditedContent({ ...editedContent, [key]: e.target.value })}
                                />
                            ) : (
                                <div className="p-2 bg-gray-100 rounded-md">
                                    <pre className="text-sm">{JSON.stringify(value, null, 2)}</pre>
                                    <p className="text-xs text-gray-500 mt-1">Complex content editing not supported in this view</p>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex space-x-2 mt-4">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                        <button
                            onClick={() => {
                                setEditedContent(pageData.content);
                                setIsEditing(false);
                            }}
                            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            );
        }

        // Display mode - render the content
        return (
            <div className="prose max-w-none">
                {Object.entries(pageData.content).map(([key, value]) => {
                    // Handle different content types
                    if (typeof value === 'string') {
                        return (
                            <div key={key} className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                                <div className="whitespace-pre-wrap">{value as string}</div>
                            </div>
                        );
                    } else if (Array.isArray(value)) {
                        return (
                            <div key={key} className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                                <ul className="list-disc pl-5">
                                    {(value as any[]).map((item, index) => (
                                        <li key={index}>{typeof item === 'string' ? item : JSON.stringify(item)}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    } else {
                        return (
                            <div key={key} className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                                <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto">
                                    {JSON.stringify(value, null, 2)}
                                </pre>
                            </div>
                        );
                    }
                })}
            </div>
        );
    };

    // Admin controls for editing
    const renderAdminControls = () => {
        if (!isEditable) return null;

        return (
            <div className="mb-4">
                {!isEditing ? (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Edit Content
                    </button>
                ) : null}
            </div>
        );
    };

    if (loading && !pageData) {
        return <div className="p-8 text-center">Loading content...</div>;
    }

    if (error) {
        return <div className="p-8 text-center text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {renderAdminControls()}
            {renderContent()}
        </div>
    );
}