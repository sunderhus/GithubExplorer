import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './main/App'

const container = document.getElementById('root') as Element
createRoot(container) // createRoot(container!) if you use TypeScript
  .render(<App />)
