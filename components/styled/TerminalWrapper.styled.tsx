import styled, { keyframes } from 'styled-components'
import { theme } from 'styled-tools'

export const TerminalWindow = styled.div`
  width: 80%;
  max-width: 700px;
  height: 450px;
`

export const ConsoleContainer = styled.div`
  background-color: #1D1F21;
  width: 100%;
  height: calc(100% - 24px);
  color: white;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 2px 4px;
  cursor: text;
`

export const EntryContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Text = styled.p`
  font-size: 10pt;
  font-weight: ${theme('fonts.weight.light')};
  font-family: ${theme('fonts.type.Source')};
`

export const PathWrapper = styled(Text)`
  margin: 0;
  margin-bottom: 2px;
  margin-right: 4px;
  color: #A0B1D2;
  min-width: 105px;
  
  &:before {
    content: 'root@diegorlb';
    color: #5FA74D;
  }
`

export const TerminalText = styled(Text)`
  margin: 0;
`

const BlinkAnimation = keyframes`
  0% { opacity: 0 }
	49% { opacity: 0 }
	50% { opacity: 1 }
`

export const Blinker = styled(Text)`
  margin: 0;
  animation: ${BlinkAnimation} 500ms infinite;
`