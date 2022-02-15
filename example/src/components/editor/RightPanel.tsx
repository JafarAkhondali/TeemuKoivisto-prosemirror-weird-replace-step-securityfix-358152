import React from 'react'
import styled from 'styled-components'

import { useEditorContext } from 'pm/context/EditorContext'

import exampleState from './example-state.json'

export function RightPanel() {
  const { viewProvider } = useEditorContext()

  function handleRestoreExample() {
    viewProvider.replaceDoc(exampleState)
  }
  function handleReplace() {
    viewProvider.execCommand((state, dispatch) => {
      const tr = state.tr
      dispatch && dispatch(tr.replaceWith(5, 7, state.schema.text('m')))
      return true
    })
  }
  function handleReset() {
    viewProvider.execCommand((state, dispatch) => {
      dispatch && dispatch(state.tr.delete(0, state.doc.nodeSize - 2))
      return true
    })
  }
  return (
    <Container>
      <button onClick={handleReplace}>Replace <i>p</i>o with m</button>
      <button onClick={handleRestoreExample}>Restore example</button>
      <button onClick={handleReset}>Reset</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  button {
    margin: 0.05rem;
  }
`
