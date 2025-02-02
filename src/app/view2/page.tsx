'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaOm, FaHeart, FaUserGraduate, FaMapMarkerAlt, FaBriefcase, FaRulerVertical, FaBirthdayCake, FaStar, FaPrayingHands, FaBookReader } from 'react-icons/fa';
import { GiFlowerPot, GiLotusFlower, GiPeaceDove, GiIndiaGate, GiPeaks } from 'react-icons/gi';
import { useState } from 'react';

// Enhanced animations
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      {/* Enhanced Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={floatingAnimation}
            transition={{ delay: i * 0.2 }}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {i % 4 === 0 ? (
              <GiLotusFlower className="text-red-400 w-16 h-16" />
            ) : i % 4 === 1 ? (
              <GiPeaceDove className="text-orange-400 w-12 h-12" />
            ) : i % 4 === 2 ? (
              <FaOm className="text-red-400 w-14 h-14" />
            ) : (
              <GiIndiaGate className="text-orange-400 w-14 h-14" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Enhanced Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/80 backdrop-blur-lg shadow-lg rounded-b-[2rem] p-4 mb-4"
      >
        <div className="flex justify-center items-center gap-3 mb-3">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-red-500"
          >
            <GiLotusFlower className="w-8 h-8" />
          </motion.div>
          <FaOm className="text-red-600 w-10 h-10" />
          <h1 className="text-2xl font-bold text-red-800 font-serif">वैवाहिक परिचय</h1>
          <motion.div
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-red-500"
          >
            <GiLotusFlower className="w-8 h-8" />
          </motion.div>
        </div>

        {/* Enhanced Navigation */}
        <div className="flex justify-center gap-4 pt-2">
          {[
            { id: 'profile', icon: FaPrayingHands },
            { id: 'details', icon: FaBookReader }
          ].map(({ id, icon: Icon }) => (
            <motion.button
              key={id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === id 
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-red-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Card Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === 'profile' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: activeTab === 'profile' ? 20 : -20 }}
          transition={{ duration: 0.3 }}
          className="px-3"
        >
          {activeTab === 'profile' ? (
            <motion.div 
              variants={cardVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-4 mb-4"
            >
              {/* Enhanced Profile Section */}
              <div className="relative mb-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder-profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1"
                  >
                    <FaStar className="text-yellow-200" />
                    Premium
                  </motion.span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-3 right-3 bg-white rounded-full p-2 shadow-lg"
                >
                  <GiPeaks className="text-orange-400 w-5 h-5" />
                </motion.div>
              </div>

              {/* Enhanced Profile Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Arjun Sharma</h2>
                    <p className="text-xs text-red-500">मांगलिक</p>
                  </div>
                  <span className="bg-gradient-to-r from-red-50 to-orange-50 text-red-800 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <FaBirthdayCake className="text-xs" />
                    27 Years
                  </span>
                </div>

                {/* Enhanced Quick Stats */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { icon: FaBriefcase, label: "Work", value: "Software Engineer" },
                    { icon: FaMapMarkerAlt, label: "Location", value: "Mumbai" },
                    { icon: FaUserGraduate, label: "Education", value: "M.Tech" },
                    { icon: FaRulerVertical, label: "Height", value: "5'11\"" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-red-50 to-orange-50 p-2 rounded-xl flex items-start gap-2"
                    >
                      <item.icon className="text-red-500 mt-1" />
                      <div>
                        <p className="text-gray-500 text-xs">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              variants={cardVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-4 space-y-4"
            >
              {/* About Section */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-red-800 flex items-center gap-2">
                  <FaOm className="text-red-500" /> About Me
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Namaste! I am a cultured individual who values both modern thinking and traditional values.
                  I am deeply rooted in our cultural heritage while embracing contemporary lifestyle.
                </p>
              </div>

              {/* Family Details */}
              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-red-800">Family Background</h3>
                <div className="grid gap-2">
                  {[
                    "Gotra: Kashyap",
                    "Father: Dr. Rajesh Sharma",
                    "Mother: Priya Sharma",
                    "Native: Varanasi, UP"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl text-sm"
                    >
                      <GiFlowerPot className="text-red-500 flex-shrink-0" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 shadow-lg"
                >
                  <FaHeart className="text-pink-300" />
                  Connect Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}