import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Алексей Морозов",
      position: "Директор ООО «СтройТех»",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "За 2 месяца работы с Юрой продажи через сайт выросли в 3 раза. Отличное понимание бизнеса и быстрая реализация.",
      rating: 5,
      project: "Корпоративный сайт + Яндекс.Директ",
    },
    {
      name: "Мария Петрова",
      position: 'Владелец магазина "Модный стиль"',
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "Интернет-магазин превзошел все ожидания. Удобная админка, красивый дизайн, продажи пошли с первого дня.",
      rating: 5,
      project: "Интернет-магазин одежды",
    },
    {
      name: "Дмитрий Соколов",
      position: "Управляющий сети кафе",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Система аналитики WiFi помогла понять поведение гостей. Оптимизировали расстановку столов и увеличили выручку на 25%.",
      rating: 5,
      project: "WiFi аналитика + карты",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-blue-200 text-blue-700"
          >
            Отзывы клиентов
          </Badge>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Что говорят{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              о результатах
            </span>
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
            ⭐ Реальные отзывы от довольных клиентов о росте их бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-3 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50/30"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="font-open-sans text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-3 mb-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-montserrat font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="font-open-sans text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                  </div>
                </div>

                <Badge
                  variant="secondary"
                  className="text-xs bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border border-orange-200 font-semibold"
                >
                  {testimonial.project}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
