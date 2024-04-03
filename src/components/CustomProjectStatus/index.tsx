import { FC } from 'react'
import styled from 'styled-components'
import { ProjectStatusEnum, ProjectStatusMapper } from '@/enum'

interface Props {
  status: ProjectStatusEnum
}

const CustomProjectStatus: FC<Props> = ({ status }) => {
  return (
    <Wrapper color={ProjectStatusMapper[status].color}>
      <span className={'tag'} />
      <span>{ProjectStatusMapper[status].text}</span>
    </Wrapper>
  )
}

interface StyleProps {
  color: string
}

const Wrapper = styled('span')<StyleProps>`
  display: flex;
  align-items: center;

  .tag {
    background-color: ${(prop) => prop.color};
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 3px;
  }
`

export default CustomProjectStatus
