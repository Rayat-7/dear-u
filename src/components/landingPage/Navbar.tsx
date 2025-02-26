import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { motion } from 'framer-motion'
export function NavBarDemo() {
  const navItems = [
    { name: 'Features', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'How It Works', url: '#how-it-works', icon: Briefcase },
    { name: 'Policy', url: '#', icon: FileText }
  ]

  return (
    <NavBar items={navItems} />
  )
  
}