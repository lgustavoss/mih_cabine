import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

// Importação direta das imagens
import cabineFotografica from '/imagens/cabine_fotografica2.jpg';
import cabineEspelhada from '/imagens/cabine_espelhada2.jpg';
import totemRetro from '/imagens/totem_retro1.jpg';
import plataforma360 from '/imagens/plataforma_360.jpg';
import cabineCapaRevista from '/imagens/cabine_capa_revista1.jpg';
import tunelInfinito from '/imagens/tunel_infinito1.jpg';
import torreLed from '/imagens/torre_led1.jpg';
import pistaLed from '/imagens/pista_led.jpg';
import barraLed from '/imagens/barra_led_plataforma.jpg';
import sobreImagem from '/imagens/logo_fundo_branco.png';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const products = [
    {
      title: "Cabine Fotográfica",
      description: "Transforme sua festa em uma experiência inesquecível com nossa cabine fotográfica.",
      features: [
        "✨ Fotos instantâneas e personalizadas",
        "✨ Diversão garantida para todas as idades",
        "✨ Cenários e adereços incríveis para interagir"
      ],
      imageUrl: cabineFotografica
    },
    {
      title: "Cabine Espelhada",
      description: "Surpreenda seus convidados com uma experiência interativa e sofisticada!",
      features: [
        "✨ Fotos de alta qualidade e interativas",
        "✨ Animações, filtros e assinaturas personalizadas",
        "✨ Um toque de glamour e inovação para sua festa"
      ],
      imageUrl: cabineEspelhada
    },
    {
      title: "Totem Retrô",
      description: "Reviva o charme do passado com um toque moderno! O Totem Retrô traz um design vintage irresistível.",
      features: [
        "✨ Design vintage",
        "✨ Fotos instantâneas",
        "✨ Diversão garantida"
      ],
      imageUrl: totemRetro
    },
    {
      title: "Plataforma 360°",
      description: "Transforme seu evento em uma experiência cinematográfica! Com a Plataforma 360°, seus convidados criam vídeos incríveis.",
      features: [
        "✨ Vídeos em 360° com efeitos incríveis",
        "✨ Compartilhamento instantâneo para redes sociais",
        "✨ Uma experiência interativa e inesquecível"
      ],
      imageUrl: plataforma360
    },
    {
      title: "Cabine Capa de Revista",
      description: "Sinta-se como uma celebridade e brilhe na capa da sua própria revista!",
      features: [
        "✨ Ideal para casamentos, aniversários e eventos corporativos",
        "✨ Capas personalizadas para combinar com seu estilo",
        "✨ Diferentes fundos e temas para uma experiência única"
      ],
      imageUrl: cabineCapaRevista
    },
    {
      title: "Túnel Infinito",
      description: "Surpreenda seus convidados com uma ilusão de ótica incrível! O Túnel Infinito cria uma sensação de profundidade sem fim.",
      features: [
        "✨ Efeito visual fascinante e interativo",
        "✨ Cenário perfeito para vídeos impactantes",
        "✨ O toque mágico que faltava no seu evento"
      ],
      imageUrl: tunelInfinito
    },
  ];
  
  const additionalProducts = [
    {
      title: "Torre Seta de LED",
      description: "Transforme seu evento em um espetáculo visual! Com um design moderno e impactante.",
      features: [
        "✨ Design moderno",
        "✨ Iluminação LED",
        "✨ Impacto visual garantido"
      ],
      imageUrl: torreLed
    },
    {
      title: "Pista de LED",
      description: "Transforme seu evento com nossa incrível Pista de LED! Com cores vibrantes e efeitos dinâmicos.",
      features: [
        "✨ Cores vibrantes e efeitos dinâmicos",
        "✨ Ambiente futurista e interativo",
        "✨ Perfeito para manter a pista animada"
      ],
      imagePlaceholder: "Pista de LED",
      imageUrl: pistaLed
    },
    {
      title: "Barras de LED",
      description: "Destaque ainda mais a sua Plataforma 360° com Barras de LED! Uma iluminação impressionante.",
      features: [
        "✨ Iluminação impressionante para sua plataforma",
        "✨ Vídeos ainda mais impactantes",
        "✨ Espetáculo visual inesquecível"
      ],
      imagePlaceholder: "Barras de LED",
      imageUrl: barraLed
    },
  ];
  
  return (
    <div className={cn("transition-opacity duration-500", isLoaded && "opacity-100")}>
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Products Section */}
        <section id="produtos" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 text-xs font-medium text-brand-orange bg-brand-orange/10 rounded-full mb-6">
                Nossos produtos
              </span>
              <h2 className="heading-lg mb-4">Cabines fotográficas para todos os eventos</h2>
              <p className="text-muted-foreground">
                Nossas cabines fotográficas são perfeitas para casamentos, aniversários, formaturas, 
                festas corporativas e muito mais.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={product.title} 
                  className={cn(
                    "opacity-0",
                    isLoaded && "animate-fade-in-up opacity-100",
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard 
                    title={product.title}
                    description={product.description}
                    features={product.features}
                    imageUrl={product.imageUrl}
                  />
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto text-center mt-20 mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 text-xs font-medium text-brand-orange bg-brand-orange/10 rounded-full mb-6">
                Adicionais
              </span>
              <h2 className="heading-lg mb-4">Torne seu evento ainda mais especial</h2>
              <p className="text-muted-foreground">
                Complementos exclusivos para tornar sua experiência ainda mais memorável.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalProducts.map((product, index) => (
                <div 
                  key={product.title} 
                  className={cn(
                    "opacity-0",
                    isLoaded && "animate-fade-in-up opacity-100",
                  )}
                  style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                >
                  <ProductCard 
                    title={product.title}
                    description={product.description}
                    features={product.features}
                    imageUrl={product.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="sobre" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-right">
                <span className="inline-block px-3 py-1 text-xs font-medium text-brand-orange bg-brand-orange/10 rounded-full mb-6">
                  Sobre nós
                </span>
                <h2 className="heading-lg mb-6">Criando memórias inesquecíveis para cada evento</h2>
                <p className="text-muted-foreground mb-6">
                  Somos uma empresa especializada em cabines fotográficas para eventos, 
                  com o compromisso de proporcionar experiências únicas e memoráveis para nossos clientes.
                </p>
                <p className="text-muted-foreground mb-6">
                  Nossa missão é transformar momentos em lembranças eternas, através de equipamentos de alta qualidade, 
                  atendimento personalizado e inovação constante.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl font-bold text-brand-orange mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Eventos realizados</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl font-bold text-brand-orange mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Anos de experiência</div>
                  </div>
                </div>
                <a href="#contato" className="button-primary">
                  Entre em contato
                </a>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl image-shine">
                    <img 
                      src={sobreImagem}
                      alt="Cabine Fotográfica Mih Cabine" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute -right-6 -bottom-6 w-48 h-48 rounded-2xl border-4 border-brand-orange/20 -z-10" />
                  <div className="absolute -z-20 -left-10 -top-10 w-full h-full bg-brand-orange/5 rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      
      <Footer />
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-brand-orange text-white shadow-lg hover:bg-brand-orange/90 transition-colors z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}

export default Index;
