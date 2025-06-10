import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CasesSection = () => {
  const cases = [
    {
      title: "Рост продаж строительной компании в 4 раза",
      description:
        "Создание корпоративного сайта и настройка Яндекс.Директ для строительной компании",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      results: [
        { metric: "Увеличение продаж", value: "400%" },
        { metric: "Снижение CPC", value: "45%" },
        { metric: "Рост трафика", value: "280%" },
      ],
      services: ["Сайт", "Яндекс.Директ"],
      industry: "Строительство",
    },
    {
      title: "Интернет-магазин с оборотом 2М в месяц",
      description:
        "Разработка интернет-магазина модной одежды с интеграцией CRM и аналитики",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      results: [
        { metric: "Месячный оборот", value: "2М ₽" },
        { metric: "Конверсия", value: "3.2%" },
        { metric: "Средний чек", value: "2800 ₽" },
      ],
      services: ["Интернет-магазин", "ВКонтакте"],
      industry: "Fashion",
    },
    {
      title: "Оптимизация сети кафе через WiFi аналитику",
      description:
        "Внедрение системы сбора данных посетителей и оптимизация бизнес-процессов",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
      results: [
        { metric: "Рост выручки", value: "25%" },
        { metric: "Повторные визиты", value: "+15%" },
        { metric: "Время посещения", value: "+20 мин" },
      ],
      services: ["WiFi аналитика", "Карты"],
      industry: "HoReCa",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-blue-400 text-blue-400 bg-transparent"
          >
            Кейсы
          </Badge>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold mb-6">
            Реальные{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              результаты работы
            </span>
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-2xl mx-auto">
            Изучите конкретные проекты и достигнутые результаты для бизнеса
            клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    {caseItem.industry}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="font-montserrat text-xl font-bold text-white leading-tight">
                  {caseItem.title}
                </CardTitle>
                <p className="font-open-sans text-gray-300 text-sm leading-relaxed">
                  {caseItem.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-3">
                  {caseItem.results.map((result, resultIndex) => (
                    <div
                      key={resultIndex}
                      className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
                    >
                      <span className="font-open-sans text-gray-300 text-sm">
                        {result.metric}
                      </span>
                      <span className="font-montserrat font-bold text-blue-400">
                        {result.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {caseItem.services.map((service, serviceIndex) => (
                    <Badge
                      key={serviceIndex}
                      variant="secondary"
                      className="bg-gray-700 text-gray-200 border-gray-600"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                >
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Подробнее о кейсе
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
