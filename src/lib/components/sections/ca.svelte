<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { toTooltip } from '#lib/modificadores.svelte.ts';
</script>

{#snippet caField(label: string, value: number)}
	<label
		class="floating-label flex min-w-24 {label === 'Outros' ? 'tooltip' : ''}"
		data-tip={label === 'Outros' ? toTooltip(globalFicha.getMods('ca').mods) : null}
	>
		<span class="text-lg">{label}</span>
		<input
			class="input cursor-default rounded-md border border-base-300 bg-base-100 px-4 py-2"
			{value}
			readonly
		/>
	</label>
{/snippet}

<fieldset
	class="flex w-full flex-row flex-wrap justify-center rounded-md border-2 border-base-300 bg-base-100 p-6 lg:w-1/2"
>
	<legend class="font-bold">Classe de Armadura</legend>
	<div
		class="flex w-full flex-col items-center justify-evenly gap-8 px-4 lg:flex-row lg:items-center"
	>
		<div class="flex h-full w-1/4 flex-col items-center justify-center">
			<span class="text-md tooltip font-bold" data-tip={`${globalFicha.caTotal - 10} + 10`}
				>Total</span
			>
			<span class="rounded-md border border-base-300 bg-base-100 px-4 py-2"
				>{globalFicha.caTotal}</span
			>
		</div>
		<div class="flex flex-col items-end justify-center gap-4 lg:grid xl:grid-cols-2 xl:grid-rows-3">
			{@render caField('1/2 do Nível', Math.floor(globalFicha.nivel / 2))}
			{@render caField('Mod. de Habilidade', globalFicha.modHabDes)}
			{@render caField('Bônus de Armadura', globalFicha.ficha.armadura.bonus_ca)}
			{@render caField('Bônus de Escudo', globalFicha.ficha.escudo.bonus_ca)}
			{@render caField('Mod. de Tamanho', globalFicha.modTamanho)}
			{@render caField('Outros', globalFicha.getMods('ca').total)}
		</div>
	</div>
</fieldset>
