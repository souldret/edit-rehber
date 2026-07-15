"use client";

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      className="print-btn"
      onClick={handlePrint}
      aria-label="Sayfayı yazdır"
      title="Yazdır"
    >
      <i className="fas fa-print" aria-hidden="true" />
    </button>
  );
}