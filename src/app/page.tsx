'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaOm, FaHeart, FaUserGraduate, FaMapMarkerAlt, FaBriefcase, FaRulerVertical, FaBirthdayCake, FaBuilding, FaStethoscope, FaLaptopCode, FaUsers, FaGraduationCap, FaHome } from 'react-icons/fa';
import { GiFlowerPot, GiLotusFlower, GiPrayerBeads } from 'react-icons/gi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const omAnimation = {
  scale: [1, 1.1, 1],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const lotusAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear"
  }
};

const cardHoverAnimation = {
  scale: 1.02,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    type: "spring",
    stiffness: 100
  }
};

const profileCardAnimation = {
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

const shimmerEffect = {
  background: [
    "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
    "linear-gradient(45deg, transparent 100%, rgba(255,255,255,0.4) 50%, transparent 0%)"
  ],
  backgroundSize: "200% 100%",
  backgroundPosition: ["100% 0%", "-100% 0%"],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "linear"
  }
};

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-red-900 dark:to-gray-800"
    >
      {/* Enhanced Header Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 md:py-12 relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-6 md:mb-16"
        >
          <motion.div 
            className="flex justify-center items-center gap-3 mb-4"
            animate={omAnimation}
          >
            <motion.div animate={lotusAnimation}>
              <GiLotusFlower className="text-2xl sm:text-3xl md:text-4xl text-red-500" />
            </motion.div>
            <FaOm className="text-3xl sm:text-4xl md:text-5xl text-red-500" />
            <motion.div animate={lotusAnimation}>
              <GiLotusFlower className="text-2xl sm:text-3xl md:text-4xl text-red-500" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-2xl sm:text-3xl md:text-6xl font-bold text-red-800 dark:text-red-400 mb-2 font-serif tracking-wider"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            वैवाहिक परिचय
          </motion.h1>

          <motion.div
            className="space-y-1 sm:space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Marriage Biodata
            </h2>
            <div className="text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center gap-2 text-sm font-medium">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <GiPrayerBeads className="text-red-500" />
              </motion.span>
              <p className="text-red-800 dark:text-red-400 font-serif italic">
                ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् |
                उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात् ||
              </p>
               
              <p className="mt-2 font-medium">
                विवाह एक पवित्र बंधन है, जो दो आत्माओं को एक करता है। यह सात जन्मों का साथ और परिवारों का मिलन है।
              </p>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <GiPrayerBeads className="text-red-500" />
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Keep your existing cards but add enhanced animations */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-lg mx-auto">
          <motion.div 
            variants={profileCardAnimation}
            whileHover={cardHoverAnimation}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-white via-red-50 to-pink-50 dark:from-gray-800 dark:via-red-900/30 dark:to-pink-900/30 backdrop-blur-sm rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 border border-red-100/50 dark:border-red-500/20 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute inset-0 opacity-30"
              animate={shimmerEffect}
            />
            
            {/* Profile Image Container */}
            <div className="relative h-64 sm:h-72 md:h-80 mb-4 sm:mb-6 md:mb-8 rounded-xl sm:rounded-2xl overflow-hidden group ring-2 sm:ring-4 ring-red-100 dark:ring-red-500/20 ring-offset-2">
              <Image
                src="/jyoti.png"
                alt="Profile Picture"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                priority
              />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg backdrop-blur-sm border border-white/20"
              >
                <span className="flex items-center gap-1 sm:gap-2">
                  <GiPrayerBeads className="text-xs sm:text-sm animate-spin" />
                 Non-Manglik
                </span>
              </motion.div>
            </div>
            
            {/* Profile Details */}
            <div className="space-y-4 sm:space-y-6 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-inner">
              {/* Header with Name and Age */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-red-200/30 pb-3 sm:pb-4 gap-2 sm:gap-0">
                <motion.h2 
                  whileHover={{ scale: 1.05 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-800 to-pink-700 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent"
                >
                  Jyoti Kumari
                </motion.h2>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50 text-red-800 dark:text-red-300 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 shadow-sm border border-red-200/50 w-fit"
                >
                  <FaBirthdayCake className="text-red-500 animate-bounce text-xs sm:text-sm" />
                  29 Years
                </motion.span>
              </div>
              
              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {[ 
                  { icon: FaBriefcase, label: "Profession", value: "Education Onwards (Part Time Job)" },
                  { icon: FaMapMarkerAlt, label: "Location", value: "Muzaffarpur, Bihar" },
                  { icon: FaUserGraduate, label: "Education", value: "Diploma in Elementary Education" },
                  { icon: FaRulerVertical, label: "Height", value: "5'3\"" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="space-y-1 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-red-100/50 dark:border-red-500/20"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5 text-xs sm:text-sm font-medium">
                      <item.icon className="text-red-500 text-sm sm:text-base" />
                      {item.label}
                    </p>
                    <p className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-2">
                {[
                  { label: "Religion", value: "Hindu" },
                  { label: "Caste", value: "Kalwar (Bania) " },
                  { label: "Diet", value: "Flexitarian" },
                  { label: "Income", value: "Part Time Job" }
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-red-50/50 dark:bg-red-900/20 rounded-lg p-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect Button */}
            {/* <motion.button
              onClick={() => window.location.href = 'tel:+919934019585'} 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium flex items-center justify-center gap-2 shadow-lg"
            >
              <FaHeart className="text-pink-300 text-xs sm:text-sm" />
              Connect Now
            </motion.button> */}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 space-y-4 border-2 border-red-100"
          >
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-red-800 flex items-center gap-2">
                <FaOm className="text-red-500" /> About Me
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Namaste! I am a cultured individual who values both modern thinking and traditional values.
                I am deeply rooted in our cultural heritage while embracing contemporary lifestyle.
              </p>
            </div>

            {/* Quick Overview Section */}
            <motion.div 
              whileHover={{ x: 5 }}
              className="bg-red-50/50 dark:bg-red-900/20 backdrop-blur-sm rounded-xl p-4 transition-colors duration-300 hover:bg-red-100/50 dark:hover:bg-red-900/30"
            >
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Quick Overview</h4>
              <ul className="space-y-2 mt-3">
                {[
                  "Caste: Kalwar",
                  "Gotra: Kashyap",
                  "Father: Sanjay Kumar",
                  "Mother: Shobha Devi",
                  "Native: Muzaffarpur, Bihar",
                  "Family: Joint Family",
                  "Religion: Hindu",
                  "Subcaste: Kalwar (bania)",
                  "Marital Status: Never Married",
                  "Diet: Vegetarian (Non-Vegetarian on special occasions)",
                  "Income: Family Business",
                  "Residential Status: Own House"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <GiFlowerPot className="text-red-500 text-xs flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Family Details Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-red-800 flex items-center gap-2">
                <FaUsers className="text-red-500" /> Family Background
              </h3>
              
              {/* Parents Info */}
              <div className="space-y-3">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-red-50 rounded-lg p-3"
                >
                  <h4 className="font-medium text-gray-800">Parents</h4>
                  <div className="space-y-2 mt-2 text-sm">
                    <div className="flex items-start gap-2">
                      <FaBuilding className="text-red-500 mt-1" />
                      <div>
                        <p className="font-medium">Father: Sanjay Kumar</p>
                        <p className="text-gray-600">Businessman - Owner of Sai Nath Grains Agency</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaHome className="text-red-500 mt-1" />
                      <div>
                        <p className="font-medium">Mother: Shobha Devi</p>
                        <p className="text-gray-600">Homemaker</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Siblings Info */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-red-50 rounded-lg p-3"
                >
                  <h4 className="font-medium text-gray-800">Brothers </h4>
                  <h6 className="text-gray-600 text-sm">Younger Brothers</h6>
                  <div className="space-y-3 mt-2 text-sm">
                  <div className="flex items-start gap-2">
                      <FaStethoscope className="text-red-500 mt-1" />
                      <div>
                        <p className="font-medium">Dr. Abhishek Kumar</p>
                        <p className="text-gray-600">Upcoming Veterinary Doctor</p>
                        <p className="text-gray-500">B.V.Sc & A.H</p>
                        <p className="text-gray-500 text-xs italic">Bihar Veterinary College, Patna</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaLaptopCode className="text-red-500 mt-1" />
                      <div>
                        <p className="font-medium">Ashutosh Kumar</p>
                        <p className="text-gray-600"> Currently working as a Software Engineer at MyFuse.in</p>
                        <p className="text-gray-500">B.Tech in Electronics Engineering</p>
                        <p className="text-gray-500 text-xs italic">National Institute of Technology, Nagaland</p>
                      </div>
                    </div>
                    
                  </div>
                </motion.div>

                {/* Family Business Details */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-red-50 rounded-lg p-3"
                >
                  <h4 className="font-medium text-gray-800">Family Business</h4>
                  <div className="space-y-2 mt-2 text-sm">
                    <div className="flex items-start gap-2">
                      <FaBuilding className="text-red-500 mt-1" />
                      <div>
                        <p className="font-medium">Sai Nath Grains Agency</p>
                        <p className="text-gray-600">Established Business in Trading</p>
                        <p className="text-gray-500 text-xs">25+ years in business</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Education & Career */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-red-50 rounded-lg p-3"
                >
                  <h4 className="font-medium text-gray-800">Education & Career</h4>
                  <div className="space-y-2 mt-2 text-sm">
                     {/* Second Education Entry */}
                     <div className="flex items-start gap-2">
                      <FaGraduationCap className="text-red-500 mt-1" />
                      <div>
                        <p className="font-medium">Library Science</p>
                        <p className="text-gray-600">From: Distance Education</p>
                        <p className="text-gray-500 text-xs">Currently Pursuing</p>
                      </div>
                    </div>
                     {/* Second Education Entry */}
                     <div className="flex items-start gap-2">
                      <FaGraduationCap className="text-red-500 mt-1" />
                      <div>
                        <p className="font-medium">Diploma in Elementary Education</p>
                        <p className="text-gray-600">From: MDDM Muzaffarpur</p>
                        <p className="text-gray-500 text-xs">Graduated</p>
                      </div>
                    </div>
                    {/* First Education Entry */}
                    <div className="flex items-start gap-2">
                      <FaGraduationCap className="text-red-500 mt-1" />
                      <div>
                        <p className="font-medium">Bachelor of Science</p>
                        <p className="text-gray-600">From: MDDM Muzaffarpur</p>
                        <p className="text-gray-500 text-xs">Graduated</p>
                      </div>
                    </div>
                   
                  </div>
                </motion.div>

                {/* Additional Family Details */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-red-50 rounded-lg p-3"
                >
                  <h4 className="font-medium text-gray-800">Family Values</h4>
                  <div className="space-y-2 mt-2 text-sm text-gray-600">
                    <p>• Modern outlook with traditional values</p>
                    <p>• Joint family system</p>
                    <p>• Regular participation in cultural activities</p>
                    <p>• Strong emphasis on education</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Connect Button */}
            <motion.button
              onClick={() => window.location.href = 'tel:+919934019585'} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-3 mt-6 shadow-lg transition-all duration-300"
            >
              <FaHeart className="text-pink-300" />
              Connect Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Add a new floating decorative element */}
      <motion.div 
        animate={lotusAnimation}
        className="absolute -top-10 -right-50 text-red-200/20 dark:text-red-900/20 z-0 overflow-hidden" 
      >
        <GiLotusFlower className="w-40 h-40" />
      </motion.div>
    </motion.div>
  );
}
