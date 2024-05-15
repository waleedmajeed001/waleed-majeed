'use client';

import { motion } from 'framer-motion';
//hooks
import useScrollProgress from '../hooks/useScrollProgress';


//varients
const variants = {
    hidden: { optacity: 0},
    enter: {opacity: 1},
};

const Template = ({ children }) => {
    const completion = useScrollProgress();
    return (
        <>
        <motion.main
            varients={variants}
            initial="hidden"
            animate="enter"
            transition={{ type: 'liner', delay: 0.2, duration: 0.4 }}
        >
            {children}
            </motion.main>
            {/* completion bar */}
            <span
            style={{ transform: `translateY(${completion - 100}%)`}}
             className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700'></span>
            <div className='h-[4000px]'></div>
        </>
    );
};

export default Template;