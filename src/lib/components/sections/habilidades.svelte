<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
</script>

<fieldset
	class="flex w-full flex-row flex-wrap justify-center rounded-md border-2 border-base-300 bg-base-100 p-6"
>
	<legend class="font-bold">Habilidades</legend>
	<div class="grid grid-cols-3 grid-rows-7 gap-2">
		<div></div>
		<div class="place-self-center">Valor</div>
		<div class="place-self-center">Modificador</div>

		{#each Object.keys(globalFicha.ficha.hab) as hab (hab)}
			<div
				class="flex h-full w-1/3 min-w-18 flex-row items-center justify-center place-self-center rounded-sm bg-black font-bold text-white dark:bg-white dark:text-black"
			>
				{hab.toUpperCase()}
			</div>
			<input
				class="input w-1/2 min-w-18 place-self-center"
				type="number"
				id={'hab_' + hab}
				bind:value={globalFicha.ficha.hab[hab]}
			/>
			<span class="w-1/2 place-self-center rounded-md border border-base-300 px-4 py-2">
				{globalFicha.getModHab(hab)}
			</span>
		{/each}
	</div>
</fieldset>
