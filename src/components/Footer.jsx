import React from 'react';
import { Instagram, Facebook, Youtube, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-start text-left gap-10">


                    {/* Navigation Section */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-secondary">Navigation</h3>
                        <div className="flex flex-col gap-3">
                            <a href="/#home" className="text-gray-500 hover:text-primary transition-colors">Home</a>
                            <a href="/#how-it-works" className="text-gray-500 hover:text-primary transition-colors">Process</a>
                            <a href="/#products" className="text-gray-500 hover:text-primary transition-colors">Products</a>
                            <a href="/#testimonials" className="text-gray-500 hover:text-primary transition-colors">Testimonials</a>
                            <a href="/#faq" className="text-gray-500 hover:text-primary transition-colors">Questions</a>
                        </div>
                    </div>

                    {/* Follow Us Section */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-secondary">Follow Us</h3>
                        <div className="flex gap-6 justify-start">
                            <a href="https://www.instagram.com/pixelboxindia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/pixelboxindia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.youtube.com/@pixelboxindia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                                <Youtube size={20} />
                            </a>
                            <a href="https://wa.me/919150115861" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                                <Phone size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Legal Section */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-secondary">Legal</h3>
                        <div className="flex gap-2 justify-start text-gray-500">
                            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
                            <span>|</span>
                            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        </div>
                        <p className="text-gray-400 text-sm mt-4">© 2025 Pixelboxindia. All rights reserved.</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
