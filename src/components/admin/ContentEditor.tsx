import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

type ContentFormValues = {
    title: string
    content: string
}

export function ContentEditor({
    initialData,
    onSuccess,
}: {
    initialData?: ContentFormValues
    onSuccess: () => void
}) {
    const form = useForm<ContentFormValues>({
        defaultValues: initialData || { title: '', content: '' },
    })

    const onSubmit = async (data: ContentFormValues) => {
        try {
            const response = await fetch('/api/content', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (!response.ok) throw new Error('Update failed')
            onSuccess()
        } catch (error) {
            console.error('Error updating content:', error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter page title" />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter page content" asChild>
                                    <textarea className="min-h-[200px]" />
                                </Input>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Saving...' : 'Save Changes'}
                </Button>
            </form>
        </Form>
    )
}