import { FC, useState } from 'react'
import {
  CardListWrapper,
  RadioWrapper,
  TableWrapper,
  Wrapper
} from '@/pages/Items/style.tsx'
import CustomRadio from '@/components/CustomRadio'
import { RadioChangeEvent, Table } from 'antd'
import mockData from '@/model/data.ts'
import { RadioOptionsEnum } from '@/enum'
import { radioOptions } from '@/model/radioOptions.ts'
import CustomCard from '@/components/CustomCard'
import { tableColumns } from '@/model/tableColums.tsx'

const Items: FC = () => {
  const [activeRadio, setActiveRadio] = useState(RadioOptionsEnum.CARD)

  /**
   * 修改选择器选项
   * @param value
   */
  const handleChangeRadio = ({ target: { value } }: RadioChangeEvent) => {
    setActiveRadio(value)
  }

  /**
   * 表格行类名，添加斑马格
   * @param _
   * @param index
   */
  const getRowClassName = (_: any, index: number): string => {
    return index % 2 === 0 ? '' : 'row-odd'
  }

  return (
    <Wrapper>
      <RadioWrapper>
        <CustomRadio
          activeRadio={activeRadio}
          options={radioOptions}
          handleChangeRadio={handleChangeRadio}
        />
      </RadioWrapper>
      {activeRadio === RadioOptionsEnum.CARD && (
        <CardListWrapper>
          {mockData.map((item, index) => {
            return (
              <div className={'card-item'} key={item.guid + index}>
                <CustomCard item={item} />
              </div>
            )
          })}
        </CardListWrapper>
      )}
      {activeRadio === RadioOptionsEnum.LIST && (
        <TableWrapper>
          <Table
            columns={tableColumns}
            dataSource={mockData}
            pagination={false}
            rowKey={(row) => row.guid}
            rowClassName={getRowClassName}
          />
        </TableWrapper>
      )}
    </Wrapper>
  )
}

export default Items
