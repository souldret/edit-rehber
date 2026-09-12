/**
 * Merkezi toast/notification yardımcısı.
 * DOM manipülasyonunu tek bir yerde toplar, her bileşende tekrarı önler.
 */

export type ToastType = "success" | "error" | "info";

export function showToast(message: string, type: ToastType = "success"): void {
  if (typeof document === "undefined") return;

  const el = document.createElement("div");
  el.className = `notification show ${type}`;
  el.setAttribute("role", "status");
  el.setAttribute("aria-live", "polite");

  const icon = document.createElement("i");
  icon.className = `fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}`;
  icon.setAttribute("aria-hidden", "true");

  const span = document.createElement("span");
  span.textContent = message;

  el.appendChild(icon);
  el.appendChild(span);
  document.body.appendChild(el);

  window.setTimeout(() => {
    el.classList.remove("show");
    window.setTimeout(() => {
      el.remove();
    }, 400);
  }, 2500);
}
