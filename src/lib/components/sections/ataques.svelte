<script lang="ts">
	import { globalFicha } from '#lib/ficha.svelte.ts';
	import { toTooltip } from '#lib/modificadores.svelte.ts';
</script>

<fieldset
	class="flex w-full flex-row flex-wrap justify-center rounded-md border-2 border-base-300 bg-base-100 lg:w-1/2"
>
	<legend class="mx-6 font-bold">Ataques</legend>
	<table class="table">
		<thead>
			<tr>
				<th></th>
				<th>Corpo-a-Corpo</th>
				<th>À Distância</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>BBA</td>
				<td>{globalFicha.ficha.bba}</td>
				<td>{globalFicha.ficha.bba}</td>
			</tr>
			<tr>
				<td>Mod. Hab.</td>
				<td>{globalFicha.getModHab('for')}</td>
				<td>{globalFicha.getModHab('des')}</td>
			</tr>
			<tr>
				<td>Mod. Tamanho</td>
				<td>
					<div class="tooltip" data-tip={globalFicha.modTamanhoCa.tooltipMessage}>
						{globalFicha.modTamanhoCa.valor}
					</div>
				</td>
				<td>
					<div class="tooltip" data-tip={globalFicha.modTamanhoCa.tooltipMessage}>
						{globalFicha.modTamanhoCa.valor}
					</div>
				</td>
			</tr>
			<tr>
				<td>Outros</td>
				<td>
					<div
						class="tooltip"
						data-tip={toTooltip([
							...globalFicha.getMods('ataque').mods,
							...globalFicha.getMods('ataque_corpo').mods
						])}
					>
						{globalFicha.getMods('ataque').total + globalFicha.getMods('ataque_corpo').total}
					</div>
				</td>
				<td>
					<div
						class="tooltip"
						data-tip={toTooltip([
							...globalFicha.getMods('ataque').mods,
							...globalFicha.getMods('ataque_distancia').mods
						])}
					>
						{globalFicha.getMods('ataque').total + globalFicha.getMods('ataque_distancia').total}
					</div>
				</td>
			</tr>
			<tr>
				<td>Total</td>
				<td>{globalFicha.ataque.corpo}</td>
				<td>{globalFicha.ataque.distancia}</td>
			</tr>
		</tbody>
	</table>
</fieldset>
