import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How do I upload my photos?",
        answer: "You can share your photos via WhatsApp or Email after placing your order. Our team will guide you in selecting the best quality images for your artwork."
    },
    {
        question: "Can I see a preview before printing?",
        answer: "Yes! We provide 2 free previews. We will modify the artwork until you are 100% satisfied before we proceed to printing and framing."
    },
    {
        question: "How long does delivery take?",
        answer: "Typically, it takes 3-5 working days for delivery across India. This includes the time for designing, printing, framing, and shipping."
    },
    {
        question: "Is shipping really free?",
        answer: "Absolutely! We offer FREE shipping on all orders across India, with no hidden charges."
    },
    {
        question: "What if I receive a damaged product?",
        answer: "In the rare case of damage during transit, simply send us an unpacking video/photo within 3 days of receiving your order, and we will replace your order for free ."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-secondary mb-2">Any questions</h2>
                    <p className="text-2xl text-secondary text-gray-400">Find answers here</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left"
                            >
                                <span className="font-semibold text-lg text-secondary">{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="px-6 pb-6 text-gray-500 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
