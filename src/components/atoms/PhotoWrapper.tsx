import { forwardRef, CSSProperties } from "react";

interface PhotoWrapperProps {
  url: string;
  index: number;
  faded?: boolean;
  style?: CSSProperties;
}

export const PhotoWrapper = forwardRef<HTMLDivElement, PhotoWrapperProps>(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
      opacity: faded ? 0.2 : 1,
      transformOrigin: "0 0",
      height: index === 0 ? 410 : 200,
      gridRowStart: index === 0 ? "span 2" : undefined,
      gridColumnStart: index === 0 ? "span 2" : undefined,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      ...style,
    };

    return <div ref={ref} style={inlineStyles} {...props} />;
  }
);
