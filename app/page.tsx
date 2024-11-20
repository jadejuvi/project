import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Features } from '@/components/landing/features';
import { Pricing } from '@/components/landing/pricing';
import { ContactForm } from '@/components/landing/contact-form';
import { Footer } from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            DentFlow
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button>Iniciar sesión</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Gestión Completa de Clínicas Dentales
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Optimiza tu práctica dental con nuestra solución integral de gestión. Todo lo que necesitas en un solo lugar.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/login">
              <Button size="lg">Comenzar</Button>
            </Link>
            <Button size="lg" variant="outline">Aprender más</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Pricing */}
      <Pricing />

      {/* Contact */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}