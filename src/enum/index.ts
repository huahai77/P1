export enum ProjectStatusEnum {
  PROCESSING = 'processing',
  APPROVING = 'approving'
}

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

export enum RadioOptionsEnum {
  CARD,
  LIST
}
