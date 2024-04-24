import React from 'react';
import { cn } from '../utils';
import Button from '../button/Button';
import H1 from '../typography/H1';
import P from '../typography/P';
import Colors from '../lib/Colors';

export type ContactProps = {
  className?: string;
  title: string;
  description: string;
  extraText: string;
  emailLabel: string;
  messageLabel: string;
  submitButtonText: string;
};

function Contact({
  className,
  title,
  description,
  extraText,
  emailLabel,
  messageLabel,
  submitButtonText,
}: ContactProps) {
  return (
    <Colors>
      <div
        className={cn(
          'min-h-screen w-full flex flex-col md:flex-row justify-between max-md:py-10',
          className
        )}
      >
        <div className="flex flex-col max-w-4xl gap-10 p-5 md:p-20">
          <H1>{title}</H1>
          <P className="max-w-xl text-left">{description}</P>
          <div className="flex flex-row gap-5">
            <img src="/icons/fb.svg" className="size-12" />
            <img src="/icons/messenger.svg" className="size-12" />
            <img src="/icons/instagram.svg" className="size-12" />
            <img src="/icons/phone.svg" className="size-12" />
          </div>
          <div className="size-10"></div>
          <p className="max-w-xl text-xl tracking-tight text-left max-md:hidden">
            {extraText}
          </p>
        </div>
        <form className="flex flex-col p-5 text-2xl max-md:mx-auto max-md:w-11/12 md:p-10 md:w-full md:m-20 rounded-xl bg-primary-foreground text-primary">
          <label htmlFor="email" className="text-lg font-semibold">
            {emailLabel}
          </label>
          <div className="size-3"></div>
          <input
            id="email"
            type="email"
            className="p-1.5 md:p-3 bg-primary rounded-md md:min-h-14 min-h-10 text-primary-foreground"
          />
          <div className="size-6 md:size-10"></div>
          <label htmlFor="msg" className="text-lg font-semibold">
            {messageLabel}
          </label>
          <div className="size-3"></div>
          <textarea
            id="msg"
            className="bg-primary rounded-md text-primary-foreground min-h-[20rem] p-1.5 md:p-3"
          />
          <div className="size-10"></div>
          <Button className="mt-auto border-none rounded-md bg-primary text-primary-foreground w-fit">
            {submitButtonText}
          </Button>
        </form>
      </div>
    </Colors>
  );
}

export default Contact;
