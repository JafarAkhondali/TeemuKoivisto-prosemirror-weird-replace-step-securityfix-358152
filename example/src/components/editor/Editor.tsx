import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import { Transaction } from 'prosemirror-state'

import { applyDevTools } from 'prosemirror-dev-toolkit'

import { RightPanel } from './RightPanel'
import { EditorStore } from './EditorStore'

import { PMEditor } from 'pm/PMEditor'
import { ReactEditorContext } from 'pm/context/EditorContext'
import { createDefaultProviders, IProviders } from 'pm/context/Providers'

export function Editor() {
  const editorProviders = useMemo(() => createDefaultProviders(), [])
  const editorStore = useMemo(() => new EditorStore(), [])
  const debouncedSync = useMemo(() => debounce(editorStore.syncCurrentEditorState, 500), [])
  const [lastTrs, setLastTrs] = useState<Transaction[]>([])

  function handleEdit(_: any, trs: Transaction[]) {
    debouncedSync()
    setLastTrs(trs)
    console.debug(trs)
  }
  function handleEditorReady(ctx: IProviders) {
    editorStore.setEditorView(ctx.viewProvider)
    applyDevTools(ctx.viewProvider.view)
  }
  return (
    <ReactEditorContext.Provider value={editorProviders}>
      <div>
        <ViewGrid>
          <LeftSide>
            <div className="pm-editor">
              <PMEditor
                onEdit={handleEdit}
                onEditorReady={handleEditorReady}
              />
            </div>
          </LeftSide>
          <RightPanel/>
        </ViewGrid>
        <div>
          <h3>Last trs</h3>
          { lastTrs.map((tr, trIdx) =>
          <TrBlock key={tr.time}>
            <h4>{trIdx + 1}. transaction with {tr.steps.length} steps</h4>
            { tr.steps.map((s, i) =>
              <pre key={`s-${i}`}>
                {JSON.stringify(s.toJSON(), null, 2)}
              </pre>
            )}
          </TrBlock>
          )}
        </div>
      </div>
    </ReactEditorContext.Provider>
  )
}

const ViewGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  margin-top: 1rem;
`
const LeftSide = styled.div`
  margin-right: 1rem;
`
const TrBlock = styled.div`
  pre {
    font-size: 12px;
  }
`