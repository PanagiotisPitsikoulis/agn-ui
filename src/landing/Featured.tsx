'use client';
import React from 'react';
import ButtonSecondary from '../button/ButtonSecondary';
import Colors from '../lib/Colors';
import H1 from '../typography/H1';
import P from '../typography/P';
import { cn } from '../utils';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { FeaturedProps } from './types';

function Featured({
  className,
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  alternative,
}: FeaturedProps) {
  const imageVariants = {
    initial: {
      x: !alternative ? 150 : -150,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'linear' },
    },
    exit: {
      x: !alternative ? -150 : 150,
      opacity: 0,
      transition: { duration: 0.3, ease: 'linear' },
    },
  };

  return (
    <Colors variant={alternative ? 'secondary' : 'primary'}>
      <div
        className={cn(
          'md:min-h-screen overflow-clip w-full flex flex-col md:flex-row justify-between pt-12 md:pt-28',
          alternative && 'md:flex-row-reverse',
          className
        )}
      >
        <div
          className={cn(
            'flex flex-col w-full h-full gap-20 md:pl-20 md:pr-36 max-md:p-5',
            alternative && 'md:pr-20 md:pl-36'
          )}
        >
          <H1>{title}</H1>
          <P>{description}</P>
          <div>
            <ButtonSecondary
              className={cn(
                'pb-10 text-left mt-auto w-fit text-primary-foreground',
                alternative && 'text-secondary-foreground'
              )}
            >
              {buttonText}
            </ButtonSecondary>
          </div>
        </div>
        <InView as="div" threshold={0.5} triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.img
              ref={ref}
              src={imageSrc}
              className={cn(
                'object-cover ml-auto w-11/12 md:w-3/4 max-md:h-[30rem] rounded-tl-3xl',
                alternative && 'rounded-tr-3xl rounded-tl-none ml-0'
              )}
              variants={imageVariants}
              initial="initial"
              animate={inView ? 'animate' : 'exit'}
            />
          )}
        </InView>
      </div>
    </Colors>
  );
}

export default Featured;
