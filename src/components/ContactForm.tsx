import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Заявка отправлена!",
      description: "Свяжусь с вами в течение 24 часов для обсуждения проекта.",
    });

    setIsSubmitting(false);
  };

  const contacts = [
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 (999) 123-45-67",
      href: "tel:+79991234567",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "hello@digitalexpert.ru",
      href: "mailto:hello@digitalexpert.ru",
    },
    {
      icon: "MessageCircle",
      label: "Telegram",
      value: "@digitalexpert",
      href: "https://t.me/digitalexpert",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-purple-200 text-purple-700"
          >
            Контакты
          </Badge>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Готовы начать{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              сотрудничество?
            </span>
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку и получите персональное предложение для вашего
            проекта
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 border-purple-100 shadow-lg">
            <CardHeader>
              <CardTitle className="font-montserrat text-2xl font-bold text-gray-900">
                Оставить заявку
              </CardTitle>
              <CardDescription className="font-open-sans text-gray-600">
                Расскажите о вашем проекте и я подготовлю индивидуальное
                предложение
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      required
                      className="border-gray-200 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="border-gray-200 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="border-gray-200 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Интересующая услуга</Label>
                  <Input
                    id="service"
                    placeholder="Например: создание интернет-магазина"
                    className="border-gray-200 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Описание проекта</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите подробнее о вашем проекте, целях и требованиях..."
                    rows={4}
                    className="border-gray-200 focus:border-purple-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Icon
                        name="Loader2"
                        size={20}
                        className="mr-2 animate-spin"
                      />
                      Отправляю...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-2 border-blue-100 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="font-montserrat text-xl font-bold text-gray-900 flex items-center">
                  <Icon name="Clock" size={24} className="mr-3 text-blue-600" />
                  Быстрый отклик
                </CardTitle>
                <CardDescription className="font-open-sans text-gray-600">
                  Отвечаю на заявки в течение 2 часов в рабочее время
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 hover:border-purple-300 transition-colors duration-200"
                >
                  <CardContent className="p-4">
                    <a
                      href={contact.href}
                      className="flex items-center space-x-4 text-gray-700 hover:text-purple-600 transition-colors duration-200"
                    >
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Icon
                          name={contact.icon as any}
                          size={20}
                          className="text-purple-600"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-gray-500">
                          {contact.label}
                        </div>
                        <div className="font-semibold">{contact.value}</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-green-100 bg-green-50/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Shield" size={24} className="text-green-600" />
                  <h3 className="font-montserrat font-bold text-gray-900">
                    Гарантия качества
                  </h3>
                </div>
                <p className="font-open-sans text-gray-600 text-sm">
                  30 дней бесплатной поддержки после сдачи проекта. Гарантия
                  соответствия техническому заданию.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
