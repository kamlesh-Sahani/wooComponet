'use client';
import React, { useRef, useEffect, RefObject } from 'react';
import { component_names } from './constants/components';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from 'next/link'

const NavMenu = () => {
  const scrollRef:RefObject<HTMLDivElement> = useRef(null);

  const scroll = (direction:string) => {
    if (scrollRef.current) {
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
      }
    } else {
      console.log('scrollRef.current is null'); // Debug log
    }
  };

  useEffect(() => {
    console.log('scrollRef:', scrollRef); // Debug log
  }, []);

  return (
    <div className='flex h-10 items-center bg-[#131317a4] border-b-[0.1px] border-[#1C2226]'>
      <FaAngleLeft style={{ color: "#ffff", width: 70, height: 22, cursor: 'pointer' }} onClick={() => scroll('left')} />
      <div ref={scrollRef} className='flex justify-between items-center gap-10 overflow-hidden overflow-x-scroll no-scrollbar px-3 h-7 text-[#ffff]'>
        {component_names.map((component, index) => (
          <Link href='/' key={index}>
            <h1 className='hover:text-[#ffff] max-md:text-sm active:text-[#9370DB] text-[#d0d1d5]'>{component}</h1>
          </Link>
        ))}
      </div>
      <FaAngleRight style={{ color: "#ffff", width: 70, height: 22, cursor: 'pointer' }} onClick={() => scroll('right')} />
    </div>
  )
}

export default NavMenu