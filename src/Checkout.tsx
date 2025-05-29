import { useState, useEffect } from "react";

export default function Checkout() {
  const [selectedPackage, setSelectedPackage] = useState(3); // Default to 3 samples

  // Countdown timer 8 minutes (480 seconds)
  const [timeLeft, setTimeLeft] = useState(480);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const min = String(minutes).padStart(2, "0");
  const sec = String(seconds).padStart(2, "0");

  const packages = [
    {
      id: 1,
      title: "1 AMOSTRA",
      subtitle: "Teste agora",
      originalPrice: "R$ 297,00",
      price: "R$ 39,90",
      installments: "ou 12x de R$ 3,99",
      discount: "86% OFF",
      popular: false,
      badge: "🔥 TESTE",
      savings: "R$ 257",
      benefits: ["Teste de 30 dias", "Frete grátis", "Garantia total"],
      image: "/produto-1-frasco-transparent.png"
    },
    {
      id: 3,
      title: "3 AMOSTRAS",
      subtitle: "Mais procurado",
      originalPrice: "R$ 891,00",
      price: "R$ 79,90",
      installments: "ou 12x de R$ 7,99",
      discount: "91% OFF",
      popular: true,
      badge: "👑 MAIS VENDIDO",
      savings: "R$ 811",
      benefits: ["3x mais eficácia", "Frete grátis", "Duração 6+ horas", "Ereções mais rígidas", "Aumento visível"],
      image: "/produto-3-frascos-transparent.png"
    },
    {
      id: 5,
      title: "5 AMOSTRAS",
      subtitle: "Melhor custo-benefício",
      originalPrice: "R$ 1.485,00",
      price: "R$ 129,90",
      installments: "ou 12x de R$ 12,99",
      discount: "91% OFF",
      popular: false,
      badge: "💰 ECONOMIA",
      savings: "R$ 1.355",
      benefits: ["Máxima potência", "Frete grátis", "Resultado garantido", "Energia de jovem"],
      image: "/produto-5-frascos-transparent.png"
    },
    {
      id: 10,
      title: "10 AMOSTRAS",
      subtitle: "Resultado garantido",
      originalPrice: "R$ 2.970,00",
      price: "R$ 199,90",
      installments: "ou 12x de R$ 19,99",
      discount: "93% OFF",
      popular: false,
      badge: "🏆 PREMIUM",
      savings: "R$ 2.770",
      benefits: ["Transformação total", "Frete grátis", "Potência extrema", "Resultados permanentes"],
      image: "/produto-10-frascos-transparent.png"
    }
  ];

  const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* BARRA DE URGÊNCIA */}
        <div className="bg-red-600 text-white text-center py-3 rounded-xl mb-6 animate-pulse">
          <p className="font-bold text-lg">⏰ OFERTA EXPIRA EM: {min}:{sec} - ÚLTIMAS 23 UNIDADES!</p>
        </div>

        {/* HEADER OTIMIZADO */}
        <div className="text-center mb-8">
          <div className="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-bold mb-4 border-2 border-green-300">
            🎁 FRETE GRÁTIS + BÔNUS EXCLUSIVOS INCLUSOS
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            🔥 ÚLTIMA CHANCE! ESCOLHA SEU PACOTE GRÁTIS
          </h1>

          <p className="text-xl text-gray-700 mb-2 font-semibold">
            Você paga APENAS o frete - Produto 100% GRÁTIS!
          </p>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 rounded">
            <p className="text-sm font-bold text-gray-800">
              ⚡ <strong>1.247 homens</strong> compraram hoje | <strong>23 unidades restantes</strong> | Próximo lote só em 15 dias
            </p>
          </div>
        </div>

        {/* BENEFÍCIOS RÁPIDOS */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 text-center">
          <div className="bg-white p-4 rounded-xl shadow border-t-4 border-green-500">
            <div className="text-2xl mb-2">⚡</div>
            <p className="font-bold text-sm">RESULTADOS EM 5 MINUTOS</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow border-t-4 border-blue-500">
            <div className="text-2xl mb-2">🔒</div>
            <p className="font-bold text-sm">100% SEGURO E DISCRETO</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow border-t-4 border-yellow-500">
            <div className="text-2xl mb-2">✅</div>
            <p className="font-bold text-sm">GARANTIA 30 DIAS</p>
          </div>
        </div>

        {/* PACKAGES OTIMIZADOS */}
        <div className="space-y-6 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative border-3 rounded-2xl p-6 cursor-pointer transition-all hover:scale-102 ${
                selectedPackage === pkg.id
                  ? "border-green-500 bg-green-50 shadow-2xl ring-4 ring-green-200"
                  : "border-gray-200 bg-white hover:border-green-300 shadow-lg hover:shadow-xl"
              } ${pkg.popular ? "border-orange-400 bg-orange-50" : ""}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {/* BADGE SUPERIOR */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  {pkg.badge}
                </div>
              )}

              {!pkg.popular && (
                <div className="absolute -top-3 left-6 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                  {pkg.badge}
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  {/* RADIO BUTTON MELHORADO */}
                  <div className={`w-6 h-6 rounded-full border-3 flex items-center justify-center ${
                    selectedPackage === pkg.id
                      ? "border-green-500 bg-green-500"
                      : "border-gray-400"
                  }`}>
                    {selectedPackage === pkg.id && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-black text-xl text-gray-900">{pkg.title}</h3>
                    <p className="text-sm text-gray-600 font-semibold">{pkg.subtitle}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mb-1">{pkg.discount}</div>
                  <div className="text-xs text-gray-400 line-through">{pkg.originalPrice}</div>
                  <div className="text-2xl font-black text-green-600">{pkg.price}</div>
                  <div className="text-xs text-gray-600">{pkg.installments}</div>
                  <div className="text-xs font-bold text-green-600">Economia: {pkg.savings}</div>
                </div>
              </div>

              {/* IMAGEM DO PACOTE */}
              <div className="flex justify-center mb-4">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-32 h-32 object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>

              {/* BENEFÍCIOS ESPECÍFICOS */}
              <div className="grid grid-cols-1 gap-2 text-sm">
                {pkg.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* DESTAQUE ESPECIAL PARA O MAIS POPULAR */}
              {pkg.popular && (
                <div className="mt-4 bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 rounded-lg">
                  <div className="text-center">
                    <p className="font-bold text-sm">🔥 ESCOLHA DE 89% DOS CLIENTES!</p>
                    <p className="text-xs mt-1">Melhor relação custo-benefício para resultados máximos</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RESUMO DO PEDIDO */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-300 mb-6">
          <h3 className="font-bold text-lg text-center text-green-600 mb-4">📋 RESUMO DO SEU PEDIDO</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">{selectedPkg?.title}</span>
              <span className="font-bold text-green-600">{selectedPkg?.price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Frete para todo Brasil</span>
              <span className="text-green-600 font-bold">GRÁTIS</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Bônus exclusivos</span>
              <span className="text-green-600 font-bold">GRÁTIS</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold text-lg">
              <span>TOTAL A PAGAR:</span>
              <span className="text-green-600">{selectedPkg?.price}</span>
            </div>
          </div>
        </div>

        {/* CTA OTIMIZADO */}
        <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black py-6 px-8 rounded-2xl text-2xl mb-6 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 animate-pulse">
          🔥 FINALIZAR PEDIDO GRÁTIS AGORA! 🔥
        </button>

        {/* MICRO-COPY DE CONFIANÇA */}
        <div className="text-center space-y-2 mb-6">
          <p className="text-sm text-gray-600">👆 Clique e finalize em menos de 30 segundos</p>
          <div className="flex justify-center items-center gap-4 text-xs text-gray-500">
            <span>🔒 Pagamento 100% Seguro</span>
            <span>📦 Entrega Discreta</span>
            <span>↩️ Garantia 30 Dias</span>
          </div>
        </div>

        {/* GARANTIA DESTACADA */}
        <div className="bg-white rounded-xl p-6 text-center border-2 border-green-300 mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-3xl">🛡️</span>
          </div>
          <h3 className="font-bold text-xl mb-3 text-green-600">GARANTIA BLINDADA 30 DIAS</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>RISCO ZERO!</strong> Se em 30 dias você não ficar 100% satisfeito com os resultados,
            devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia. Garantia incondicional!
          </p>
          <div className="mt-4 bg-green-100 p-3 rounded-lg">
            <p className="text-xs font-bold text-green-700">✅ Mais de 47.892 clientes satisfeitos | Taxa de satisfação: 98,7%</p>
          </div>
        </div>

        {/* DEPOIMENTOS RÁPIDOS */}
        <div className="bg-white rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg text-center mb-6">💬 O QUE NOSSOS CLIENTES DIZEM:</h3>
          <div className="space-y-4">
            {[
              {
                name: "Carlos M.",
                text: "Pedido chegou em 3 dias! Resultado incrível em 5 minutos. Recomendo!",
                rating: 5,
                verified: true
              },
              {
                name: "Roberto S.",
                text: "Compra super fácil e produto fantástico. Minha vida mudou completamente!",
                rating: 5,
                verified: true
              }
            ].map((review) => (
              <div key={review.name} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{review.name}</span>
                    {review.verified && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✅ Verificado</span>}
                  </div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ELEMENTOS DE SEGURANÇA */}
        <div className="bg-gray-800 text-white p-6 rounded-xl text-center mb-8">
          <h3 className="font-bold text-lg mb-4">🔒 COMPRA 100% SEGURA E PROTEGIDA</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">🔐</div>
              <p>SSL 256-bit</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <p>ANVISA</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📱</div>
              <p>Suporte 24h</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📦</div>
              <p>Entrega Rápida</p>
            </div>
          </div>
        </div>

        {/* 1. DEPOIMENTOS COM RESULTADOS ESPECÍFICOS */}
        <div className="bg-white rounded-xl p-6 mb-8 border-2 border-green-300">
          <h3 className="font-bold text-xl text-center mb-6 text-green-600">
            📊 RESULTADOS REAIS DOS NOSSOS CLIENTES
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Marcos S., 45 anos",
                location: "São Paulo/SP",
                result: "+6cm em 30 dias",
                quote: "Minha esposa notou a diferença na primeira semana! Agora ela que pede bis. Autoestima lá em cima!",
                timeUsing: "2 meses usando"
              },
              {
                name: "Roberto L., 52 anos",
                location: "Rio de Janeiro/RJ",
                result: "De 2min para 3+ horas",
                quote: "Era motivo de piada entre os amigos. Hoje eles perguntam qual meu segredo. TadaBlue mudou minha vida!",
                timeUsing: "4 meses usando"
              },
              {
                name: "Fernando P., 38 anos",
                location: "Belo Horizonte/MG",
                result: "+40% de circunferência",
                quote: "Pensava que era coisa da idade. Com TadaBlue descobri que posso ter potência de jovem aos 38!",
                timeUsing: "3 meses usando"
              },
              {
                name: "João M., 61 anos",
                location: "Brasília/DF",
                result: "Potência renovada aos 61",
                quote: "Médico disse que era normal na minha idade. TadaBlue provou que ele estava errado. Vida sexual ativa de novo!",
                timeUsing: "5 meses usando"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-green-600 font-bold">✅ {testimonial.timeUsing}</p>
                  </div>
                </div>
                <div className="bg-green-100 p-3 rounded mb-3">
                  <p className="font-bold text-green-700 text-center">📈 RESULTADO: {testimonial.result}</p>
                </div>
                <p className="text-sm italic text-gray-700">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-sm">⭐</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. ESTUDOS E CERTIFICAÇÕES */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6 mb-8">
          <h3 className="font-bold text-xl text-center mb-6">
            🧪 COMPROVAÇÃO CIENTÍFICA E CERTIFICAÇÕES
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white/10 p-4 rounded-lg">
              <div className="text-3xl mb-3">🏛️</div>
              <h4 className="font-bold mb-2">ANVISA</h4>
              <p className="text-sm">Registro sanitário aprovado. Produto 100% legal e seguro para comercialização no Brasil.</p>
              <p className="text-xs mt-2 text-blue-200">Registro: MS 6.7890.0001.001-2</p>
            </div>
            <div className="text-center bg-white/10 p-4 rounded-lg">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="font-bold mb-2">ESTUDOS CLÍNICOS</h4>
              <p className="text-sm">Eficácia comprovada em testes com 1.247 voluntários durante 6 meses.</p>
              <p className="text-xs mt-2 text-blue-200">Taxa de sucesso: 94,2%</p>
            </div>
            <div className="text-center bg-white/10 p-4 rounded-lg">
              <div className="text-3xl mb-3">🥇</div>
              <h4 className="font-bold mb-2">CERTIFICADO ISO</h4>
              <p className="text-sm">Fabricação com padrão internacional de qualidade e segurança.</p>
              <p className="text-xs mt-2 text-blue-200">ISO 9001:2015</p>
            </div>
          </div>
          <div className="bg-yellow-400 text-black p-4 rounded-lg mt-6 text-center">
            <p className="font-bold">⚡ DIFERENTE DE PRODUTOS PIRATAS: TadaBlue possui todas as certificações legais exigidas!</p>
          </div>
        </div>

        {/* 3. GARANTIAS MAIS ROBUSTAS */}
        <div className="bg-white rounded-xl p-6 mb-8 border-2 border-yellow-400">
          <h3 className="font-bold text-xl text-center mb-6 text-yellow-600">
            🛡️ SUAS GARANTIAS BLINDADAS
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📅</span>
                </div>
                <div>
                  <h4 className="font-bold text-green-700">GARANTIA DE 30 DIAS</h4>
                  <p className="text-sm text-green-600">Resultados ou dinheiro de volta</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Se em 30 dias você não sentir melhora na potência, devolvemos 100% do valor pago.
                Sem perguntas, sem burocracia.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">⭐</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700">GARANTIA DE SATISFAÇÃO</h4>
                  <p className="text-sm text-blue-600">98,7% de aprovação</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Baseado em 47.892 clientes reais. Se você não ficar satisfeito,
                reembolso total garantido.
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-2 border-yellow-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🚚</span>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-700">GARANTIA DE ENTREGA</h4>
                  <p className="text-sm text-yellow-600">Produto chega ou reenvio grátis</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Se o produto não chegar no prazo, reenviamos gratuitamente
                ou devolvemos seu dinheiro.
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <div>
                  <h4 className="font-bold text-purple-700">GARANTIA DE PRIVACIDADE</h4>
                  <p className="text-sm text-purple-600">100% discreto e confidencial</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Embalagem neutra, sem identificação do produto.
                Total discrição na entrega.
              </p>
            </div>
          </div>
        </div>

        {/* 4. PROVA SOCIAL NUMÉRICA */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 mb-8">
          <h3 className="font-bold text-xl text-center mb-6">
            📈 NÚMEROS QUE COMPROVAM NOSSA EFICÁCIA
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl font-black text-yellow-300 mb-2">47.892</div>
              <p className="text-sm font-semibold">Clientes Satisfeitos</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl font-black text-yellow-300 mb-2">98,7%</div>
              <p className="text-sm font-semibold">Taxa de Aprovação</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl font-black text-yellow-300 mb-2">1.247</div>
              <p className="text-sm font-semibold">Vendas Hoje</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl font-black text-yellow-300 mb-2">4.9★</div>
              <p className="text-sm font-semibold">Nota dos Clientes</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-400 text-black p-4 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4 text-center text-sm font-bold">
              <div>
                <span className="text-2xl">⚡</span>
                <p>Resultados em média de 7 minutos</p>
              </div>
              <div>
                <span className="text-2xl">📏</span>
                <p>Aumento médio de 5,8cm</p>
              </div>
              <div>
                <span className="text-2xl">⏱️</span>
                <p>Duração média de 3,2 horas</p>
              </div>
            </div>
          </div>
        </div>

        {/* TIMER FINAL */}
        <div className="text-center bg-red-600 text-white py-6 rounded-xl">
          <p className="font-bold text-xl mb-2">⏰ TEMPO ESGOTANDO!</p>
          <div className="text-4xl font-mono font-bold mb-2">{min}:{sec}</div>
          <p className="text-sm">Após esse tempo, a oferta expira e volta para R$ 297!</p>
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-red-800 font-bold py-3 px-8 rounded-full text-lg hover:scale-105 transition-all">
            🚀 GARANTIR AGORA!
          </button>
        </div>
      </div>
    </div>
  );
}
