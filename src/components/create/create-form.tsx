import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"

import { Textarea } from "@/components/ui/textarea"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"

const recipeSchema = z.object({
    name: z.string().min(1, "Recipe name is required"),
    description: z.string().min(1, "Description is required"),
})

type RecipeFormValues = z.infer<typeof recipeSchema>

export default function CreateForm() {
    const form = useForm<RecipeFormValues>({
        resolver: zodResolver(recipeSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    })

    const handleSubmit = (values: RecipeFormValues) => {
    console.log(values)
  }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4 max-w-md"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Recipe Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter recipe name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Create Recipe</Button>
            </form>
        </Form>
    )
}
