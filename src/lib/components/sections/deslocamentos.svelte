<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { Icon, Plus, Trash } from 'svelte-hero-icons';

	function addDeslocamento() {
		globalFicha.ficha.deslocamento.push({ nome: '', dist: 0 });
	}

	function removeDeslocamento(index: number) {
		globalFicha.ficha.deslocamento.splice(index, 1);
	}
</script>

<fieldset
	class="flex w-full flex-row flex-wrap justify-center rounded-md border-2 border-base-300 bg-base-100 p-6 lg:w-1/2"
>
	<legend class="font-bold">Deslocamento</legend>
	<div class="flex flex-col items-center gap-4">
		{#each globalFicha.ficha.deslocamento as _, i}
			<div class="flex flex-row gap-4">
				<div class="join flex flex-row">
					<label class="floating-label">
						<span class="">Tipo</span>
						<input
							type="text"
							bind:value={globalFicha.ficha.deslocamento[i].nome}
							class="input join-item"
						/>
					</label>
					<label class="floating-label">
						<span>Distância</span>
						<input
							type="text"
							bind:value={globalFicha.ficha.deslocamento[i].dist}
							class="input join-item"
						/>
					</label>
				</div>
				<button class="btn ml-auto btn-circle" onclick={() => removeDeslocamento(i)}
					><Icon src={Trash} size="20" /></button
				>
			</div>
		{/each}
		<button class="btn ml-auto btn-circle" onclick={addDeslocamento}
			><Icon src={Plus} size="20" /></button
		>
	</div>
</fieldset>
