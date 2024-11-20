"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    title: "Básico",
    price: "99.000",
    features: [
      "Hasta 50 pacientes",
      "Programación básica de citas",
      "Gestión de registros de pacientes",
      "Soporte por correo electrónico",
    ],
  },
  {
    title: "Profesional",
    price: "199.000",
    popular: true,
    features: [
      "Hasta 200 pacientes",
      "Programación avanzada",
      "Planificación de tratamientos",
      "Gestión de facturación",
      "Panel de administración + 3 profesionales",
      "Soporte prioritario",
    ],
  },
  {
    title: "Empresarial",
    price: "799.000",
    features: [
      "Pacientes ilimitados",
      "Características personalizadas",
      "Análisis avanzados",
      "Panel de administración y profesionales",
      "Soporte multiubicación",
      "Soporte premium 24/7",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Planes de Precios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.title} 
              className={cn(
                "relative",
                plan.popular && "border-primary shadow-lg scale-105"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Más Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle>{plan.title}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{`Gs. ${plan.price}`}</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Comenzar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}