/**
 * 项目状态枚举
 */
export enum ProjectStatusEnum {
  PROCESSING = 'processing',
  APPROVING = 'approving'
}

/**
 * 项目状态对应映射
 */
export const ProjectStatusMapper = {
  [ProjectStatusEnum.APPROVING]: {
    text: '审批中',
    color: '#FF4E33'
  },
  [ProjectStatusEnum.PROCESSING]: {
    text: '进行中',
    color: '#1890FF'
  }
}

/**
 * 卡片列表选择器枚举
 */
export enum RadioOptionsEnum {
  CARD,
  LIST
}
