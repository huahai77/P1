import { TableColumnsType } from 'antd'
import CustomProjectStatus from '@/components/CustomProjectStatus'
import { dateFormat } from '@/utils/dateUtil.ts'
import { StarFilled } from '@ant-design/icons'
export const tableColumns: TableColumnsType = [
  {
    render: () => (
      <span>
        <StarFilled style={{ color: '#ffbf00', fontSize: 18 }} />
      </span>
    ),
    width: 50
  },
  {
    title: '所属品类',
    width: 120,
    dataIndex: 'productCategory'
  },
  {
    title: '项目类别',
    width: 200,
    dataIndex: 'prjCategory'
  },
  {
    align: 'right',
    title: '项目编号',
    width: 240,
    dataIndex: 'guid'
  },
  {
    title: '项目名称',
    width: 240,
    dataIndex: 'prjName'
  },
  {
    title: '项目状态',
    width: 100,
    dataIndex: 'projectStatus',
    render: (status) => <CustomProjectStatus status={status} />
  },
  {
    title: '项目经理',
    width: 120,
    dataIndex: 'prjManager'
  },
  {
    title: '所属部门',
    width: 120,
    dataIndex: 'department'
  },
  {
    title: '项目计划时间',
    width: 200,
    render: (_, record) => {
      if (record.prjStartDate && record.prjEndDate) {
        return (
          <span>
            {dateFormat(record.prjStartDate)} ~ {dateFormat(record.prjEndDate)}
          </span>
        )
      } else {
        return '~'
      }
    }
  }
]
