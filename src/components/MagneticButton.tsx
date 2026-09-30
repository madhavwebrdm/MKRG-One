import type { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  strength?: number;
};

export default function MagneticButton({
  href,
  onClick,
  children,
  className = "",
}: Props) {
  const content = (
    <span className="inline-flex items-center gap-2">{children}</span>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
