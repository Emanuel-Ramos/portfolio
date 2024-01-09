export interface FloatingImgsProps {
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
  img: string;
  width: number;
  height: number;
  animation?: EnumAnimation;
  zIndex?: number;
  overflow?: string;
}

export enum EnumAnimation {
  slideInFromLeft = "slideInFromLeft",
  slideInFromRight = "slideInFromRight",
}
