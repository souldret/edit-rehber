import { ReactNode } from "react";

interface TipBoxProps {
  icon?: string;
  title?: string;
  children: ReactNode;
}

export default function TipBox({
  icon = "fa-lightbulb",
  title,
  children,
}: TipBoxProps) {
  return (
    <aside className="tip-box" role="note" aria-label={title ?? "İpucu"}>
      <i className={`fas ${icon}`} aria-hidden="true" />
      <div className="callout-body">
        {title && <strong className="callout-title">{title}</strong>}
        <div className="callout-content">{children}</div>
      </div>
    </aside>
  );
}