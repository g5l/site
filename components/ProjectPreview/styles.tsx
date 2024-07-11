'use client'
import Link from 'next/link'
import styled from 'styled-components'

export const Content = styled.div`
  border-left: 3px solid #333333;
  padding: 2px 0 2px 20px;
`

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const Title = styled.h2`
  font-weight: bold;
`

export const Desc = styled.p`

`

export const SkillsContent = styled.div`
`

export const ActionButtonsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px
`

export const VisitButton = styled(Link)`
  display: flex;
  align-items: center;
  background: transparent;
  padding: 8px 20px;
  border-radius: 5px;
  border: 1px solid #333333;
  font-weight: 400;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 1px;
	text-decoration: none;

  &:hover {
    background: rgba(51, 51, 51, 0.1);
  }

  & > svg {
    height: 15px;
    width: 15px;
    margin-left: 10px;
  }
`