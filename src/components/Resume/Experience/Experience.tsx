import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ++++++++++ LOGOS ++++++++++ */
import BeaverLogo from './BeaversLogo.png';
import IRCOLogo from './IRCOLogo.png';
import WebDevLogo from './WebDevLogo.png';
import CiscoLogo from './CiscoLogo.png';


interface TimelineItem {
  title: string;
  role: string;
  date: string;
  description: string[];
  logo: string;
}

const experienceData: TimelineItem[] = [
  {
    title: "Cisco Systems",
    role: "Software Engineer Intern",
    date: "03/2025 - 09/2025",
    description: [
      "Wrote system firmare for Cisco's UCS Blade Servers",
      "Rewrote a monolithic user management system into a client-server architecture",
    ],
    logo: CiscoLogo
  },
  {
    title: "Oregon State University UIT",
    role: "Events Audio Engineer",
    date: "10/2024 - 03/2025",
    description: [
      "Mixed and produced audio for live events attended by thousands of fans",
      "Collaborated with marketing teams and event coordinators",
      "Troubleshot technical issues in high-pressure environments"
    ],
    logo: BeaverLogo
  },
  {
    title: "Oregon State University UIT",
    role: "IT Support and Technician",
    date: "2/2024 - 03/2025",
    description: [
      "Offered technical support to instructors/professors",
      "Remotely accessed classroom technology using various tools",
      "Created and logged tickets in TeamDynamix and ServiceNow"
    ],
    logo: BeaverLogo
  },
  {
    title: "Freelance Full-Stack Web Dev",
    role: "Immigrant and Refugee Community Organization (IRCO)",
    date: "04/2024 - 10/2024",
    description: [
      "Built a number of contracted full-stack websites and web-apps for local companies",
      "Tech stack included but was not limited to: React, TypeScript, TailwindCSS, Python, and AWS",
      "Increased sales and exposure to these companies through web presence and strategic SEO"
    ],
    logo: WebDevLogo
  },
  {
    title: "Maintenance Tech, Repairs and Installation",
    role: "Immigrant and Refugee Community Organization (IRCO)",
    date: "06/2023 - 02/2024",
    description: [
      "General construction for larger in-house projects- plumbing, framing, finishing, demolition",
      "General repairwork - doorframes, furniture, plumbing, etc. ",
      "General build and installation work - TVs, chairs, tables, etc."
    ],
    logo: IRCOLogo
  },
];

const Timeline: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const timelineLineRef = React.useRef<HTMLDivElement>(null);

  const [glowRef, setGlowRef] = React.useState<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !timelineLineRef.current || !glowRef) return;

      const timeline = timelineLineRef.current;
      
      const timelineRect = timeline.getBoundingClientRect();
      
      // Viewport height
      const vh = window.innerHeight;
      // Center of viewport
      const viewportCenter = vh / 2;
      
      // Calculate where the glow should be positioned
      let glowPosition;
      
      if (timelineRect.top > viewportCenter) {
        // Timeline is below viewport center - pin glow to top
        glowPosition = 0;
      } else if (timelineRect.bottom < viewportCenter) {
        // Timeline is above viewport center - pin glow to bottom
        glowPosition = timelineRect.height - 200; // 200px is glow height
      } else {
        // Timeline is crossing viewport center - keep glow centered
        glowPosition = viewportCenter - timelineRect.top - 100; // Center the 200px glow
      }
      
      // Apply the position
      glowRef.style.transform = `translateY(${glowPosition}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [glowRef]);

  return (
    <div 
      ref={containerRef}
      className="relative py-20 container mx-auto px-6"
    >
      <motion.h1 
        className="text-center text-5xl md:text-6xl font-bold text-white mb-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h1>
  
      {/* Timeline vertical line with glow effect - hidden on mobile */}
      <div 
        ref={timelineLineRef}
        className="absolute left-1/2 top-[150px] bottom-20 w-[2px] -translate-x-1/2 hidden md:block"
      >
        {/* Base line */}
        <div className="h-full w-full bg-white/5" />
        
        {/* Glow effect */}
        <div 
          ref={setGlowRef}
          className="absolute top-0 left-1/2 w-[4px] h-[200px] -translate-x-1/2 transition-transform duration-300 ease-out"
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(255,255,255, 1) 0%,
                rgba(255,255,255,0.6) 25%,
                rgba(255,255,255,0.4) 50%,
                rgba(255,255,255,0) 100%
              )
            `,
            boxShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.1)',
            filter: 'blur(2px)'
          }}
        />
      </div>

      {/* Mobile vertical line */}
      <div className="absolute left-1/2 top-[150px] bottom-20 w-[2px] -translate-x-1/2 md:hidden">
        <div className="h-full w-full bg-gradient-to-b from-white/5 via-white/20 to-white/5" />
      </div>

      {/* Timeline Cards */}
      <div className="relative">
        {experienceData.map((item, index) => {
          const [ref] = useInView({
            threshold: 0.2,
            triggerOnce: false
          });

          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              ref={ref}
              className="relative mb-24"
            >
              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-[1fr,auto,1fr] gap-4">
                {/* Left Column */}
                <div className="flex justify-end items-center">
                  {isLeft ? (
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <TimelineCard item={item} isLeft={true} />
                    </motion.div>
                  ) : (
                    <div className="pr-8">
                      <TimelineDateBadge date={item.date} />
                    </div>
                  )}
                </div>

                {/* Center Column - Timeline Node */}
                <TimelineNode />

                {/* Right Column */}
                <div className="flex justify-start items-center">
                  {!isLeft ? (
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <TimelineCard item={item} isLeft={false} />
                    </motion.div>
                  ) : (
                    <div className="pl-8">
                      <TimelineDateBadge date={item.date} />
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col items-center gap-6">
                <TimelineNode />
                <TimelineDateBadge date={item.date} />
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <TimelineCard item={item} isLeft={true} isMobile={true} />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// +++++++++++ TIMELINE NODE +++++++++++
const TimelineNode: React.FC = () => (
  <motion.div
    className="w-8 flex justify-center items-center"
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="relative w-8 h-8">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.2, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm" />
      <div className="absolute inset-[4px] bg-white rounded-full shadow-lg shadow-white/30" />
    </div>
  </motion.div>
);

// +++++++++++ TIMELINE CARD +++++++++++
const TimelineCard: React.FC<{ item: TimelineItem; isLeft: boolean; isMobile?: boolean }> = ({ item, isLeft, isMobile = false }) => (
  <motion.div
    className="p-8 bg-white/5 backdrop-blur-md rounded-xl shadow-xl border border-white/10 
              transition-all duration-500 h-full"
    whileHover={{ 
      scale: 1.02,
      backgroundColor: "rgba(255,255,255,0.1)"
    }}
  >
    <motion.div className={`flex items-center gap-4 mb-6 ${!isLeft && !isMobile && 'flex-row-reverse'}`}>
      <motion.img
        src={item.logo}
        alt={item.title}
        className="w-12 h-12 rounded-full"
        whileHover={{ rotate: 360, transition: { duration: 1 } }}
      />
      <div className={`text-${isMobile ? 'left' : (isLeft ? 'left' : 'right')}`}>
        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
        <h4 className="text-lg text-gray-300">{item.role}</h4>
      </div>
    </motion.div>

    <ul className="space-y-3 text-gray-300">
      {item.description.map((point, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: isMobile ? -20 : (isLeft ? -20 : 20) }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.2 }}
          className={`flex items-start gap-2 ${!isLeft && !isMobile && 'flex-row-reverse'} ${isMobile ? 'text-left' : (isLeft ? 'text-left' : 'text-right')}`}
        >
          <span className="mt-2 w-1.5 h-1.5 bg-white/50 rounded-full flex-shrink-0" />
          <span>{point}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

// ++++++++++ TIMELINE DATE BADGE ++++++++++
const TimelineDateBadge: React.FC<{ date: string }> = ({ date }) => (
  <motion.div
    className="flex items-center"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  >
    <div className="px-4 py-1 bg-white/10 backdrop-blur-md rounded-full
                    border border-white/20 shadow-lg whitespace-nowrap">
      <span className="text-sm text-white/90">{date}</span>
    </div>
  </motion.div>
);

export default Timeline;