import { useState } from 'react';
import ImageModal from './ImageModal';

interface GalleryProps {
  media: { url: string; type: 'image' | 'video' }[];
}

const Gallery: React.FC<GalleryProps> = ({ media }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<{ url: string; type: 'image' | 'video' } | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openModal = (mediaItem: { url: string; type: 'image' | 'video' }, index: number) => {
    setSelectedMedia(mediaItem);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    const nextIndex = (selectedIndex + 1) % media.length;
    setSelectedMedia(media[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const goToPrevious = () => {
    const previousIndex = (selectedIndex - 1 + media.length) % media.length;
    setSelectedMedia(media[previousIndex]);
    setSelectedIndex(previousIndex);
  };

  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {media.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
          onClick={() => openModal(item, index)}
        >
          <div className="aspect-square overflow-hidden relative">
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt={`Mídia ${index + 1}`}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                loading="lazy"
              />
            ) : (
              <video
                src={item.url}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                muted
                loop
                playsInline
              />
            )}
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </div>
      ))}

      {selectedMedia && (
        <ImageModal
          isOpen={isModalOpen}
          media={selectedMedia}
          onClose={closeModal}
          onNext={goToNext}
          onPrevious={goToPrevious}
        />
      )}
    </div>
  );
};

export default Gallery;
