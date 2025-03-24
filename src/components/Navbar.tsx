import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/imagens/logo_sem_fundo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string, sectionId: string) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src={logo}
            alt="Mih Cabine Logo" 
            className="h-16 md:h-20"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavigation('/', 'produtos')}
            className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors"
          >
            Produtos
          </button>
          <button
            onClick={() => handleNavigation('/', 'sobre')}
            className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors"
          >
            Sobre
          </button>
          <Link to="/galeria" className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors">
            Galeria
          </Link>
          <Link to="/contato" className="button-primary">
            Solicitar Orçamento
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden p-2 rounded-md text-foreground focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full px-4 py-4 transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => {
                handleNavigation('/', 'produtos');
                setIsMenuOpen(false);
              }}
              className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors py-2"
            >
              Produtos
            </button>
            <button
              onClick={() => {
                handleNavigation('/', 'sobre');
                setIsMenuOpen(false);
              }}
              className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors py-2"
            >
              Sobre
            </button>
            <Link 
              to="/galeria" 
              className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </Link>
            <Link 
              to="/contato" 
              className="button-primary my-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;