import React from 'react'
import styled from 'styled-components'

import { Editor } from '../components/editor/Editor'

export function FrontPage() {
  return (
    <Container>
      <header>
        <h1><a href="https://teemukoivisto.github.io/prosemirror-weird-replace-step/">
          ProseMirror creates a weird ReplaceStep</a></h1>
        <p>
          If you select '<i>p</i>o' and press 'm'
          it should generate a ReplaceStep as shown in the README. I assume
          it tries to do some joining but seems for no particular reason.
        </p>
        <p><a href="https://github.com/TeemuKoivisto/prosemirror-weird-replace-step">Github repo</a></p>
      </header>
      <Editor/>
    </Container>
  )
}

const Container = styled.div``
