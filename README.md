# Monster Hunter Codex

Um guia completo de monstros de Monster Hunter construído com Astro, Bulma SCSS e foco total em acessibilidade WCAG 2.0.

## 🚀 Funcionalidades Implementadas

### ✅ Páginas

1. **Introdução** (`/introducao`)
   - Página de carregamento com logo e texto introdutório
   - Design limpo e minimalista
   - Navegação para página principal

2. **Iniciar** (`/iniciar`)
   - Barra de pesquisa na navbar
   - Header com vídeo de background (HTML5 semântico)
   - Grid responsivo de cards dos monstros
   - Sistema de busca em tempo real

3. **Resultados** (`/resultados`)
   - Cards filtrados sem header
   - Mantém apenas a navbar funcional
   - Exibe contagem de resultados
   - Estado vazio quando não há resultados

4. **Monstro** (`/monstro`)
   - Página de detalhes completos
   - Abas: Physiology, Habitat, Behavior, Materials
   - Informações detalhadas baseadas em fontes oficiais

### ✅ Componentes

- **MonsterCard** - Componente reutilizável com:
  - Efeito hover animado
  - Layout responsivo
  - Suporte para diferentes variantes
  - Navegação para página de detalhes

### ✅ Características Técnicas

- **HTML5 Semântico**: Uso correto de `<nav>`, `<header>`, `<section>`, `<article>`
- **Bulma SCSS**: Sistema de grid responsivo e classes utilitárias
- **Acessibilidade WCAG 2.0**:
  - ARIA labels e roles
  - Navegação por teclado
  - Suporte para leitores de tela
  - Redução de movimento para usuários sensíveis
  - Contraste de cores adequado
- **Design Responsivo**: Layout adaptado para mobile, tablet e desktop

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   └── MonsterCard.astro
├── data/
│   └── monsters.ts (dados atualizados)
├── imgs/
│   ├── icons/ (ícones dos monstros)
│   └── monsters/ (imagens dos monstros)
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro (redirecionamento)
│   ├── introducao.astro
│   ├── iniciar.astro
│   ├── resultados.astro
│   └── monstro.astro
└── styles/
    ├── components/
    │   └── _monster-card.scss
    └── pages/
        ├── iniciar.scss
        └── resultados.scss
```

## 🎯 Fluxo de Navegação

1. `index.astro` → redireciona para `/introducao`
2. `/introducao` → botão "Iniciar Jornada" leva para `/iniciar`
3. `/iniciar` → pesquisa leva para `/resultados?search=termo`
4. `/resultados` → clique no card leva para `/monstro?id=id`
5. `/monstro` → campo de pesquisa retorna para `/iniciar`

## 📱 Responsividade

- **Mobile (< 480px)**: 1 coluna de cards
- **Tablet (480px - 768px)**: 2 colunas de cards
- **Desktop (> 768px)**: 3-4 colunas de cards (dependendo da largura)

## 🎨 Design System

### Cores Principais
- Background: `#eef4f6`
- Cards: `#ffffff`
- Texto: `#0f191e`
- Primária: `#3273dc`
- Bordas: `#d4e1e6`

### Tipografia
- Primary: 'Plus Jakarta Sans', 'Lato'
- RPG Icons: 'rpg-awesome'
- Material Symbols: 'Material Symbols Outlined'

## 🔧 Como Executar

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📚 Fontes de Referência

- [Monster Hunter World Wiki](https://mhworld.kiranico.com/pt-BR/monsters)
- [Monster Hunter Wiki](https://monsterhunterwiki.org/wiki/Main_Page)
- [Monster Hunter Fandom](https://monsterhunter.fandom.com/wiki/Monster_Hunter_Wiki)

## ♿ Acessibilidade

Este projeto segue as diretrizes WCAG 2.0 Nível AA:

- ✅ Navegação por teclado
- ✅ Contraste de cores (mínimo 4.5:1)
- ✅ Textos alternativos para imagens
- ✅ ARIA labels e roles
- ✅ Redução de movimento
- ✅ Foco visível
- ✅ Títulos e estrutura semântica

## 🎮 Dados dos Monstros

O banco de dados inclui informações detalhadas:

- **Low Rank**: Anjanath, Barroth, Great Jagras, Kulu-Ya-Ku, Pukei-Pukei
- **High Rank**: Tobi-Kadachi, Jyuratodus
- **Master Rank**: Nergigante, Kushala Daora
- **Terras Guias**: Rajang, Teostra, Diablos, Bazelgeuse, Zinogre

Cada monstro contém:
- Estatísticas (vida, ataque, defesa)
- Fraquezas elementais
- Materiais obtidos
- Habitat natural
- Comportamento típico
- Insect Glaive recomendado

## 🚀 Próximos Passos

- [ ] Implementar sistema de favoritos
- [ ] Adicionar filtros avançados
- [ ] Modo escuro/claro
- [ ] Animações de transição entre páginas
- [ ] Página de comparação de monstros
