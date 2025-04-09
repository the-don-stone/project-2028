
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Rocket, Eye, Lock, Shield, MoveRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

// Form schema using zod validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().optional(),
  privacyPolicy: z.boolean().refine(value => value === true, {
    message: "You must agree to our privacy policy.",
  })
});

type FormValues = z.infer<typeof formSchema>;

const JoinMovement = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define form with validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      privacyPolicy: false,
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    console.log("Form submitted:", data);
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your service ID
      // Note: You would need to create an account on EmailJS and set up a service
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message || "No message provided",
        to_email: "theproject2028@proton.me"
      };
      
      await emailjs.send(
        'service_contact_form', // Replace with your EmailJS service ID
        'template_contact_form', // Replace with your EmailJS template ID
        templateParams,
        'your_user_id' // Replace with your EmailJS user ID
      );
      
      toast({
        title: "Thank you for joining the movement!",
        description: "Your message has been sent successfully.",
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-project-darkblue py-6">
        <div className="section-container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Join the Movement</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <main className="flex-1 bg-gray-50 py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-project-darkblue mb-4">
                Join the Movement
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Help us build a better future by advancing Project 2028's core principles through collective action and shared commitment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="text-project-red" />
                    Why Join Project 2028
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <MoveRight className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Be Part of the Solution:</strong> Join a community dedicated to addressing our most pressing challenges through evidence-based policy and collective action.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <MoveRight className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Influence Real Change:</strong> Help shape policies and priorities that promote human dignity, shared prosperity, and democratic resilience.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <MoveRight className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Connect with Others:</strong> Build relationships with like-minded individuals committed to creating a more just, equitable, and sustainable world.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <MoveRight className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Access Resources:</strong> Stay informed with the latest research, tools, and opportunities to advance Project 2028's principles in your community.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="text-project-red" />
                    Our Data Privacy Commitment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Lock className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Minimal Data Collection:</strong> We only collect the information we absolutely need to keep you informed and involved.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Zero Data Selling:</strong> We will never sell or share your personal information with third parties for commercial purposes.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Transparency:</strong> We are committed to being transparent about what data we collect and how we use it.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="text-project-red mt-1 flex-shrink-0" />
                      <p><strong>Respecting Your Inbox:</strong> We hate spam as much as you do. We'll only email you with important updates and information, and you can unsubscribe at any time.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Fill out the form below to join our movement and stay updated.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share why you're interested in joining Project 2028 or any questions you might have"
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="privacyPolicy"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>I agree to the privacy policy</FormLabel>
                            <FormDescription>
                              I understand that Project 2028 will handle my data responsibly, never sell it, and respect my privacy.
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Join the Movement"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinMovement;
