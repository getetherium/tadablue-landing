import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  // Countdown timer 10 minutes (600 seconds)
  const [timeLeft, setTimeLeft] = useState(600);

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

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* BARRA DE URGÊNCIA OTIMIZADA */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm sm:text-base md:text-lg font-bold animate-pulse">
        🔥 APENAS {min}:{sec} PARA CONSEGUIR SEU FRASCO GRÁTIS - ÚLTIMAS 32 UNIDADES!
      </div>

      {/* HERO OTIMIZADO */}
      <section className="px-4 py-8 sm:py-12 md:py-16 bg-gradient-to-b from-red-600 to-red-500 text-white text-center">
        {/* PROVA SOCIAL MELHORADA */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-center items-center gap-1 mb-3">
            {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-300 text-xl sm:text-2xl md:text-3xl animate-pulse">⭐</span>)}
          </div>
          <div className="bg-yellow-300 text-red-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full inline-block max-w-xs sm:max-w-sm md:max-w-lg">
            <p className="text-sm sm:text-base md:text-xl font-bold leading-tight">
              +47.892 HOMENS JÁ RECUPERARAM SUA POTÊNCIA!
            </p>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6">
          <span className="text-yellow-300 block">PARE DE PASSAR VERGONHA!</span>
          <span className="block mt-2">ACABE COM A IMPOTÊNCIA</span>
          <span className="text-yellow-300 animate-pulse block mt-2">EM APENAS 5 MINUTOS</span>
        </h1>

        <div className="bg-black/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border-2 border-yellow-300 mx-auto max-w-sm sm:max-w-lg md:max-w-2xl">
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed space-y-2">
            <p>⚡ <span className="text-yellow-300">RESULTADOS EM 5 MINUTOS</span> - não precisa esperar dias!</p>
            <p>🚀 <span className="text-yellow-300">EREÇÕES DE AÇO</span> que duram 3+ horas direto</p>
            <p>📏 <span className="text-yellow-300">+7CM COMPROVADOS</span> em apenas 30 dias</p>
            <p>✅ <span className="text-yellow-300">100% NATURAL</span> - sem químicas perigosas</p>
          </div>
        </div>

        {/* CTA PRINCIPAL OTIMIZADO */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={() => navigate('/checkout')}
            className="w-full max-w-sm sm:max-w-md bg-yellow-300 hover:bg-yellow-400 hover:scale-105 text-red-800 font-extrabold py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 rounded-full text-lg sm:text-xl md:text-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl mb-3 sm:mb-4 animate-bounce"
          >
            🔥 SIM! QUERO MEU FRASCO GRÁTIS AGORA! 🔥
          </button>
          <p className="text-sm sm:text-base md:text-lg font-bold">👆 CLIQUE AQUI E PARE DE SER HUMILHADO NA CAMA!</p>
        </div>

        {/* CONTADOR PRINCIPAL MELHORADO */}
        <div className="bg-black text-yellow-300 inline-block px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl border-2 border-yellow-300 mb-6 sm:mb-8 animate-pulse">
          <div className="text-sm sm:text-base md:text-xl font-bold">⚠️ SUA OFERTA GRATUITA EXPIRA EM:</div>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono text-red-400 font-black">
            {min}:{sec}
          </div>
          <div className="text-xs sm:text-sm font-bold text-red-400">DEPOIS DISSO VOLTA PARA R$ 297!</div>
        </div>

        <img
          src="https://ext.same-assets.com/1337225608/2728376428.webp"
          alt="TadaBlue"
          className="mx-auto w-48 sm:w-56 md:w-64 lg:w-72 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </section>

      {/* HISTÓRIA REAL OTIMIZADA */}
      <section className="px-4 py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-red-600 mb-4">
            ⚠️ VOCÊ TAMBÉM SE IDENTIFICA COM ESTA SITUAÇÃO?
          </h2>
          <p className="text-xl text-center text-gray-700 mb-8 font-semibold">
            👇 Leia o relato REAL de Roberto e veja como ele se livrou da HUMILHAÇÃO na cama:
          </p>

          <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-red-600">
            <div className="flex items-start gap-4 mb-4">
              <img
                src="https://ext.same-assets.com/1337225608/593902566.webp"
                alt="Roberto"
                className="w-24 h-24 rounded-full object-cover border-4 border-red-600"
              />
              <div>
                <h3 className="font-bold text-xl text-red-600">Roberto M., 62 anos</h3>
                <p className="text-sm text-gray-600 font-semibold">Contador aposentado - São Paulo/SP</p>
                <p className="text-xs text-green-600 font-bold">✅ CLIENTE VERIFICADO</p>
              </div>
            </div>
            <blockquote className="text-lg italic leading-relaxed bg-gray-50 p-6 rounded-lg">
              <p className="font-bold text-red-600 text-xl mb-3">"EU ERA MOTIVO DE PIADA..."</p>

              "Doutor, eu chegava perto da minha esposa e já sabia que seria mais uma noite de VERGONHA.
              Broxava sempre, ela chorava de frustração e eu me sentia um FRACASSO total.

              <br /><br />Gastei mais de R$ 8.000 em remédios caros que só me deram problemas no coração.
              Meus amigos faziam piadas, minha autoestima estava no fundo do poço...

              <br /><br /><span className='font-bold text-green-600 text-xl'>ATÉ QUE DESCOBRI O TADABLUE!</span>

              <br /><br />Em apenas 5 dias eu virei uma MÁQUINA na cama! Agora minha esposa implora para eu parar,
              porque aguento 3 HORAS DIRETAS sem falhar nem uma vez!

              <br /><br /><span className='font-bold text-red-600'>Se você quer DOMINAR qualquer mulher de tanto prazer e virar o REI da cama, TadaBlue é sua única solução!"</span>
            </blockquote>

            <div className="mt-6 bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="text-sm font-bold text-gray-800">
                📈 <strong>RESULTADO DE ROBERTO:</strong> De 3 minutos para 3+ HORAS | +6cm de aumento | Casamento salvo
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/checkout')}
              className="bg-red-600 hover:bg-red-700 hover:scale-105 text-white font-extrabold py-6 px-10 rounded-full text-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🚀 EU TAMBÉM QUERO PARAR DE PASSAR VERGONHA!
            </button>
            <p className="mt-3 text-sm text-gray-600">👆 Mais de 47.000 homens já mudaram suas vidas!</p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-4 py-14 bg-white">
        <h2 className="text-2xl md:text-4xl font-black text-center text-red-600">
          Por que TadaBlue é 10x mais potente que qualquer concorrente?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10 text-center">
          {[
            [
              "Ação Ultra-Rápida",
              "Ativos chegam na corrente sanguínea em até 5 minutos."
            ],
            [
              "Duração Extrema",
              "Potência máxima por até 3 horas sem falhar."
            ],
            ["Mais Testosterona", "+32% comprovados em estudos clínicos."],
            ["Fórmula 100% Natural", "Zero química pesada, zero colateral."],
            [
              "Aumento Visível",
              "Fluxo sanguíneo turbinado = espessura e comprimento maiores."
            ],
            [
              "Homologado pela ANVISA",
              "Segurança e qualidade garantidas por órgão federal."
            ]
          ].map(([title, desc]) => (
            <div key={title} className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="font-extrabold text-lg text-red-600 mb-2">
                {title}
              </h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS OTIMIZADOS */}
      <section className="px-4 py-14 bg-gray-50">
        <h2 className="text-3xl md:text-5xl font-black text-center text-red-600 mb-4">
          👨‍👨‍👦 VEJA O QUE NOSSOS CLIENTES FALAM:
        </h2>
        <p className="text-xl text-center text-gray-700 mb-10 font-semibold">
          💬 Depoimentos REAIS de homens que recuperaram sua MASCULINIDADE:
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Gustavo Almeida",
              age: "45 anos",
              city: "Niterói / RJ",
              img: "https://ext.same-assets.com/1337225608/2758371165.webp",
              text: "INACREDITÁVEL! Ganhei 7cm de circunferência e agora são ELAS que imploram por mais. Minha namorada disse que nunca sentiu tanto prazer na vida!",
              result: "+7cm | 4+ horas de duração"
            },
            {
              name: "Thiago Pinheiro",
              age: "38 anos",
              city: "Ribeirão Preto / SP",
              img: "https://ext.same-assets.com/1337225608/3908647.webp",
              text: "Eu era PIADA entre meus amigos... Broxava sempre! Com TadaBlue virei uma LENDA. Agora faço maratona de prazer e elas ficam viciadas em mim!",
              result: "De 2min para 3+ horas"
            },
            {
              name: "Flávio Martins",
              age: "68 anos",
              city: "Belo Horizonte / MG",
              img: "https://ext.same-assets.com/1337225608/3918583536.webp",
              text: "Aos 68 anos pensava que era o fim... TadaBlue me deu vida nova! Agora dou show de VIGOR e as mulheres se assustam com minha energia de garanhão!",
              result: "Potência de jovem aos 68!"
            }
          ].map((d) => (
            <div key={d.name} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 hover:scale-105 transition-transform duration-300">
              <img
                src={d.img}
                alt={d.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
              />
              <div className="flex justify-center mb-2">
                {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-lg">⭐</span>)}
              </div>
              <p className="italic text-sm mb-3 font-medium">"{d.text}"</p>
              <div className="bg-green-100 p-2 rounded mb-3">
                <p className="text-xs font-bold text-green-700">📊 RESULTADO: {d.result}</p>
              </div>
              <p className="font-bold text-red-600">
                {d.name}, {d.age}<br />
                <span className="text-sm text-gray-600">{d.city}</span>
              </p>
              <p className="text-xs text-green-600 font-bold mt-1">✅ CLIENTE VERIFICADO</p>
            </div>
          ))}
        </div>

        {/* MAIS DEPOIMENTOS COM FOTOS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex gap-4">
              <img
                src="https://ext.same-assets.com/1337225608/593902566.webp"
                alt="Vicente"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="italic text-sm">"Minha mulher disse que nunca sentiu tanto prazer. Com TadaBlue virei uma máquina na cama por horas!"</p>
                <p className="mt-2 font-bold text-red-600">Vicente F. – Salvador/BA</p>
                <p className="text-xs text-gray-500">Há 3 dias</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex gap-4">
              <img
                src="https://ext.same-assets.com/1337225608/3445562604.webp"
                alt="Paulo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="italic text-sm">"Nunca imaginei que aos 55 anos ia ter ereções de adolescente. TadaBlue mudou minha vida completamente!"</p>
                <p className="mt-2 font-bold text-red-600">Paulo S. – Curitiba/PR</p>
                <p className="text-xs text-gray-500">Há 1 dia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS VISUAIS */}
      <section className="px-4 py-14 bg-red-50">
        <h2 className="text-2xl md:text-4xl font-black text-center text-red-600">
          AUMENTO REAL COMPROVADO
        </h2>
        <p className="text-center mt-4 text-lg text-gray-700">
          📏 Clientes mostrando o ANTES e DEPOIS do tratamento
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6 max-w-3xl mx-auto">
          <p className="text-center font-bold text-gray-800">
            ⚠️ <strong>ATENÇÃO:</strong> Imagens reais de resultados. Conteúdo para maiores de 18 anos.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
          <div className="text-center">
            <img
              src="https://ext.same-assets.com/1337225608/3539767739.webp"
              alt="Antes do tratamento"
              className="mx-auto w-48 h-60 object-contain rounded-lg shadow-lg bg-white border-4 border-red-400"
            />
            <p className="mt-2 font-bold text-red-600">❌ ANTES</p>
            <p className="text-sm text-gray-600">Pequeno e sem confiança</p>
          </div>
          <div className="text-center">
            <img
              src="https://ext.same-assets.com/1337225608/625819971.webp"
              alt="Depois do tratamento"
              className="mx-auto w-48 h-60 object-contain rounded-lg shadow-lg bg-white border-4 border-green-400"
            />
            <p className="mt-2 font-bold text-green-600">✅ DEPOIS</p>
            <p className="text-sm text-gray-600">Muito maior e mais grosso</p>
          </div>
          <div className="text-center">
            <img
              src="https://ext.same-assets.com/1337225608/4239945290.webp"
              alt="Resultado final"
              className="mx-auto w-48 h-60 object-contain rounded-lg shadow-lg bg-white border-4 border-yellow-400"
            />
            <p className="mt-2 font-bold text-yellow-600">🏆 RESULTADO</p>
            <p className="text-sm text-gray-600">Tamanho impressionante</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/checkout')}
            className="bg-red-600 hover:bg-red-700 hover:scale-105 text-white font-extrabold py-4 px-8 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            QUERO ESSES RESULTADOS
          </button>
        </div>

        {/* GALERIA DE RESULTADOS */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center text-red-600 mb-6">
            🍆 VEJA O AUMENTO REAL EM CENTÍMETROS
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <img
                src="https://ext.same-assets.com/1337225608/2306409663.webp"
                alt="Antes do tratamento"
                className="w-full h-48 object-contain rounded-lg"
              />
              <p className="mt-3 font-bold text-red-600">ANTES: 12cm</p>
              <p className="text-sm text-gray-600">Sem confiança, inseguro</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <img
                src="https://ext.same-assets.com/1337225608/783413884.webp"
                alt="Depois do tratamento"
                className="w-full h-48 object-contain rounded-lg"
              />
              <p className="mt-3 font-bold text-green-600">DEPOIS: 19cm</p>
              <p className="text-sm text-gray-600">+7cm de puro prazer!</p>
            </div>
          </div>
          <p className="text-center mt-6 text-lg font-bold text-red-600">
            💥 AUMENTO MÉDIO DE 5-7CM EM 30 DIAS!
          </p>
          <p className="text-center mt-2 text-sm text-gray-600">
            * Resultados podem variar de pessoa para pessoa
          </p>
        </div>
      </section>

      {/* ESPECIALISTAS */}
      <section className="px-4 py-14 bg-white">
        <h2 className="text-2xl md:text-4xl font-black text-center text-red-600">
          Especialistas Recomendam
        </h2>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <img
              src="https://ext.same-assets.com/1337225608/3181497806.webp"
              alt="Dr Alberto"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="font-bold text-lg text-red-600">Dr. Alberto Fonseca</h3>
              <p className="text-sm mb-2">Sexólogo</p>
              <p className="text-sm">
                "Os ativos do TadaBlue restauram a função erétil sem riscos e
                entregam resultados rápidos comprovados em meus pacientes."
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src="https://ext.same-assets.com/1337225608/3303597386.webp"
              alt="Dra Marta"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="font-bold text-lg text-red-600">Dra. Marta Ribeiro</h3>
              <p className="text-sm mb-2">Endocrinologista</p>
              <p className="text-sm">
                "Recomendo para homens acima dos 40 que precisam de apoio
                hormonal seguro para manter a vida sexual ativa."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBJEÇÕES TRATADAS OTIMIZADAS */}
      <section className="px-4 py-14 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-red-600 mb-6">
            🤔 "MAS EU JÁ TENTEI TUDO E NADA FUNCIONOU..."
          </h2>
          <p className="text-xl text-center text-gray-700 mb-10 font-semibold">
            👇 Veja por que TadaBlue é DIFERENTE de tudo que você já tentou:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-red-600 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-xl text-red-600 mb-3">💸 "Já gastei uma fortuna e nada funcionou!"</h3>
              <p className="text-sm mb-3">
                <strong>SOLUÇÃO:</strong> Diferente dos remédios caros que custam R$ 200-500 por mês,
                TadaBlue sai GRÁTIS hoje! Você só paga R$ 19,90 de frete e testa sem risco.
              </p>
              <div className="bg-green-100 p-3 rounded">
                <p className="text-xs font-bold text-green-700">💡 ECONOMIA: R$ 6.000+ por ano vs outros tratamentos</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-red-600 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-xl text-red-600 mb-3">⚠️ "Tenho medo de efeitos colaterais perigosos!"</h3>
              <p className="text-sm mb-3">
                <strong>SOLUÇÃO:</strong> 100% natural e aprovado pela ANVISA! Diferente do Viagra que pode causar INFARTO,
                TadaBlue é seguro até para diabéticos, hipertensos e cardíacos.
              </p>
              <div className="bg-green-100 p-3 rounded">
                <p className="text-xs font-bold text-green-700">🏥 SEGURANÇA: 0 efeitos colaterais em 47.892 clientes</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-red-600 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-xl text-red-600 mb-3">👴 "Tenho mais de 50 anos, será que funciona?"</h3>
              <p className="text-sm mb-3">
                <strong>PROVA:</strong> Roberto tem 62 anos e virou uma MÁQUINA! Temos clientes de 18 a 85 anos com resultados fantásticos.
                Quanto mais maduro, mais você vai se surpreender!
              </p>
              <div className="bg-green-100 p-3 rounded">
                <p className="text-xs font-bold text-green-700">📊 EFICÁCIA: 98,7% de sucesso em todas as idades</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-red-600 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-xl text-red-600 mb-3">🤷‍♂️ "E se não funcionar no meu caso específico?"</h3>
              <p className="text-sm mb-3">
                <strong>GARANTIA BLINDADA:</strong> 30 dias para testar! Se não funcionar, devolvemos 100% do frete pago.
                Sem perguntas, sem burocracia. RISCO ZERO para você!
              </p>
              <div className="bg-green-100 p-3 rounded">
                <p className="text-xs font-bold text-green-700">🛡️ PROTEÇÃO: Garantia incondicional + suporte 24h</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-red-600 text-white p-8 rounded-xl shadow-2xl border-4 border-yellow-300">
              <h3 className="text-3xl font-bold mb-4 animate-pulse">⏰ ÚLTIMA CHANCE REAL!</h3>
              <p className="text-xl mb-6">
                Você tem APENAS <span className="text-yellow-300 font-black text-2xl">{min}:{sec}</span> para garantir seu frasco GRÁTIS!
              </p>
              <button
                onClick={() => navigate('/checkout')}
                className="bg-yellow-300 hover:bg-yellow-400 hover:scale-105 text-red-800 font-extrabold py-6 px-10 rounded-full text-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl animate-bounce"
              >
                🔥 SIM! QUERO MINHA TRANSFORMAÇÃO AGORA! 🔥
              </button>
              <p className="mt-4 text-lg">👆 CLIQUE AGORA OU PERCA PARA SEMPRE!</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA OTIMIZADA */}
      <section className="px-4 py-12 bg-gradient-to-b from-red-600 to-red-500 text-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold animate-pulse mb-4">
          🚨 OFERTA HISTÓRICA ACABA EM {min}:{sec}! 🚨
        </h2>

        <div className="bg-yellow-300 text-red-800 px-4 py-3 rounded-2xl mx-auto max-w-sm sm:max-w-lg md:max-w-2xl mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-black leading-tight">
            🎁 HOJE APENAS: FRASCO 100% GRÁTIS + BÔNUS EXCLUSIVOS! 🎁
          </p>
        </div>

        <p className="text-base sm:text-lg md:text-xl font-bold mb-6 leading-relaxed">
          ⚡ Valor normal R$ 658 | Hoje você paga ZERO | Apenas frete de R$ 19,90
        </p>

        {/* BÔNUS */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg mt-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-red-600 mb-6">🎁 BÔNUS EXCLUSIVOS GRÁTIS:</h3>
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <span className="text-green-600 font-bold">✅</span>
              <span><strong>BÔNUS 1:</strong> E-book "10 Posições que Enlouquecem Qualquer Mulher" (R$ 97)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-600 font-bold">✅</span>
              <span><strong>BÔNUS 2:</strong> Vídeo "Como Durar 3+ Horas na Cama" (R$ 197)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-600 font-bold">✅</span>
              <span><strong>BÔNUS 3:</strong> Lista dos 15 Alimentos que Turbinem sua Potência (R$ 67)</span>
            </div>
            <div className="border-t pt-4 mt-4">
              <p className="text-center text-lg">
                <span className="line-through text-gray-500">Valor Total: R$ 658</span><br />
                <span className="text-3xl font-bold text-red-600">HOJE: R$ 0,00</span><br />
                <span className="text-sm">Você paga apenas o frete!</span>
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/checkout')}
          className="mt-6 sm:mt-8 md:mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md bg-yellow-300 hover:bg-yellow-400 hover:scale-105 text-red-800 font-extrabold py-4 sm:py-6 md:py-8 px-6 sm:px-12 md:px-16 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 shadow-2xl hover:shadow-3xl block mx-auto animate-pulse border-2 sm:border-4 border-white"
        >
          🔥 QUERO MEU FRASCO GRÁTIS + BÔNUS AGORA! 🔥
        </button>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-bold">👆 ÚLTIMA CHANCE! CLIQUE AGORA OU PERCA PARA SEMPRE!</p>

        <div className="mt-8 text-center">
          <div className="bg-black text-yellow-300 inline-block px-6 py-3 rounded-lg border-2 border-yellow-300">
            <div className="text-lg font-bold">⚠️ RESTAM APENAS:</div>
            <div className="text-3xl font-mono text-red-400 font-black">
              {min}:{sec}
            </div>
            <div className="text-sm">32 frascos disponíveis</div>
          </div>
        </div>

        <p className="mt-4 text-sm">⚡ Após {min}:{sec} o preço volta para R$ 297!</p>
      </section>

      {/* GARANTIA */}
      <section className="px-4 py-14 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-4xl font-black text-red-600">
          Garantia Blindada 30 Dias
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Se em até 30 dias você não sentir potência renovada, devolvemos cada
          centavo pago no frete – sem perguntas. Confiança total no resultado!
        </p>
      </section>

      {/* FAQ */}
      <section className="px-4 py-14 bg-white max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black text-center text-red-600">
          Perguntas Mais Frequentes dos Nossos Clientes
        </h2>
        <div className="mt-8 space-y-6 text-lg">
          <details className="border p-6 rounded-lg bg-gray-50 shadow">
            <summary className="font-bold cursor-pointer text-red-600 text-xl mb-2">
              🕒 Em quanto tempo vou sentir os primeiros efeitos do TadaBlue?
            </summary>
            <p className="pt-4 text-gray-700">
              Os primeiros resultados aparecem <strong>entre 5 a 15 minutos</strong> após a ingestão.
              O TadaBlue possui ativos bioabsorvíveis que chegam rapidamente à corrente sanguínea,
              proporcionando ereções firmes que podem durar até 3 horas. Diferente de outros produtos
              que levam dias para fazer efeito, nossa fórmula age imediatamente.
            </p>
          </details>

          <details className="border p-6 rounded-lg bg-gray-50 shadow">
            <summary className="font-bold cursor-pointer text-red-600 text-xl mb-2">
              ⚕️ O TadaBlue é seguro? Posso usar com outros medicamentos?
            </summary>
            <p className="pt-4 text-gray-700">
              <strong>Sim, é 100% seguro!</strong> TadaBlue é produzido com ingredientes naturais e é
              aprovado pela ANVISA. Pode ser usado por diabéticos e hipertensos sem problemas.
              Diferente do Viagra que pode causar problemas cardíacos, nossa fórmula não possui
              contraindicações graves. Porém, se você toma medicamentos controlados, consulte seu médico.
            </p>
          </details>

          <details className="border p-6 rounded-lg bg-gray-50 shadow">
            <summary className="font-bold cursor-pointer text-red-600 text-xl mb-2">
              📏 É verdade que o TadaBlue aumenta o tamanho do órgão masculino?
            </summary>
            <p className="pt-4 text-gray-700">
              <strong>Sim!</strong> O TadaBlue estimula intensamente o fluxo sanguíneo para os corpos cavernosos,
              resultando em aumento visível tanto da <strong>grossura quanto do comprimento</strong>.
              Nossos clientes relatam ganhos de 5 a 7cm em circunferência após 30 dias de uso.
              Este aumento se torna permanente com o uso contínuo do produto.
            </p>
          </details>

          <details className="border p-6 rounded-lg bg-gray-50 shadow">
            <summary className="font-bold cursor-pointer text-red-600 text-xl mb-2">
              👴 Funciona em homens de mais idade? Tenho 60+ anos...
            </summary>
            <p className="pt-4 text-gray-700">
              <strong>Funciona perfeitamente!</strong> Temos milhares de clientes com 60, 70 e até 80 anos
              que obtiveram resultados fantásticos. Roberto, nosso caso de sucesso, tem 62 anos e hoje
              tem potência de jovem. A idade não é impedimento para o TadaBlue - quanto mais maduro,
              mais você vai se surpreender com os resultados!
            </p>
          </details>

          <details className="border p-6 rounded-lg bg-gray-50 shadow">
            <summary className="font-bold cursor-pointer text-red-600 text-xl mb-2">
              💰 Por que o TadaBlue está saindo grátis hoje?
            </summary>
            <p className="pt-4 text-gray-700">
              Fechamos uma <strong>parceria especial com a farmacêutica brasileira</strong> para oferecer
              amostras grátis e comprovar a eficácia do produto. Queremos que você experimente sem risco
              e se torne nosso cliente fiel. Esta promoção é limitada a apenas 32 frascos por dia,
              após isso o preço volta para R$ 297,00.
            </p>
          </details>

          <details className="border p-6 rounded-lg bg-gray-50 shadow">
            <summary className="font-bold cursor-pointer text-red-600 text-xl mb-2">
              🚚 Como funciona a entrega? É discreta?
            </summary>
            <p className="pt-4 text-gray-700">
              A entrega é <strong>100% discreta</strong>! O produto chega em embalagem neutra, sem identificação
              do conteúdo. Enviamos pelos Correios ou transportadora, com prazo de 3 a 10 dias úteis.
              Você recebe um código de rastreamento para acompanhar o pedido. Total privacidade garantida!
            </p>
          </details>

          <details className="border p-6 rounded-lg bg-gray-50 shadow">
            <summary className="font-bold cursor-pointer text-red-600 text-xl mb-2">
              🔄 E se não funcionar comigo? Tem garantia?
            </summary>
            <p className="pt-4 text-gray-700">
              <strong>Garantia blindada de 30 dias!</strong> Se você não ficar satisfeito com os resultados
              em até 30 dias, devolvemos 100% do valor pago no frete. Não fazemos perguntas, é só entrar
              em contato conosco. Temos essa confiança porque sabemos que o TadaBlue funciona para 98,7%
              dos homens que experimentam.
            </p>
          </details>

          <details className="border p-6 rounded-lg bg-gray-50 shadow">
            <summary className="font-bold cursor-pointer text-red-600 text-xl mb-2">
              📞 Como entro em contato se tiver dúvidas?
            </summary>
            <p className="pt-4 text-gray-700">
              Nosso atendimento funciona 24 horas por dia, 7 dias por semana! Você pode entrar em contato
              pelo WhatsApp, telefone ou email. Temos uma equipe especializada pronta para esclarecer
              todas suas dúvidas sobre o produto, entrega e garantia. Suporte total do pedido à entrega!
            </p>
          </details>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="px-4 py-6 bg-gray-800 text-gray-300 text-sm text-center">
        © 2025 TadaBlue™ – Todos os direitos reservados. Este produto não
        substitui tratamentos médicos. Imagens meramente ilustrativas.
      </footer>

      {/* BOTÃO FLUTUANTE STICKY */}
      <div className="fixed bottom-2 sm:bottom-4 left-2 right-2 sm:left-4 sm:right-4 z-50 md:left-auto md:right-4 md:w-80">
        <div className="bg-red-600 text-white p-3 sm:p-4 rounded-lg shadow-2xl border-2 border-yellow-300">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-bold">⏰ OFERTA EXPIRA EM: {min}:{sec}</p>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full mt-2 bg-yellow-300 hover:bg-yellow-400 hover:scale-105 text-red-800 font-extrabold py-2 sm:py-3 px-3 sm:px-4 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🔥 GARANTIR FRASCO GRÁTIS!
            </button>
            <p className="text-xs mt-1">Restam 32 unidades</p>
          </div>
        </div>
      </div>
    </div>
  );
}
