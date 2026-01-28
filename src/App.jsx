import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, Globe, ShoppingCart, ShieldCheck, CheckCircle2,
  ArrowRight, AlertTriangle, X, MapPin, Star, Zap, MessageCircle,
  AlertOctagon, Hammer, Users, PackageX, TrendingUp, RefreshCcw,
  ExternalLink, Share2, Clapperboard, Instagram, Youtube, Facebook
} from 'lucide-react';

// --- CONFIGURAÇÃO DE CORES & VARIAVEIS ---
// Fundo: bg-slate-950 (Hardcoded para garantir o dark mode profundo)

// --- DADOS DAS ESTRATÉGIAS (O CONTÉUDO RICO) ---
// --- DADOS DAS ESTRATÉGIAS (ATUALIZADO COM O LINK DE REFERÊNCIA) ---
const strategies = [
  {
    id: 'local',
    title: '1. Blindagem Local',
    subtitle: 'Google Meu Negócio & Reputação',
    icon: <ShieldCheck size={80} />,
    color: 'from-blue-600',
    btnColor: 'bg-blue-600',
    shortDesc: 'Sua fábrica precisa aparecer antes da "grafica rápida" da esquina.',
    fullDesc: (
      <>
        <p className="mb-4">Hoje, a busca local é dominada por quem tem mais avaliações. Vamos transformar cada entrega bem feita em 5 estrelas no Google.</p>
        <p><strong>Ação:</strong> Automação de pós-venda para solicitar review e atualização constante de fotos da fachada e equipe.</p>
      </>
    ),
    metrics: [
      { label: 'Buscas no Mapa', value: '+450%', sub: 'Visibilidade pura' },
      { label: 'Nota Média', value: '4.9', sub: 'Autoridade' },
    ],
    VisualComponent: () => (
      <div className="bg-slate-900/80 p-6 rounded-xl border border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        <h4 className="text-gray-400 text-xs mb-4 uppercase tracking-widest font-bold">Simulação de Autoridade</h4>
        <div className="flex justify-center gap-2 mb-2">
          {[1, 2, 3, 4, 5].map((star, i) => (
            <motion.div key={star} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}>
              <Star fill="#EAB308" className="text-yellow-500 w-8 h-8" />
            </motion.div>
          ))}
        </div>
        <div className="text-3xl font-bold text-white mb-1">4.9/5.0</div>
        <p className="text-gray-400 text-xs">"Melhor acabamento da cidade!"</p>
      </div>
    )
  },
  {
    id: 'social',
    title: '2. Máquina de Conteúdo',
    subtitle: 'YouTube, Insta & Face (Omnichannel)',
    icon: <Share2 size={80} />,
    color: 'from-purple-600',
    btnColor: 'bg-purple-600',
    shortDesc: 'Transformar a rotina da fábrica em conteúdo magnético (sem dancinha).',
    fullDesc: (
      <>
        <p className="mb-4">Sua fábrica é um show visual. Não precisamos inventar moda, precisamos <strong>documentar</strong> a potência industrial.</p>
        <p><strong>A Estratégia "Content Factory":</strong></p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-300 text-left">
          <li><strong>YouTube:</strong> Vídeos de "Processo de Produção" (gera autoridade técnica).</li>
          <li><strong>Instagram/Face:</strong> Cortes rápidos (Reels) mostrando o maquinário em ação.</li>
        </ul>
      </>
    ),
    metrics: [
      { label: 'Alcance Mensal', value: '15k+', sub: 'Orgânico + Pago' },
      { label: 'Engajamento', value: '+200%', sub: 'Retenção visual' },
    ],
    VisualComponent: () => (
      <div className="h-56 bg-slate-900/80 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px #a855f7", "0 0 20px #a855f7", "0 0 0px #a855f7"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 bg-white text-slate-900 rounded-2xl flex items-center justify-center shadow-2xl mb-8"
          >
            <Clapperboard size={32} />
          </motion.div>
          <div className="flex gap-8">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white"><Instagram size={14} /></div>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white"><Youtube size={14} /></div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white"><Facebook size={14} /></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'b2b',
    title: '3. Caça às Usinas',
    subtitle: 'Geofencing & Landing Page Industrial',
    icon: <Globe size={100} />,
    color: 'from-red-600',
    btnColor: 'bg-red-600',
    shortDesc: 'Anúncios que aparecem apenas dentro das fábricas dos seus alvos.',
    fullDesc: (
      <>
        <p className="mb-4">Para vender para a indústria, você não pode parecer uma "gráfica de bairro". Você precisa parecer uma multinacional.</p>
        <p><strong>1. O Geofencing (Radar):</strong> Cercamos as usinas num raio de 100km. O anúncio só aparece lá dentro.</p>
        <p><strong>2. A Landing Page (O Destino):</strong> Quando o engenheiro clicar, ele vai cair numa página focada em Indústria, Segurança e Grande Formato. Nada de "caneca e brinde".</p>

        {/* --- O LINK DE REFERÊNCIA AQUI --- */}
        <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Benchmark Visual (A Meta)</span>
            <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30">Inspiração</span>
          </div>
          <p className="text-sm text-gray-300 mb-3">
            Queremos atingir este nível de autoridade visual para a página das Usinas:
          </p>
          <a
            href="https://fabrica.ancorathemes.com/metalworking/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold underline decoration-blue-500/30 underline-offset-4 transition-colors group"
          >
            <ExternalLink size={16} className="group-hover:-translate-y-1 transition-transform" />
            Ver Modelo de Página Industrial
          </a>
        </div>
      </>
    ),
    metrics: [
      { label: 'Custo por Lead', value: '-60%', sub: 'Sem desperdício' },
      { label: 'Assertividade', value: '100%', sub: 'Apenas decisores' },
    ],
    VisualComponent: () => (
      <div className="relative h-56 bg-slate-900/80 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center group">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <motion.div
          animate={{ scale: [1, 4], opacity: [0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-12 h-12 bg-red-500/20 rounded-full border border-red-500/50"
        />
        <motion.div
          animate={{ scale: [1, 3], opacity: [0.4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
          className="absolute w-12 h-12 bg-red-500/20 rounded-full border border-red-500/30"
        />
        <div className="relative z-10 flex flex-col items-center">
          <MapPin className="text-red-500 w-12 h-12 drop-shadow-[0_0_15px_rgba(239,68,68,1)]" />
          <div className="mt-2 px-3 py-1 bg-red-600 text-white text-[10px] font-bold rounded-full animate-pulse shadow-lg">
            USINA DETECTADA
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ecommerce',
    title: '4. Varejo Inteligente',
    subtitle: 'Kits & Marketplaces',
    icon: <ShoppingCart size={80} />,
    color: 'from-emerald-500',
    btnColor: 'bg-emerald-600',
    shortDesc: 'Parar de vender "placa solta" e vender "solução completa" com lucro.',
    fullDesc: (
      <>
        <p className="mb-4">Vender item barato no Mercado Livre é guerra de preço. O segredo é o Ticket Médio.</p>
        <p><strong>A Tática:</strong> Em vez de vender um troféu, vendemos o <em>"Kit Premiação Completa"</em>. O frete dilui, o valor percebido sobe e você sai da comparação direta de preços.</p>
      </>
    ),
    metrics: [
      { label: 'Ticket Médio', value: 'R$ 450', sub: 'Era R$ 80,00' },
      { label: 'Conversão', value: '2.8%', sub: 'Acima do mercado' },
    ],
    VisualComponent: () => (
      <div className="bg-slate-900/80 p-6 rounded-xl border border-white/10 flex items-end justify-between h-56 relative gap-4">
        <h4 className="absolute top-4 left-4 text-gray-400 text-xs uppercase tracking-widest font-bold">Projeção de Faturamento</h4>
        <div className="w-1/3 flex flex-col items-center gap-2 group cursor-help relative text-center">
          <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs p-1 rounded">Venda "Solta"</div>
          <motion.div initial={{ height: 0 }} whileInView={{ height: '30%' }} className="w-full bg-slate-700 rounded-t-md opacity-50 hover:opacity-70 transition-opacity" />
          <span className="text-xs text-gray-500 font-mono">HOJE</span>
        </div>
        <div className="w-1/3 flex flex-col items-center gap-2 text-center">
          <motion.div initial={{ height: 0 }} whileInView={{ height: '55%' }} transition={{ delay: 0.2 }} className="w-full bg-emerald-500/30 rounded-t-md border-t-2 border-emerald-500/50" />
          <span className="text-xs text-emerald-400/70 font-mono">MÊS 3</span>
        </div>
        <div className="w-1/3 flex flex-col items-center gap-2 relative text-center">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '90%' }}
            transition={{ delay: 0.4, type: "spring" }}
            className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-md shadow-[0_0_20px_rgba(16,185,129,0.4)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </motion.div>
          <div className="absolute top-1/4 bg-white text-emerald-900 text-xs font-bold px-2 py-1 rounded shadow-lg transform -translate-y-full">
            +120%
          </div>
          <span className="text-xs text-white font-bold font-mono">META</span>
        </div>
      </div>
    )
  }
];

// --- UTILS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const float = {
  animate: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
};

const GlassCard = ({ children, className = "", onClick }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`backdrop-blur-md bg-white/[0.03] border border-white/[0.05] rounded-3xl p-6 shadow-2xl cursor-pointer hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

// --- COMPONENTES ---

const StrategyModal = ({ strategy, onClose, onCtaClick }) => {
  if (!strategy) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        layoutId={`card-${strategy.id}`}
        className="relative w-full max-w-3xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
      >
        {/* Header */}
        <div className={`h-40 bg-gradient-to-r ${strategy.color} to-slate-900 p-8 flex items-end relative overflow-hidden`}>
          <div className="absolute top-0 right-0 p-8 opacity-10 text-white transform translate-x-10 -translate-y-10 scale-150">
            {React.cloneElement(strategy.icon, { size: 180 })}
          </div>
          <div>
            <motion.h3 className="text-4xl font-black text-white relative z-10 mb-1">{strategy.title}</motion.h3>
            <p className="text-white/80 font-medium relative z-10">{strategy.subtitle}</p>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 grid md:grid-cols-5 gap-8 bg-slate-900 text-left">
          <div className="md:col-span-3 space-y-6">
            <div className="prose prose-invert prose-sm">
              <div className="text-lg text-gray-200 leading-relaxed font-light">
                {strategy.fullDesc}
              </div>
            </div>

            {/* Visual Interativo */}
            <div className="mt-6">
              <strategy.VisualComponent />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Métricas Projetadas</h5>
            <div className="space-y-3">
              {strategy.metrics.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/20 transition-colors"
                >
                  <div className="text-xs text-gray-400">{m.label}</div>
                  <div className="text-2xl font-bold text-white my-1">{m.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase">{m.sub}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCtaClick}
              className={`w-full py-4 ${strategy.btnColor} text-white font-bold rounded-xl shadow-lg mt-4 flex items-center justify-center gap-2 group cursor-pointer`}
            >
              Ver no Cronograma <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- NOVO COMPONENTE: VISUALIZAÇÃO DO GARGALO (VERSÃO 2.0 - INDUSTRIAL) ---
const OperationalBottleneck = () => {
  return (
    <div className="mt-12 bg-slate-900/80 border border-red-500/20 rounded-2xl p-6 relative overflow-hidden text-left">
      <div className="absolute top-0 left-0 w-1 h-full bg-red-500 animate-pulse"></div>
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <AlertOctagon className="text-red-500" /> Análise de Fluxo (Gargalo de Escala)
      </h3>

      {/* Fluxo Atual */}
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-2 uppercase tracking-wider font-bold">Fluxo Atual</div>
        <div className="flex flex-col md:flex-row gap-2 relative">

          {/* Etapa 1: Atendimento */}
          <div className="flex-1 bg-white/5 p-4 rounded-lg border border-white/10 opacity-50">
            <div className="text-xs text-gray-500">Atendimento & Triagem</div>
            <div className="text-white font-bold">Centralizado</div>
            <div className="text-[10px] text-red-400 mt-1">Sobrecarga exige apoio de outros setores</div>
          </div>

          <ArrowRight className="hidden md:block text-gray-600 self-center" />

          {/* Etapa 2: Produção */}
          <div className="flex-1 bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
            <div className="text-xs text-blue-300">Produção Fabril</div>
            <div className="text-white font-bold">Alta Capacidade</div>
            <div className="text-[10px] text-blue-400 mt-1">Potência instalada pronta para escalar</div>
          </div>

          <ArrowRight className="hidden md:block text-orange-500 self-center animate-pulse" />

          {/* Etapa 3: Despacho (O Ajuste) */}
          <div className="flex-1 bg-orange-500/10 p-4 rounded-lg border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <div className="text-xs text-orange-300">Expedição & Logística</div>
            <div className="text-white font-bold">Ponto de Atenção</div>
            <div className="text-[10px] text-orange-400 mt-1 font-bold">⚠ Possível gargalo no despacho (Volume)</div>
          </div>
        </div>
      </div>

      {/* A Solução (Esteira Digital) */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-green-400 uppercase tracking-wider font-bold flex items-center gap-2">
            <RefreshCcw size={16} /> Meta: Integração Fabril x Online
          </div>
          <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Pós-Consultoria</span>
        </div>

        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, ease: "linear" }}
            className="h-full bg-gradient-to-r from-blue-500 via-green-400 to-green-600"
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Objetivo: O pedido online cai direto na ordem de serviço, liberando o atendimento e agilizando a etiqueta de envio.
        </p>
      </div>
    </div>
  );
};

// --- COMPONENTE DIAGNOSTICO ATUALIZADO (FOFA INDUSTRIAL) ---
const Diagnosis = React.forwardRef((props, ref) => (
  <section ref={ref} className="py-24 px-6 relative bg-slate-950/50">
    <div className="max-w-7xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Raio-X Operacional</h2>
        <p className="text-gray-400 text-lg">Preparando a indústria para a velocidade da internet.</p>
      </motion.div>

      {/* MATRIZ FOFA (GRID 2x2) */}
      <div className="grid md:grid-cols-2 gap-6 text-left">

        {/* 1. FORÇAS (Verde/Azul) */}
        <GlassCard className="border-l-4 border-l-blue-500 bg-gradient-to-br from-slate-900 to-blue-900/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Hammer size={24} /></div>
            <h3 className="text-xl font-bold text-white">Forças (Potência)</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-300 text-sm">
              <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
              <span><strong>Marca Consolidada:</strong> Referência absoluta em Paraguaçu e região.</span>
            </li>
            <li className="flex gap-3 text-gray-300 text-sm">
              <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
              <span><strong>Mix Infinito:</strong> Portfólio vasto (Troféus, Fachadas, Placas, Brindes).</span>
            </li>
            <li className="flex gap-3 text-gray-300 text-sm">
              <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
              <span><strong>Velocidade Fabril:</strong> Produção rápida e maquinário de ponta.</span>
            </li>
          </ul>
        </GlassCard>

        {/* 2. FRAQUEZAS (Vermelho - GARGALOS DE CRESCIMENTO) */}
        <GlassCard className="border-l-4 border-l-red-500 bg-gradient-to-br from-slate-900 to-red-900/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-500/20 rounded-lg text-red-500"><AlertTriangle size={24} /></div>
            <h3 className="text-xl font-bold text-white">Pontos de Atenção</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-300 text-sm">
              <PackageX size={18} className="text-red-500 shrink-0" />
              <span><strong>Sobrecarga Operacional:</strong> Setores de apoio precisam parar suas funções para auxiliar no atendimento/venda.</span>
            </li>
            <li className="flex gap-3 text-gray-300 text-sm">
              <PackageX size={18} className="text-red-500 shrink-0" />
              <span><strong>Logística de Despacho:</strong> Risco de gargalo na saída (embalagem/envio) com o aumento do volume online.</span>
            </li>
            <li className="flex gap-3 text-gray-300 text-sm">
              <PackageX size={18} className="text-red-500 shrink-0" />
              <span><strong>Adaptação Digital:</strong> O fluxo fabril precisa ser conectado ao E-commerce para evitar processos manuais.</span>
            </li>
          </ul>
        </GlassCard>

        {/* 3. OPORTUNIDADES (Roxo) */}
        <GlassCard className="border-l-4 border-l-purple-500 bg-gradient-to-br from-slate-900 to-purple-900/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><TrendingUp size={24} /></div>
            <h3 className="text-xl font-bold text-white">Oportunidades</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-300 text-sm">
              <span className="text-purple-500 font-bold">01.</span>
              <span><strong>Ocupar Ociosidade:</strong> Usar a capacidade fabril excedente para vender para todo o Brasil.</span>
            </li>
            <li className="flex gap-3 text-gray-300 text-sm">
              <span className="text-purple-500 font-bold">02.</span>
              <span><strong>Linha de Produção Híbrida:</strong> Transformar a venda online em Ordem de Serviço automática na fábrica.</span>
            </li>
          </ul>
        </GlassCard>

        {/* 4. AMEAÇAS (Amarelo) */}
        <GlassCard className="border-l-4 border-l-yellow-500 bg-gradient-to-br from-slate-900 to-yellow-900/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-400"><Users size={24} /></div>
            <h3 className="text-xl font-bold text-white">Ameaças</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-300 text-sm">
              <span className="text-yellow-500">•</span>
              <span>Concorrentes de nicho (focados só em um produto) com entrega expressa.</span>
            </li>
            <li className="flex gap-3 text-gray-300 text-sm">
              <span className="text-yellow-500">•</span>
              <span>Teto de crescimento local (mercado de Paraguaçu limitado).</span>
            </li>
          </ul>
        </GlassCard>

      </div>

      {/* COMPONENTE VISUAL DO GARGALO */}
      <OperationalBottleneck />

    </div>
  </section>
));

// --- COMPONENTE HERO ATUALIZADO (POSICIONAMENTO DE LÍDER) ---
// --- NOVO COMPONENTE DE CRONOGRAMA (AGRESSIVO) ---
const Timeline = React.forwardRef((props, ref) => {
  const roadmap = [
    {
      id: 1,
      month: "MÊS 01: O CHOQUE DE GESTÃO",
      title: "Sprint de Implementação (4 Semanas)",
      highlight: true, // Destaque visual
      weeks: [
        { w: "Semana 01", t: "Domínio de Dados", d: "Instalação de 'Grampos Digitais' (Pixel, GTM, Analytics) e Auditoria de Senhas." },
        { w: "Semana 02", t: "Faxina Digital", d: "Atualização Profissional do Google Meu Negócio e Respostas de Reviews (Gestão de Crise)." },
        { w: "Semana 03", t: "Setup de Guerra", d: "Criação de Públicos no Facebook Ads (Lista de Clientes) e Configuração do Catalogo." },
        { w: "Semana 04", t: "Primeiro Tráfego", d: "Start na campanha 'Institucional' (Vídeo da Fábrica) para gerar autoridade imediata." }
      ]
    },
    {
      id: 2,
      month: "MÊS 02: CAÇA B2B",
      title: "Lançamento da Estratégia Industrial",
      desc: "Não vamos esperar. Colocamos no ar a Landing Page focada em Usinas e ativamos o Geofencing (Radar).",
      deliverable: "Entrega: LP B2B + Campanhas de Radar Ativas."
    },
    {
      id: 3,
      month: "MÊS 03: VAREJO INTELIGENTE",
      title: "Engenharia de Kits & Marketplace",
      desc: "Reformulação das ofertas no Mercado Livre. Transformação de produtos soltos em Kits de alto ticket.",
      deliverable: "Entrega: Loja Oficial ML Revitalizada + Campanhas de Shopping."
    },
    {
      id: 4,
      month: "MÊS 04: AUTOMAÇÃO & ESCALA",
      title: "Instalação da 'Secretária Digital'",
      desc: "O vOlume de leads vai aumentar. Implantamos o Chatbot para filtrar curiosos e passar só o filé para a triagem.",
      deliverable: "Entrega: Bot de WhatsApp + CRM Básico."
    },
    {
      id: 5,
      month: "MÊS 05: REFINAMENTO (CRUZEIRO)",
      title: "Otimização de Custos (ROAS)",
      desc: "Análise fria dos dados. Cortamos o que gasta muito e vende pouco. Aumentamos a verba no que traz lucro real.",
      deliverable: "Entrega: Relatório de Economia Gerada."
    },
    {
      id: 6,
      month: "MÊS 06: LEGADO",
      title: "Treinamento & Handover",
      desc: "Sua equipe assume o controle. Treinamento intensivo para que o sistema rode sem depender de consultoria eterna.",
      deliverable: "Entrega: Playbook de Processos (Manual da Máquina)."
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute left-10 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>

      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Cronograma de Execução</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sem enrolação. Um plano de batalha desenhado para gerar <strong className="text-white">ROI (Retorno)</strong> já nas primeiras 4 semanas.
          </p>
        </motion.div>

        <div className="space-y-8">
          {roadmap.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Conector Vertical (Linha do Tempo) */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"></div>
              <div className={`absolute left-[-4px] top-6 w-2 h-2 rounded-full md:left-1/2 md:-translate-x-1/2 z-10 ${step.highlight ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`}></div>

              {/* O CARD */}
              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} relative`}>

                {/* Lógica Especial para o Mês 1 (Detalhado) */}
                {step.highlight ? (
                  <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/50 rounded-2xl p-1 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative overflow-hidden group text-left">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-white to-blue-500 opacity-50"></div>

                    <div className="bg-slate-900/90 rounded-xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-blue-400 font-mono text-xs font-bold uppercase tracking-wider border border-blue-500/30 px-2 py-1 rounded mb-2 inline-block">
                            {step.month}
                          </span>
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        </div>
                        <Rocket className="text-blue-500 animate-bounce" size={24} />
                      </div>

                      {/* As 4 Semanas Detalhadas */}
                      <div className="space-y-3 mt-6">
                        {step.weeks.map((week, wIdx) => (
                          <div key={wIdx} className="flex gap-3 items-start p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="min-w-[70px] text-xs font-bold text-blue-300 bg-blue-500/10 px-2 py-1 rounded text-center">
                              {week.w}
                            </div>
                            <div>
                              <div className="text-white font-bold text-sm">{week.t}</div>
                              <div className="text-gray-400 text-xs leading-relaxed">{week.d}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Lógica para Meses 2-6 (Padrão)
                  <GlassCard className="p-6 hover:border-white/30 transition-all group text-left">
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-2 inline-block ${idx > 3 ? 'text-green-400 bg-green-500/10' : 'text-red-400 bg-red-500/10'}`}>
                      {step.month}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{step.desc}</p>

                    <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-gray-300">
                      <CheckCircle2 size={14} className={idx > 3 ? "text-green-500" : "text-red-500"} />
                      {step.deliverable}
                    </div>
                  </GlassCard>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

const Hero = ({ onCtaClick }) => (
  <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2 }}
        src="/hero-bg.png"
        alt="Maxi Propaganda Factory"
        className="w-full h-full object-cover grayscale brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950"></div>
    </div>

    {/* Background Effects (Mantidos) */}
    <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] -z-10" />
    <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 15, repeat: Infinity }} className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

    <div className="max-w-5xl text-center space-y-8 z-10">

      {/* 1. A Pílula Superior (Texto Solicitado) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs md:text-sm font-mono tracking-wider mb-4 uppercase"
      >
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        PROPOSTA DE ASSESSORIA PARA MAXI PROPAGANDA • JANEIRO 2026
      </motion.div>

      {/* 2. O Título de Posicionamento (Líder / Sem Erro) */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]"
      >
        A Referência Absoluta em <br />
        <span className="bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
          Comunicação Visual
        </span>
      </motion.h1>

      {/* 3. Subtítulo (Mantido, mas reforçando a segurança) */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
      >
        Vamos transformar <strong>20 anos de excelência técnica</strong> em um ativo digital que prospecta e vende sozinho. <br />
        <span className="text-white/60 text-sm mt-2 block font-normal">Porque quem quer profissionalismo, não arrisca. Escolhe a Maxi.</span>
      </motion.p>

      {/* CTA */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex justify-center gap-4 pt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCtaClick}
          className="px-10 py-5 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold rounded-full shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] transition-all flex items-center gap-2 border border-white/10 cursor-pointer"
        >
          Ver o Plano Estratégico <ArrowRight size={20} />
        </motion.button>
      </motion.div>

    </div>
  </section>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-slate-950/70 border-b border-white/5">
    <div className="flex items-center gap-2">
      {/* Logo Simulada */}
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-900/50">M</div>
      <div className="text-xl font-black bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent tracking-tighter">
        MAXI.AI
      </div>
    </div>
    <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-400 border border-white/10 px-3 py-1 rounded-full bg-black/40">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      PROPOSTA CONFIDENCIAL v2.0
    </div>
  </nav>
);

const App = () => {
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  // Refs para Scroll
  const diagnosisRef = useRef(null);
  const timelineRef = useRef(null);
  const investmentRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5518996558696?text=Ol%C3%A1%2C%20vi%20a%20proposta%20digital%20da%20Maxi%20e%20quero%20iniciar%20a%20reestrutura%C3%A7%C3%A3o.", "_blank");
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-red-500/30 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <Hero onCtaClick={() => scrollToSection(diagnosisRef)} />

      {/* --- DIAGNOSIS SECTION --- */}
      <Diagnosis ref={diagnosisRef} />

      {/* --- BENTO GRID (THE CORE) --- */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Tríade da Visibilidade</h2>
            <p className="text-gray-500">Clique nos cards para ver a tecnologia por trás da estratégia.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)] text-left">
            {/* Card 1: Local */}

            {/* Renderização Dinâmica do Bento Grid */}
            {strategies.map((strategy, idx) => {
              // Lógica de col-span para um grid de 3 colunas
              let spanClass = "md:col-span-1";
              if (strategy.id === 'social') spanClass = "md:col-span-2";
              if (strategy.id === 'b2b') spanClass = "md:col-span-2";
              if (strategy.id === 'ecommerce') spanClass = "md:col-span-1";

              return (
                <motion.div
                  key={strategy.id}
                  layoutId={`card-${strategy.id}`}
                  onClick={() => setSelectedStrategy(strategy)}
                  className={`${spanClass} rounded-[2rem] p-8 bg-gradient-to-br from-slate-900 to-${strategy.color.split('-')[1]}-900/20 border border-${strategy.color.split('-')[1]}-500/20 cursor-pointer hover:border-${strategy.color.split('-')[1]}-500/50 transition-all group relative overflow-hidden`}
                >
                  <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-40 transition-all duration-700 text-white">
                    {React.cloneElement(strategy.icon, { size: 250 })}
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <h3 className={`${strategy.id === 'b2b' || strategy.id === 'social' ? 'text-4xl' : 'text-2xl'} font-bold text-white mb-2`}>
                        {strategy.title}
                      </h3>
                      <p className="text-gray-300 max-w-md text-lg">{strategy.shortDesc}</p>

                      {/* Tags Específicas */}
                      {strategy.id === 'b2b' && (
                        <div className="mt-4 flex gap-3">
                          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20">LinkedIn Ads</span>
                          <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-300 text-xs border border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.2)]">Geofencing Ativo</span>
                        </div>
                      )}
                    </div>
                    <div className={`mt-8 flex items-center gap-2 text-${strategy.color.split('-')[1]}-400 text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform`}>
                      {strategy.id === 'local' && <Star size={18} />}
                      {strategy.id === 'social' && <Clapperboard size={18} />}
                      {strategy.id === 'b2b' && <Zap size={18} />}
                      {strategy.id === 'ecommerce' && <ShoppingCart size={18} />}
                      Ver Detalhes <ArrowRight size={18} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- MODAL GLOBAL --- */}
      <AnimatePresence>
        {selectedStrategy && (
          <StrategyModal
            strategy={selectedStrategy}
            onClose={() => setSelectedStrategy(null)}
            onCtaClick={() => {
              setSelectedStrategy(null);
              setTimeout(() => scrollToSection(timelineRef), 300);
            }}
          />
        )}
      </AnimatePresence>

      {/* --- TIMELINE SECTION --- */}
      <Timeline ref={timelineRef} />

      {/* --- INVESTMENT SECTION --- */}
      <section ref={investmentRef} className="py-24 px-6 flex justify-center bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <motion.div
          variants={float}
          animate="animate"
          className="relative w-full max-w-lg z-10"
        >
          {/* Neon Border */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-white to-red-500 rounded-3xl blur-sm opacity-50 animate-pulse"></div>

          <div className="relative bg-slate-900 rounded-[22px] p-10 border border-white/10 shadow-2xl text-center">
            <h3 className="text-gray-400 uppercase tracking-[0.2em] text-xs font-bold mb-6">Proposta Oficial</h3>

            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="text-2xl text-gray-500 relative -top-4">R$</span>
              <span className="text-7xl font-black text-white tracking-tighter">1.500</span>
            </div>
            <div className="text-sm text-blue-400 mb-8 font-mono bg-blue-500/10 inline-block px-4 py-1 rounded-full border border-blue-500/20">
              Contrato Mensal (6 Meses)
            </div>

            <div className="space-y-4 text-left mb-10 pl-4 border-l-2 border-white/10">
              {[
                'Consultoria Estratégica Completa',
                'Desenvolvimento No-Code & Design',
                'Gestão de Tráfego Pago (Ads)',
                'Automação & IA para Vendas'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500"><CheckCircle2 size={12} /></div>
                  {item}
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(37,99,235,0.5)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className="w-full py-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-lg rounded-xl transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle size={24} /> Iniciar Reestruturação
            </motion.button>
            <p className="mt-4 text-xs text-gray-600">Ao clicar, você será redirecionado para o WhatsApp.</p>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-slate-700 text-xs border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto space-y-2">
          <p>© 2026 Maxi.AI - Documento Confidencial. Proibida reprodução.</p>
          <p className="opacity-50">Consultoria por: <strong>Fabricio Pena de Moura</strong> • CNPJ: 55.005.989/0001-18</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
