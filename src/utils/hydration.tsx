"use client"

import { useEffect, useState } from "react";

export function hyrate() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
}