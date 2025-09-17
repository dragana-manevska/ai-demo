"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "../components/loading-screen"

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState<"landing" | "loading" | "success">("landing")

  const handleUploadClick = () => {
    setCurrentScreen("loading")
  }

  useEffect(() => {
    if (currentScreen === "loading") {
      const timer = setTimeout(() => {
        setCurrentScreen("success")
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [currentScreen])

  if (currentScreen === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 mx-auto">
            <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.9166 7.08286L9.95637 14.0431L0 14.0431L7.08316 7.08286L16.9166 7.08286Z"
                fill="#EB4237"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.08316 26.8799L0 33.963L0 23.999L7.08316 16.9235L7.08316 26.8799Z"
                fill="#FCBC07"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.08344 31.0831L14.0437 38.0434L14.0437 47.9998L7.08344 40.9243L7.08344 31.0831Z"
                fill="#34A853"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.0832 7.08319L21.1192 7.08319L14.0437 0L24.0001 0L31.0832 7.08319Z"
                fill="#5F96F5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.8806 40.9238L33.956 47.9992H23.9997L16.9165 40.9238H26.8806Z"
                fill="#5F96F5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.9164 7.08319V16.9243L33.9562 9.96408V0L40.9164 7.08319Z"
                fill="#34A853"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.0436 33.9642H48L40.9168 40.9245H31.0834L38.0436 33.9642Z"
                fill="#EB4237"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.9997 14.0429V23.9992L40.9165 31.0824V21.1183L47.9997 14.0429Z"
                fill="#FCBC07"
              />
            </svg>
          </div>

          {/* Success Message */}
          <div className="space-y-2">
            <h2 className="text-4xl font-normal text-[#181d27]">Device connected successfully!</h2>
            <p className="text-2xl font-light text-[#535862]">Dragana Iphone</p>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === "loading") {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full text-center space-y-24 md:space-y-28">
        <div className="flex items-center gap-3 justify-center">
          <div className="w-8 h-8 md:w-10 md:h-10">
            <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.9166 7.08286L9.95637 14.0431L0 14.0431L7.08316 7.08286L16.9166 7.08286Z"
                fill="#EB4237"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.08316 26.8799L0 33.963L0 23.999L7.08316 16.9235L7.08316 26.8799Z"
                fill="#FCBC07"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.08344 31.0831L14.0437 38.0434L14.0437 47.9998L7.08344 40.9243L7.08344 31.0831Z"
                fill="#34A853"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.0832 7.08319L21.1192 7.08319L14.0437 0L24.0001 0L31.0832 7.08319Z"
                fill="#5F96F5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.8806 40.9238L33.956 47.9992H23.9997L16.9165 40.9238H26.8806Z"
                fill="#5F96F5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.9164 7.08319V16.9243L33.9562 9.96408V0L40.9164 7.08319Z"
                fill="#34A853"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.0436 33.9642H48L40.9168 40.9245H31.0834L38.0436 33.9642Z"
                fill="#EB4237"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.9997 14.0429V23.9992L40.9165 31.0824V21.1183L47.9997 14.0429Z"
                fill="#FCBC07"
              />
            </svg>
          </div>
          <span className="text-xl md:text-2xl font-normal text-[#181d27]">Geminova</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 md:space-y-6 mt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#181d27] leading-tight text-balance">
            From inspiration to activation
            <br />
            in minutes.
          </h1>
          <p className="text-base md:text-lg text-[#535862] font-light leading-relaxed max-w-2xl mx-auto">
            Turn your idea into ready-to-use marketing assets—live.
          </p>
        </div>

        {/* Connect Button */}
        <div>
          <button
            onClick={handleUploadClick}
            className="bg-[#5F96F5] hover:bg-[#4A7FE7] text-white font-normal text-xl px-32 py-6 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Connect your device
          </button>
        </div>
      </div>
    </div>
  )
}
