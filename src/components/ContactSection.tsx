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

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.details || data.error || "Failed to send message")
      }

      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Contact form error:", error)
      toast.error(error instanceof Error ? error.message : "Failed to send message. Please try again.")
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
    <section 
      id="contact" 
      className="min-h-screen py-40 px-6 md:px-16 relative bg-primary/3 dark:bg-primary/15"
    >
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
      </div>
    </section>
  )
}
