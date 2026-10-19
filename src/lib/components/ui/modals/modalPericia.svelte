<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { HABILIDADES, type Habilidade } from '#lib/habilidades.ts';
	import { getLabel } from '#lib/labels.svelte.ts';

	let { pericia: _pericia = {}, periciaIndex = null } = $props();

	// Cria cópia do pericia dentro do modal
	// svelte-ignore state_referenced_locally
	let pericia = $state($state.snapshot(_pericia));

	// TODO: Validar criação do pericia antes de salvar
	function addPericia() {
		pericia.id = generateId(pericia.nome);

		globalFicha.ficha.pericias.push({
			...(pericia as {
				nome: string;
				treinamento: boolean;
				hab: Habilidade;
				id: string;
				treinada: boolean;
				penalidade: boolean;
			})
		});

		globalFicha.ficha.pericias.sort((a, b) => (a.nome > b.nome ? 1 : -1));
	}

	function updatePericia(index: number) {
		if (index !== null) {
			pericia.id = generateId(pericia.nome);

			globalFicha.ficha.pericias[index] = {
				...(pericia as {
					nome: string;
					treinamento: boolean;
					hab: Habilidade;
					id: string;
					treinada: boolean;
					penalidade: boolean;
				})
			};

			globalFicha.ficha.pericias.sort((a, b) => (a.nome > b.nome ? 1 : -1));
		}
	}

	function cancel() {
		pericia = $state.snapshot(pericia);
	}

	function generateId(name: string) {
		return name
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '') // Remove acentos
			.replace(/[^a-zA-Z0-9 ]/g, '') // Remove caracteres especiais (mantém espaços)
			.replace(' ', '_')
			.toLowerCase();
	}
</script>

<dialog id={'pericias_modal_' + (periciaIndex ?? 'novo')} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">✕</button>
		</form>
		<form method="dialog" class="mt-8 flex w-full flex-col gap-4">
			<label class="floating-label">
				<span class="text-lg">Nome</span>
				<input type="text" bind:value={pericia.nome} class="input w-full" />
			</label>
			<label class="floating-label">
				<span class="text-lg">Habilidade</span>
				<select class="select w-full" bind:value={pericia.hab}>
					{#each HABILIDADES as hab}
						<option value={hab}>{getLabel(hab)}</option>
					{/each}
				</select>
			</label>

			<div class="pericias-center flex max-w-3/4 flex-row justify-between gap-4 pl-8">
				<span class="text-sm font-bold">Penalidade de Armadura</span><input
					type="checkbox"
					class="checkbox checkbox-sm"
					bind:checked={pericia.penalidade}
				/>
			</div>
			<div class="pericias-center flex max-w-3/4 flex-row justify-between gap-4 pl-8">
				<span class="text-sm font-bold">Apenas Treinada</span><input
					type="checkbox"
					class="checkbox checkbox-sm"
					bind:checked={pericia.treinamento}
				/>
			</div>
			<div class="pericias-center flex max-w-3/4 flex-row justify-between gap-4 pl-8">
				<span class="text-sm font-bold">Treinada</span><input
					type="checkbox"
					class="checkbox checkbox-sm"
					bind:checked={pericia.treinada}
				/>
			</div>
			<div class="pericias-center ml-auto flex flex-row gap-4">
				<button
					class="btn w-24 cursor-pointer rounded-md p-2 btn-primary"
					onclick={() => {
						if (periciaIndex !== null) {
							updatePericia(periciaIndex);
						} else {
							addPericia();
						}
					}}>Salvar</button
				>
				<button class="btn w-24 cursor-pointer rounded-md p-2" onclick={cancel}>Cancelar</button>
			</div>
		</form>
	</div>
</dialog>
