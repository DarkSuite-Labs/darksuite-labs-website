import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const Products = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground text-lg">Enterprise-grade tools built for excellence</p>
        </motion.div>

        {/* Products Grid */}
        <div className="max-w-md mx-auto">
          {/* Regulex OS - Active Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="card-glow bg-card border-border h-full">
              <CardHeader>
                <div className="mb-3">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    Enterprise SaaS
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Regulex OS</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  End-to-end compliance management platform for consultancy firms managing multiple client organisations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                  Available Now
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
