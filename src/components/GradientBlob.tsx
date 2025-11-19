import { motion } from "framer-motion";

interface GradientBlobProps {
  color: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay?: number;
}

export const GradientBlob = ({ color, size = "md", position, delay = 0 }: GradientBlobProps) => {
  const sizeClasses = {
    sm: "w-64 h-64",
    md: "w-96 h-96",
    lg: "w-[600px] h-[600px]",
  };

  const colorClasses = {
    primary: "bg-primary/30",
    secondary: "bg-secondary/30",
    accent: "bg-accent/30",
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay }}
      className={`absolute ${sizeClasses[size]} ${colorClasses[color]} rounded-full blur-blob -z-10`}
      style={position}
    />
  );
};
