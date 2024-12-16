"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Check, Send } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { BrickWall, Brush, Cpu, Home, Layers, RefreshCcw } from "lucide-react"
import { useState } from "react"
import { Input } from "./ui/input"
import Link from "next/link"

const formSchema = z.object({
    service: z.string(),
    name: z.string().min(2, {
        message: "Name must be at least 3 characters.",
    }),
})

function BookingForm() {

    const [selectedServioce, setSelectedService] = useState(null);
    const [isBooked, setIsBooked] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            service: "",
        },
    })



    const services = [
        {
            title: 'Architecture Design',
            description: 'We provide expert architecture design services for your home, office, or commercial space. Our team of architects will work with you to create a design that meets your needs and budget.',
            icon: Home,
        },
        {
            title: 'Interior Work',
            description: 'Our interior work services include everything from painting and flooring to lighting and furniture. We will help you create a beautiful and functional space that reflects your personal style.',
            icon: Layers,
        },
        {
            title: 'Building Construction',
            description: 'We specialize in building construction services for residential and commercial properties. Our team of experienced builders will work with you to create a custom design that meets your needs and budget.',
            icon: BrickWall,
        },
        {
            title: 'Renovation',
            description: 'Whether you are looking to renovate your kitchen, bathroom, or entire home, we can help. Our renovation services will help you create a space that is modern, functional, and beautiful.',
            icon: RefreshCcw,
        },
        {
            title: 'Modeling',
            description: 'Our modeling services include 3D modeling and virtual reality tours of your space. This will help you visualize the final result and make any changes before construction begins.',
            icon: Cpu,
        },
        {
            title: 'Painting',
            description: 'Our painting services include interior and exterior painting for residential and commercial properties. We use high-quality paints and materials to ensure a professional finish that will last for years to come.',
            icon: Brush,
        }
    ]

    function onSubmit(values) {
        console.log(values);
        setIsBooked(true);
    }

    return (
        isBooked ?
            <Card className="flex flex-col items-center mt-20 max-w-lg mx-auto">
                <CardContent className="p-6">
                    <div className="p-6 rounded-full bg-secondary flex items-center justify-center w-min">
                        <Check className="w-16 h-16 text-green-400" />
                    </div>
                </CardContent>
                <CardHeader className="text-center">
                    <CardTitle>Your have booked for {selectedServioce}.</CardTitle>
                    <CardDescription>Thank You for Choosing Us.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Link href={'/'}>
                        <Button variant="outline">
                            <Home className="w-4 h-4" />
                            <span>Go Home</span>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
            :
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
                        name="service"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel className="text-accent">Choose a Service</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={(e) => { field.onChange(e); setSelectedService(e) }}
                                        defaultValue={field.value}
                                        className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
                                    >
                                        {
                                            services.map((service, index) => (
                                                <FormItem key={index} className="w-full h-full flex items-center">
                                                    <FormControl>
                                                        <RadioGroupItem value={service.title} className="hidden" />
                                                    </FormControl>
                                                    <FormLabel className="w-full h-full">
                                                        <Card className={`w-full h-full transition-colors cursor-default ${selectedServioce === service.title ? 'bg-accent text-black' : 'group'}`}>
                                                            <CardContent className='p-6 w-full h-full hover:border-accent transition-colors'>
                                                                <CardContent className='pt-0 flex justify-center'>
                                                                    <service.icon className="w-16 h-16 group-hover:text-accent transition-colors" />
                                                                </CardContent>
                                                                <CardHeader className='p-0 text-center'>
                                                                    <CardTitle className="group-hover:text-accent transition-colors">{service.title}</CardTitle>
                                                                </CardHeader>
                                                            </CardContent>
                                                        </Card>
                                                    </FormLabel>
                                                </FormItem>
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="ml-auto hover:bg-accent flex items-center gap-2">
                        <span>Book Now</span>
                        <Send className="w-3 h-3" />
                    </Button>
                </form>
            </Form>
    )
}


export default BookingForm;