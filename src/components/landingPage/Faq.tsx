import React from 'react'
import {motion} from 'framer-motion'
import Image from "next/image"
function Faq() {
    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }
      const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }
      const MotionImage = motion(Image)
  return (
    <motion.div className='bg-gradient-to-tr from-white via-rose-100 to-white'>
        
         <motion.section
          className="container mx-auto px-4 py-20"
          id='faq'
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="text-3xl font-bold text-center text-gray-800 mb-12" variants={fadeIn}>
            What Our Users Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex",
                quote: "Dear U helped me connect with my crush. We're now dating!",
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Sam",
                quote: "I love the anonymous feature. It takes away the fear of rejection.",
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Jamie",
                quote: "The AI suggestions are spot-on! I discovered mutual interests I didn't know about.",
                avatar: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                variants={fadeIn}
              >
                <div className="flex items-center mb-4">
                  <MotionImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="container mx-auto px-4 py-20"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="text-3xl font-bold text-center text-gray-800 mb-12" variants={fadeIn}>
            Frequently Asked Questions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Is  Dear U really anonymous?",
                answer:
                  "Yes, all confessions and messages are completely anonymous unless both parties choose to reveal their identities.",
              },
              {
                question: "How does the matching system work?",
                answer:
                  "When two users confess to each other, they're notified of a mutual match and can start chatting.",
              },
              {
                question: "Can I use Dear u for friendship?",
                answer: "We have a Friendship Mode for platonic connections and admiration.",
              },
              {
                question: "Is my data safe?",
                answer: "We take privacy seriously. Your data is encrypted and never shared with third parties.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
    </motion.div>
  )
}

export default Faq