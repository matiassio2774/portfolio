import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

import { Provider } from "../provider";

import { Navbar } from "@/components/navbar";

const ParticleBackground = () => {
  const particleCount = 25;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: 3 + Math.random() * 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <ParticleBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,45,55,0.5)_0%,rgba(15,15,25,0.8)_100%)] pointer-events-none" />
      <Navbar />
      <main className="container flex-grow px-6 pt-16 mx-auto relative z-10">
        <Provider>{children}</Provider>
      </main>
      <footer className="flex items-center justify-center w-full py-5 mt-20 relative z-10 border-t border-gray-800">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://github.com/matiassio2774"
            title="GitHub Profile"
          >
            <span className="text-default-600">Developed by Matias Sio © {new Date().getFullYear()}</span>
          </Link>
        </motion.div>
      </footer>
    </div>
  );
}
