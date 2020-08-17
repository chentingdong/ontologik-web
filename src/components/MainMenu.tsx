import * as React from 'react'
import logo from 'assets/img/logo.png'
import { Link } from 'react-router-dom'

interface MainMenuProps {
  className?: string
}

export const MainMenu: React.FC<MainMenuProps> = (props) => {
  return (
    <div {...props}>
      <div className="flex bg-gray-800 ">
        <img className="logo h-8 m-2" src={logo} alt="" />
        <div className="menu text-white m-4 ml-16 flex gap-4">
          <Link to="/text-similarity">Text Similarity</Link>
          <Link to="/text-summarization">Text Summarization</Link>
          <Link to="/sentiment-analysis">Sentiment Analysis</Link>
          <Link to="/semantic-search">Semantic Search</Link>
        </div>
      </div>
    </div>
  )
}
