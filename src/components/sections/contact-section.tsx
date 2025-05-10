import { ContactForm } from './contact-form';
import { Mail, Phone, Instagram, Facebook, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contato" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">
          Entre em Contato
        </h2>
        <div className="max-w-4xl mx-auto lg:flex lg:gap-12 bg-card p-8 sm:p-12 rounded-xl shadow-xl border-none">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Envie uma mensagem</h3>
            <ContactForm />
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Informações de Contato</h3>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start gap-4">
                <Mail size={22} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:carla.nutri@email.com" className="hover:text-primary transition-colors break-all">
                    carla.nutri@email.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={22} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Telefone</h4>
                  <a href="https://api.whatsapp.com/send/?phone=5542999493337&text=Ol%C3%A1%21+Vi+seu+an%C3%BAncio+no+Instagram+sobre+seus+cursos+e+tenho+interesse+em+saber+mais.+Poderia+me+passar+mais+informa%C3%A7%C3%B5es%3F&type=phone_number&app_absent=0" className="hover:text-primary transition-colors">
                    +55 (42) 9949-3337 {/* Placeholder */}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Endereço (Atendimento Online)</h4>
                  <p>Consultas online para todo o Brasil.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Instagram size={22} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Instagram</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    @carlanutricionista {/* Placeholder */}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Facebook size={22} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Facebook</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    /carlanutricionista {/* Placeholder */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
