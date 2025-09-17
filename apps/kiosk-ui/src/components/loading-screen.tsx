export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        {/* Loading Icon */}
        <div className="w-16 h-16 mx-auto animate-spin" style={{ animationDuration: "4.5s" }}>
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

        {/* Loading Text */}
        <p className="text-3xl text-[#181d27] font-normal">Waiting for device...</p>
      </div>
    </div>
  )
}
