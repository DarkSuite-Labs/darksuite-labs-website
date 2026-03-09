import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Products = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tiers = [
    {
      name: 'FOUNDATION',
      tagline: 'Audit survivability. Structured from day one.',
      features: [
        'Centralized regulatory library with per-entity obligation mapping',
        'Controlled evidence submission with full version history',
        'Immutable audit trail — every action logged, nothing deleted',
        'Audit-ready PDF and entity-level export packages',
      ],
      badge: null,
    },
    {
      name: 'GOVERNANCE',
      tagline: 'Group-level control. Regulator-ready.',
      features: [
        'Everything in Foundation, plus cross-entity compliance oversight',
        'Regulatory change engine — detect, assess, and respond to updates automatically',
        'Multi-step approvals with separation of duties enforcement',
        'Regulator-ready structured exports across your entire group',
      ],
      badge: 'In Development',
    },
  ];

  return (
    <section id="products" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Regulex OS</h2>
          <p className="text-muted-foreground text-lg">Compliance infrastructure for regulated firms. Built to survive audits.</p>
        </motion.div>

        {/* Tier Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
            >
              <Card className="h-full bg-card border-border relative overflow-hidden">
                {/* Electric blue accent top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[hsl(217,91%,60%)]" />
                
                <CardHeader className="pb-4">
                  {tier.badge && (
                    <div className="mb-3">
                      <Badge variant="outline" className="bg-[hsl(217,91%,60%)]/10 text-[hsl(217,91%,60%)] border-[hsl(217,91%,60%)]/20">
                        {tier.badge}
                      </Badge>
                    </div>
                  )}
                  <CardTitle className="text-2xl mb-2 tracking-tight">{tier.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {tier.tagline}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[hsl(217,91%,60%)] shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,55%)] text-white"
                  >
                    Request a Demo
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
