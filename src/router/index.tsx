import { RouteObject, useRoutes } from 'react-router-dom'
import Items from '@/pages/Items'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Items />
  }
]

const Routes = () => useRoutes(routes)
export default Routes
