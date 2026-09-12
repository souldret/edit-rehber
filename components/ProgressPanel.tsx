"use client";

import { useState, useEffect } from "react";
import { SECTIONS } from "@/lib/sections";
import {
  getCompletedSections,
  markSectionCompleted,
  getReadingTime,
} from "@/lib/storage";

const TOTAL_SECTIONS = SECTIONS.length;

export default function ProgressPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);
  const [readingSeconds, setReadingSeconds] = useState(0);

  useEffect(() => {
    setCompleted(getCompletedSections());
    setReadingSeconds(getReadingTime());
  }, []);

  // ReadingStats already persists elapsed time — only read it here.
  useEffect(() => {
    const tick = window.setInterval(() => {
      setReadingSeconds(getReadingTime());
    }, 5000);
    return () => window.clearInterval(tick);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (!id) return;
          setCompleted(markSectionCompleted(id));
        });
      },
      { threshold: 0, rootMargin: "-25% 0px -50% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const completedCount = completed.length;
  const percentage = Math.min(100, Math.round((completedCount / TOTAL_SECTIONS) * 100));
  const timeInMinutes = Math.floor(readingSeconds / 60);

  const achievements = {
    "first-video": completedCount >= 1,
    "5-sections": completedCount >= 5,
    "all-videos": completedCount >= 11,
    "1-hour": timeInMinutes >= 60,
  };

  return (
    <div className={`progress-panel${isOpen ? " open" : ""}`} id="progressPanel">
      <button
        className="progress-panel-toggle"
        id="progressPanelToggle"
        aria-label="İlerleme panelini aç/kapat"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-chart-line" aria-hidden="true"></i>
      </button>
      <div className="progress-panel-content">
        <div className="progress-panel-header">
          <h3>
            <i className="fas fa-trophy" aria-hidden="true"></i> Senin İlerlemen
          </h3>
          <button
            className="progress-panel-close"
            aria-label="Kapat"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <div className="progress-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-book-open" aria-hidden="true"></i>
            </div>
            <div className="stat-info">
              <span className="stat-value">{completedCount}</span>
              <span className="stat-label">Bölüm Tamamlandı</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-clock" aria-hidden="true"></i>
            </div>
            <div className="stat-info">
              <span className="stat-value">{timeInMinutes} dk</span>
              <span className="stat-label">Toplam Süre</span>
            </div>
          </div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-label">
            <span>Genel İlerleme</span>
            <span>{percentage}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
          </div>
        </div>

        <div className="achievements">
          <h4>
            <i className="fas fa-star" aria-hidden="true"></i> Başarılar
          </h4>
          <div className="achievement-badges">
            <div
              className={`achievement-badge${achievements["first-video"] ? " unlocked" : " locked"}`}
              title="İlk bölümü tamamla"
            >
              <i className="fas fa-play" aria-hidden="true"></i>
              <span>İlk Adım</span>
            </div>
            <div
              className={`achievement-badge${achievements["5-sections"] ? " unlocked" : " locked"}`}
              title="5 bölüm tamamla"
            >
              <i className="fas fa-book" aria-hidden="true"></i>
              <span>Öğrenmeye Başladı</span>
            </div>
            <div
              className={`achievement-badge${achievements["all-videos"] ? " unlocked" : " locked"}`}
              title="Tüm videoları izle"
            >
              <i className="fas fa-graduation-cap" aria-hidden="true"></i>
              <span>Video Ustası</span>
            </div>
            <div
              className={`achievement-badge${achievements["1-hour"] ? " unlocked" : " locked"}`}
              title="1 saat geçir"
            >
              <i className="fas fa-hourglass-half" aria-hidden="true"></i>
              <span>Sabırlı Öğrenci</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
