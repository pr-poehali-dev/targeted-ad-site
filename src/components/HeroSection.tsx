import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-30 animate-pulse" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <Badge
          variant="secondary"
          className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200"
        >
          <Icon name="Sparkles" size={16} className="mr-2" />
          Digital Marketing Expert
        </Badge>

        <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
          Создаю{" "}
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            продающие решения
          </span>{" "}
          для вашего бизнеса
        </h1>

        <p className="font-open-sans text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          🚀 Увеличиваю продажи в 3-5 раз через эффективные сайты и рекламу!
          Гарантирую результат или возвращаю деньги.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-10 py-5 text-xl font-black shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover-scale border-0 rounded-xl animate-pulse hover:animate-none"
          >
            <Icon name="Rocket" size={20} className="mr-2" />
            🔥 ПОЛУЧИТЬ ПРОДАЖИ СЕЙЧАС
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-3 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-10 py-5 text-xl font-black transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 rounded-xl"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            💬 БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl border-2 border-orange-200">
            <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              150+
            </div>
            <div className="text-gray-700 font-open-sans font-semibold">
              💼 Проектов реализовано
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl border-2 border-red-200">
            <div className="text-4xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-700 font-open-sans font-semibold">
              ⭐ Довольных клиентов
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-pink-100 to-orange-100 rounded-2xl border-2 border-pink-200">
            <div className="text-4xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-700 font-open-sans font-semibold">
              🛡️ Поддержка проектов
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
