import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'The Shine Lab | Auto Detailing',
      },
      {
        name: 'description',
        content:
          'Premium mobile detailing services across Newfoundland. Professional interior and exterior detailing delivered to your driveway.',
      },
      {
        property: 'og:title',
        content: 'The Shine Lab | Auto Detailing',
      },
      {
        property: 'og:description',
        content:
          'High-end mobile detailing services across Newfoundland.',
      },
      {
        property: 'og:image',
        content: 'https://theshinelabdetailing.ca/logo.png',
      },
      {
        property: 'og:url',
        content: 'https://theshinelabdetailing.ca',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  notFoundComponent: () => <div>Route not found</div>,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}