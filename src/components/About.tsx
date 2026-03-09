import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">About DarkSuite Labs</h2>
        </motion.div>

        {/* Centered Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-muted-foreground text-center">
            DarkSuite Labs is an independent software company incorporated in Wyoming, USA, and operating out of Hyderabad, India. We build enterprise-grade SaaS tools for compliance, operations, and business infrastructure. Every product we ship is designed to be the best in its category — not good enough, but exceptional.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
