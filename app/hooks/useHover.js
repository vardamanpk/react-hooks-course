import React, { useState } from 'react'

export default function useHover(initialState = false) {
    const [hovering, setHovering] = useState(initialState)
    const onMouseOver = () => setHovering(true)
    const onMouseOut = () => setHovering(false)
    return [hovering, {
        onMouseOver,
        onMouseOut
    }]
}