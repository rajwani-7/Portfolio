'use client'

import { useState, useEffect, useRef } from 'react'
import IDCard from './components/IDCard'
import Terminal from './components/Terminal'

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col bg-terminal-bg">
      {/* Header */}
      <header className="bg-terminal-bg border-b border-terminal-green p-4 flex items-center justify-between">
        <h1 className="text-terminal-green text-xl font-bold font-mono">
          Harsh Rajwani
        </h1>
        <div className="text-terminal-cyan text-sm font-mono">
          Terminal Portfolio v1.0.0
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0">
        {/* Left Panel - ID Card */}
        <div className="lg:w-1/2 w-full h-auto lg:h-full flex items-center justify-center p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-terminal-green bg-terminal-bg">
          <div className="w-full max-w-sm">
            <IDCard />
          </div>
        </div>
        
        {/* Right Panel - Terminal */}
        <div className="lg:w-1/2 w-full flex-1 min-w-0 flex flex-col">
          <Terminal />
        </div>
      </div>
    </div>
  )
}
