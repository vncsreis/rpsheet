<script lang="ts">
	import CombateTab from './tabs/combateTab.svelte';
	import InfoTab from './tabs/infoTab.svelte';
	import InventarioTab from './tabs/inventarioStatusTab.svelte';
	import MagiasTab from './tabs/magiasTab.svelte';
	import PericiasTab from './tabs/periciasTab.svelte';
	import TalentosTab from './tabs/talentosTab.svelte';
</script>

<div class="flex flex-col">
	<div class="tabs tabs-box">
		<input type="radio" name="main_tabs" class="tab" aria-label="Informações" checked={true} />
		<div class="tab-content border-base-300 bg-base-100 p-2"><InfoTab /></div>

		<input type="radio" name="main_tabs" class="tab" aria-label="Combate" />
		<div class="tab-content border-base-300 bg-base-100 p-2"><CombateTab /></div>

		<input type="radio" name="main_tabs" class="tab" aria-label="Perícias" />
		<div class="tab-content border-base-300 bg-base-100 p-2"><PericiasTab /></div>

		<input type="radio" name="main_tabs" class="tab" aria-label="Talentos" />
		<div class="tab-content border-base-300 bg-base-100 p-2"><TalentosTab /></div>

		<input type="radio" name="main_tabs" class="tab" aria-label="Magias" />
		<div class="tab-content border-base-300 bg-base-100 p-2"><MagiasTab /></div>

		<input type="radio" name="main_tabs" class="tab" aria-label="Inventário & Status" />
		<div class="tab-content border-base-300 bg-base-100 p-2"><InventarioTab /></div>
	</div>
</div>
