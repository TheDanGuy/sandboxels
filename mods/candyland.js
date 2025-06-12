if (!enabledMods.includes("mods/candyland.js")) enabledMods.push("mods/candyland.js");

// Register the tab first
modCategories.candy = {
    name: "Candyland 🍬",
    color: "#ff66aa"
};

// ELEMENTS

elements.candy_cane = {
    color: ["#ff0000", "#ffffff"],
    behavior: behaviors.WALL,
    category: "candy",
    state: "solid",
    density: 1200,
    hardness: 0.25,
    breakInto: "sugar",
    tempHigh: 120,
    stateHigh: "candy_syrup",
    burn: 25,
    burnTime: 75,
    burnInto: "molasses"
};

elements.candy_syrup = {
    color: "#e89ac7",
    behavior: behaviors.LIQUID,
    category: "candy",
    state: "liquid",
    density: 1000,
    viscosity: 10000,
    tempLow: 10,
    stateLow: "candy_cane",
    reactions: {
        "water": { elem1: "sugar_water", chance: 0.3 },
        "ice": { elem1: "sugar", chance: 0.1 }
    }
};

elements.sugar_water = {
    color: "#ffecf2",
    behavior: behaviors.LIQUID,
    category: "candy",
    state: "liquid",
    density: 1025,
    hidden: true,
    reactions: {
        "yeast": { elem1: "alcohol", elem2: null, chance: 0.3 }
    }
};

elements.gumdrop = {
    color: ["#ff85a1", "#ffb3c6", "#ffc8dd"],
    behavior: [
        "XX|CR:candy_syrup%0.01|XX",
        "M2%1|XX|M2%1",
        "M1|M1|M1"
    ],
    category: "candy",
    state: "solid",
    density: 900,
    breakInto: "candy_syrup",
    tempHigh: 80,
    stateHigh: "candy_syrup",
    reactions: {
        "water": { elem1: "sugar_water", chance: 0.2 }
    }
};

elements.lollipop = {
    color: ["#ff66aa", "#ff3388", "#ff99cc"],
    behavior: behaviors.WALL,
    category: "candy",
    state: "solid",
    density: 950,
    breakInto: "sugar",
    tempHigh: 90,
    stateHigh: "candy_syrup"
};
