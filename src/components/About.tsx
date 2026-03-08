import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '01', label: 'Products in development' },
    { number: '1', label: 'Founder' },
    { number: '0', label: 'Shortcuts taken' },
  ];

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

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Company Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              DarkSuite Labs is an independent software company founded in Hyderabad, India. We build enterprise-grade SaaS tools for compliance, operations, and business infrastructure. Every product we ship is designed to be the best in its category — not good enough, but exceptional.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="border-l-2 border-accent pl-6"
              >
                <div className="text-5xl font-bold mb-2 tracking-tighter">{stat.number}</div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
