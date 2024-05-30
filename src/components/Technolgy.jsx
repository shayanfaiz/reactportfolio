import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandMongodb } from 'react-icons/tb'
import { TbBrandHtml5 } from 'react-icons/tb'
import { TbBrandAdonisJs} from 'react-icons/tb'
import { TbBrandCss3} from 'react-icons/tb'
import {  motion } from "framer-motion"
import React from 'react'

const iconVariant = (duration) => ({
    initial: { y: 10 },
    animation: {
        y: [10,-10],
        transition: {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technolgy = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
         className='my-20 text-center text-4xl'>Technolgies</motion.h2> 
     <motion.div
     whileInView={{opacity:1,x:0}}
     initial={{opacity:0,x:-100}}
     transition={{duration:1.5}}

      className='flex flex-wrap gap-4 item-center justify-center'>
     <motion.div
                    variants={iconVariant(6)}
                    initial='initial'
                    animate='animation'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400'/>
                </motion.div>

        <motion.div
         variants={iconVariant(5)}
         initial='initial'
         animate='animation'
         className='rounded-2xl border-4 border-neutral-800 p-4' >
            <TbBrandNextjs className='text-7xl text-white-400'/>
        </motion.div>
        <motion.div
        variants={iconVariant(5)}
        initial='initial'
        animate='animation'
         className='rounded-2xl border-4 border-neutral-800 p-4' >
            <TbBrandMongodb className='text-7xl text-green-400'/>
        </motion.div>
        <motion.div
        variants={iconVariant(6)}
        initial='initial'
        animate='animation'
         className='rounded-2xl border-4 border-neutral-800 p-4' >
            <TbBrandHtml5 className='text-7xl text-orange-500'/>
        </motion.div>
        <motion.div
        variants={iconVariant(5)}
        initial='initial'
        animate='animation' className='rounded-2xl border-4 border-neutral-800 p-4' >
            <TbBrandCss3 className='text-7xl text-red-400'/>
        </motion.div>
        <motion.div
        variants={iconVariant(6)}
        initial='initial'
        animate='animation'
         className='rounded-2xl border-4 border-neutral-800 p-4' >
            <TbBrandAdonisJs className='text-7xl text-cyan-400'/>
        </motion.div>
        </motion.div>        
    </div>
  )
}

export default Technolgy
