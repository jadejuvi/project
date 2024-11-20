import Link from 'next/link';

const navigation = {
  product: [
    { name: 'Características', href: '#' },
    { name: 'Precios', href: '#' },
    { name: 'Seguridad', href: '#' },
  ],
  company: [
    { name: 'Acerca de', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Carreras', href: '#' },
  ],
  legal: [
    { name: 'Privacidad', href: '#' },
    { name: 'Términos', href: '#' },
    { name: 'Política de Cookies', href: '#' },
  ],
  social: [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'GitHub', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Producto</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Social</h3>
            <ul className="space-y-3">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} DentFlow. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}