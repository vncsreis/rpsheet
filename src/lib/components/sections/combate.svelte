<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { getLabel } from '#lib/labels.svelte.ts';
</script>

<!-- TODO: ver como impedir que PV atual seja maior que total -->
<fieldset
	class="flex w-full flex-row flex-wrap justify-center gap-4 rounded-md border-2 border-base-300 bg-base-100 p-6 lg:w-1/2"
>
	<legend class="font-bold">Combate</legend>
	<fieldset class="flex flex-row rounded-md border border-base-300 p-4">
		<legend class="font-bold">PV</legend>
		<div class="flex flex-row">
			{#each Object.keys(globalFicha.ficha.pv) as k (k)}
				<label class="floating-label m-2 flex flex-col">
					<span class="text-lg">{getLabel(k)}</span>
					<input type="number" class="input" bind:value={globalFicha.ficha.pv[k]} />
				</label>
			{/each}
		</div>
	</fieldset>
	<fieldset class="flex flex-row rounded-md border border-base-300 p-4">
		<legend>Pontos de Ação</legend>
		<div class="m-2 mt-7 flex w-18 flex-col items-center">
			<input
				id="pontos_acao"
				type="number"
				class="input"
				bind:value={globalFicha.ficha.pontos_acao}
			/>
		</div>
	</fieldset>
</fieldset>
