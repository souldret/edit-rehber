import { ReactNode } from "react";

interface WarningBoxProps {
  icon?: string;
  title?: string;
  children: ReactNode;
}

export default function WarningBox({
  icon = "fa-exclamation-triangle",
  title,
  children,
}: WarningBoxProps) {
  return (
    <aside className="warning-box" role="note" aria-label={title ?? "Uyarı"}>
      <i className={`fas ${icon}`} aria-hidden="true" />
      <div className="callout-body">
        {title && <strong className="callout-title">{title}</strong>}
        <div className="callout-content">{children}</div>
      </div>
    </aside>
  );
}