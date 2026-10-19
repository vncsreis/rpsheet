<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { Icon, Pencil, Trash } from 'svelte-hero-icons';
	import ModalConfirm from '../ui/modals/modalConfirm.svelte';
	import ModalPericia from '../ui/modals/modalPericia.svelte';
	import { toTooltip } from '#lib/modificadores.svelte.ts';

	function removePericia(periciaIndex: number) {
		globalFicha.ficha.pericias.splice(periciaIndex, 1);
	}

	function handleOutros(pericia: { id: string; penalidade: boolean; nome: string }) {
		let mods = globalFicha.getMods(pericia.id);
		let tooltipMessage = toTooltip(mods.mods);

		if (pericia.penalidade) {
			const { penalidade: penalidadeArmadura } = globalFicha.ficha.armadura;
			const { penalidade: penalidadeEscudo } = globalFicha.ficha.escudo;

			if (penalidadeArmadura > 0) {
				mods.total -= penalidadeArmadura;
				tooltipMessage = tooltipMessage + ` Armadura (-${penalidadeArmadura});`;
			}

			if (penalidadeEscudo > 0) {
				mods.total -= penalidadeEscudo;
				tooltipMessage = tooltipMessage + ` Escudo (-${penalidadeEscudo});`;
			}
		}

		return { total: mods.total, tooltipMessage };
	}
</script>

{#snippet periciaNumberField(value: number, hab: string = null)}
	<td>
		<div data-tip={hab ? hab.toUpperCase() : null} class={hab ? 'tooltip' : ''}>
			<input class=" input max-w-18 input-sm" type="number" {value} readonly />
		</div>
	</td>
{/snippet}

<!-- TODO: interagir com penalidade de armadura -->
<!-- TODO: lidar com as que precisam de treinamento -->
<legend class="mb-4 font-bold">Perícias</legend>
<div class="w-full max-w-full overflow-x-auto">
	<table
		class="table table-pin-rows table-pin-cols mx-8 mb-4 max-w-full rounded-md border border-base-content/5 table-zebra bg-base-100 table-xs"
	>
		<thead>
			<tr>
				<th class="text-xs">Treinada</th>
				<th class="text-xs">Nome</th>
				<th class="text-xs">Total</th>
				<th class="text-xs">Grad.</th>
				<th class="text-xs">Mod. Hab.</th>
				<th class="text-xs">Outros</th>
				<th class="text-xs"></th>
			</tr>
		</thead>
		<tbody>
			{#each globalFicha.ficha.pericias as pericia, i}
				{const grad = $derived(
					pericia.treinada ? globalFicha.nivel + 3 : Math.floor(globalFicha.nivel / 2)
				)}
				<tr>
					<td class="max-w-18"><input type="checkbox" bind:checked={pericia.treinada} /></td>
					<td
						><input
							class="input min-w-32 input-sm"
							type="text"
							bind:value={globalFicha.ficha.pericias[i].nome}
						/></td
					>
					{@render periciaNumberField(grad + globalFicha.getModHab(pericia.hab))}
					{@render periciaNumberField(grad)}
					{@render periciaNumberField(globalFicha.getModHab(pericia.hab), pericia.hab)}
					<td>
						{const { total, tooltipMessage } = handleOutros(pericia)}
						<div data-tip={tooltipMessage} class="tooltip">
							<input class=" input max-w-18 input-sm" type="number" value={total} readonly />
						</div>
					</td>
					<td>
						<button
							class="btn btn-circle btn-sm"
							onclick={() =>
								(document.getElementById('pericias_modal_' + i) as HTMLDialogElement).showModal()}
							><Icon src={Pencil} size="20" /></button
						>
						<button
							class="btn btn-circle btn-sm"
							onclick={() =>
								(
									document.getElementById('confirm_delete_pericia_' + i) as HTMLDialogElement
								).showModal()}><Icon src={Trash} size="20" /></button
						>
					</td>
					<ModalConfirm
						id={'confirm_delete_pericia_' + i}
						prompt="Remover perícia {pericia.nome}?"
						confirm={() => removePericia(i)}
					/>
					<ModalPericia {pericia} periciaIndex={i} />
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<ModalPericia />
<div class="flex w-full flex-row justify-end pt-4 pb-10">
	<button
		class="btn ml-auto w-32 rounded-md"
		onclick={() =>
			(document.getElementById('pericias_modal_novo') as HTMLDialogElement).showModal()}
		>Nova Perícia</button
	>
</div>
