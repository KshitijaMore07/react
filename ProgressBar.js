import React, { useState } from "react"

function ProgressBar() {
  const [progress, setProgress] = useState(0)

  const incProgress = () => {
    setProgress(prev => Math.min(prev + 10, 100))
  }

  const getColor = () => {
    if (progress < 30) return "red"
    if (progress < 70) return "orange"
    return "green"
  }

  return (
    <div>
      <div
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          height: 25,
          backgroundColor: "#eee",
          borderRadius: 12,
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: getColor(),
            transition: "width 0.4s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold"
          }}
        >
          {progress}%
        </div>
      </div>

      <button onClick={incProgress} style={{ marginTop: 10 }}>
        Increase
      </button>
    </div>
  )
}

export default ProgressBar;