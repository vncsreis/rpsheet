<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { toTooltip } from '#lib/modificadores.ts';
</script>

<fieldset
	class="flex w-full flex-row flex-wrap justify-center gap-4 rounded-md border-2 border-base-300 bg-base-100 lg:w-1/2"
>
	<legend class="mx-6 font-bold">Resistências</legend>
	<table class="table">
		<thead>
			<tr>
				<th></th>
				<th>Fortitude</th>
				<th>Reflexos</th>
				<th>Vontade</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1/2 do Nível</td>
				<td>{Math.floor(globalFicha.nivel / 2)} </td>
				<td>{Math.floor(globalFicha.nivel / 2)} </td>
				<td>{Math.floor(globalFicha.nivel / 2)} </td>
			</tr>
			<tr>
				<td>Mod. Hab.</td>
				<td>{globalFicha.getModHab('con')} </td>
				<td>{globalFicha.getModHab('des')} </td>
				<td>{globalFicha.getModHab('sab')} </td>
			</tr>
			<tr>
				<td>Outros</td>
				<td
					><div
						class="tooltip tooltip-top tooltip-start w-full"
						data-tip={toTooltip(globalFicha.getMods('fortitude').mods)}
					>
						{globalFicha.getMods('fortitude').total}
					</div>
				</td>
				<td
					><div
						class="tooltip tooltip-top tooltip-start w-full"
						data-tip={toTooltip(globalFicha.getMods('reflexos').mods)}
					>
						{globalFicha.getMods('reflexos').total}
					</div>
				</td>
				<td
					><div
						class="tooltip tooltip-top tooltip-start w-full"
						data-tip={toTooltip(globalFicha.getMods('vontade').mods)}
					>
						{globalFicha.getMods('vontade').total}
					</div>
				</td>
			</tr>
			<tr>
				<td>Total</td>
				<td
					>{Math.floor(globalFicha.nivel / 2) +
						globalFicha.getModHab('con') +
						globalFicha.getMods('fortitude').total}
				</td>
				<td
					>{Math.floor(globalFicha.nivel / 2) +
						globalFicha.getModHab('des') +
						globalFicha.getMods('reflexos').total}
				</td>
				<td
					>{Math.floor(globalFicha.nivel / 2) +
						globalFicha.getModHab('sab') +
						globalFicha.getMods('vontade').total}
				</td>
			</tr>
		</tbody>
	</table>
</fieldset>

<style lang="scss">
	td,
	td > div,
	th {
		max-width: calc(var(--spacing) * 16) !important;
	}
</style>
