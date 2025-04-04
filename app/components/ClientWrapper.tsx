'use client'

import Navbar from "./Navbar"
import Attribution from "./Attribution"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Attribution />
        </>
    )
} 