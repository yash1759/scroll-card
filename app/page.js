"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import FlatCardFanCarousel from "./components/scrollCards";

export default function Home() {
  return (
      <FlatCardFanCarousel />
  );
}
