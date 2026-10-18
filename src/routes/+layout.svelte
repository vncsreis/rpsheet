<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import { globalFicha, NOVA_FICHA } from '#lib/ficha.svelte.ts';
	import type { Ficha } from '#lib/ficha.interface.ts';

	let { children }: LayoutProps = $props();

	let loadedFicha = $state.snapshot(globalFicha.ficha);
	let fichaFileName = $state('nova_ficha.json');
	let files = $state<FileList>();
	let ficha = $state<Ficha>();

	function handleBeforeUnload(event) {
		if (JSON.stringify(loadedFicha) !== JSON.stringify(globalFicha.ficha)) {
			window.alert('diferente');
			event.preventDefault();
			event.returnValue = '';
		}
	}

	function exportFicha() {
		loadedFicha = $state.snapshot(globalFicha.ficha);
		const exportFileName = $state.snapshot(fichaFileName);

		saveAsFile(exportFileName, loadedFicha);
	}

	const saveAsFile = (filename: string, dataObjToWrite: object) => {
		const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: 'text/json' });
		const link = document.createElement('a');

		link.download = filename;
		link.href = window.URL.createObjectURL(blob);
		link.dataset.downloadurl = ['text/json', link.download, link.href].join(':');

		const evt = new MouseEvent('click', {
			view: window,
			bubbles: true,
			cancelable: true
		});

		link.dispatchEvent(evt);
		link.remove();
	};

	$effect(() => {
		if (files) {
			const file = files.item(0);

			if (file) {
				file
					.text()
					.then((text) => {
						const parsedFicha = JSON.parse(text);

						fichaFileName = file.name;
						ficha = { ...parsedFicha } as Ficha;
						loadedFicha = { ...parsedFicha };
					})
					.catch((reason) => window.alert(reason));
			}
		}
	});

	function confirmar() {
		globalFicha.ficha = ficha;
	}

	function novaFicha() {
		globalFicha.ficha = NOVA_FICHA;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window on:beforeunload={handleBeforeUnload} />

{#if globalFicha.ficha}
	<header class="flex flex-row items-center justify-between border-b-2 border-base-300 p-2">
		<h1 class="text-2xl">RPSheet</h1>
		<div>
			<button
				class="btn"
				onclick={() =>
					(document.getElementById('importar_ficha_modal') as HTMLDialogElement).showModal()}
				>Carregar</button
			>
			<button class="btn" onclick={exportFicha}>Exportar</button>
		</div>
	</header>

	<dialog id="importar_ficha_modal" class="modal">
		<div class="modal-box">
			<form method="dialog">
				<button class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">✕</button>
			</form>
			<div class="mt-4 mb-12 flex flex-col gap-8 text-lg">
				<div>Selecione a ficha para importar:</div>

				<input type="file" accept=".json" class="file-input" bind:files />
			</div>
			<form method="dialog" class="flex w-full flex-row justify-end gap-4">
				<button class="btn w-24 cursor-pointer rounded-md p-2 btn-primary" onclick={confirmar}
					>Confirmar</button
				>
				<button class="btn w-24 cursor-pointer rounded-md p-2" onclick={() => {}}>Cancelar</button>
			</form>
		</div>
	</dialog>

	{@render children()}
{:else}
	<header class="flex flex-row items-center justify-between border-b-2 border-base-300 p-2">
		<h1 class="text-2xl">RPSheet</h1>
	</header>
	<div class="mt-40 flex h-full w-full flex-col items-center justify-center">
		<h2 class="text-lg">Sem ficha</h2>
		<div>
			<button class="btn" onclick={novaFicha}>Nova</button>
			<button
				class="btn"
				onclick={() =>
					(document.getElementById('importar_ficha_modal') as HTMLDialogElement).showModal()}
				>Carregar</button
			>
		</div>
	</div>
	<dialog id="importar_ficha_modal" class="modal">
		<div class="modal-box">
			<form method="dialog">
				<button class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">✕</button>
			</form>
			<div class="mt-4 mb-12 flex flex-col gap-8 text-lg">
				<div>Selecione a ficha para importar:</div>

				<input type="file" accept=".json" class="file-input" bind:files />
			</div>
			<form method="dialog" class="flex w-full flex-row justify-end gap-4">
				<button class="btn w-24 cursor-pointer rounded-md p-2 btn-primary" onclick={confirmar}
					>Confirmar</button
				>
				<button class="btn w-24 cursor-pointer rounded-md p-2" onclick={() => {}}>Cancelar</button>
			</form>
		</div>
	</dialog>
{/if}
