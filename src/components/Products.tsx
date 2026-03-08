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
        <div className="grid md:grid-cols-3 gap-6">
          {/* Regulex OS - Active Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="card-glow bg-card border-border h-full group cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    Compliance Management
                  </Badge>
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    In Development
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Regulex OS</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  End-to-end compliance management platform for consultancy firms managing multiple client organisations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2 group">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Coming Soon Product 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card border-border border-dashed h-full opacity-60">
              <CardHeader>
                <div className="flex items-center justify-center h-full min-h-[200px]">
                  <div className="text-center">
                    <Badge variant="outline" className="mb-4">Coming Soon</Badge>
                    <p className="text-muted-foreground">Next-generation tool</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Coming Soon Product 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-card border-border border-dashed h-full opacity-60">
              <CardHeader>
                <div className="flex items-center justify-center h-full min-h-[200px]">
                  <div className="text-center">
                    <Badge variant="outline" className="mb-4">Coming Soon</Badge>
                    <p className="text-muted-foreground">Enterprise infrastructure</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
