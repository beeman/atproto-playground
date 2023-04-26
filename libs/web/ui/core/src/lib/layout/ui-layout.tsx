import { AppShell, useMantineTheme } from '@mantine/core'
import { IconAt, IconBug, IconFingerprint, IconHome, IconServer2, IconSettings } from '@tabler/icons-react'
import { ReactNode, Suspense, useState } from 'react'

import { UiLoader } from '../ui-loader'
import { UiNavbar } from './ui-navbar'
import { UiFooter } from './ui.footer'
import { UiHeader } from './ui.header'

export function UiLayout({ children }: { children: ReactNode }) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      header={<UiHeader text="ATProto Playground" icon={IconAt} opened={opened} setOpened={setOpened} />}
      footer={<UiFooter text="ATProto Playground" />}
      navbarOffsetBreakpoint="sm"
      navbar={
        <UiNavbar
          links={[
            { link: '/home', label: 'Home', icon: IconHome },
            { link: '/dev', label: 'Development', icon: IconBug },
            { link: '/dev/security', label: 'Security', icon: IconFingerprint },
            { link: '/dev/servers', label: 'Servers', icon: IconServer2 },
            { link: '/dev/settings', label: 'Settings', icon: IconSettings },
          ]}
          opened={opened}
          setOpened={setOpened}
        />
      }
    >
      <Suspense fallback={<UiLoader type="full" />}>{children}</Suspense>
    </AppShell>
  )
}
