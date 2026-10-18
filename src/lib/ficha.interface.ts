import { Habilidade } from './habilidades';
import { Modificador } from './modificadores';

export type Tamanho = 'Pequeno' | 'Médio' | 'Grande' | '';

export interface Modificadores {
	tipo: Modificador;
	valor: number;
}

export interface Ficha {
	info: {
		nome: string;
		raca: string;
		tendencia: string;
		sexo: string;
		idade: number;
		divindade: string;
		tamanho: Tamanho;
		dinheiro: number;
	};
	deslocamento: {
		nome: string;
		dist: number;
	}[];
	classes: { nome: string; nivel: number }[];
	pv: {
		total: number;
		atual: number;
		bonus: number;
	};
	pontos_acao: number;
	escudo: {
		nome: string;
		bonus_ca: number;
		max_des: number;
		penalidade: number;
		descr: string;
	};
	armadura: {
		nome: string;
		bonus_ca: number;
		max_des: number;
		penalidade: number;
		descr: string;
	};
	armas: {
		nome: string;
		bonus_ataque: number;
		dano: string;
		critico: string;
		distancia: string;
		tipo: string;
		descr: string;
	}[];
	hab: Record<Habilidade, number>;
	bba: number;
	pericias: {
		nome: string;
		penalidade: boolean;
		treinamento: boolean;
		hab: Habilidade;
		id: string;
		treinada: boolean;
	}[];
	talentos: {
		nome: string;
		descr: string;
		modificadores: Modificadores[];
		requerAtivacao?: boolean;
		ativo?: boolean;
	}[];
	prepararMagias: boolean;
	pm: {
		atual: number;
		total: number;
	};
	magias: {
		nome: string;
		nivel: number;
		tipo: string;
		duracao?: string;
		alcance?: string;
		area?: string;
		testeRes?: string;
		descr: string;
		requerAtivacao: boolean;
		ativo?: boolean;
		modificadores: Modificadores[];
		usos?: number;
	}[];
	inventario: {
		nome: string;
		quantidade: number;
		descr: string;
		modificadores: Modificadores[];
		ativo: boolean;
		requerAtivacao: boolean;
	}[];
	status: {
		nome: string;
		descr: string;
		modificadores: Modificadores[];
		requerAtivacao?: boolean;
		ativo?: boolean;
	}[];
}
