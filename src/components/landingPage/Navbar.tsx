import { Home, Waypoints, MessageCircleCode, MessageCircleHeart, FileHeart, User, } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { motion } from 'framer-motion'
export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Features', url: '#features', icon: FileHeart },
    { name: 'How It Works', url: '#how-it-works', icon: Waypoints },
    { name: 'Privacy', url: '/pages/privacy', icon: MessageCircleCode },
    { name: 'Login', url:'/pages/login', icon:User}
  ]

  return (
    <NavBar items={navItems} />
  )
  
}