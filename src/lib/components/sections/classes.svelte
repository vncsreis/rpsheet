<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { Icon, Plus, Trash } from 'svelte-hero-icons';

	function addClasse() {
		globalFicha.ficha.classes.push({ nome: '', nivel: null });
	}

	function removeClasse(classeIndex: number) {
		globalFicha.ficha.classes.splice(classeIndex, 1);
	}
</script>

<fieldset
	class="flex w-full flex-row flex-wrap justify-center rounded-md border-2 border-base-300 bg-base-100 p-6"
>
	<legend class="font-bold">Classes</legend>
	<div class="flex flex-col items-center gap-4">
		<div>
			Nível: <span class="border-base-400 rounded-md border px-4 py-2">{globalFicha.nivel}</span>
		</div>
		<div class="flex flex-col gap-4">
			{#each globalFicha.ficha.classes as _, i}
				<div class="flex flex-row gap-4">
					<div class="join flex flex-row">
						<input
							type="text"
							bind:value={globalFicha.ficha.classes[i].nome}
							class="input join-item"
						/>
						<input
							type="number"
							bind:value={globalFicha.ficha.classes[i].nivel}
							class="input join-item"
						/>
					</div>
					<button onclick={() => removeClasse(i)} class="btn btn-circle"
						><Icon src={Trash} size="20" /></button
					>
				</div>
			{/each}
		</div>
		<button class="btn ml-auto btn-circle" onclick={addClasse}><Icon src={Plus} size="20" /></button
		>
	</div>
</fieldset>
