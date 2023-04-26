import { UiNotFound } from '@atproto-playground/web/ui/core'
import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const HomeRoutes = lazy(() => import('./features/home/home-routes'))
const DevRoutes = lazy(() => import('./features/dev/dev-routes'))

export function WebShellRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomeRoutes />} />
      <Route path="/dev/*" element={<DevRoutes />} />
      <Route path="*" element={<UiNotFound />} />
    </Routes>
  )
}
