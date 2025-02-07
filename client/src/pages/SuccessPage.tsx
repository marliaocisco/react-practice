import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function SuccessPage() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        colors={["#EC4899", "#FB7185", "#FDA4AF", "#FCE7F3"]}
        numberOfPieces={150}
      />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <Card className="w-full max-w-md bg-white/90 backdrop-blur">
          <CardContent className="pt-6 text-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mb-6"
            >
              <Heart className="w-16 h-16 text-pink-500 mx-auto" />
            </motion.div>

            <h1 className="text-3xl font-bold text-pink-600 mb-4">
              Yay! 🎉
            </h1>

            <div className="space-y-4 text-gray-700">
              <p className="text-xl">
                Thank you for being my Valentine! ❤️
              </p>
              <p className="text-lg">
                You make my heart skip a beat! 💝
              </p>
            </div>

            <div className="mt-6">
              <img
                src="https://images.unsplash.com/photo-1517867065801-e20f409696b0"
                alt="Valentine's Day Hearts"
                className="rounded-lg shadow-lg mx-auto max-w-xs"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
