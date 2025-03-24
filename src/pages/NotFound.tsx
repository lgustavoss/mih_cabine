
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-24">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-orange/10 mb-6">
          <span className="text-4xl text-brand-orange">404</span>
        </div>
        
        <h1 className="heading-lg">Página não encontrada</h1>
        
        <p className="text-muted-foreground mb-8">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="/" 
            className="button-primary"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
