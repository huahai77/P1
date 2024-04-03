export interface TableColumns {
  productCategory: string
  prjCategory: string
  prjName: string
  prjManager: string
  prjStartDate?: string
  prjEndDate?: string
  guid: string
  projectStatus: string
  department: string
  logo: string
  taskCount: number | null
  taskDoneCount: number | null
  taskDoingCount: number | null
}
