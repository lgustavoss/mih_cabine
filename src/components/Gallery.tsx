import { useState } from 'react';
import ImageModal from './ImageModal';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openModal = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    const nextIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setSelectedImageIndex(nextIndex);
  };

  const goToPrevious = () => {
    const previousIndex = (selectedImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
    setSelectedImageIndex(previousIndex);
  };

  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
          onClick={() => openModal(image, index)}
        >
          <div className="aspect-square overflow-hidden relative">
            <img
              src={image}
              alt={`Imagem ${index + 1}`}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              loading="lazy"
              style={{ 
                imageRendering: "high-quality", // Melhor qualidade em navegadores modernos
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)", // Força aceleração de hardware
                willChange: "transform", // Otimiza para transformações
                filter: "contrast(1.05) saturate(1.05)" // Leve aumento de contraste e saturação
              }}
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </div>
      ))}

      <ImageModal
        isOpen={isModalOpen}
        imageUrl={selectedImage}
        onClose={closeModal}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </div>
  );
};

export default Gallery;