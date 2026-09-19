import React from 'react'
import { AlertTriangle } from 'lucide-react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Canvas or UI Error caught by ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      return (
        <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center p-6 bg-navy-950/80 border border-slate-800 rounded-2xl text-center">
          <AlertTriangle className="w-10 h-10 text-amber-400 mb-3 animate-pulse" />
          <h4 className="text-sm font-bold font-display text-slate-200">
            3D Graphics Accelerated View Fallback
          </h4>
          <p className="text-xs text-slate-400 max-w-sm mt-1">
            Displaying high-performance cyber grid visualization.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}
