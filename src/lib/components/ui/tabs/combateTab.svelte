<script lang="ts">
	import Armadura from '#lib/components/sections/armadura.svelte';
	import Armas from '#lib/components/sections/armas.svelte';
	import Ataques from '#lib/components/sections/ataques.svelte';
	import Ca from '#lib/components/sections/ca.svelte';
	import Combate from '#lib/components/sections/combate.svelte';
	import Deslocamentos from '#lib/components/sections/deslocamentos.svelte';
	import Resistencias from '#lib/components/sections/resistencias.svelte';
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-4 lg:flex-row">
		<Combate />
		<Deslocamentos />
	</div>
	<div class="flex flex-col gap-4 lg:flex-row">
		<Ca />
		<Ataques />
	</div>
	<div class="flex flex-col gap-4 lg:flex-row">
		<Armas />
		<Armadura />
	</div>
	<div class="flex flex-col gap-4 lg:flex-row">
		<Resistencias />
	</div>
</div>
