import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <Badge
          variant="secondary"
          className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200"
        >
          <Icon name="Sparkles" size={16} className="mr-2" />
          Digital Marketing Expert
        </Badge>

        <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Создаю{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            цифровые решения
          </span>{" "}
          для бизнеса
        </h1>

        <p className="font-open-sans text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Разрабатываю сайты, интернет-магазины и запускаю эффективную
          таргетированную рекламу. Полный цикл digital-маркетинга для роста
          вашего бизнеса.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
          >
            <Icon name="Rocket" size={20} className="mr-2" />
            Начать проект
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Консультация
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
            <div className="text-gray-600 font-open-sans">
              Проектов реализовано
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600 font-open-sans">
              Довольных клиентов
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600 font-open-sans">
              Поддержка проектов
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
};

export default HeroSection;
