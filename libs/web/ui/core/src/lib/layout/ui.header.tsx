import { Anchor, Burger, Group, Header, MediaQuery, Text, useMantineTheme } from '@mantine/core'
import { ComponentType } from 'react'
import { Link } from 'react-router-dom'
import { UiThemeToggle } from './ui-theme.toggle'

export interface UiHeaderProps {
  text: string
  icon: ComponentType<{ size: number }>
  opened: boolean
  setOpened: (opened: boolean) => void
}

export function UiHeader({ icon: Icon, opened, setOpened, text }: UiHeaderProps) {
  const theme = useMantineTheme()
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={() => setOpened(!opened)} size="sm" color={theme.colors.gray[6]} mr="xl" />
        </MediaQuery>
        <Group position="apart" sx={{ flexGrow: 1 }}>
          <Anchor component={Link} to="/" replace underline={false}>
            <Group spacing="xs">
              <Icon size={24} />
              <Text size="md" weight={700}>
                {text}
              </Text>
            </Group>
          </Anchor>
          <UiThemeToggle />
        </Group>
      </div>
    </Header>
  )
}
