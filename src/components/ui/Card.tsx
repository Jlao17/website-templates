import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = "", hoverable = false }: CardProps) {
  return (
    <div
      className={`bg-card-bg rounded-2xl shadow-sm border border-secondary/60 p-6 ${
        hoverable ? "transition-transform duration-200 hover:-translate-y-1 hover:shadow-md" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
