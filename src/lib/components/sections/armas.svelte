<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { getLabel } from '#lib/labels.ts';
	import { Icon, Plus, Trash } from 'svelte-hero-icons';

	let selectedArmaIndex = $state(0);

	function addArma() {
		const newLength = globalFicha.ficha.armas.push({
			nome: 'Nova Arma',
			bonus_ataque: null,
			dano: null,
			critico: null,
			distancia: null,
			tipo: null,
			descr: null
		});

		selectedArmaIndex = newLength - 1;
	}

	function removeArma(armaIndex: number) {
		if (globalFicha.ficha.armas.length === 1) {
			globalFicha.ficha.armas.push({
				critico: null,
				dano: null,
				descr: null,
				distancia: null,
				nome: null,
				tipo: null,
				bonus_ataque: null
			});
		}

		globalFicha.ficha.armas.splice(armaIndex, 1);
	}
</script>

<fieldset
	class="flex w-full flex-col flex-wrap items-center justify-center gap-4 rounded-md border-2 border-base-300 bg-base-100 p-6 lg:w-1/2"
>
	<legend class="font-bold">Armas</legend>
	<select class="select mb-4" bind:value={selectedArmaIndex}>
		{#each globalFicha.ficha.armas as arma, i}
			<option value={i}>{arma.nome}</option>
		{/each}
	</select>

	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		{#each Object.entries(globalFicha.ficha.armas[selectedArmaIndex] ?? {}) as [prop, value]}
			<label class="floating-label flex min-w-24 {prop === 'descr' ? 'w-full lg:col-span-2' : ''}">
				<span class="text-lg">{getLabel(prop)}</span>
				{#if prop === 'descr'}
					<textarea
						class="input w-full p-2"
						bind:value={globalFicha.ficha.armas[selectedArmaIndex][prop]}></textarea>
				{:else}
					<input
						class="input rounded-md border border-base-300 bg-base-100 px-4 py-2"
						bind:value={globalFicha.ficha.armas[selectedArmaIndex][prop]}
					/>
				{/if}
			</label>
		{/each}
	</div>

	<div class="ml-auto">
		<button class="btn ml-auto btn-circle" onclick={addArma}><Icon src={Plus} size="20" /></button>
		<button onclick={() => removeArma(selectedArmaIndex)} class="btn btn-circle"
			><Icon src={Trash} size="20" /></button
		>
	</div>
</fieldset>
