'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface JoinUsContextType {
  openForm: (role?: string) => void
  isFormOpen: boolean
  selectedRole: string | null
  resetForm: () => void
}

const JoinUsContext = createContext<JoinUsContextType | undefined>(undefined)

export function JoinUsProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const openForm = (role?: string) => {
    setIsFormOpen(true)
    if (role) {
      setSelectedRole(role)
    }
    // Scroll to form after a brief delay to ensure state is updated
    setTimeout(() => {
      const element = document.getElementById('join-us')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const resetForm = () => {
    setIsFormOpen(false)
    setSelectedRole(null)
  }

  return (
    <JoinUsContext.Provider value={{ openForm, isFormOpen, selectedRole, resetForm }}>
      {children}
    </JoinUsContext.Provider>
  )
}

export function useJoinUs() {
  const context = useContext(JoinUsContext)
  if (context === undefined) {
    throw new Error('useJoinUs must be used within a JoinUsProvider')
  }
  return context
}