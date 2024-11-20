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
    title: "Gestión de Pacientes",
    description: "Gestiona eficientemente los registros, la historia y las citas de los pacientes en un solo lugar.",
    icon: Users,
  },
  {
    title: "Programación de Citas",
    description: "Sistema de programación inteligente con recordatorios y confirmaciones automatizadas.",
    icon: Calendar,
  },
  {
    title: "Planes de Tratamiento",
    description: "Crea y realiza un seguimiento de planes de tratamiento detallados con monitoreo de progreso.",
    icon: FileText,
  },
  {
    title: "Sistema de Facturación",
    description: "Facturación y procesamiento de seguros simplificados con informes detallados.",
    icon: DollarSign,
  },
  {
    title: "Informes y Análisis",
    description: "Información completa sobre el rendimiento y crecimiento de tu clínica.",
    icon: PieChart,
  },
  {
    title: "Seguro y Cumplimiento",
    description: "Plataforma compatible con HIPAA con medidas de seguridad avanzadas.",
    icon: Shield,
  },
];

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Características</h2>
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