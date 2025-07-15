"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{
            rotate: theme === "dark" ? 180 : 0,
            scale: theme === "dark" ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? <Moon className="w-4 h-4 text-blue-400" /> : <Sun className="w-4 h-4 text-yellow-500" />}
        </motion.div>
      </motion.div>

      {/* Background Icons */}
      <motion.div className="absolute inset-0 flex items-center justify-between px-2" initial={false}>
        <motion.div
          animate={{
            opacity: theme === "light" ? 0.3 : 0,
            scale: theme === "light" ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-4 h-4 text-yellow-500" />
        </motion.div>
        <motion.div
          animate={{
            opacity: theme === "dark" ? 0.3 : 0,
            scale: theme === "dark" ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-4 h-4 text-blue-400" />
        </motion.div>
      </motion.div>
    </motion.button>
  )
}
