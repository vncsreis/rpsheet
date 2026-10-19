<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { LABELS } from '#lib/labels.svelte.ts';
	import { MODS } from '#lib/modificadores.svelte.ts';
	import { Icon, Plus, Trash } from 'svelte-hero-icons';

	let { status: _status = {}, statusIndex = null } = $props();

	// Cria cópia do status dentro do modal
	// svelte-ignore state_referenced_locally
	let status = $state($state.snapshot(_status));

	let modsArray = $derived((status.modificadores ?? []).map((mod) => mod.tipo));

	function organizeSelect(statusMods: string[], generalMods: string[]) {
		return [...generalMods.filter((mod) => !statusMods.includes(mod)), ...statusMods];
	}

	function addMod() {
		if (Object.hasOwn(status, 'modificadores')) {
			status.modificadores.push({ tipo: null, valor: 0 });
		} else {
			status.modificadores = [{ tipo: null, valor: 0 }];
		}
	}

	function removeMod(modIndex: number) {
		status.modificadores.splice(modIndex, 1);
	}

	function addStatus() {
		globalFicha.ficha.status.push({
			...(status as {
				nome: string;
				descr: string;
				modificadores: {
					tipo: string;
					valor: number;
				}[];
				requerAtivacao?: boolean;
				ativo?: boolean;
			})
		});
	}

	function updateStatus(index: number) {
		if (index !== null) {
			globalFicha.ficha.status[index] = {
				...(status as {
					nome: string;
					descr: string;
					modificadores: {
						tipo: string;
						valor: number;
					}[];
					requerAtivacao?: boolean;
					ativo?: boolean;
				})
			};
		}
	}
</script>

<dialog id={'status_modal_' + (statusIndex ?? 'novo')} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">✕</button>
		</form>
		<form method="dialog" class="mt-8 flex w-full flex-col gap-4">
			<label class="floating-label">
				<span class="text-lg">Nome</span>
				<input
					id={'status_' + (statusIndex ?? 'novo') + '_nome'}
					type="text"
					bind:value={status.nome}
					class="input w-full border-2"
				/>
			</label>
			<label class="floating-label">
				<span class="text-lg">Descrição</span>
				<textarea
					id={'status_' + (statusIndex ?? 'novo') + '_descr'}
					class="textarea h-32 w-full p-2"
					bind:value={status.descr}></textarea>
			</label>
			<div class="flex flex-row items-center gap-4 pl-8">
				<span class="text-sm font-bold">Requer Ativação</span><input
					type="checkbox"
					class="checkbox checkbox-sm"
					bind:checked={status.requerAtivacao}
				/>
			</div>
			<fieldset class="fieldset w-full gap-4 rounded-md border border-base-300 bg-base-200 p-4">
				<legend class="text-md fieldset-legend">Modificadores</legend>
				{#each status.modificadores as _, j}
					<div class="flex flex-row gap-2">
						<select class="select" bind:value={status.modificadores[j].tipo}>
							{#each organizeSelect(modsArray, MODS) as mod}
								<option value={mod} disabled={modsArray.includes(mod)}>{LABELS[mod].name}</option>
							{/each}
						</select>
						<input
							class="input max-w-1/7 lg:max-w-1/5"
							bind:value={status.modificadores[j].valor}
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
						if (statusIndex !== null) {
							updateStatus(statusIndex);
						} else {
							addStatus();
						}
					}}>Salvar</button
				>
				<button class="btn w-24 cursor-pointer rounded-md p-2">Cancelar</button>
			</div>
		</form>
	</div>
</dialog>
