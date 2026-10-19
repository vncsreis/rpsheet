<script lang="ts">
	import { LABELS } from '#lib/labels.svelte.ts';
	import { globalFicha } from '#lib/ficha.svelte.ts';
</script>

<!-- TODO: tamanho como select ?? -->
<fieldset class="flex flex-row flex-wrap rounded-md border-2 border-base-300 bg-base-100 p-6">
	<legend class="font-bold">Informações</legend>
	{#each Object.keys(globalFicha.ficha.info) as k (k)}
		<label class="floating-label m-2 flex flex-col">
			<span class="text-lg">{LABELS[k].name}</span>
			<input
				id={'info_' + k}
				type={LABELS[k].type}
				bind:value={globalFicha.ficha.info[k]}
				class="input"
			/>
		</label>
	{/each}
</fieldset>
