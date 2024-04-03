import { FC } from 'react'
import styled from 'styled-components'
import image from '@/assets/images/image.jpg'
import { TableColumns } from '@/interface'
import CustomProjectStatus from '@/components/CustomProjectStatus'
import { ProjectStatusEnum } from '@/enum'
import { dateFormat } from '@/utils/dateUtil.ts'
import { StarFilled } from '@ant-design/icons'

interface Props {
  item: TableColumns
}

const CustomCard: FC<Props> = ({ item }) => {
  const TaskInfo = () => {
    if (item.projectStatus !== ProjectStatusEnum.APPROVING) {
      return (
        <span>
          任务：{item.taskCount} 完成：{item.taskDoneCount} 进行：
          {item.taskDoingCount}
        </span>
      )
    }
    return <span />
  }

  return (
    <Wrapper>
      <ImgWrapper>
        <img src={image} alt="" />
      </ImgWrapper>
      <ContentWrapper>
        <Cell>
          <span className={'prj-name'}>{item.prjName}</span>
          <CustomProjectStatus
            status={item.projectStatus as ProjectStatusEnum}
          />
        </Cell>
        <Cell>项目经理：{item.prjManager}</Cell>
        <Cell>立项日期：{dateFormat(item.prjStartDate)}</Cell>
        <Cell>
          {TaskInfo()}
          <StarFilled style={{ color: '#ffbf00', fontSize: 14 }} />
        </Cell>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #eee;
  padding: 10px;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.1),
    0 2px 10px 0 rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    border: 2px solid #349aff;
    transform: translateY(-10px) scale(1.05);
  }
`

const ImgWrapper = styled('div')`
  padding-right: 10px;
  > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`

const ContentWrapper = styled('div')`
  flex: 1;
`

const Cell = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    padding-bottom: 5px;
  }

  .prj-name {
    font-size: 14px;
    font-weight: 700;
  }
`

export default CustomCard
