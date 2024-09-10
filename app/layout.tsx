import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import './globals.css'
import { Inter } from 'next/font/google';
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata={
  title:"Create Next App",
  description:"Generated by create next app"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
