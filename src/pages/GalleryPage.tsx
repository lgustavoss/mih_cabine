import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

const GalleryPage = () => {
  const [media, setMedia] = useState<{ url: string; type: 'image' | 'video' }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}imagens/galeria/media.json`)
      .then(response => response.json())
      .then(data => {
        const mediaItems = data.map((filename: string) => {
          const isVideo = filename.endsWith('.mp4') || filename.endsWith('.webm') || filename.endsWith('.mov');
          return {
            url: `${import.meta.env.BASE_URL}imagens/galeria/${filename}`,
            type: isVideo ? 'video' : 'image'
          };
        });

        setMedia(mediaItems);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar mídia:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-6xl mt-8">
        <h1 className="text-center text-3xl py-8">Galeria de Fotos e Vídeos</h1>
        
        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg">Carregando mídia...</p>
          </div>
        ) : (
          <Gallery media={media} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
