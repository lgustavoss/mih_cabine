import React, { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
  onNext,
  onPrevious
}) => {
  useEffect(() => {
    // Desabilita o scroll enquanto o modal estiver aberto
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Adiciona o listener de eventos para as teclas
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(event.key); // Debug: Verificar qual tecla foi pressionada
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onNext();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative flex items-center">
        {/* Setas de navegação */}
        <button
          onClick={onPrevious}
          className="absolute left-[-90px] text-white text-4xl bg-black bg-opacity-50 rounded-full p-2"
        >
          ←
        </button>

        <img
          src={imageUrl}
          alt="Imagem ampliada"
          className="max-w-full max-h-screen rounded-lg shadow-lg"
        />

        <button
          onClick={onNext}
          className="absolute right-[-90px] text-white text-4xl bg-black bg-opacity-50 rounded-full p-2"
        >
          →
        </button>

        {/* Botão para fechar o modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl bg-black rounded-full p-2"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
