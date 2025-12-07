import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm top-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="/assets/logo.avif" alt="PixelBoxIndia Logo" className="h-10 w-auto" />
                        <span className="font-bold text-xl text-secondary">Pixelboxindia</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/#home" className="text-secondary hover:text-primary font-medium transition-colors">Home</a>
                        <a href="/#products" className="text-secondary hover:text-primary font-medium transition-colors">Products</a>
                        <a href="/#how-it-works" className="text-secondary hover:text-primary font-medium transition-colors">Process</a>
                        <a href="/#testimonials" className="text-secondary hover:text-primary font-medium transition-colors">Testimonials</a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="https://wa.me/919150115861"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 hover:scale-105 transition-all shadow-lg shadow-primary/30"
                        >
                            Order Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-secondary p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                        <a href="/#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg">Home</a>
                        <a href="/#products" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg">Products</a>
                        <a href="/#how-it-works" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg">Process</a>
                        <a href="/#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg">Testimonials</a>
                        <div className="pt-4">
                            <a
                                href="https://wa.me/919150115861"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-semibold"
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
