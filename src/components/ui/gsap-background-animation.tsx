"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { MutableRefObject } from "react";

interface BackgroundAnimationProps {
  enabled?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  primaryColor?: string;
  className?: string;
}

export const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({
  enabled = true,
  intensity = 'high',
  primaryColor = '#10B981',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>(null) as MutableRefObject<gsap.core.Timeline | null>;;

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;
    const tl = gsap.timeline({ repeat: -1 });
    timelineRef.current = tl;

    // Animation settings based on intensity
    const settings = {
      low: { 
        particleCount: 15, 
        shapeCount: 8, 
        orbCount: 3,
        codeSymbolCount: 4,
        animationSpeed: 1,
        opacity: 0.1
      },
      medium: { 
        particleCount: 25, 
        shapeCount: 12, 
        orbCount: 5,
        codeSymbolCount: 6,
        animationSpeed: 1.5,
        opacity: 0.15
      },
      high: { 
        particleCount: 35, 
        shapeCount: 16, 
        orbCount: 7,
        codeSymbolCount: 8,
        animationSpeed: 2,
        opacity: 2
      }
    };

    const config = settings[intensity];

    // Create floating particles
    const createParticle = (index: number) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${gsap.utils.random(2, 6)}px;
        height: ${gsap.utils.random(2, 6)}px;
        background: ${primaryColor};
        border-radius: 50%;
        opacity: ${config.opacity};
        will-change: transform;
      `;
      
      gsap.set(particle, {
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        scale: gsap.utils.random(0.5, 1.5)
      });

      container.appendChild(particle);
      
      // Animate particle
      const duration = gsap.utils.random(15, 30) / config.animationSpeed;
      const delay = gsap.utils.random(0, 5);
      
      tl.to(particle, {
        x: `+=${gsap.utils.random(-200, 200)}`,
        y: `+=${gsap.utils.random(-200, 200)}`,
        rotation: gsap.utils.random(0, 360),
        scale: gsap.utils.random(0.3, 1.8),
        duration,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay
      }, index * 0.1);

      return particle;
    };

    // Create geometric shapes
    const createGeometricShape = (index: number) => {
      const shapes = ['circle', 'triangle', 'hexagon', 'square'];
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
      const size = gsap.utils.random(20, 60);
      
      const shape = document.createElement('div');
      shape.className = `shape ${shapeType}`;
      
      let shapeStyles = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        opacity: ${config.opacity * 0.8};
        will-change: transform;
      `;

      switch (shapeType) {
        case 'circle':
          shapeStyles += `
            background: linear-gradient(135deg, ${primaryColor}40, #3B82F640);
            border-radius: 50%;
          `;
          break;
        case 'triangle':
          shapeStyles += `
            width: 0;
            height: 0;
            border-left: ${size/2}px solid transparent;
            border-right: ${size/2}px solid transparent;
            border-bottom: ${size}px solid ${primaryColor}30;
          `;
          break;
        case 'hexagon':
          shapeStyles += `
            background: ${primaryColor}20;
            clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
          `;
          break;
        case 'square':
          shapeStyles += `
            background: linear-gradient(45deg, ${primaryColor}30, #6B728030);
            border-radius: 4px;
            transform: rotate(45deg);
          `;
          break;
      }

      shape.style.cssText = shapeStyles;
      
      gsap.set(shape, {
        x: gsap.utils.random(-100, window.innerWidth + 100),
        y: gsap.utils.random(-100, window.innerHeight + 100),
        rotation: gsap.utils.random(0, 360)
      });

      container.appendChild(shape);

      // Animate shape
      const duration = gsap.utils.random(20, 40) / config.animationSpeed;
      const delay = gsap.utils.random(0, 8);

      tl.to(shape, {
        x: `+=${gsap.utils.random(-300, 300)}`,
        y: `+=${gsap.utils.random(-300, 300)}`,
        rotation: `+=${gsap.utils.random(180, 720)}`,
        scale: gsap.utils.random(0.5, 1.5),
        duration,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay
      }, index * 0.2);

      return shape;
    };

    // Create gradient orbs
    const createGradientOrb = (index: number) => {
      const orb = document.createElement('div');
      const size = gsap.utils.random(100, 200);
      
      orb.className = 'gradient-orb';
      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, ${primaryColor}15, transparent 70%);
        border-radius: 50%;
        filter: blur(1px);
        opacity: ${config.opacity * 0.6};
        will-change: transform;
      `;

      gsap.set(orb, {
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        scale: gsap.utils.random(0.5, 1)
      });

      container.appendChild(orb);

      // Animate orb with pulsing effect
      const duration = gsap.utils.random(25, 45) / config.animationSpeed;
      const delay = gsap.utils.random(0, 10);

      tl.to(orb, {
        x: `+=${gsap.utils.random(-400, 400)}`,
        y: `+=${gsap.utils.random(-200, 200)}`,
        scale: `+=${gsap.utils.random(-0.3, 0.5)}`,
        duration,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay
      }, index * 0.3);

      // Add pulsing animation
      tl.to(orb, {
        opacity: config.opacity * 1.2,
        duration: gsap.utils.random(3, 8),
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay: delay + gsap.utils.random(0, 5)
      }, 0);

      return orb;
    };

    // Create code symbols
    const createCodeSymbol = (index: number) => {
      const symbols = ['</', '{}', '[]', '()', '<>', '&&', '||', '=>'];
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      
      const element = document.createElement('div');
      element.className = 'code-symbol';
      element.textContent = symbol;
      element.style.cssText = `
        position: absolute;
        font-family: 'Fira Code', 'SF Mono', monospace;
        font-size: ${gsap.utils.random(14, 24)}px;
        color: ${primaryColor};
        opacity: ${config.opacity * 0.7};
        font-weight: 500;
        pointer-events: none;
        will-change: transform;
      `;

      gsap.set(element, {
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        rotation: gsap.utils.random(-15, 15)
      });

      container.appendChild(element);

      // Animate code symbol
      const duration = gsap.utils.random(30, 50) / config.animationSpeed;
      const delay = gsap.utils.random(0, 15);

      tl.to(element, {
        x: `+=${gsap.utils.random(-150, 150)}`,
        y: `+=${gsap.utils.random(-100, 100)}`,
        rotation: `+=${gsap.utils.random(-30, 30)}`,
        duration,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay
      }, index * 0.4);

      // Add fade in/out effect
      tl.fromTo(element, 
        { opacity: 0 },
        {
          opacity: config.opacity * 0.7,
          duration: 2,
          ease: 'power2.inOut',
          delay: delay + gsap.utils.random(5, 20)
        }, 0
      );

      tl.to(element, {
        opacity: 0,
        duration: 2,
        ease: 'power2.inOut',
        delay: delay + gsap.utils.random(25, 40)
      }, 0);

      return element;
    };

    // Create all elements with staggered animations
    const particles: HTMLElement[] = [];
    const shapes: HTMLElement[] = [];
    const orbs: HTMLElement[] = [];
    const codeSymbols: HTMLElement[] = [];

    // Generate particles
    for (let i = 0; i < config.particleCount; i++) {
      particles.push(createParticle(i));
    }

    // Generate shapes with stagger
    for (let i = 0; i < config.shapeCount; i++) {
      shapes.push(createGeometricShape(i));
    }

    // Generate orbs
    for (let i = 0; i < config.orbCount; i++) {
      orbs.push(createGradientOrb(i));
    }

    // Generate code symbols
    for (let i = 0; i < config.codeSymbolCount; i++) {
      codeSymbols.push(createCodeSymbol(i));
    }

    // Handle resize
    const handleResize = () => {
      [...particles, ...shapes, ...orbs, ...codeSymbols].forEach(element => {
        if (element && element.parentNode) {
          gsap.set(element, {
            x: gsap.utils.random(0, window.innerWidth),
            y: gsap.utils.random(0, window.innerHeight)
          });
        }
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      [...particles, ...shapes, ...orbs, ...codeSymbols].forEach(element => {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [enabled, intensity, primaryColor]);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      style={{
        background: 'transparent'
      }}
    />
  );
};