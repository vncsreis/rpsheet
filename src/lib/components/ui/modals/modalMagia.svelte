<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { getLabel } from '#lib/labels.svelte.ts';
	import { MODS } from '#lib/modificadores.svelte.ts';
	import { Icon, Trash, Plus, InformationCircle } from 'svelte-hero-icons';

	let { magia: _magia = {}, magiaIndex = null } = $props();

	// Cria cópia da magia dentro do modal
	// svelte-ignore state_referenced_locally
	let magia = $state($state.snapshot(_magia));

	let modsArray = $derived((magia.modificadores ?? []).map((mod) => mod.tipo));
	function organizeSelect(magiaMods: string[], generalMods: string[]) {
		return [...generalMods.filter((mod) => !magiaMods.includes(mod)), ...magiaMods].filter(
			(val) => val !== ''
		);
	}

	function addMod() {
		if (Object.hasOwn(magia, 'modificadores')) {
			magia.modificadores.push({ tipo: null, valor: 0 });
		} else {
			magia.modificadores = [{ tipo: null, valor: 0 }];
		}
	}

	function cancel() {
		magia = $state.snapshot(_magia);
	}

	function removeMod(modIndex: number) {
		magia.modificadores.splice(modIndex, 1);
	}

	// TODO: Validar criação da magia antes de salvar
	function addMagia() {
		globalFicha.ficha.magias.push({
			...(magia as {
				nome: string;
				nivel: number;
				tipo: string;
				duracao?: string;
				alcance?: string;
				area?: string;
				testeRes?: string;
				descr: string;
				requerAtivacao: boolean;
				ativo?: boolean;
				modificadores: {
					tipo: string;
					valor: number;
				}[];
				usos?: number;
			})
		});
	}

	function updateMagia(index: number) {
		if (index !== null) {
			globalFicha.ficha.magias[index] = {
				...(magia as {
					nome: string;
					nivel: number;
					tipo: string;
					duracao?: string;
					alcance?: string;
					area?: string;
					testeRes?: string;
					descr: string;
					requerAtivacao: boolean;
					ativo?: boolean;
					modificadores: {
						tipo: string;
						valor: number;
					}[];
					usos?: number;
				})
			};
		}
	}
</script>

<dialog id={'magia_modal_' + (magiaIndex ?? 'novo')} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">✕</button>
		</form>
		<form method="dialog" class="mt-8 flex w-full flex-col gap-4">
			<label class="floating-label">
				<span class="text-lg">Nome</span>
				<input type="text" bind:value={magia.nome} class="input w-full" /></label
			>
			<div class="flex flex-row gap-2">
				<label class="floating-label max-w-1/5">
					<span class="text-lg">Nível</span>
					<input type="number" bind:value={magia.nivel} class="input w-full" /></label
				>
				<label class="floating-label">
					<span class="text-lg">Alcance</span>
					<input type="text" bind:value={magia.alcance} class="input w-full" /></label
				>
				<label class="floating-label">
					<span class="text-lg">Tipo</span>
					<input type="text" bind:value={magia.tipo} class="input w-full" /></label
				>
			</div>
			<div class="flex w-full flex-row gap-2">
				<label class="floating-label w-full">
					<span class="text-lg">Duração</span>
					<input type="text" bind:value={magia.duracao} class="input" /></label
				>
				<label class="floating-label w-full">
					<span class="text-lg">Teste de Resistência</span>
					<input type="text" bind:value={magia.testeRes} class="input" />
				</label>
			</div>
			<label class="floating-label">
				<span class="text-lg">Descricao</span>
				<textarea bind:value={magia.descr} class="textarea w-full"></textarea>
			</label>
			<div class=" flex flex-row items-center gap-4 pl-8">
				<div
					class="tooltip tooltip-right"
					data-tip="Para magias que mantém seus efeitos ativos por um tempo."
				>
					<Icon src={InformationCircle} size="18" />
				</div>
				<span class="text-sm font-bold">Requer Ativação</span><input
					type="checkbox"
					class="checkbox checkbox-sm"
					bind:checked={magia.requerAtivacao}
				/>
			</div>
			<fieldset class="fieldset w-full gap-4 rounded-md border border-base-300 bg-base-200 p-4">
				<legend class="text-md fieldset-legend">Modificadores</legend>
				{#each magia.modificadores as _, j}
					<div class="flex flex-row gap-2">
						<select class="select" bind:value={magia.modificadores[j].tipo}>
							{#each organizeSelect(modsArray, MODS) as mod}
								<option value={mod} disabled={modsArray.includes(mod)}>{getLabel(mod)}</option>
							{/each}
						</select>
						<input
							class="input max-w-1/7 lg:max-w-1/5"
							bind:value={magia.modificadores[j].valor}
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
						if (magiaIndex !== null) {
							updateMagia(magiaIndex);
						} else {
							addMagia();
						}
					}}>Salvar</button
				>
				<button class="btn w-24 cursor-pointer rounded-md p-2" onclick={cancel}>Cancelar</button>
			</div>
		</form>
	</div>
</dialog>
