export function getLabel(id: string) {
	if (LABELS[id]) {
		return LABELS[id].name;
	} else {
		return '';
	}
}

export const LABELS: Record<string, { name: string; type?: string }> = {
	nome: {
		name: 'Nome',
		type: 'text'
	},
	raca: {
		name: 'Raça',
		type: 'text'
	},
	tendencia: {
		name: 'Tendência',
		type: 'text'
	},
	sexo: {
		name: 'Sexo',
		type: 'text'
	},
	idade: {
		name: 'Idade',
		type: 'text'
	},
	divindade: {
		name: 'Divindade',
		type: 'text'
	},
	tamanho: {
		name: 'Tamanho',
		type: 'text'
	},
	dinheiro: {
		name: 'Dinheiro',
		type: 'number'
	},
	total: {
		name: 'Total',
		type: 'number'
	},
	atual: {
		name: 'Atual',
		type: 'number'
	},
	bonus: {
		name: 'Bônus',
		type: 'number'
	},
	pontos_acao: {
		name: 'pontos de Ação',
		type: 'number'
	},
	ca: {
		name: 'Classe de Armadura',
		type: 'number'
	},
	fortitude: {
		name: 'Fortitude'
	},
	reflexos: {
		name: 'Reflexos'
	},
	vontade: {
		name: 'Vontade'
	},
	ataque: {
		name: 'Ataque'
	},
	bonus_ataque: {
		name: 'Bônus de Ataque'
	},
	dano: {
		name: 'Dano'
	},
	critico: {
		name: 'Crítico'
	},
	distancia: {
		name: 'Distância'
	},
	tipo: {
		name: 'Tipo'
	},
	descr: {
		name: 'Descrição'
	},
	bonus_ca: {
		name: 'Bônus de CA'
	},
	max_des: {
		name: 'Bônus Max. de Des.'
	},
	penalidade: {
		name: 'Penalidade'
	},
	ataque_corpo: {
		name: 'Ataque Corpo-a-Corpo'
	},
	ataque_distancia: {
		name: 'Ataque À Distância'
	},
	nivel: {
		name: 'Nível'
	},
	duracao: {
		name: 'Duração'
	},
	alcance: {
		name: 'Alcance'
	},
	testeRes: {
		name: 'Resistência'
	},
	for: {
		name: 'Força'
	},
	des: {
		name: 'Destreza'
	},
	sab: {
		name: 'Sabedoria'
	},
	int: {
		name: 'Inteligência'
	},
	con: {
		name: 'Constituição'
	},
	car: {
		name: 'Carisma'
	}
};
