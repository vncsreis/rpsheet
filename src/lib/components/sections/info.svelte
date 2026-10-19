<script lang="ts">
	import { LABELS } from '#lib/labels.svelte.ts';
	import { globalFicha, TAMANHOS } from '#lib/ficha.svelte.ts';
</script>

<fieldset class="flex flex-row flex-wrap rounded-md border-2 border-base-300 bg-base-100 p-6">
	<legend class="font-bold">Informações</legend>
	{#each Object.keys(globalFicha.ficha.info) as k (k)}
		{#if k === 'tamanho'}
			<label class="floating-label m-2 flex w-32 flex-col">
				<span class="text-lg">{LABELS[k].name}</span>
				<select class="select w-32" bind:value={globalFicha.ficha.info.tamanho}>
					{#each TAMANHOS as tamanho}
						<option>{tamanho}</option>
					{/each}
				</select>
			</label>
		{:else}
			<label class="floating-label m-2 flex w-32 flex-col">
				<span class="text-lg">{LABELS[k].name}</span>
				<input
					id={'info_' + k}
					type={LABELS[k].type}
					bind:value={globalFicha.ficha.info[k]}
					class="input"
				/>
			</label>
		{/if}
	{/each}
</fieldset>
