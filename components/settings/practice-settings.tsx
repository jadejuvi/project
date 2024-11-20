"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  practiceName: z.string().min(2, "Campo requerido"),
  address: z.string().min(5, "Campo requerido"),
  phone: z.string().min(10, "Campo requerido"),
  email: z.string().email("Campo requerido"),
  city: z.string().min(5, "Campo requerido"),
  timezone: z.string(),
  currency: z.string(),
  businessHours: z.object({
    start: z.string(),
    end: z.string(),
  }),
});

export function PracticeSettings() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      practiceName: "Odonto Más",
      address: "Pampa Grande & Fortin Casanillo",
      phone: "+595985495392",
      city: "Ciudad del Este",
      email: "odontomas.cde@gmail.com",
      currency: "PYG",
      businessHours: {
        start: "09:00",
        end: "18:00",
      },
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información de la Clínica</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="practiceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de la clínica</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dirección</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ciudad</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Moneda</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="PYG">Guaraníes (PYG)</SelectItem>
                        <SelectItem value="USD">Dólares (USD)</SelectItem>
                        <SelectItem value="BRL">Reales (BRL)</SelectItem>
                        <SelectItem value="ARS">
                          Pesos Argentinos (ARS)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="businessHours.start"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horario de Apertura</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        {...field}
                        value={field.value as string}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessHours.end"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Horario de Cierre</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        {...field}
                        value={field.value as string}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Guardar Cambios</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
