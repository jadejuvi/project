"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  FileText, 
  DollarSign, 
  PieChart, 
  Shield 
} from "lucide-react";

const features = [
  {
    title: "Patient Management",
    description: "Efficiently manage patient records, history, and appointments in one place.",
    icon: Users,
  },
  {
    title: "Appointment Scheduling",
    description: "Smart scheduling system with automated reminders and confirmations.",
    icon: Calendar,
  },
  {
    title: "Treatment Plans",
    description: "Create and track detailed treatment plans with progress monitoring.",
    icon: FileText,
  },
  {
    title: "Billing System",
    description: "Streamlined billing and insurance processing with detailed reporting.",
    icon: DollarSign,
  },
  {
    title: "Reports & Analytics",
    description: "Comprehensive insights into your practice's performance and growth.",
    icon: PieChart,
  },
  {
    title: "Secure & Compliant",
    description: "HIPAA-compliant platform with advanced security measures.",
    icon: Shield,
  },
];

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}