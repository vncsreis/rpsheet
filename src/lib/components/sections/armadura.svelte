<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { getLabel } from '#lib/labels.svelte.ts';

	let selectedArmadura = $state('armadura');
</script>

<fieldset
	class="flex w-full flex-col flex-wrap items-center justify-center gap-4 rounded-md border-2 border-base-300 bg-base-100 p-6 lg:w-1/2"
>
	<legend class="font-bold">Armadura/Escudo</legend>

	<select class="select" bind:value={selectedArmadura}>
		<option value="armadura">Armadura</option>
		<option value="escudo">Escudo</option>
	</select>
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		{#each Object.entries(globalFicha.ficha[selectedArmadura]) as [prop, value]}
			<label class="floating-label flex min-w-24 {prop === 'descr' ? 'w-full lg:col-span-2' : ''}">
				<span class="text-lg">{getLabel(prop)}</span>
				{#if prop === 'descr'}
					<textarea class="input w-full p-2" bind:value={globalFicha.ficha[selectedArmadura][prop]}
					></textarea>
				{:else}
					<input
						class="input rounded-md border border-base-300 bg-base-100 px-4 py-2"
						bind:value={globalFicha.ficha[selectedArmadura][prop]}
						type={prop === 'nome' ? 'text' : 'number'}
					/>
				{/if}
			</label>
		{/each}
	</div>
</fieldset>
