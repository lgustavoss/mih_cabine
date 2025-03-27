import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Play, Pause } from "lucide-react";
import videoIndex from "/imagens/videoindex.mp4";

const Hero = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false); // Estado para detectar hover

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Erro ao reproduzir vídeo:", err));
    }
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="animate-fade-in-up">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-orange bg-brand-orange/10 rounded-full mb-6">
              Cabines Fotográficas para Eventos
            </span>
            <h1 className="heading-xl mb-6">
              Experiências únicas, <span className="text-brand-orange">memórias eternas</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A MIH Cabine transforma seu evento com nossas cabines fotográficas. Capture momentos especiais com tecnologia de ponta e divirta seus convidados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/#produtos")} className="button-primary">
                Ver serviços
              </button>
              <Link to="/contato" className="button-secondary">
                Solicitar orçamento
              </Link>
            </div>
          </div>
          
          <div className="mt-16 relative w-full max-w-4xl animation-delay-300 animate-fade-in overflow-hidden rounded-xl">
            <div 
              className="aspect-[16/9] bg-black rounded-xl overflow-hidden shadow-2xl image-shine relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <video 
                ref={videoRef}
                src={videoIndex}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              
              {/* Botão de Play/Pause visível apenas no hover */}
              <button 
                onClick={togglePlayPause}
                className={`absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-all duration-300 rounded-xl ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                {isPlaying ? (
                  <Pause className="text-white w-16 h-16" />
                ) : (
                  <Play className="text-white w-16 h-16" />
                )}
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl" />
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
