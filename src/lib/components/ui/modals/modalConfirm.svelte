<script lang="ts">
	let { confirm, id, prompt } = $props();
</script>

<dialog {id} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">✕</button>
		</form>
		<div class="mt-4 mb-12 text-lg">{prompt}</div>
		<form method="dialog" class="flex w-full flex-row justify-end gap-4">
			<button class="btn w-24 cursor-pointer rounded-md p-2 btn-secondary" onclick={confirm}
				>Confirmar</button
			>
			<button class="btn w-24 cursor-pointer rounded-md p-2" onclick={() => {}}>Cancelar</button>
		</form>
	</div>
</dialog>
