import { getLabel } from './labels';

export const MODS = [
	'fortitude',
	'reflexos',
	'vontade',
	'ca',
	'ataque',
	'ataque_corpo',
	'ataque_distancia'
].sort((a, b) => (getLabel(a) > getLabel(b) ? 1 : -1));

export type Modificador = (typeof MODS)[number];

export function toTooltip(mods: { nome: string; valor: number }[]) {
	return mods.reduce((acc, mod) => {
		return acc + `${mod.nome} (${mod.valor > 0 ? '+' + mod.valor : mod.valor}); `;
	}, '');
}
