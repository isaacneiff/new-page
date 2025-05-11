"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const encode = (data: Record<string, any>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/", { // Submitting to the current page path
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }),
      });

      if (response.ok) {
        toast({
          title: "Mensagem Enviada!",
          description: "Obrigado por entrar em contato. Responderemos em breve.",
          variant: "default",
        });
        form.reset();
      } else {
        const errorText = await response.text();
        toast({
          title: "Erro ao Enviar Mensagem",
          description: `Ocorreu um problema: ${response.statusText} (${response.status}). ${errorText}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro de Rede",
        description: "Não foi possível enviar sua mensagem. Verifique sua conexão e tente novamente.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        name="contact" // Name of the form, should match the hidden input
        method="POST"
        data-netlify="true" // Enables Netlify Forms
        data-netlify-honeypot="bot-field" // Optional: for spam protection
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        action="/?success=true" // Fallback action for non-JS submissions or Netlify success page
      >
        {/* Hidden input for Netlify to identify the form */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Optional: Honeypot field for spam protection. Label should be hidden for users. */}
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/90">Nome Completo</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} className="bg-background/70 border-border focus:bg-background text-foreground placeholder:text-muted-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/90">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="seuemail@exemplo.com" {...field} className="bg-background/70 border-border focus:bg-background text-foreground placeholder:text-muted-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/90">Sua Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Digite sua mensagem aqui..." {...field} rows={5} className="bg-background/70 border-border focus:bg-background text-foreground placeholder:text-muted-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground text-lg py-3 rounded-md">
          Enviar Mensagem
        </Button>
      </form>
    </Form>
  );
}
