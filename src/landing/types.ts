interface TextProps {
  title: string;
  description: string;
}

interface ButtonProps {
  buttonText: string;
  buttonLink: string;
}

interface SecondaryButtonProps {
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

interface ImageProps {
  imageSrc: string;
}

interface BaseProps extends TextProps {
  className?: string;
}

export interface HeroProps
  extends BaseProps,
    ImageProps,
    ButtonProps,
    SecondaryButtonProps {}

export interface FeaturedProps extends BaseProps, ButtonProps, ImageProps {
  alternative?: boolean;
}

export interface ContactProps extends BaseProps {
  extraText: string;
  emailLabel: string;
  messageLabel: string;
  submitButtonText: string;
}

export interface GalleryProps extends BaseProps, ButtonProps, ImageProps {
  imageSrc2: string;
  imageSrc3: string;
}
