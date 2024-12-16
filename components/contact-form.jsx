"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { Send } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 3 characters.",
    }),
    email: z.string().email(),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    })
})

function ContactForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full p-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-accent">Name</FormLabel>
                            <FormControl>
                                <Input className="dark:placeholder:text-gray-500 placeholder:text-gray-300" placeholder="Shashi Gaurav" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-accent">Email</FormLabel>
                            <FormControl>
                                <Input className="dark:placeholder:text-gray-500 placeholder:text-gray-300" placeholder="shashigaurav789@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-accent">Messsage</FormLabel>
                            <FormControl>
                                <Textarea
                                    rows={5}
                                    placeholder="Tell us a little bit about your query"
                                    className="resize-none dark:placeholder:text-gray-500 placeholder:text-gray-300"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <Button type="submit" className="ml-auto hover:bg-accent flex items-center gap-2">
                    <span>Submit</span>
                    <Send className="w-3 h-3" />
                </Button>
            </form>
        </Form>
    )
}


export default ContactForm;