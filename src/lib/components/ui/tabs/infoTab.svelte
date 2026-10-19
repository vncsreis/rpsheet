<script lang="ts">
	import Anotacoes from '#lib/components/sections/anotacoes.svelte';
	import Classes from '#lib/components/sections/classes.svelte';
	import Habilidades from '#lib/components/sections/habilidades.svelte';
	import Info from '#lib/components/sections/info.svelte';
</script>

<Info />
<div class="flex flex-col gap-2 md:flex-row">
	<Classes />
	<Habilidades />
</div>
<Anotacoes />
