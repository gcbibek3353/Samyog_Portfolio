'use client'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['DevOps and Cloud Engineer.', 'Samyog Ghimire.','Learner.'],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy(); // Cleanup on unmount
        };
    }, []);

    return (
        <div>
            <h1 className="text-4xl font-bold text-white mb-4">
                Hello, <br /> I&apos;m <span className="text-blue-600" ref={typedElement}></span>
                <span className="ml-1 animate-blink"></span>
            </h1>
            {/* <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Nepal 
            </p> */}
        </div>
    );
};

export default TypingEffect;
