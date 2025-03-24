import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  color?: string;
}

const ProductCard = ({ 
  title, 
  description, 
  features, 
  imageUrl, 
  color = "bg-brand-orange" 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 ease-in-out",
        "border border-border hover:shadow-xl min-h-card", // Adiciona a classe min-h-card
        isHovered ? "shadow-xl" : "shadow-md"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-96"> {/* Define uma altura fixa maior para a imagem */}
        <img 
          src={imageUrl} 
          alt={`${title} image`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow"> {/* Ajusta a altura do texto */}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <ul className="mt-2 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;
