import { Mail, Phone, Instagram, Facebook, Leaf, Github} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 text-muted-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 text-xl font-bold text-secondary mb-6" style={{ color: '#b22222' }}>
          Zanelatto Academy
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="mailto:carla.nutri@email.com" aria-label="Email" className="hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5542999493337&text=Ol%C3%A1%21+Vi+seu+an%C3%BAncio+no+Instagram+sobre+seus+cursos+e+tenho+interesse+em+saber+mais.+Poderia+me+passar+mais+informa%C3%A7%C3%B5es%3F&type=phone_number&app_absent=0" aria-label="Telefone" className="hover:text-primary transition-colors">
             <FaWhatsapp size={24} />
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
        <p className="text-xs"><a href="https://github.com/isaacneiff" target="_blank" rel="noopener noreferrer" className="text-xs mt-2 flex justify-center flex-direction-column">
          Design por Isaac.  <Github size={12} className="text-primary mt-1 shrink-0"/> 
</a></p>
      </div>
    </footer>
  );
}
