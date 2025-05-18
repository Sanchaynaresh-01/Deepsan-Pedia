import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  backgroundImage?: string;
  video?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true, 
  backgroundImage,
  video 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x);
  const mouseY = useSpring(y);

  const rotateX = useTransform(mouseY, [-100, 100], [30, -30]);
  const rotateY = useTransform(mouseX, [-100, 100], [-30, 30]);
  const scale = useSpring(isHovered ? 1.05 : 1);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`card-3d-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        scale,
        rotateX: hoverEffect ? rotateX : 0,
        rotateY: hoverEffect ? rotateY : 0,
      }}
    >
      <div className={`
        relative overflow-hidden rounded-xl 
        bg-black bg-opacity-30 backdrop-blur-md 
        border border-purple-500 border-opacity-20 
        p-5 transition-all duration-500
        ${hoverEffect ? 'transform-gpu' : ''}
      `}>
        {backgroundImage && (
          <div 
            className="absolute inset-0 opacity-20 transition-opacity duration-500"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        
        {video && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src={video} type="video/mp4" />
          </video>
        )}

        <div className={`
          absolute inset-0 bg-gradient-to-r 
          from-purple-500/10 to-pink-500/10 
          opacity-0 transition-opacity duration-500
          ${isHovered ? 'opacity-100' : ''}
        `} />

        <motion.div
          className="relative z-10"
          style={{
            transformStyle: 'preserve-3d',
            transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
          }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;