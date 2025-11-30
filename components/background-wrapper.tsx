"use client"

import type React from "react"
import ShaderBackground from "@/components/shader-background"

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return <ShaderBackground scrollable>{children}</ShaderBackground>
}

