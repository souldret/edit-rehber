"use client";

import dynamic from "next/dynamic";

export { default as Sidebar } from "./Sidebar";
export { default as VideoCard } from "./VideoCard";
export { default as ImageZoom } from "./ImageZoom";
export { default as FAQ } from "./FAQ";
export { default as PrintButton } from "./PrintButton";

export const ReadingProgress = dynamic(() => import("./ReadingProgress"), { ssr: false });
export const TableOfContents = dynamic(() => import("./TableOfContents"), { ssr: false });
export const HeadingAnchor = dynamic(() => import("./HeadingAnchor"), { ssr: false });
export const ReadingStats = dynamic(() => import("./ReadingStats"), { ssr: false });
export const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });
export const ShareButtons = dynamic(() => import("./ShareButtons"), { ssr: false });
export const ProgressPanel = dynamic(() => import("./ProgressPanel"), { ssr: false });
export const ScrollToTop = dynamic(() => import("./ScrollToTop"), { ssr: false });
