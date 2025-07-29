import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Code, ShoppingCart, Globe, ArrowRight, ExternalLink } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "UI/UX Design",
    description: "We create stunning designs that captivate your audience and enhance user experience with modern aesthetics."
  },
  {
    icon: Code,
    title: "Front-End Development",
    description: "Building responsive and interactive web applications using the latest technologies and best practices."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Complete e-commerce solutions that drive sales and provide seamless shopping experiences."
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Custom WordPress themes and plugins tailored to your business needs and requirements."
  }
]

const portfolioItems = [
  {
    id: 1,
    title: "Storytherapy",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Canvas Shoe",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Music Festival",
    category: "Event Website",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Food Delivery",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
  }
]

const testimonials = [
  {
    name: "Mike Berry",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "The team delivered an exceptional product that exceeded our expectations. Their attention to detail is remarkable."
  },
  {
    name: "Linda",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    text: "Professional, reliable, and creative. They transformed our vision into a beautiful, functional website."
  },
  {
    name: "John Berry",
    role: "Founder, StartupCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Outstanding work quality and timely delivery. I highly recommend their services for any web development project."
  }
]

export function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Agency</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Get Started
          </Button>
        </div>
      </nav>

      {/* What We Do Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We Turn Your Digital Dreams Into Reality. From Strategy To Implementation, We Handle Everything
              You Need To Establish A Strong Online Presence And Drive Business Growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Work Speaks For Us!</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="bg-gray-900/50 border-gray-800 overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              VIEW ALL <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Reflection Of Our Commitment To<br />Excellence.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}