# 🏗️ Landing Page Blueprint: Sistema de Propostas de Alto Impacto

Este documento serve como a **lógica mestre** para replicar esta Landing Page para outros clientes. O sistema foi desenhado para ser modular: você altera os dados, mas mantém a autoridade visual e a psicologia de venda.

---

## 🛠️ Stack Tecnológica
- **React + Vite**: Velocidade de carregamento absurda.
- **Tailwind CSS**: Estilização via utilitários (Dark Mode nativo).
- **Framer Motion**: Animações fluidas e sensação de "App Premium".
- **Lucide React**: Biblioteca de ícones minimalistas.

---

## 🧩 Estrutura de Componentes

### 1. Hero (O Impacto Inicial)
- **Função**: Posicionamento de líder.
- **Variáveis de Troca**: Título (H1), Subtítulo, Imagem de fundo (grayscale + opacity 50%).
- **Gatilho Mental**: Autoridade Absoluta.

### 2. Diagnosis (Raio-X Operacional)
- **Função**: Identificar a dor sem culpar o cliente.
- **Lógica**: Matriz FOFA (SWOT) Industrial.
- **Blocos**: Forças, Pontos de Atenção (Fraquezas), Oportunidades e Ameaças.

### 3. OperationalBottleneck (Onde o Dinheiro Trava)
- **Função**: Visualizar o problema logístico/operacional.
- **Uso**: Mostrar o fluxo atual "travado" vs a "Esteira Digital" proposta.

### 4. Bento Grid (A Tríade da Estratégia)
- **Função**: Apresentar as soluções de forma interativa.
- **Configuração**: 
  - `strategies`: Array de objetos no topo do `App.jsx`.
  - Cada objeto controla: Ícone, Cor, Títulos, Métricas e o `VisualComponent` (grafismo dentro do modal).

### 5. Timeline (Sprint de 30 Dias)
- **Função**: Justificar o investimento rápido.
- **Lógica**: Dividido em Semanas (Mês 1) e Missões Mensais (Mês 2-6).
- **Argumento**: "Não estamos planejando, estamos atacando."

### 6. Investment (O Fechamento)
- **Função**: Tabela de preços limpa.
- **Elementos**: Valor em destaque, itens inclusos e CTA direto para WhatsApp com mensagem pré-setada.

---

## 🚀 Como Replicar para Novo Cliente (Fluxo de Trabalho)

1. **Preenchimento do Prompt**:
   - Nome do Cliente e CNPJ.
   - 3 a 4 dores principais (Gargalos).
   - Foto da fachada ou operação (Colocar em `/public/hero-bg.png`).
   - Valor do ticket e tempo de contrato.

2. **Edição no `App.jsx`**:
   - Vá na constante `strategies` e mude os textos e métricas.
   - No componente `Timeline`, ajuste as missões específicas do nicho do cliente.
   - No componente `Hero`, mude a pílula superior (Badge).

3. **Customização de Cores**:
   - O sistema usa `slate-950` como base. Para mudar a "cor de acento", altere as classes `from-blue-600` ou `from-red-600` nas estratégias.

---

## 📉 Lógica de Venda Embutida
- **Segurança**: O design escuro com vidro (glassmorphism) passa seriedade/luxo.
- **Tangibilização**: Os modais com gráficos de "Projeção" e "Radar" fazem o cliente visualizar o lucro antes de assinar.
- **Transparência**: O cronograma semanal retira a ansiedade do cliente sobre o que será feito no "Mês 1".

---

**Desenvolvido por:** Fabricio Pena de Moura
**Versão do Blueprint:** 1.0 (Janeiro 2026)
