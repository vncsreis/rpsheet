<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { getLabel } from '#lib/labels.svelte.ts';
	import { ChevronDown, ChevronUp, Icon, PencilSquare, Trash } from 'svelte-hero-icons';
	import ModalMagia from '../ui/modals/modalMagia.svelte';
	import ModalConfirm from '../ui/modals/modalConfirm.svelte';
	import { slide } from 'svelte/transition';

	globalFicha.ficha.magias.sort((a, b) => (a.nivel > b.nivel ? 1 : -1));

	// TODO: unir pmsPreparado no handleUsoMagia
	let pmsPreparados = $derived.by(() => {
		if (!globalFicha.ficha.prepararMagias) {
			return 0;
		}

		return globalFicha.ficha.magias.reduce((acc, magia) => {
			const pm = magia.nivel * magia.usos;

			return acc + pm;
		}, 0);
	});

	let magiasOpen = $state(globalFicha.ficha.magias.map((_, i) => i));
	function toggleMagia(index: number) {
		if (!magiasOpen.includes(index)) {
			magiasOpen.push(index);
		} else {
			magiasOpen = magiasOpen.filter((i) => i !== index);
		}
	}

	function handleUsoMagia(magiaIndex: number, usos: number) {
		const pmGasto = usos * globalFicha.ficha.magias[magiaIndex].nivel;

		const totalPmGasto = globalFicha.ficha.magias.reduce((acc, magia, i) => {
			if (i === magiaIndex) {
				return acc;
			}

			const pm = magia.nivel * magia.usos;

			return acc + pm;
		}, 0);

		if (totalPmGasto + pmGasto <= globalFicha.ficha.pm.total) {
			globalFicha.ficha.magias[magiaIndex].usos = usos;
		}
	}

	function removeMagia(magiaIndex: number) {
		globalFicha.ficha.magias.splice(magiaIndex, 1);
		magiasOpen = magiasOpen
			.filter((i) => i !== magiaIndex)
			.map((i) => (i > magiaIndex ? i - 1 : i));
	}

	$effect(() => {
		if (!globalFicha.ficha.prepararMagias) {
			for (const magia of globalFicha.ficha.magias) {
				magia.usos = 0;
			}
		}
	});
</script>

<fieldset
	class="flex w-full flex-col flex-wrap justify-center gap-4 rounded-md border-2 border-base-300 bg-base-100 p-6"
>
	<legend class="font-bold">Magias</legend>
	<fieldset class="flex flex-row rounded-md border border-base-300 p-4">
		<legend class="font-bold">PM</legend>
		<div class="flex flex-col gap-4">
			<div class="flex flex-row">
				{#each Object.keys(globalFicha.ficha.pm) as k (k)}
					<label class="floating-label m-2 flex flex-col">
						<span class="text-lg">{getLabel(k)}</span>
						<input type="number" class="input" bind:value={globalFicha.ficha.pm[k]} />
					</label>
				{/each}
				{#if globalFicha.ficha.prepararMagias}
					<label class="floating-label m-2 flex flex-col">
						<span class="text-lg">Preparados</span>
						<input type="number" class="input" value={pmsPreparados} readonly />
					</label>
				{/if}
			</div>
			<div class="flex flex-row items-center gap-2">
				<input type="checkbox" class="checkbox" bind:checked={globalFicha.ficha.prepararMagias} />
				<span>Magias preparadas</span>
			</div>
		</div>
	</fieldset>
	{#each globalFicha.ficha.magias as magia, i (i)}
		<div class="flex w-full flex-col gap-2 rounded-md border-2 border-base-300 p-4">
			<div class="flex w-full flex-row items-center justify-between gap-4 text-lg">
				<div class="flex max-w-1/3 flex-row items-center gap-4">
					<button onclick={() => toggleMagia(i)}>
						{#if magiasOpen.includes(i)}
							<Icon src={ChevronUp} size="20" />
						{:else}
							<Icon src={ChevronDown} size="20" />
						{/if}
					</button>
					<h2 class="font-bold">{globalFicha.ficha.magias[i].nome}</h2>
					{#if magia.requerAtivacao ?? false}
						<input
							type="checkbox"
							class="checkbox checkbox-sm checkbox-success"
							bind:checked={globalFicha.ficha.magias[i].ativo}
						/>
					{/if}
				</div>
				<div class="flex flex-row flex-nowrap gap-2">
					<button
						class="btn btn-circle btn-sm"
						onclick={() =>
							(document.getElementById('magia_modal_' + i) as HTMLDialogElement).showModal()}
					>
						<Icon src={PencilSquare} size="20" />
					</button>
					<button
						class="btn btn-circle btn-sm"
						onclick={() =>
							(
								document.getElementById('confirm_delete_magia_' + i) as HTMLDialogElement
							).showModal()}><Icon src={Trash} size="20" /></button
					>
				</div>
			</div>
			{#if magiasOpen.includes(i)}
				<div transition:slide class="flex flex-col">
					<div
						class="flex w-full flex-col rounded-md border border-base-300 bg-base-200 p-4 lg:w-1/6"
					>
						{#each ['nivel', 'tipo', 'alcance', 'duracao', 'testeRes'] as info}
							{#if magia[info]}
								<div class="flex flex-row items-center justify-between">
									<span class="font-bold">{getLabel(info)}:</span>
									<span>{globalFicha.ficha.magias[i][info]}</span>
								</div>
							{/if}
						{/each}
					</div>
					<div class="flex flex-row items-center"></div>
					<p class="text-md rounded-md p-2">{globalFicha.ficha.magias[i].descr}</p>
					{#if globalFicha.ficha.prepararMagias}
						<label class="floating-label m-2 flex flex-col">
							<span class="text-lg">Usos</span>
							<input
								type="number"
								class="input"
								bind:value={() => globalFicha.ficha.magias[i].usos, (v) => handleUsoMagia(i, v)}
							/>
						</label>
					{/if}
					<div class="flex flex-col gap-2">
						{#each globalFicha.ficha.magias[i].modificadores as mod, j}
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
			<ModalMagia magia={{ ...magia }} magiaIndex={i} />
			<ModalConfirm
				id={'confirm_delete_magia_' + i}
				prompt="Remover magia {magia.nome}?"
				confirm={() => removeMagia(i)}
			/>
		</div>
	{/each}
	<button
		class="btn ml-auto w-32 rounded-md"
		onclick={() => (document.getElementById('magia_modal_novo') as HTMLDialogElement).showModal()}
		>Nova Magia</button
	>
	<ModalMagia />
</fieldset>
