import { z, defineCollection } from 'astro:content';

// Schema para armas recomendadas
const weaponSchema = z.object({
  name: z.string(),
  type: z.string().optional(), // greatsword, longsword, etc
  icon: z.string().optional(),
});

// Schema para peças do set de armadura
const armorPieceSchema = z.object({
  name: z.string(),
  icon: z.string().optional(),
  slots: z.array(z.number()).optional(), // [1, 1, 2] = 2 slots lvl 1, 1 slot lvl 2
  skills: z.array(z.string()).optional(),
});

// Schema para o set completo de armadura
const armorSetSchema = z.object({
  helm: armorPieceSchema.optional(),
  chest: armorPieceSchema.optional(),
  arms: armorPieceSchema.optional(),
  waist: armorPieceSchema.optional(),
  legs: armorPieceSchema.optional(),
  images: z.array(z.string()).optional(), // imagens do set (4 variações)
});

// Schema para joias/decorations
const decorationSchema = z.object({
  name: z.string(),
  icon: z.string().optional(),
  level: z.number().optional(),
});

// Schema para dados específicos de cada jogo
const gameDataSchema = z.object({
  rank: z.array(z.enum(['low', 'high', 'master', 'event'])),
  habitats: z.array(z.string()).optional(),
  is_dlc: z.boolean().default(false),
  // Status do monstro
  health_points: z.number().optional(),
  sizes: z.object({
    min: z.string().optional(),
    max: z.string().optional(),
    crown: z.string().optional(),
  }).optional(),
  // Equipamentos recomendados
  recommended_weapons: z.array(weaponSchema).optional(),
  armor_set: armorSetSchema.optional(),
  decorations: z.array(decorationSchema).optional(),
  // Campos opcionais que podem sobrescrever os globais
  weaknesses: z.array(z.string()).optional(),
  resistances: z.array(z.string()).optional(),
  elements: z.array(z.string()).optional(),
  ailments: z.array(z.string()).optional(),
});

// Schema completo para monstros com dados por jogo
const monsterSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  species: z.string().optional(),
  image: z.string(),
  icon: z.string(),
  description: z.string(),
  // Dados globais
  elements: z.array(z.string()).optional(),
  weaknesses: z.array(z.string()).optional(),
  resistances: z.array(z.string()).optional(),
  ailments: z.array(z.string()).optional(),
  order: z.number().default(0),
  // Dados específicos por jogo
  games: z.record(z.string(), gameDataSchema),
});

// Coleção única para todos os monstros (flat na pasta content/)
const monstersCollection = defineCollection({
  loader: async () => {
    const files = import.meta.glob('./content/*.md', { eager: true });
    return Object.entries(files).map(([path, file]: [string, any]) => {
      const slug = path.replace('./content/', '').replace('.md', '').replace(/\\/g, '/');
      return {
        id: String(file.frontmatter.id),
        ...file.frontmatter,
        slug: slug,
      };
    });
  },
  schema: monsterSchema,
});

export const collections = {
  monsters: monstersCollection,
};
