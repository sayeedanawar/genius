"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a91e736a-82d4-409e-95f2-aba342b289b9");
  }, []);

  return null;
};
