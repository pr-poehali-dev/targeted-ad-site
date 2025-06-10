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
      icon: "Search",
      title: "Яндекс.Директ",
      description:
        "Настройка и ведение рекламных кампаний в Яндексе для привлечения целевой аудитории с максимальным ROI.",
      features: [
        "Подбор ключевых слов",
        "Настройка кампаний",
        "A/B тестирование",
        "Отчеты и аналитика",
      ],
      color: "yellow",
    },
    {
      icon: "Users",
      title: "Реклама ВКонтакте",
      description:
        "Таргетированная реклама в социальной сети ВКонтакте для охвата вашей целевой аудитории.",
      features: [
        "Настройка таргетинга",
        "Креативы и тексты",
        "Ретаргетинг",
        "Оптимизация ROI",
      ],
      color: "indigo",
    },
    {
      icon: "Wifi",
      title: "Сбор MAC-адресов",
      description:
        "Системы аналитики посещаемости офлайн точек через WiFi оборудование. Понимание поведения клиентов.",
      features: [
        "WiFi аналитика",
        "Тепловые карты",
        "Время посещений",
        "Повторные визиты",
      ],
      color: "green",
    },
    {
      icon: "MapPin",
      title: "Яндекс Карты и 2ГИС",
      description:
        "Оформление и оптимизация бизнес-профилей в картографических сервисах для увеличения локального трафика.",
      features: [
        "Регистрация бизнеса",
        "Оптимизация профиля",
        "Работа с отзывами",
        "Локальное SEO",
      ],
      color: "red",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "border-purple-200 hover:border-purple-300 bg-purple-50/30",
      blue: "border-blue-200 hover:border-blue-300 bg-blue-50/30",
      yellow: "border-yellow-200 hover:border-yellow-300 bg-yellow-50/30",
      indigo: "border-indigo-200 hover:border-indigo-300 bg-indigo-50/30",
      green: "border-green-200 hover:border-green-300 bg-green-50/30",
      red: "border-red-200 hover:border-red-300 bg-red-50/30",
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  const getIconColor = (color: string) => {
    const colors = {
      purple: "text-purple-600",
      blue: "text-blue-600",
      yellow: "text-yellow-600",
      indigo: "text-indigo-600",
      green: "text-green-600",
      red: "text-red-600",
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-orange-50 to-yellow-50">
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
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              digital-услуг
            </span>
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
            От идеи до результата — создаю продающие решения, которые реально
            увеличивают прибыль! 💰
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${getColorClasses(service.color)} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-3 hover:border-orange-400`}
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
                      className="flex items-center text-sm text-gray-700 bg-[#ffffff]"
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
