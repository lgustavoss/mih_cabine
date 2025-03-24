import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

const GalleryPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Usar o BASE_URL do Vite para respeitar a configuração base
    fetch(`${import.meta.env.BASE_URL}imagens/galeria/images.json`)
      .then(response => response.json())
      .then(data => {
        // Incluir o BASE_URL nos caminhos das imagens
        const imagePaths = data.map((filename: string) => 
          `${import.meta.env.BASE_URL}imagens/galeria/${filename}`
        );
        setImages(imagePaths);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar imagens:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-6xl mt-8">
        <h1 className="text-center text-3xl py-8">Galeria de Fotos</h1>
        
        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg">Carregando imagens...</p>
          </div>
        ) : (
          <Gallery images={images} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;