import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    data_evento: '',
    phone: '',
    message: '',
    email: '',
    numero_convidados: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [minDate, setMinDate] = useState('');
  
  useEffect(() => {
    // Calcular a data mínima (amanhã)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    // Formatar a data no formato YYYY-MM-DD para o input
    const formattedDate = tomorrow.toISOString().split('T')[0];
    setMinDate(formattedDate);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Aplicar máscara especificamente para o campo de telefone
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formattedPhone }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  
  // Função para formatar o número de telefone
  const formatPhoneNumber = (value: string) => {
    // Remove todos os caracteres não numéricos
    const phoneNumber = value.replace(/\D/g, '');
    
    // Aplica a formatação conforme a quantidade de dígitos
    if (phoneNumber.length <= 2) {
      return phoneNumber.length ? `(${phoneNumber}` : phoneNumber;
    } else if (phoneNumber.length <= 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    } else if (phoneNumber.length <= 11) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
    }
    
    // Limita a 11 dígitos (DDD + 9 dígitos)
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const generateWhatsAppMessage = (formData) => {
    return encodeURIComponent(
      `Novo Contato\n\n` +
      `Nome: ${formData.name}\n` +
      `Data do Evento: ${formData.data_evento}\n` +
      `Telefone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Número de Convidados: ${formData.numero_convidados}\n` +
      `Mensagem: ${formData.message}`
    );
};
  
const handleSubmit = (e) => {
  e.preventDefault();
  
  const phoneNumber = "5561995249559"; // Coloque o número com DDD e código do país (55 para Brasil)
  const message = generateWhatsAppMessage(formData);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  
  window.open(whatsappURL, "_blank");
};

  return (
    <section id="contato" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium text-brand-orange bg-brand-orange/10 rounded-full mb-6">
            Contato
          </span>
          <h2 className="heading-lg mb-4">Vamos tornar seu evento inesquecível</h2>
          <p className="text-muted-foreground">
            Entre em contato conosco para solicitar um orçamento ou tirar suas dúvidas.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-brand-orange/5">
              <h3 className="heading-sm mb-6 text-brand-orange">Informações de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Telefone</p>
                    <p className="mt-1 text-sm text-muted-foreground">(61)99524-9559</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="mt-1 text-sm text-muted-foreground">mhcabineeventos@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Endereço</p>
                    <p className="mt-1 text-sm text-muted-foreground">Brasilia - DF</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-sm font-semibold mb-4">Nossas redes sociais</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/mihcabine/#" className="h-10 w-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange transition-all hover:bg-brand-orange hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>

                  <a href="https://wa.me/5561995249559" className="h-10 w-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange transition-all hover:bg-brand-orange hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path> <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path> <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse"> <stop stop-color="#5BD066"></stop> <stop offset="1" stop-color="#27B43E"></stop> </linearGradient> </defs> </g></svg>
                    </svg>
                    
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <h3 className="heading-sm mb-6">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="w-full"
                  />
                </div>
                
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full"
                  />
                </div>
                  
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="data_evento" className="block text-sm font-medium text-gray-900 mb-1">
                      Data do evento
                    </label>
                    <Input
                      id="data_evento"
                      name="data_evento"
                      value={formData.data_evento}
                      type="date"
                      onChange={handleChange}
                      placeholder="Data do evento"
                      min={minDate}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                      Nº de convidados
                    </label>
                    <Input
                      id="numero_convidados"
                      name="numero_convidados"
                      type="number"
                      value={formData.numero_convidados}
                      onChange={handleChange}
                      placeholder="Nº de convidados"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar? Conte-nos mais sobre seu evento..."
                    rows={4}
                    required
                    className="w-full resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
