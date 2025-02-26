import { Home, User, Briefcase, FileText, Waypoints, MessageCircleCode } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { motion } from 'framer-motion'
export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Features', url: '#features', icon: User },
    { name: 'How It Works', url: '#how-it-works', icon: Waypoints },
    { name: 'FAQ', url: '#faq', icon: MessageCircleCode }
  ]

  return (
    <NavBar items={navItems} />
  )
  
}