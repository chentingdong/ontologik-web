import * as React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Button, Progress } from "@chakra-ui/core"

interface TextSimilarityProps {
}

const TextSimilarityRaw: React.FC<TextSimilarityProps> = (props) => {
  return (
    <div {...props} className="h-full flex flex-col justify-between">
      <h2 className="flex-none">Text/Document Similarity</h2>
      <div className="my-8 grid grid-cols-2 h-full">
        <div className="flex-grow pr-4 flex flex-col justify-between">
          <input type="text" className="flex-none mb-4" />
          <textarea className="flex-grow" />
        </div>
        <div className="border-l pl-4 flex-grow flex flex-col justify-between">
          <input type="text" className="mb-4 flex-none" />
          <textarea className="flex-grow" />
        </div>
      </div>
      <div className="flex-none flex">
        <Button variantColor="green" className="flex-none">Test Similarity</Button>
        <Progress className="w-64 h-8 mx-8 my-1" value={80} />
      </div>
    </div>
  )
}

const TextSimilarity = styled(TextSimilarityRaw)`
  textarea {
    ${tw`h-full`}
  }
`

export { TextSimilarity }