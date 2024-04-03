import { FC } from 'react'
import type { RadioChangeEvent } from 'antd'
import { Radio } from 'antd'
import { RadioOptionsEnum } from '@/enum'

interface Props {
  activeRadio: RadioOptionsEnum
  options: any[]
  handleChangeRadio: (e: RadioChangeEvent) => void
}

const CustomRadio: FC<Props> = ({
  options,
  activeRadio,
  handleChangeRadio
}) => {
  return (
    <Radio.Group
      options={options}
      onChange={(e) => handleChangeRadio(e)}
      value={activeRadio}
      optionType="button"
    />
  )
}

export default CustomRadio
