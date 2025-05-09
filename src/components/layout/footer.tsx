import { Mail, Phone, Instagram, Facebook, Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 text-muted-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 text-xl font-bold text-secondary mb-6">
          Zanelatto Academy
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="mailto:carla.nutri@email.com" aria-label="Email" className="hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5542999493337&text=Ol%C3%A1%21+Vi+seu+an%C3%BAncio+no+Instagram+sobre+seus+cursos+e+tenho+interesse+em+saber+mais.+Poderia+me+passar+mais+informa%C3%A7%C3%B5es%3F&type=phone_number&app_absent=0" aria-label="Telefone" className="hover:text-primary transition-colors">
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
          &copy; {currentYear} Zanelatto Academy. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Design por Isaac Neiff
        </p>
      </div>
    </footer>
  );
}
