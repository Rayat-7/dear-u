import { motion } from 'framer-motion'
import { useSpring, animated } from "@react-spring/web"
import {
    Heart,
    MessageCircle,
    UserCheck,
    Radar,
    Calendar,
    BotIcon as Robot,
    Users,
    Gift,
    ThumbsUp,
    History,
    Menu,
    X,
  } from "lucide-react"
import React from 'react'

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
const Features = () => {
  return (
    <div  id="features" className='relative p-2 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-white via-rose-100 to-rose-200'>
        
        <motion.section
          
          className="container mx-auto px-4 py-2 "
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="text-3xl font-bold text-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-stone-600 via-stone-900 to-white bg-clip-text text-transparent mb-12" variants={fadeIn} >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-pink-500" />,
                title: "Anonymous Crush Confessions",
                description: "Confess your feelings without revealing your identity.",
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
                title: "Secret Love Letters",
                description: "Send anonymous love notes to your crush.",
              },
              {
                icon: <UserCheck className="w-8 h-8 text-green-500" />,
                title: "Mutual Match System",
                description: "Unlock private chats when both confess.",
              },
              {
                icon: <Radar className="w-8 h-8 text-purple-500" />,
                title: "Crush Radar",
                description: "Discover potential crushes in your network.",
              },
              {
                icon: <Calendar className="w-8 h-8 text-orange-500" />,
                title: "Timed Reveal",
                description: "Fun challenges before revealing identities.",
              },
              {
                icon: <Robot className="w-8 h-8 text-indigo-500" />,
                title: "AI Love Hints",
                description: "Get AI-powered suggestions for potential crushes.",
              },
              {
                icon: <Users className="w-8 h-8 text-yellow-500" />,
                title: "Friendship Mode",
                description: "Express platonic admiration and make new friends.",
              },
              {
                icon: <Gift className="w-8 h-8 text-red-500" />,
                title: "Event-Based Confessions",
                description: "Special themed confessions for holidays.",
              },
              {
                icon: <ThumbsUp className="w-8 h-8 text-teal-500" />,
                title: "Kind Rejections",
                description: "Decline confessions with supportive responses.",
              },
              {
                icon: <History className="w-8 h-8 text-gray-500" />,
                title: "Crush History",
                description: "Revisit past confessions and give second chances.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white border-rose-600 rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="how-it-works"
          className="container mx-auto px-4 py-20 bg-gradient-to-b from-white via-rose-100 to-rose-200 rounded-lg shadow-lg"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="text-3xl font-bold text-center text-gray-800 mb-12" >
            How It Works
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            {[
              {
                icon: <Heart className="w-8 h-8 text-pink-500" />,
                title: "Choose Your Crush",
                description: "Select the person you're interested in from your network or nearby.",
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
                title: "Send a Confession",
                description: "Write an anonymous message or choose from fun templates.",
              },
              {
                icon: <UserCheck className="w-8 h-8 text-green-500" />,
                title: "Wait for a Match",
                description: "If they like you back, you'll both be notified and can start chatting!",
              },
            ].map((step, index) => (
              <motion.div key={index} className="flex flex-col items-center text-center max-w-xs" >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{`${index + 1}. ${step.title}`}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section> 
    </div>
  )
}

export default Features