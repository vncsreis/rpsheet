<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import ModalInventario from '../ui/modals/modalInventario.svelte';
	import { Icon, PencilSquare, Trash } from 'svelte-hero-icons';
	import ModalConfirm from '../ui/modals/modalConfirm.svelte';

	function removeItem(itemIndex: number) {
		globalFicha.ficha.inventario.splice(itemIndex, 1);
	}
</script>

<!-- TODO: tamanho como select ?? -->
<fieldset class="flex flex-col flex-wrap rounded-md border-2 border-base-300 bg-base-100 p-6">
	<legend class="font-bold">Inventário</legend>
	<div class="flex flex-col gap-4">
		{#each globalFicha.ficha.inventario as item, i}
			<div class="flex flex-row items-center gap-4">
				{#if item.requerAtivacao ?? false}
					<input
						type="checkbox"
						class="checkbox w-5 checkbox-sm checkbox-success"
						bind:checked={globalFicha.ficha.inventario[i].ativo}
					/>
				{:else}
					<div class="w-5"></div>
				{/if}
				<div class="tooltip join" data-tip={item.descr}>
					<label class="floating-label flex flex-col">
						<span class="text-lg">Nome</span>
						<input type="text join-item" value={item.nome} class="input" readonly />
					</label>
					<label class="floating-label flex flex-col">
						<span class="text-lg">Quantidade</span>
						<input
							type="number"
							bind:value={globalFicha.ficha.inventario[i].quantidade}
							class="input join-item"
						/>
					</label>
				</div>
				<div>
					<button
						class="btn btn-circle btn-sm"
						onclick={() =>
							(document.getElementById('inventario_modal_' + i) as HTMLDialogElement).showModal()}
					>
						<Icon src={PencilSquare} size="20" />
					</button>
					<button
						class="btn btn-circle btn-sm"
						onclick={() =>
							(
								document.getElementById('confirm_delete_inventario_' + i) as HTMLDialogElement
							).showModal()}><Icon src={Trash} size="20" /></button
					>
				</div>
			</div>
			<ModalInventario {item} itemIndex={i} />
			<ModalConfirm
				id={'confirm_delete_inventario_' + i}
				prompt="Remover item {item.nome}?"
				confirm={() => removeItem(i)}
			/>
		{/each}
	</div>
	<button
		class="btn ml-auto w-32 rounded-md"
		onclick={() =>
			(document.getElementById('inventario_modal_novo') as HTMLDialogElement).showModal()}
		>Novo Item</button
	>
	<ModalInventario />
</fieldset>
