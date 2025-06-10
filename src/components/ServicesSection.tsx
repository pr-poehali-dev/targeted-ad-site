import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Globe",
      title: "Создание сайтов",
      description:
        "Современные адаптивные сайты с продуманным UX/UI дизайном. Landing pages, корпоративные сайты, многостраничные проекты.",
      features: [
        "Responsive дизайн",
        "SEO оптимизация",
        "Быстрая загрузка",
        "CMS интеграция",
      ],
      color: "purple",
    },
    {
      icon: "ShoppingCart",
      title: "Интернет-магазины",
      description:
        "Полнофункциональные e-commerce решения с удобной системой управления товарами и заказами.",
      features: [
        "Каталог товаров",
        "Корзина и заказы",
        "Платежные системы",
        "Аналитика продаж",
      ],
      color: "blue",
    },
    {
      icon: "Target",
      title: "Таргетированная реклама",
      description:
        "Настройка и ведение рекламных кампаний в социальных сетях и поисковых системах для максимального ROI.",
      features: [
        "Facebook/Instagram",
        "Google Ads",
        "Яндекс.Директ",
        "Аналитика результатов",
      ],
      color: "green",
    },
    {
      icon: "Wifi",
      title: "Сбор MAC-адресов",
      description:
        "Системы аналитики посещаемости офлайн точек через WiFi. Понимание поведения клиентов в физических локациях.",
      features: [
        "WiFi аналитика",
        "Тепловые карты",
        "Время посещений",
        "Повторные визиты",
      ],
      color: "orange",
    },
    {
      icon: "Map",
      title: "Яндекс Карты и 2ГИС",
      description:
        "Настройка и оптимизация бизнес-профилей в картографических сервисах для увеличения локального трафика.",
      features: [
        "Регистрация бизнеса",
        "Оптимизация профиля",
        "Отзывы и рейтинги",
        "Локальное SEO",
      ],
      color: "red",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "border-purple-200 hover:border-purple-300 bg-purple-50/50",
      blue: "border-blue-200 hover:border-blue-300 bg-blue-50/50",
      green: "border-green-200 hover:border-green-300 bg-green-50/50",
      orange: "border-orange-200 hover:border-orange-300 bg-orange-50/50",
      red: "border-red-200 hover:border-red-300 bg-red-50/50",
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  const getIconColor = (color: string) => {
    const colors = {
      purple: "text-purple-600",
      blue: "text-blue-600",
      green: "text-green-600",
      orange: "text-orange-600",
      red: "text-red-600",
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-purple-200 text-purple-700"
          >
            Услуги
          </Badge>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Полный спектр{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              digital-услуг
            </span>
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
            От идеи до реализации — создаю эффективные цифровые решения для
            вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${getColorClasses(service.color)} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2`}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 ${getIconColor(service.color)}`}
                >
                  <Icon name={service.icon as any} size={28} />
                </div>
                <CardTitle className="font-montserrat text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-open-sans text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mr-3 ${getIconColor(service.color).replace("text-", "bg-")}`}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
