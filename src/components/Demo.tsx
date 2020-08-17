import * as React from 'react'
import { MainMenu } from './MainMenu'
import { useLocation } from 'react-router-dom'
import { getRouteParams } from '../routes/router-utils'
import { TextSummarization } from './TextSummarization'
import { TextSimilarity } from './TextSimilarity'
import { SemanticSearch } from './SemanticSearch'
import { SentimentAnalysis } from './SentimentAnalysis'

interface DemoProps {
}

export const Demo: React.FC<DemoProps> = () => {
  const location = useLocation()
  const params = getRouteParams(location.pathname)

  return (
    <div className="h-screen flex flex-col justify-between">
      <MainMenu className="flex-none" />
      <div className="container mx-auto flex-grow p-4">
        {params.menu === "semantic-search" && <SemanticSearch />}
        {params.menu === "text-similarity" && <TextSimilarity />}
        {params.menu === "text-summarization" && <TextSummarization />}
        {params.menu === "sentiment-analysis" && <SentimentAnalysis />}
      </div>
    </div>
  )
}
