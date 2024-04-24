import React from 'react';
import { ChevronRight } from 'lucide-react';
import Colors from '../lib/Colors';
import { cn } from '../utils';
import H1 from '../typography/H1';
import P from '../typography/P';
import Button from '../button/Button';
import { GalleryProps } from './types';

function Gallery({
  className,
  title,
  description,
  buttonText,
  imageSrc,
  imageSrc2,
  imageSrc3,
}: GalleryProps) {
  return (
    <Colors variant="secondary">
      <div
        className={cn(
          'min-h-screen w-full flex flex-col justify-between pt-10 md:pt-28 gap-20',
          className
        )}
      >
        <div
          className={cn(
            'flex flex-col w-full h-full gap-20 md:pl-20 max-w-4xl max-md:p-5'
          )}
        >
          <H1>{title}</H1>
          <P className="max-w-xl">{description}</P>
          <Button
            icon={<ChevronRight />}
            className="bg-primary text-secondary border-secondary"
          >
            {buttonText}
          </Button>
        </div>
        <div className="flex md:h-[35rem] flex-col md:flex-row gap-10 overflow-hidden">
          <img
            src={imageSrc}
            className={cn(
              'object-cover md:w-[35vw] rounded-tl-3xl',
              'rounded-tr-3xl rounded-tl-none'
            )}
          />
          <img
            src={imageSrc2}
            className={cn(
              'object-cover md:w-[35vw] rounded-tmd:l-3xl max-md:hidden'
            )}
          />
          <img
            src={imageSrc3}
            className={cn(
              'object-cover md:w-[35vw] rounded-tmd:l-3xl max-md:hidden',
              'rounded-tr-3xl rounded-tl-none'
            )}
          />
        </div>
      </div>
    </Colors>
  );
}

export default Gallery;
