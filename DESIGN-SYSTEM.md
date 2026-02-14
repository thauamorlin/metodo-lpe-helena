# LPE — Design System

### Líder da Própria Evolução · Helena Binz

> Referência visual completa da marca. Use este documento para manter consistência em qualquer material — site, redes sociais, apresentações.

---

## 🎨 Paleta de Cores

### Dourado (cor principal da marca)

| Token | Hex | Uso |
|-------|-----|-----|
| Gold Pale | `#EDD9C4` | Fundos sutis, bordas suaves |
| Gold Light | `#D4B896` | Labels, destaques secundários |
| **Gold** | **`#B8956A`** | **Cor principal — botões, links, ícones** |
| Gold Deep | `#8B6B3E` | Texto em itálico destacado, âncoras |
| Gold Darker | `#6B5230` | Hover de texto dourado |

### Fundos

| Token | Hex | Uso |
|-------|-----|-----|
| Background | `#FAF7F2` | Fundo principal (off-white quente) |
| Warm | `#F0E8DA` | Seções alternadas (bege claro) |
| Dark | `#141210` | Cards escuros, seções imersivas |
| Darker | `#0C0A09` | Footer, modais |

### Texto

| Token | Hex | Uso |
|-------|-----|-----|
| Heading | `#1C1917` | Títulos e destaques fortes |
| Text | `#57534E` | Corpo do texto principal |
| Muted | `#A8A29E` | Texto auxiliar, rodapés |
| White | `#FFFFFF` | Texto sobre fundos escuros |

### Funcional

| Token | Hex | Uso |
|-------|-----|-----|
| Success | `#4A7A53` | Selo de garantia, confirmações |

### Gradientes

| Nome | Definição |
|------|-----------|
| **Gradient Gold** | `linear-gradient(135deg, #D4B896 0%, #B8956A 50%, #8B6B3E 100%)` |
| Gradient Dark | `linear-gradient(180deg, #141210 0%, #1C1917 100%)` |

---

## 🔤 Tipografia

| Função | Fonte | Fallback |
|--------|-------|----------|
| **Títulos (serif)** | **Fraunces** | Georgia, serif |
| **Corpo (sans)** | **Hanken Grotesk** | system-ui, sans-serif |

### Hierarquia de Tamanhos

| Elemento | Tamanho | Peso |
|----------|---------|------|
| Hero title | `clamp(2.4rem, 5.5vw, 3.8rem)` | 300 (light) |
| Section title | `clamp(2rem, 4.5vw, 3.2rem)` | 300 |
| Editorial headline | `clamp(2rem, 4.5vw, 3.2rem)` | 300 |
| Card title (h3) | `1rem` | 600 |
| Body text | `17px` (base) | 400 |
| Small/labels | `0.78rem – 0.85rem` | 600, uppercase, tracking `0.12em` |
| Micro text | `0.75rem` | 400 |

### Regra de Estilo

- **Títulos**: sempre peso 300 (leve/elegante) com `<strong>` para destaques pontuais
- **Itálicos**: cor `--gold-deep` para dar calor emocional
- **Labels**: uppercase + letter-spacing + fonte sans

---

## 📐 Espaçamento

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-xs` | `0.5rem` (8px) | Micro gaps |
| `--space-sm` | `1rem` (16px) | Gaps pequenos |
| `--space-md` | `1.5rem` (24px) | Gaps médios |
| `--space-lg` | `2.5rem` (40px) | Gaps grandes |
| `--space-xl` | `4rem` (64px) | Separação de blocos |
| `--space-2xl` | `6rem` (96px) | Seções internas |
| `--space-3xl` | `8rem` (128px) | Separadores maiores |
| `--space-section` | `clamp(6rem, 12vw, 10rem)` | Padding vertical entre seções |

---

## 📦 Layout

| Token | Valor |
|-------|-------|
| Container | `min(1100px, 88vw)` |
| Container narrow | `min(720px, 88vw)` |

Centralizado com `margin: 0 auto`.

---

## 🔲 Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius` | `16px` | Cards, inputs, FAQ |
| `--radius-lg` | `24px` | Cards maiores, vídeo |
| `--radius-xl` | `32px` | Destaque (strategic card) |
| Botões | `100px` | Full pill (arredondado completo) |

---

## 🌑 Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| Soft | `0 4px 32px rgba(0,0,0,0.06)` | Cards padrão |
| Gold | `0 8px 40px rgba(184,149,106,0.2)` | Hover de botões, destaques |
| Elevated | `0 24px 80px rgba(0,0,0,0.12)` | Cards elevados, modais |

---

## 🔘 Botões

### Primário (`.btn--primary`)

- **Background**: `var(--gradient-gold)` (gradiente dourado)
- **Texto**: branco
- **Border-radius**: `100px` (pill)
- **Padding**: `0.9rem 2rem` (padrão) · `1.1rem 2.8rem` (large)
- **Hover**: sobe 2px + sombra dourada + shimmer de luz
- **Active**: scale 0.97

### Variantes

| Classe | Comportamento |
|--------|--------------|
| `.btn--lg` | Maior: padding `1.1rem 2.8rem`, font `0.95rem` |
| `.btn--full` | Largura 100% |
| `.btn__arrow` | Seta `→` que se move 3px no hover |

---

## ✨ Animações & Transições

### Easing

| Token | Curva | Sensação |
|-------|-------|----------|
| `--ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Suave e elegante |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Saída natural |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Micro-bounce premium |

### Scroll Reveals (`data-animate`)

- **Padrão**: fade up (32px) em 0.8s
- **Scale**: de 0.95 → 1
- **Slide left/right**: de ±40px → 0
- **Stagger**: delay de `100ms` × índice do item

---

## 🏗 Padrões de Seção

| Padrão | Background | Quando usar |
|--------|-----------|-------------|
| Claro neutro | `--bg` (#FAF7F2) | Padrão, maioria das seções |
| Quente alternado | `--bg-warm` (#F0E8DA) | FAQ, seções alternadas |
| Escuro imersivo | `--bg-dark` (#141210) | Cards, seções de destaque |
| Escuro profundo | `--bg-darker` (#0C0A09) | Footer |

### Elementos decorativos

- **Glow dourado**: `radial-gradient` com dourado a 8% de opacidade
- **Noise overlay**: textura de ruído a 2% de opacidade sobre todo o body
- **Linhas**: `2px solid var(--gold-pale)` para bordas de timeline

---

## 📱 Breakpoints

| Breakpoint | Alvo |
|-----------|------|
| `≤ 1024px` | Tablets — hero empilha, grid 2 colunas → 1 |
| `≤ 768px` | Mobile — tudo empilha, fontes reduzidas |
| `≤ 480px` | Mobile pequeno — padding mínimo |

---

## 🎯 Princípios da Marca

1. **Elegância sem excesso** — Peso 300 nos títulos, paleta restrita, espaçamento generoso
2. **Calor humano** — Tons dourados e bege, sem cores frias
3. **Imersão suave** — Animações sutis, transições lentas (0.3s–0.8s)
4. **Contraste editorial** — Texto escuro sobre fundo claro, texto claro sobre fundo escuro
5. **Luxo acessível** — Sombras suaves, gradientes contidos, sem brilho excessivo
