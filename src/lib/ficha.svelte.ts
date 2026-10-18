import type { Ficha, Modificadores } from './ficha.interface';

export const NOVA_FICHA: Ficha = {
	info: {
		nome: '',
		raca: '',
		tendencia: '',
		sexo: '',
		idade: 0,
		divindade: '',
		tamanho: '',
		dinheiro: 0
	},
	deslocamento: [],
	classes: [],
	pv: {
		total: 0,
		atual: 0,
		bonus: 0
	},
	pontos_acao: 0,
	armas: [],
	escudo: {
		nome: '',
		bonus_ca: 0,
		max_des: 0,
		penalidade: 0,
		descr: ''
	},
	armadura: {
		nome: '',
		bonus_ca: 0,
		max_des: 0,
		penalidade: 0,
		descr: ''
	},
	hab: {
		for: 0,
		des: 0,
		con: 0,
		int: 0,
		sab: 0,
		car: 0
	},
	bba: 0,
	pericias: [
		{
			nome: 'Acrobacia',
			penalidade: true,
			treinamento: false,
			hab: 'des',
			id: 'acrobacia',
			treinada: false
		},
		{
			nome: 'Adestrar Animais',
			penalidade: false,
			treinamento: true,
			hab: 'car',
			id: 'adestrar_animais',
			treinada: false
		},
		{
			nome: 'Atletismo',
			penalidade: true,
			treinamento: false,
			hab: 'for',
			id: 'atletismo',
			treinada: false
		},
		{
			nome: 'Atuação',
			penalidade: false,
			treinamento: false,
			hab: 'car',
			id: 'atuacao',
			treinada: false
		},
		{
			nome: 'Cavalgar',
			penalidade: false,
			treinamento: false,
			hab: 'des',
			id: 'cavalgar',
			treinada: false
		},
		{
			nome: 'Conhecimento',
			penalidade: false,
			treinamento: true,
			hab: 'int',
			id: 'conhecimento',
			treinada: false
		},
		{
			nome: 'Cura',
			penalidade: false,
			treinamento: false,
			hab: 'sab',
			id: 'cura',
			treinada: false
		},
		{
			nome: 'Diplomacia',
			penalidade: false,
			treinamento: false,
			hab: 'car',
			id: 'diplomacia',
			treinada: false
		},
		{
			nome: 'Enganação',
			penalidade: false,
			treinamento: false,
			hab: 'car',
			id: 'enganacao',
			treinada: false
		},
		{
			nome: 'Furtividade',
			penalidade: true,
			treinamento: false,
			hab: 'des',
			id: 'furtividade',
			treinada: false
		},
		{
			nome: 'Identificar Magia',
			penalidade: false,
			treinamento: true,
			hab: 'int',
			id: 'identificar_magia',
			treinada: false
		},
		{
			nome: 'Iniciativa',
			penalidade: false,
			treinamento: false,
			hab: 'des',
			id: 'iniciativa',
			treinada: false
		},
		{
			nome: 'Intimidação',
			penalidade: false,
			treinamento: false,
			hab: 'car',
			id: 'intimidacao',
			treinada: false
		},
		{
			nome: 'Intuição',
			penalidade: false,
			treinamento: false,
			hab: 'sab',
			id: 'intuicao',
			treinada: false
		},
		{
			nome: 'Ladinagem',
			penalidade: true,
			treinamento: true,
			hab: 'des',
			id: 'ladinagem',
			treinada: false
		},
		{
			nome: 'Obter Informação',
			penalidade: false,
			treinamento: false,
			hab: 'car',
			id: 'obter_informacao',
			treinada: false
		},
		{
			nome: 'Ofício',
			penalidade: false,
			treinamento: false,
			hab: 'int',
			id: 'oficio',
			treinada: false
		},
		{
			nome: 'Percepção',
			penalidade: false,
			treinamento: false,
			hab: 'sab',
			id: 'percepcao',
			treinada: false
		},
		{
			nome: 'Sobrevivência',
			penalidade: false,
			treinamento: false,
			hab: 'sab',
			id: 'sobrevivencia',
			treinada: false
		}
	],
	talentos: [],
	prepararMagias: true,
	pm: {
		atual: 0,
		total: 0
	},
	magias: [],
	inventario: [],
	status: []
};

export const FICHA: Ficha = {
	info: {
		nome: 'Punga',
		raca: 'Halfling',
		tendencia: 'Neutro e bom',
		sexo: 'F',
		idade: 51,
		divindade: 'Alihanna',
		tamanho: 'Pequeno',
		dinheiro: 1246
	},
	deslocamento: [
		{
			nome: 'Andar',
			dist: 6
		}
	],
	classes: [
		{ nome: 'Druida', nivel: 7 },
		{ nome: 'Clerigo', nivel: 2 }
	],
	pv: {
		total: 45,
		atual: 45,
		bonus: 0
	},
	pontos_acao: 2,
	armas: [
		{
			nome: 'Funda (+FOR)',
			bonus_ataque: 1,
			dano: '1d3+2',
			critico: '20/x2',
			distancia: '15m',
			tipo: 'Esmagamento',
			descr: 'Funda pequena'
		},
		{
			nome: 'Outra Funda (+FOR)',
			bonus_ataque: 1,
			dano: '1d3+2',
			critico: '20/x2',
			distancia: '15m',
			tipo: 'Esmagamento',
			descr: 'Funda pequena'
		}
	],
	escudo: {
		nome: 'Escudinho',
		bonus_ca: 2,
		max_des: 2,
		penalidade: 2,
		descr: ''
	},
	armadura: {
		nome: 'Gibão (Leve)',
		bonus_ca: 4,
		max_des: 4,
		penalidade: 2,
		descr: ''
	},
	hab: {
		for: 10,
		des: 18,
		con: 11,
		int: 8,
		sab: 19,
		car: 14
	},
	bba: 5,
	pericias: [
		{
			nome: 'Acrobacia',
			penalidade: true,
			treinamento: false,
			hab: 'des',
			id: 'acrobacia',
			treinada: false
		},
		{
			nome: 'Adestrar Animais',
			penalidade: false,
			treinamento: true,
			hab: 'car',
			id: 'adestrar_animais',
			treinada: true
		},
		{
			nome: 'Atletismo',
			penalidade: true,
			treinamento: false,
			hab: 'for',
			id: 'atletismo',
			treinada: false
		},
		{
			nome: 'Atuação',
			penalidade: false,
			treinamento: false,
			hab: 'car',
			id: 'atuacao',
			treinada: false
		},
		{
			nome: 'Cavalgar',
			penalidade: false,
			treinamento: false,
			hab: 'des',
			id: 'cavalgar',
			treinada: false
		},
		{
			nome: 'Conhecimento',
			penalidade: false,
			treinamento: true,
			hab: 'int',
			id: 'conhecimento_arcano',
			treinada: false
		},
		{
			nome: 'Cura',
			penalidade: false,
			treinamento: false,
			hab: 'sab',
			id: 'cura',
			treinada: true
		},
		{
			nome: 'Diplomacia',
			penalidade: false,
			treinamento: false,
			hab: 'car',
			id: 'diplomacia',
			treinada: false
		},
		{
			nome: 'Enganação',
			penalidade: false,
			treinamento: false,
			hab: 'car',
			id: 'enganacao',
			treinada: false
		},
		{
			nome: 'Furtividade',
			penalidade: true,
			treinamento: false,
			hab: 'des',
			id: 'furtividade',
			treinada: false
		},
		{
			nome: 'Identificar Magia',
			penalidade: false,
			treinamento: true,
			hab: 'int',
			id: 'identificar_magia',
			treinada: false
		},
		{
			nome: 'Iniciativa',
			penalidade: false,
			treinamento: false,
			hab: 'des',
			id: 'iniciativa',
			treinada: false
		},
		{
			nome: 'Intimidação',
			penalidade: false,
			treinamento: false,
			hab: 'car',
			id: 'intimidacao',
			treinada: false
		},
		{
			nome: 'Intuição',
			penalidade: false,
			treinamento: false,
			hab: 'sab',
			id: 'intuicao',
			treinada: false
		},
		{
			nome: 'Ladinagem',
			penalidade: true,
			treinamento: true,
			hab: 'des',
			id: 'ladinagem',
			treinada: false
		},
		{
			nome: 'Obter Informação',
			penalidade: false,
			treinamento: false,
			hab: 'car',
			id: 'obter_informacao',
			treinada: false
		},
		{
			nome: 'Ofício',
			penalidade: false,
			treinamento: false,
			hab: 'int',
			id: 'oficio',
			treinada: false
		},
		{
			nome: 'Percepção',
			penalidade: false,
			treinamento: false,
			hab: 'sab',
			id: 'percepcao',
			treinada: false
		},
		{
			nome: 'Sobrevivência',
			penalidade: false,
			treinamento: false,
			hab: 'sab',
			id: 'sobrevivencia',
			treinada: true
		}
	],
	talentos: [
		{
			nome: 'Fortitude Maior',
			descr:
				'Você tem mais resistência física que as pessoas normais.\n Benefício: seu bônus base de Fortitude aumenta +2.\n Especial: você pode escolher este talento diversas vezes. Seus efeitos se acumulam.',
			modificadores: [{ tipo: 'fortitude', valor: 2 }]
		},
		{
			nome: 'Vontade de Ferro',
			descr:
				'Você tem uma imensa força de vontade.\nBenefício: seu bônus base de Vontade aumenta +2.\nEspecial: você pode escolher este talento diversas vezes. Seus efeitos se acumulam.',
			modificadores: [
				{
					tipo: 'vontade',
					valor: 2
				}
			]
		},
		{
			nome: 'Esquiva',
			descr:
				'Você é bom em esquivar-se de golpes.\nPré-requisito: Des 13.\nBenefício: você recebe CA +1.',
			modificadores: [
				{
					tipo: 'ca',
					valor: 1
				}
			]
		},
		{
			nome: 'Comandar',
			descr:
				'Você pode usar uma ação padrão para gritar ordens para seus aliados.\nAqueles que puderem ouvi-lo receberão +1 em suas jogadas e testes por um número de rodadas igual a 1 à seu modificador de Carisma.',
			modificadores: [
				{
					tipo: 'ataque',
					valor: 1
				},
				{
					tipo: 'fortitude',
					valor: 1
				},
				{
					tipo: 'reflexos',
					valor: 1
				},
				{
					tipo: 'vontade',
					valor: 1
				}
			],
			requerAtivacao: true,
			ativo: false
		}
	],
	prepararMagias: true,
	pm: {
		atual: 22,
		total: 22
	},
	magias: [
		{
			nome: 'Escudo da Fé',
			nivel: 1,
			tipo: 'Divina',
			duracao: '1h',
			alcance: 'Pessoal',
			descr: 'Esta magia cria um campo de força mágico em volta do alvo, fornecendo CA +2.',
			ativo: false,
			requerAtivacao: true,
			modificadores: [
				{
					tipo: 'ca',
					valor: 2
				}
			],
			usos: 3
		},
		{
			nome: 'Destruição Sagrada',
			nivel: 3,
			tipo: 'Divina (bem)',
			duracao: 'Instantânea',
			alcance: '30m',
			area: 'Explosão com 6m de Raio',
			testeRes: 'Fortitude Parcial',
			descr:
				'Você canaliza poder divino na forma de uma explosão brilhante, que causa 8d6 pontos de dano a criaturas Malignas e as deixa cegas por uma rodada. Um teste de Fortitude bem-sucedido reduz o dano à metade e evita a cegueira.\nCriaturas Neutras sofrem metade do dano (ou um quarto, se bem-sucedidas no teste de Fortitude) e não sofrem cegueira.',
			requerAtivacao: false,
			ativo: false,
			modificadores: [],
			usos: 2
		}
	],
	inventario: [
		{
			nome: 'Poção de CA',
			descr: '+2 de CA',
			modificadores: [
				{
					tipo: 'ca',
					valor: 2
				}
			],
			ativo: false,
			requerAtivacao: true,
			quantidade: 2
		},
		{
			nome: 'Poção de Ataque',
			descr: '+2 de Ataque',
			modificadores: [
				{
					tipo: 'ataque',
					valor: 2
				}
			],
			ativo: false,
			requerAtivacao: true,
			quantidade: 2
		},
		{
			nome: 'Ração',
			descr:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque sed odio non congue. In non odio vitae risus cursus volutpat eget non leo. Aliquam erat volutpat. Fusce et vestibulum nulla. Donec et velit sollicitudin, pellentesque metus sit amet, laoreet lectus. Donec non nisl consectetur, dictum quam ac, molestie magna. Nulla eu velit nec lacus cursus porta. ',
			modificadores: [],
			ativo: false,
			requerAtivacao: false,
			quantidade: 10
		}
	],
	status: [
		{
			nome: 'Assustado',
			descr:
				'Personagem fica assustado, pode errar mais facilmente. Sofre redutor de -2 nas jogadas de ataque',
			modificadores: [
				{
					tipo: 'ataque',
					valor: -2
				}
			],
			requerAtivacao: true,
			ativo: true
		}
	]
};

export class FichaState {
	ficha = $state<Ficha>();

	get nivel() {
		return this.ficha.classes.reduce((acc, curr) => curr.nivel + acc, 0);
	}

	get modHabDes() {
		const { armadura, escudo } = this.ficha;
		const maxDes = armadura.max_des < escudo.max_des ? armadura.max_des : escudo.max_des;
		const modHab = Math.floor((this.ficha.hab.des - 10) / 2);

		return modHab > maxDes ? maxDes : modHab;
	}

	getMods(id: string) {
		let total = 0;

		const talentos = this.ficha.talentos.reduce((acc, talento) => {
			if (!talento.requerAtivacao || talento.ativo) {
				for (const mod of talento.modificadores) {
					if (mod.tipo === id) {
						total += mod.valor;
						acc.push({ nome: talento.nome, valor: mod.valor, tipo: 'talento' });
					}
				}
			}

			return acc;
		}, []);

		const inventario = this.ficha.inventario.reduce((acc, inventario) => {
			if (!inventario.requerAtivacao || inventario.ativo) {
				for (const mod of inventario.modificadores) {
					if (mod.tipo === id) {
						total += mod.valor;
						acc.push({ nome: inventario.nome, valor: mod.valor, tipo: 'talento' });
					}
				}
			}

			return acc;
		}, []);

		const magias = this.ficha.magias.reduce((acc, magia) => {
			if (magia.ativo) {
				for (const mod of magia.modificadores) {
					if (mod.tipo === id) {
						total += mod.valor;
						acc.push({ nome: magia.nome, valor: mod.valor, tipo: 'magia' });
					}
				}
			}

			return acc;
		}, []);

		const status = this.ficha.status.reduce((acc, s) => {
			if (!s.requerAtivacao || s.ativo) {
				for (const mod of s.modificadores) {
					if (mod.tipo === id) {
						total += mod.valor;
						acc.push({ nome: s.nome, valor: mod.valor, tipo: 'status' });
					}
				}
			}

			return acc;
		}, []);

		return { total, mods: [...talentos, ...magias, ...inventario, ...status] };
	}

	get modTamanho() {
		const { tamanho } = this.ficha.info;

		let modTamanho = 0;

		// Adicionar outros tamanhos
		switch (tamanho.toLowerCase()) {
			case 'pequeno':
				modTamanho = 1;
				break;
		}

		return modTamanho;
	}

	get caTotal() {
		const { armadura, escudo } = this.ficha;

		// adicionar magias e poções no cálculo
		return (
			10 +
			Math.floor(this.nivel / 2) +
			this.modHabDes +
			armadura.bonus_ca +
			escudo.bonus_ca +
			this.modTamanho +
			this.getMods('ca').total
		);
	}

	get ataque() {
		const { bba } = this.ficha;

		return {
			corpo: bba + this.getModHab('for') + this.modTamanho,
			distancia: bba + this.modHabDes + this.modTamanho
		};
	}

	getModHab(hab: string) {
		switch (hab.toLowerCase()) {
			case 'des':
				return this.modHabDes;
			default:
				return Math.floor((this.ficha.hab[hab] - 10) / 2);
		}
	}
}

export let globalFicha = new FichaState();
