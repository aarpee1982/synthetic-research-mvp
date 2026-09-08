"use client";
import Image from "next/image";
import { useState } from "react";
import { Building2 } from "lucide-react";
import icons from "@/lib/provider-icons.json";

export default function CompanyIcon({ id, className = "" }: { id: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const icon = (icons as Record<string, { src: string }>)[id];
  return <span className={`company-icon ${className}`} aria-hidden="true">
    {icon && !failed ? <Image src={icon.src} width={40} height={40} alt="" unoptimized onError={() => setFailed(true)} /> : <Building2 size={24} />}
  </span>;
}
