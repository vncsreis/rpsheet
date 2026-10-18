<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { getLabel } from '#lib/labels.ts';
	import { ChevronDown, ChevronUp, Icon, PencilSquare, Trash } from 'svelte-hero-icons';
	import ModalConfirm from '../ui/modals/modalConfirm.svelte';
	import ModalTalento from '../ui/modals/modalTalento.svelte';
	import { slide } from 'svelte/transition';

	let talentosOpen = $state(globalFicha.ficha.talentos.map((_, i) => i));
	function toggleTalento(index: number) {
		if (!talentosOpen.includes(index)) {
			talentosOpen.push(index);
		} else {
			talentosOpen = talentosOpen.filter((i) => i !== index);
		}
	}

	function removeTalento(talentoIndex: number) {
		globalFicha.ficha.talentos.splice(talentoIndex, 1);
		talentosOpen = talentosOpen
			.filter((i) => i !== talentoIndex)
			.map((i) => (i > talentoIndex ? i - 1 : i));
	}
</script>

<fieldset
	class="l g:w-1/2 flex w-full flex-col flex-wrap justify-center gap-4 rounded-md border-2 border-base-300 bg-base-100 p-6"
>
	<legend class="font-bold">Talentos</legend>
	{#each globalFicha.ficha.talentos as talento, i (i)}
		<div
			class="flex w-full flex-col rounded-md border-2 border-base-300 p-4 {talento.requerAtivacao &&
			!talento.ativo
				? 'bg-base-300'
				: ''}"
		>
			<div class="flex w-full flex-row items-center justify-between gap-4 text-lg">
				<div class="flex flex-row items-center gap-4">
					<button onclick={() => toggleTalento(i)}>
						{#if talentosOpen.includes(i)}
							<Icon src={ChevronUp} size="20" />
						{:else}
							<Icon src={ChevronDown} size="20" />
						{/if}
					</button>
					<h2 class="font-bold">{globalFicha.ficha.talentos[i].nome}</h2>
					{#if talento.requerAtivacao ?? false}
						<input
							type="checkbox"
							class="checkbox checkbox-sm checkbox-success"
							bind:checked={globalFicha.ficha.talentos[i].ativo}
						/>
					{/if}
				</div>
				<div>
					<button
						class="btn btn-circle btn-sm"
						onclick={() =>
							(document.getElementById('talento_modal_' + i) as HTMLDialogElement).showModal()}
					>
						<Icon src={PencilSquare} size="20" />
					</button>
					<button
						class="btn btn-circle btn-sm"
						onclick={() =>
							(
								document.getElementById('confirm_delete_talento_' + i) as HTMLDialogElement
							).showModal()}><Icon src={Trash} size="20" /></button
					>
				</div>
			</div>
			{#if talentosOpen.includes(i)}
				<div transition:slide class="flex flex-col">
					<p class="text-md rounded-md p-2">{globalFicha.ficha.talentos[i].descr}</p>
					<div class="flex flex-col gap-2">
						{#each globalFicha.ficha.talentos[i].modificadores as mod, j}
							<div class="flex flex-row items-center gap-2 font-bold">
								<span
									class="h-6 w-6 rounded-md {mod.valor > 0
										? 'bg-green-800'
										: 'bg-red-800'} px-1 text-center text-sm text-white"
								>
									{mod.valor > 0 ? '+' : '-'}{Math.abs(mod.valor)}
								</span>
								<span>
									{getLabel(mod.tipo)}
								</span>
							</div>
						{/each}
					</div>
				</div>
			{/if}
			<ModalTalento talento={{ ...talento }} talentoIndex={i} />
			<ModalConfirm
				id={'confirm_delete_talento_' + i}
				prompt="Remover talento {talento.nome}?"
				confirm={() => removeTalento(i)}
			/>
		</div>
	{/each}
	<button
		class="btn ml-auto w-32 rounded-md"
		onclick={() => (document.getElementById('talento_modal_novo') as HTMLDialogElement).showModal()}
		>Novo Talento</button
	>
	<ModalTalento />
</fieldset>
