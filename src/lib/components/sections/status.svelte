<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { getLabel } from '#lib/labels.ts';
	import { ChevronDown, ChevronUp, Icon, PencilSquare, Trash } from 'svelte-hero-icons';
	import ModalConfirm from '../ui/modals/modalConfirm.svelte';
	import ModalTalento from '../ui/modals/modalTalento.svelte';
	import { slide } from 'svelte/transition';
	import ModalStatus from '../ui/modals/modalStatus.svelte';

	let statusOpen = $state(globalFicha.ficha.status.map((_, i) => i));
	function toggleStatus(index: number) {
		if (!statusOpen.includes(index)) {
			statusOpen.push(index);
		} else {
			statusOpen = statusOpen.filter((i) => i !== index);
		}
	}

	function removeStatus(statusIndex: number) {
		globalFicha.ficha.status.splice(statusIndex, 1);
		statusOpen = statusOpen
			.filter((i) => i !== statusIndex)
			.map((i) => (i > statusIndex ? i - 1 : i));
	}
</script>

<fieldset
	class="l g:w-1/2 flex w-full flex-col flex-wrap justify-center gap-4 rounded-md border-2 border-base-300 bg-base-100 p-6"
>
	<legend class="font-bold">Status</legend>
	{#each globalFicha.ficha.status as status, i (i)}
		<div
			class="flex w-full flex-col rounded-md border-2 border-base-300 p-4 {status.requerAtivacao &&
			!status.ativo
				? 'bg-base-300'
				: ''}"
		>
			<div class="flex w-full flex-row items-center justify-between gap-4 text-lg">
				<div class="flex flex-row items-center gap-4">
					<button onclick={() => toggleStatus(i)}>
						{#if statusOpen.includes(i)}
							<Icon src={ChevronUp} size="20" />
						{:else}
							<Icon src={ChevronDown} size="20" />
						{/if}
					</button>
					<h2 class="font-bold">{globalFicha.ficha.status[i].nome}</h2>
					{#if status.requerAtivacao ?? false}
						<input
							type="checkbox"
							class="checkbox checkbox-sm checkbox-success"
							bind:checked={globalFicha.ficha.status[i].ativo}
						/>
					{/if}
				</div>
				<div>
					<button
						class="btn btn-circle btn-sm"
						onclick={() =>
							(document.getElementById('status_modal_' + i) as HTMLDialogElement).showModal()}
					>
						<Icon src={PencilSquare} size="20" />
					</button>
					<button
						class="btn btn-circle btn-sm"
						onclick={() =>
							(
								document.getElementById('confirm_delete_status_' + i) as HTMLDialogElement
							).showModal()}><Icon src={Trash} size="20" /></button
					>
				</div>
			</div>
			{#if statusOpen.includes(i)}
				<div transition:slide class="flex flex-col">
					<p class="text-md rounded-md p-2">{globalFicha.ficha.status[i].descr}</p>
					<div class="flex flex-col gap-2">
						{#each globalFicha.ficha.status[i].modificadores as mod, j}
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
			<ModalStatus status={{ ...status }} statusIndex={i} />
			<ModalConfirm
				id={'confirm_delete_talento_' + i}
				prompt="Remover talento {status.nome}?"
				confirm={() => removeStatus(i)}
			/>
		</div>
	{/each}
	<button
		class="btn ml-auto w-32 rounded-md"
		onclick={() => (document.getElementById('status_modal_novo') as HTMLDialogElement).showModal()}
		>Novo Status</button
	>
	<ModalStatus />
</fieldset>
