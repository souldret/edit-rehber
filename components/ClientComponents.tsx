"use client";

import dynamic from "next/dynamic";

// All client-only components with ssr:false must live inside a "use client" file
export const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });
export const ReadingProgress = dynamic(() => import("./ReadingProgress"), { ssr: false });
export const VideoCard = dynamic(() => import("./VideoCard"), { ssr: false });
export const ImageZoom = dynamic(() => import("./ImageZoom"), { ssr: false });
export const FAQ = dynamic(() => import("./FAQ"), { ssr: false });
export const TableOfContents = dynamic(() => import("./TableOfContents"), { ssr: false });
export const HeadingAnchor = dynamic(() => import("./HeadingAnchor"), { ssr: false });
export const ReadingStats = dynamic(() => import("./ReadingStats"), { ssr: false });
export const PrintButton = dynamic(() => import("./PrintButton"), { ssr: false });
export const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });
export const ShareButtons = dynamic(() => import("./ShareButtons"), { ssr: false });
export const ProgressPanel = dynamic(() => import("./ProgressPanel"), { ssr: false });
export const ScrollToTop = dynamic(() => import("./ScrollToTop"), { ssr: false });