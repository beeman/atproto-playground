import { Anchor, createStyles, getStylesRef, Navbar } from '@mantine/core'
import { ComponentType } from 'react'
import { Link, useLocation } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  },
}))

export interface UiNavbarLink {
  link: string
  label: string
  icon: ComponentType<{ className?: string; stroke?: number }>
}

export interface UiNavbarProps {
  links: UiNavbarLink[]
  opened: boolean
  setOpened: (opened: boolean) => void
}

export function UiNavbar({ links, opened, setOpened }: UiNavbarProps) {
  const { classes, cx } = useStyles()
  const { pathname } = useLocation()

  return (
    <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} hidden={!opened}>
      <Navbar.Section grow>
        {links.map(({ icon: Icon, label, link }) => (
          <Anchor
            underline={false}
            className={cx(classes.link, { [classes.linkActive]: link === pathname })}
            component={Link}
            to={link}
            key={label}
            onClick={(event) => setOpened(false)}
          >
            <Icon className={classes.linkIcon} stroke={1.5} />
            <span>{label}</span>
          </Anchor>
        ))}
      </Navbar.Section>
    </Navbar>
  )
}
