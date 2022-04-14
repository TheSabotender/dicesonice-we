Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "weshard", name: "WE-Shard"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/wedice/weshard_d2.glb",
		system: "weshard"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/wedice/weshard_d4.glb",
		system: "weshard"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/wedice/weshard_d6.glb",
		system: "weshard"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/wedice/weshard_d8.glb",
		system: "weshard"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/wedice/weshard_d10.glb",
		system: "weshard"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/wedice/weshard_d100.glb",
		system: "weshard"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/wedice/weshard_d12.glb",
		system: "weshard"
	});	
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/wedice/weshard_d20.glb",
		system: "weshard"
	});
});