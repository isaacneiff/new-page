import { Mail, Phone, Instagram, Facebook, Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 text-muted-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 text-xl font-bold text-secondary mb-6">
          <Leaf size={24} />
          Carla Nutricionista
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="mailto:carla.nutri@email.com" aria-label="Email" className="hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
          <a href="tel:+550000000000" aria-label="Telefone" className="hover:text-primary transition-colors">
            <Phone size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors">
            <Facebook size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Carla Nutricionista. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Design por Firebase Studio.
        </p>
      </div>
    </footer>
  );
}
