<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { getLabel } from '#lib/labels.svelte.ts';
	import { MODS } from '#lib/modificadores.svelte.ts';
	import { Icon, Plus, Trash } from 'svelte-hero-icons';

	let { item: _item = {}, itemIndex = null } = $props();

	// Cria cópia do item dentro do modal
	// svelte-ignore state_referenced_locally
	let item = $state($state.snapshot(_item));

	let modsArray = $derived((item.modificadores ?? []).map((mod) => mod.tipo));

	function organizeSelect(itemMods: string[], generalMods: string[]) {
		return [...generalMods.filter((mod) => !itemMods.includes(mod)), ...itemMods];
	}

	function addMod() {
		if (Object.hasOwn(item, 'modificadores')) {
			item.modificadores.push({ tipo: null, valor: 0 });
		} else {
			item.modificadores = [{ tipo: null, valor: 0 }];
		}
	}

	function removeMod(modIndex: number) {
		item.modificadores.splice(modIndex, 1);
	}

	// TODO: Validar criação do item antes de salvar
	function addItem() {
		globalFicha.ficha.inventario.push({
			...(item as {
				nome: string;
				descr: string;
				modificadores: {
					tipo: string;
					valor: number;
				}[];
				requerAtivacao: boolean;
				ativo: boolean;
				quantidade: number;
			})
		});
	}

	function updateItem(index: number) {
		if (index !== null) {
			globalFicha.ficha.inventario[index] = {
				...(item as {
					nome: string;
					descr: string;
					modificadores: {
						tipo: string;
						valor: number;
					}[];
					requerAtivacao: boolean;
					ativo: boolean;
					quantidade: number;
				})
			};
		}
	}

	function cancel() {
		item = $state.snapshot(_item);
	}
</script>

<dialog id={'inventario_modal_' + (itemIndex ?? 'novo')} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">✕</button>
		</form>
		<form method="dialog" class="mt-8 flex w-full flex-col gap-4">
			<label class="floating-label">
				<span class="text-lg">Nome</span>
				<input
					id={'item_' + (itemIndex ?? 'novo') + '_nome'}
					type="text"
					bind:value={item.nome}
					class="input w-full"
				/>
			</label>
			<label class="floating-label">
				<span class="text-lg">Descrição</span>
				<textarea
					id={'item_' + (itemIndex ?? 'novo') + '_descr'}
					class="textarea h-32 w-full p-2"
					bind:value={item.descr}></textarea>
			</label>
			<div class="flex flex-row items-center gap-4 pl-8">
				<span class="text-sm font-bold">Requer Ativação</span><input
					type="checkbox"
					class="checkbox checkbox-sm"
					bind:checked={item.requerAtivacao}
				/>
			</div>
			<fieldset class="fieldset w-full gap-4 rounded-md border border-base-300 bg-base-200 p-4">
				<legend class="text-md fieldset-legend">Modificadores</legend>
				{#each item.modificadores as _, j}
					<div class="flex flex-row gap-2">
						<select class="select" bind:value={item.modificadores[j].tipo}>
							{#each organizeSelect(modsArray, MODS) as mod}
								<option value={mod} disabled={modsArray.includes(mod)}>{getLabel(mod)}</option>
							{/each}
						</select>
						<input
							class="input max-w-1/7 lg:max-w-1/5"
							bind:value={item.modificadores[j].valor}
							type="number"
						/>
						<button class="btn btn-circle" onclick={() => removeMod(j)}
							><Icon src={Trash} size="20" /></button
						>
					</div>
				{/each}
				<button
					class="btn ml-auto btn-circle"
					disabled={MODS.length === modsArray.length}
					onclick={(e) => {
						e.preventDefault();
						addMod();
					}}><Icon src={Plus} size="20" /></button
				>
			</fieldset>
			<div class="ml-auto flex flex-row items-center gap-4">
				<button
					class="btn w-24 cursor-pointer rounded-md p-2 btn-primary"
					onclick={() => {
						if (itemIndex !== null) {
							updateItem(itemIndex);
						} else {
							addItem();
						}
					}}>Salvar</button
				>
				<button class="btn w-24 cursor-pointer rounded-md p-2" onclick={cancel}>Cancelar</button>
			</div>
		</form>
	</div>
</dialog>
