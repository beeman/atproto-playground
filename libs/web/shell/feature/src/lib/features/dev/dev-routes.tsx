import { Stack, Title } from '@mantine/core'
import { Route, Routes, useParams } from 'react-router-dom'

export default function DevRoutes() {
  return (
    <Routes>
      <Route index element={<DevIndexFeature />} />
      <Route path=":page" element={<DevDetailFeature />} />
    </Routes>
  )
}

export function DevIndexFeature() {
  return (
    <Stack>
      <Title size="h2">Dev</Title>
    </Stack>
  )
}

export function DevDetailFeature() {
  const { page } = useParams()
  return (
    <Stack>
      <Title size="h2">Dev Page: ${page}</Title>
    </Stack>
  )
}
