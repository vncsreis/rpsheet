<script lang="ts">
	import { LABELS } from '#lib/labels.svelte.ts';
	import { globalFicha } from '#lib/ficha.svelte.ts';

	if (!globalFicha.ficha.anotacoes) {
		globalFicha.ficha.anotacoes = '';
	}
</script>

<!-- adicionar markdown algum dia! -->
<fieldset class=" w-full rounded-md border-2 border-base-300 bg-base-100 p-6">
	<legend class="font-bold">Anotações</legend>
	<textarea class="textarea mb-12 h-96 w-full p-4" bind:value={globalFicha.ficha.anotacoes}
	></textarea>
</fieldset>
