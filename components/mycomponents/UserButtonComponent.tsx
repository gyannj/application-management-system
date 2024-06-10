"use client"

import { UserButton } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import { dark } from '@clerk/themes';

export function UserButtonComponent() {
    const {resolvedTheme} = useTheme();
    return (<UserButton 
    appearance={{
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
      }}
    />)
}