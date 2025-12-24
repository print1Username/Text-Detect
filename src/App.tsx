import './App.css'

import { useState } from 'react'

import { Bot } from 'lucide-react';
import { Link } from 'lucide-react';

import ThemeToggle from './components/theme_toggle';
import Button from './components/button'
import UploadImageButton from './components/upload_image_button';
import LinkBar from './components/link_bar';

function App() {
  const [link, setLink] = useState('')
  const [showLinkBar, setShowLinkBar] = useState(false)

  return (
    <>
      <Bot className="logo" size={125} />
      <h1>Text AI Detector</h1>

      <p>This is the AI Text detector website.</p>

      <UploadImageButton />

      <Button
        onClick={() => setShowLinkBar((prev) => !prev)}
        className="flex items-center gap-2"
      >
        Image with link <Link />
      </Button>

      <div className={`link-bar-wrapper ${ showLinkBar ? 'visible' : 'hidden' }`}>
        {showLinkBar && (
          <LinkBar
            value={link}
            onChange={setLink}
          />
        )}
      </div>

      <ThemeToggle />
    </>
  )
}

export default App
