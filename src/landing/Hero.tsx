import React from 'react';
import Colors from '../lib/Colors';
import { cn } from '../utils';
import H1 from '../typography/H1';
import P from '../typography/P';
import Button from '../button/Button';
import ButtonSecondary from '../button/ButtonSecondary';
import { ChevronDown } from 'lucide-react';
import { HeroProps } from './types';

function Hero({
  className,
  title,
  description,
  buttonText,
  imageSrc,
  secondaryButtonText,
}: HeroProps) {
  return (
    <Colors variant="secondary">
      <div className={cn('w-full min-h-screen', className)}>
        <img className="absolute object-cover w-full h-screen" src={imageSrc} />
        <section className="absolute flex flex-col items-center justify-center w-full h-screen gap-5 max-md:p-4">
          <H1 className="text-8xl md:text-9xl font-bold text-center">
            {title}
          </H1>
          <P className="md:text-xl text-center">{description}</P>
          <div className="size-10"></div>
          <div className="flex items-center justify-center gap-10">
            <Button icon={<ChevronDown />}>{buttonText}</Button>
            <ButtonSecondary className="text-secondary-foreground">
              {secondaryButtonText}
            </ButtonSecondary>
          </div>
        </section>
      </div>
    </Colors>
  );
}

export default Hero;
