import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scaleOnHover?: number;
  glare?: boolean;
};

export default function TiltCard({ children, className = "" }: Props) {
  return (
    <div className={`relative transition-transform duration-300 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}
