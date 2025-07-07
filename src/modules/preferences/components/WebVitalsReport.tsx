import React, { useState, useEffect, useCallback } from 'react'
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals'
import { useFullScreenHandle } from 'react-full-screen'

interface Metric {
    name: string
    value: number
    rating: 'good' | 'needs-improvement' | 'poor'
}

interface Position {
    x: number
    y: number
}

interface WebVitalsReportProps {
    zIndex: number
    onFocus: () => void
}

const WebVitalsReport: React.FC<WebVitalsReportProps> = ({
    zIndex,
    onFocus,
}) => {
    const handle = useFullScreenHandle()
    const [metrics, setMetrics] = useState<Metric[]>([])
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState<Position>({
        x: 20,
        y: window.innerHeight - 200,
    })
    const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 })
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
    const [isDragIntent, setIsDragIntent] = useState(false)

    useEffect(() => {
        const getRating = (
            name: string,
            value: number
        ): 'good' | 'needs-improvement' | 'poor' => {
            const thresholds = {
                CLS: { good: 0.1, poor: 0.25 },
                FID: { good: 100, poor: 300 },
                LCP: { good: 2500, poor: 4000 },
                FCP: { good: 1800, poor: 3000 },
                TTFB: { good: 800, poor: 1800 },
            }

            const threshold = thresholds[name as keyof typeof thresholds]
            if (!threshold) return 'good'

            if (value <= threshold.good) return 'good'
            if (value >= threshold.poor) return 'poor'
            return 'needs-improvement'
        }

        const handleMetric = ({
            name,
            value,
            delta,
        }: {
            name: string
            value: number
            delta: number
        }) => {
            setLastUpdated(new Date())
            setMetrics((prev) => {
                const existing = prev.find((m) => m.name === name)
                if (existing) {
                    return prev.map((m) =>
                        m.name === name
                            ? {
                                  ...m,
                                  value,
                                  rating: getRating(name, value),
                              }
                            : m
                    )
                }
                return [
                    ...prev,
                    {
                        name,
                        value,
                        rating: getRating(name, value),
                    },
                ]
            })
        }

        onCLS(handleMetric)
        onFID(handleMetric)
        onLCP(handleMetric)
        onFCP(handleMetric)
        onTTFB(handleMetric)
    }, [])

    const getColorForRating = (rating: string) => {
        switch (rating) {
            case 'good':
                return '#48ff00' // Bright green
            case 'needs-improvement':
                return '#FFB300'
            case 'poor':
                return '#ff0000' // Bright red
            default:
                return '#757575'
        }
    }

    const formatValue = (name: string, value: number) => {
        switch (name) {
            case 'CLS':
                return value.toFixed(3) // CLS is unitless
            case 'FID':
            case 'FCP':
            case 'LCP':
            case 'TTFB':
                return `${Math.round(value)}ms`
            default:
                return `${Math.round(value).toFixed(2)}`
        }
    }

    const formatTimestamp = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        const seconds = date.getSeconds().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        const year = date.getFullYear()
        const timezone = date
            .toLocaleTimeString('en-us', { timeZoneName: 'short' })
            .split(' ')[2]

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${timezone}`
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        if (
            e.target instanceof HTMLElement &&
            e.target.closest('.drag-handle')
        ) {
            setIsDragIntent(false)
            setIsDragging(true)
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            })
            onFocus()
            e.preventDefault()
        }
    }

    const handleMouseMove = useCallback(
        (e: globalThis.MouseEvent) => {
            if (isDragging && !handle.active) {
                // Set drag intent on first mouse move during drag
                if (!isDragIntent) {
                    setIsDragIntent(true)
                }

                const newX = e.clientX - dragStart.x
                const newY = e.clientY - dragStart.y

                // Keep the report within viewport bounds
                const maxX = window.innerWidth - 200
                const maxY = window.innerHeight - 100

                setPosition({
                    x: Math.max(0, Math.min(newX, maxX)),
                    y: Math.max(0, Math.min(newY, maxY)),
                })
            }
        },
        [isDragging, dragStart, handle.active, position]
    )

    const handleMouseUp = useCallback(() => {
        setIsDragging(false)
    }, [])

    useEffect(() => {
        if (isDragging) {
            document.addEventListener(
                'mousemove',
                handleMouseMove as EventListener
            )
            document.addEventListener('mouseup', handleMouseUp as EventListener)

            // Add a cursor style to the body during dragging
            document.body.style.cursor = 'grabbing'

            return () => {
                document.removeEventListener(
                    'mousemove',
                    handleMouseMove as EventListener
                )
                document.removeEventListener(
                    'mouseup',
                    handleMouseUp as EventListener
                )
                document.body.style.cursor = ''
            }
        }
    }, [isDragging, handleMouseMove, handleMouseUp])

    const handleHeaderClick = (e: React.MouseEvent) => {
        // Only toggle if it wasn't a drag operation
        if (!isDragIntent) {
            setIsCollapsed(!isCollapsed)
        }
    }

    if (metrics.length === 0) return null

    return (
        <div
            style={{
                position: 'fixed',
                left: handle.active ? 'auto' : `${position.x}px`,
                top: handle.active ? 'auto' : `${position.y}px`,
                right: handle.active ? '20px' : 'auto',
                bottom: handle.active ? '20px' : 'auto',
                backgroundColor: '#1a1a1a',
                borderRadius: '4px',
                padding: '0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                zIndex,
                width: '180px',
                cursor: isDragging ? 'grabbing' : 'default',
                transition: isDragging ? 'none' : 'all 0.3s ease',
                userSelect: 'none',
                fontSize: '12px',
            }}
            onMouseDown={handleMouseDown}
        >
            <div
                className="drag-handle"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#ffffff',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    padding: '8px',
                    borderBottom: isCollapsed ? 'none' : '1px solid #333333',
                    marginBottom: isCollapsed ? '0' : '4px',
                    borderRadius: '2px',
                    transition: 'background-color 0.2s ease',
                    backgroundColor: 'transparent',
                }}
                onClick={handleHeaderClick}
                onMouseEnter={(e) => {
                    if (e.currentTarget) {
                        e.currentTarget.style.backgroundColor = '#2a2a2a'
                    }
                }}
                onMouseLeave={(e) => {
                    if (e.currentTarget) {
                        e.currentTarget.style.backgroundColor = 'transparent'
                    }
                }}
            >
                <span style={{ fontSize: '16px', opacity: 0.7 }}>⋮</span>
                <span style={{ flex: 1, fontSize: '11px' }}>Web Vitals</span>
                <span
                    style={{
                        cursor: 'pointer',
                        opacity: 0.7,
                        fontSize: '10px',
                    }}
                    onClick={(e) => {
                        e.stopPropagation()
                        if (!isDragIntent) {
                            setIsCollapsed(!isCollapsed)
                        }
                    }}
                >
                    {isCollapsed ? '▼' : '▲'}
                </span>
            </div>
            {!isCollapsed && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        padding: '8px',
                    }}
                >
                    {metrics.map((metric) => (
                        <div
                            key={metric.name}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontSize: '11px',
                            }}
                        >
                            <span style={{ color: '#999999' }}>
                                {metric.name
                                    .replace('CLS', 'CLS:')
                                    .replace('FCP', 'FCP:')
                                    .replace('TTFB', 'TTFB:')
                                    .replace('LCP', 'LCP:')
                                    .replace('FID', 'INP:')}
                            </span>
                            <span
                                style={{
                                    color: getColorForRating(metric.rating),
                                    fontFamily: 'monospace',
                                }}
                            >
                                {formatValue(metric.name, metric.value)}
                            </span>
                        </div>
                    ))}
                    <div
                        style={{
                            borderTop: '1px solid #333333',
                            marginTop: '4px',
                            paddingTop: '4px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: '2px',
                            fontSize: '10px',
                            color: '#666666',
                        }}
                    >
                        {formatTimestamp(lastUpdated)}
                    </div>
                </div>
            )}
        </div>
    )
}

export default WebVitalsReport
