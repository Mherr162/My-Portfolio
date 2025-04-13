"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { FadeInSection } from "./ui/FadeInSection"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="min-h-screen py-32 px-6 md:px-16 relative bg-primary/5 dark:bg-primary/10">
      <div className="max-w-6xl mx-auto space-y-16">
        <FadeInSection delay={0}>
          <h2 className="section-title font-bold">CONTACT</h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeInSection delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Get In Touch</h3>
              <p className="text-muted-foreground">
                Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.4}>
          <div>
            <h2 className="text-4xl font-bold mb-8">FAQ</h2>
            <p className="text-muted-foreground mb-8">
              Frequently asked questions about my services and work process.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-neutral-800 rounded-lg px-4 py-2">
                <AccordionTrigger className="text-lg font-medium">
                  What types of services do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  I offer a range of software development services including full-stack web development,
                  database design, and website optimization. My expertise spans both frontend and backend
                  technologies, with a focus on creating responsive, performant applications.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-neutral-800 rounded-lg px-4 py-2">
                <AccordionTrigger className="text-lg font-medium">
                  What do you need from me to start a project?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  To get started, I need a clear description of your project objectives, any design
                  references you have, and your timeline. I'll then work with you to develop a
                  detailed scope of work and project plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-neutral-800 rounded-lg px-4 py-2">
                <AccordionTrigger className="text-lg font-medium">
                  How long does it take to complete a project?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Project timelines vary depending on scope and complexity. A simple website might take
                  2-4 weeks, while complex web applications can take several months. I'll provide a detailed
                  timeline during our initial consultation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
