import { UiLayout, UiThemeProvider } from '@atproto-playground/web/ui/core'
import { Container } from '@mantine/core'
import { WebShellRoutes } from './web-shell-routes'

export function WebShellFeature() {
  return (
    <UiThemeProvider>
      <UiLayout>
        <Container h="100%">
          <WebShellRoutes />
        </Container>
      </UiLayout>
    </UiThemeProvider>
  )
}
