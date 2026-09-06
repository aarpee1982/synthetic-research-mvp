"use client";
import Image from "next/image";
import { useState } from "react";
export default function SourceImage({ src, alt, label }: { src: string; alt: string; label: string }) {
  const [failed, setFailed] = useState(false);
  return src && !failed ? <Image src={src} width={640} height={360} unoptimized loading="lazy" alt={alt} referrerPolicy="no-referrer" onError={() => setFailed(true)}/> : <span className="industry-image-fallback">{label}</span>;
}
