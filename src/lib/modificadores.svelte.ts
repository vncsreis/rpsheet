const _MODS = [
	'fortitude',
	'reflexos',
	'vontade',
	'ca',
	'ataque',
	'ataque_corpo',
	'ataque_distancia',
	'for',
	'des',
	'car',
	'int',
	'sab',
	'con'
];

export let MODS = $state(_MODS);

export function toTooltip(mods: { nome: string; valor: number }[]) {
	return mods.reduce((acc, mod) => {
		return acc + `${mod.nome} (${mod.valor > 0 ? '+' + mod.valor : mod.valor}); `;
	}, '');
}
