import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

export default function Loading({ text = 'Loading', speed = 300 }) {

  const [content, setContent] = useState(text)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setContent(content => content + '.')
    }, speed)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setContent(content => {
      return (content === `${text}....`) ? text : content
    })
  }, [content])
  return (
    <p style={styles.content}>
      {content}
    </p>
  )
}

