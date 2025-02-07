import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function ProposalPage() {
  const [, setLocation] = useLocation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const distance = Math.hypot(
      mousePos.x - (noButtonPos.x + window.innerWidth / 2),
      mousePos.y - (noButtonPos.y + window.innerHeight / 2)
    );

    if (distance < 100) {
      const angle = Math.random() * Math.PI * 2;
      const newX = Math.cos(angle) * 150;
      const newY = Math.sin(angle) * 150;
      setNoButtonPos({ x: newX, y: newY });
    }
  }, [mousePos]);

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: window.innerHeight + 20,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Heart className="text-pink-300 w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <Card className="w-full max-w-md bg-white/90 backdrop-blur">
        <CardContent className="pt-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-pink-600 mb-6">
              Hey Rebekie! 💖
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl mb-8 text-gray-700">
              Will you be my Valentine? 🌹
            </p>

            <div className="flex justify-center gap-4 items-center relative h-20">
              <Button
                size="lg"
                className="bg-pink-500 hover:bg-pink-600"
                onClick={() => setLocation("/success")}
              >
                Yes! 💝
              </Button>

              <motion.div
                style={{
                  position: "absolute",
                  x: noButtonPos.x,
                  y: noButtonPos.y,
                }}
                transition={{ type: "spring", duration: 0.2 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-200"
                >
                  No 💔
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
