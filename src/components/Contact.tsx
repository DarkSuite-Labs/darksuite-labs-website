import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form is non-functional for now, just show feedback
    toast({
      title: 'Message received',
      description: 'Thank you for your interest. We\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            For product enquiries, partnerships, or early access requests.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-muted border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-muted border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project or enquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="bg-muted border-border resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Send Message
          </Button>
        </motion.form>

        {/* Direct Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 pt-12 border-t border-border"
        >
          <p className="text-muted-foreground">
            Or reach us directly —{' '}
            <a
              href="mailto:contact@darksuitelabs.com"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              contact@darksuitelabs.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
