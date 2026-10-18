<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { LABELS } from '#lib/labels.ts';
	import { MODS, type Modificador } from '#lib/modificadores.ts';
	import { Icon, Plus, Trash } from 'svelte-hero-icons';

	let { talento: _talento = {}, talentoIndex = null } = $props();

	// Cria cópia do talento dentro do modal
	// svelte-ignore state_referenced_locally
	let talento = $state($state.snapshot(_talento));

	let modsArray = $derived((talento.modificadores ?? []).map((mod) => mod.tipo));

	function organizeSelect(talentoMods: string[], generalMods: string[]) {
		return [...generalMods.filter((mod) => !talentoMods.includes(mod)), ...talentoMods];
	}

	function addMod() {
		if (Object.hasOwn(talento, 'modificadores')) {
			talento.modificadores.push({ tipo: null, valor: 0 });
		} else {
			talento.modificadores = [{ tipo: null, valor: 0 }];
		}
	}

	function removeMod(modIndex: number) {
		talento.modificadores.splice(modIndex, 1);
	}

	function addTalento() {
		globalFicha.ficha.talentos.push({
			...(talento as {
				nome: string;
				descr: string;
				modificadores: {
					tipo: Modificador;
					valor: number;
				}[];
				requerAtivacao?: boolean;
				ativo?: boolean;
			})
		});
	}

	function updateTalento(index: number) {
		if (index !== null) {
			globalFicha.ficha.talentos[index] = {
				...(talento as {
					nome: string;
					descr: string;
					modificadores: {
						tipo: Modificador;
						valor: number;
					}[];
					requerAtivacao?: boolean;
					ativo?: boolean;
				})
			};
		}
	}

	// function removeTalento(talentoIndex: number) {
	// 	globalFicha.ficha.talentos.splice(talentoIndex, 1);
	// }
</script>

<dialog id={'talento_modal_' + (talentoIndex ?? 'novo')} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">✕</button>
		</form>
		<form method="dialog" class="mt-8 flex w-full flex-col gap-4">
			<label class="floating-label">
				<span class="text-lg">Nome</span>
				<input
					id={'talento_' + (talentoIndex ?? 'novo') + '_nome'}
					type="text"
					bind:value={talento.nome}
					class="input w-full border-2"
				/>
			</label>
			<label class="floating-label">
				<span class="text-lg">Descrição</span>
				<textarea
					id={'talento_' + (talentoIndex ?? 'novo') + '_descr'}
					class="textarea h-32 w-full p-2"
					bind:value={talento.descr}></textarea>
			</label>
			<div class="flex flex-row items-center gap-4 pl-8">
				<span class="text-sm font-bold">Requer Ativação</span><input
					type="checkbox"
					class="checkbox checkbox-sm"
					bind:checked={talento.requerAtivacao}
				/>
			</div>
			<fieldset class="fieldset w-full gap-4 rounded-md border border-base-300 bg-base-200 p-4">
				<legend class="text-md fieldset-legend">Modificadores</legend>
				{#each talento.modificadores as _, j}
					<div class="flex flex-row gap-2">
						<select class="select" bind:value={talento.modificadores[j].tipo}>
							{#each organizeSelect(modsArray, MODS) as mod}
								<option value={mod} disabled={modsArray.includes(mod)}>{LABELS[mod].name}</option>
							{/each}
						</select>
						<input
							class="input max-w-1/7 lg:max-w-1/5"
							bind:value={talento.modificadores[j].valor}
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
						if (talentoIndex !== null) {
							updateTalento(talentoIndex);
						} else {
							addTalento();
						}
					}}>Salvar</button
				>
				<button class="btn w-24 cursor-pointer rounded-md p-2">Cancelar</button>
			</div>
		</form>
	</div>
</dialog>
