
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Working with this designer was an absolute pleasure. They understood our vision instantly and delivered beyond our expectations.",
      name: "Sarah Johnson",
      position: "CEO, Creative Studios"
    },
    {
      id: 2,
      quote: "Exceptional attention to detail and technical skill. Our project was delivered on time with impeccable quality.",
      name: "Michael Chen",
      position: "Product Manager, Tech Innovations"
    },
    {
      id: 3,
      quote: "The most talented designer I've worked with. They transformed our ideas into a stunning visual reality.",
      name: "Emily Rodriguez",
      position: "Marketing Director, Brand Co."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Client Testimonials</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Hear what my clients have to say about their experiences working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: testimonial.id * 0.2 }}
              className="bg-zinc-900 p-8 rounded-lg border border-zinc-800"
            >
              <svg
                className="h-6 w-6 text-zinc-700 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-zinc-300 mb-6">{testimonial.quote}</p>
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-zinc-500 text-sm">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
