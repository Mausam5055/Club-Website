'use client'

import { ThemeProvider } from 'next-themes'
import { StairsProvider } from '@/components/stairs/StairsContext'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
      <StairsProvider>
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </StairsProvider>
    )
}