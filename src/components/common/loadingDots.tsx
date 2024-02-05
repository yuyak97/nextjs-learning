"use client"

import React from "react"

const LoadingDots: React.FC = () => {
  return (
    <div className="flex space-x-1 py-3">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="h-2 w-2 animate-pulse rounded-full bg-gray-700"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </div>
  )
}

export default LoadingDots
