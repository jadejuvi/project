"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Calendar,
  Users,
  FileText,
  Settings,
  Home,
  PieChart,
  Clock,
  DollarSign,
  Menu,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navigation = [
  { name: 'Panel de Control', href: '/dashboard', icon: Home },
  { name: 'Turnos', href: '/appointments', icon: Calendar },
  { name: 'Pacientes', href: '/patients', icon: Users },
  { name: 'Planes de Tratamiento', href: '/treatments', icon: FileText },
  { name: 'Informes', href: '/reports', icon: PieChart },
  { name: 'Horarios', href: '/time', icon: Clock },
  { name: 'Facturación', href: '/billing', icon: DollarSign },
  { name: 'Configuración', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const SidebarContent = (
    <>
      <div className="p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
          DentFlow
        </h1>
        <ThemeToggle />
      </div>
      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center px-4 py-3 text-sm font-medium rounded-md',
                'hover:bg-accent hover:text-accent-foreground transition-colors',
                pathname === item.href
                  ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                  : 'text-muted-foreground'
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </>
  );

  return (
    <>
      {/* Botón de Menú Móvil */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            {SidebarContent}
          </SheetContent>
        </Sheet>
      </div>

      {/* Barra Lateral de Escritorio */}
      <div className="hidden lg:flex lg:flex-col w-64 bg-card border-r">
        {SidebarContent}
      </div>
    </>
  );
}