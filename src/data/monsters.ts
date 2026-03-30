// Monster data loader from JSON
// References: https://mhworld.kiranico.com/pt-BR/monsters, https://monsterhunterwiki.org, https://monsterhunter.fandom.com

export interface Monster {
  id: number;
  name: string;
  rank: 'low-rank' | 'high-rank' | 'master-rank' | 'arch-tempered' | 'terras-guias';
  type: string;
  weaknesses: string[];
  recommendedGlaive: string;
  materials: string[];
  description: string;
  stats: {
    health: string;
    attack: string;
    defense: string;
  };
  habitat: string[];
  behavior: string[];
  image?: string;
  icon?: string;
}

// Import monsters from JSON file
// @ts-ignore - JSON import
import monstersDataRaw from './monsters-clean.json';

export const monsters: Monster[] = monstersDataRaw as Monster[];

// Helper function to get monster by ID
export function getMonsterById(id: number): Monster | undefined {
  return monsters.find(monster => monster.id === id);
}

// Helper function to get monsters by rank
export function getMonstersByRank(rank: string): Monster[] {
  return monsters.filter(monster => monster.rank === rank);
}

// Helper function to get monsters by type
export function getMonstersByType(type: string): Monster[] {
  return monsters.filter(monster => monster.type === type);
}

// Helper function to search monsters by name
export function searchMonstersByName(query: string): Monster[] {
  const searchTerm = query.toLowerCase();
  return monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchTerm)
  );
}
