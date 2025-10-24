/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  src: string; // PNG of ONE seamless segment
  segmentWidth: number; // CSS px width of that segment (not @2x pixels)
  height: string; // CSS px height
  durationSec?: number; // how long to move exactly one segment
  direction?: 'left' | 'right';
  className?: string;
};

const AnimationBanner = ({
  src,
  segmentWidth,
  height,
  durationSec = 14,
  direction = 'left',
  className = '',
}: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(4);

  // Cover viewport + 2 tiles (one leading, one trailing)
  useEffect(() => {
    const calc = () => {
      const needed = Math.ceil(window.innerWidth / segmentWidth) + 2;
      setCount(needed);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => removeEventListener('resize', calc);
  }, [segmentWidth]);

  // Rotate one child each animation cycle (no React state updates)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onIter = () => {
      if (direction === 'left') {
        const first = el.firstElementChild;
        if (first) el.appendChild(first);
      } else {
        const last = el.lastElementChild;
        if (last) el.insertBefore(last, el.firstElementChild);
      }
    };

    el.addEventListener('animationiteration', onIter);
    return () => removeEventListener('animationiteration', onIter);
  }, [direction]);

  const tiles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => (
        <img
          key={i}
          src={src}
          alt=''
          width={segmentWidth}
          height={height}
          style={{
            width: segmentWidth,
            height,
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )),
    [count, src, segmentWidth, height]
  );

  const dist = direction === 'left' ? -segmentWidth : segmentWidth;

  return (
    <div
      className={`anim-wrap ${className}`}
      style={{ height, overflow: 'hidden', lineHeight: 0 }}
      aria-hidden='true'
    >
      <div
        ref={trackRef}
        className='anim-track'
        style={
          {
            display: 'flex',
            willChange: 'transform',
            animation: `slide ${durationSec}s linear infinite`,
            // expose CSS vars for the keyframes
            ['--dist' as any]: `${dist}px`,
          } as React.CSSProperties
        }
      >
        {tiles}
      </div>
      <style>
        {`
            @keyframes slide {
            from { transform: translate3d(0,0,0); }
            to   { transform: translate3d(var(--dist),0,0); }
            }
            `}
      </style>
    </div>
  );
};

export default AnimationBanner;
