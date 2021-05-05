/*
ELCTRN
*/

class ItemMod {
    constructor() {
        this.mod = "Ilhsiek-MuchNeeded";
        Logger.info(`Loading: ${this.mod}`);
        ModLoader.onLoad[this.mod] = this.Start.bind(this);
    }

    Start() {
        const config = require("../config.json");

        const database = DatabaseServer.tables;
        const globalsFile = database.globals.config;
        const items = database.templates.items;




        /** Globals Modifier **/
        if (config.globals_config.enabled === true) {
            // Remove FOG
            if (config.globals_config.remove_the_damn_fog === true) {
                WeatherConfig.weather.fog.max = 0.01;

            }

            if (config.globals_config.raid.enabled === true) {
                // Loot Chance Modifier
                globalsFile.GlobalLootChanceModifier = config.globals_config.raid.GlobalLootChanceModifier;

                // In-Raid Restrictions
                if (config.globals_config.raid.RemoveLootRestriction === true) {
                    for (let i in items) {
                        if (items[i]._props.Unlootable == true) {

                            items[i]._props.Unlootable = false;
                            items[i].UnlootableFromSide = [];
                        }
                    }
                }

                if (config.globals_config.raid.RemoveCarryRestriction === true) {
                    globalsFile.RestrictionsInRaid = []
                }
                globalsFile.Insurance.MaxStorageTimeInHour = config.globals_config.InsuranceMaxStorageTimeInHour;
            }



            // Stimulants Buff
            if (config.globals_config.Health.enabled === true) {
                globalsFile.Health.Effects.Stimulator.Buffs.BuffsPropital[0].Duration = config.globals_config.Health.stims.Propital.Duration;
                globalsFile.Health.Effects.Stimulator.Buffs.BuffsPropital[0].Value = config.globals_config.Health.stims.Propital.Value;
                globalsFile.Health.Effects.Stimulator.Buffs.BuffseTGchange[0].Duration = config.globals_config.Health.stims.eTGc.Duration;
                globalsFile.Health.Effects.Stimulator.Buffs.BuffseTGchange[0].Value = config.globals_config.Health.stims.eTGc.Value;
                globalsFile.Health.Effects.Stimulator.Buffs.Buffs_MULE[0].Duration = config.globals_config.Health.stims.MULE.Duration;
                globalsFile.Health.Effects.Stimulator.Buffs.Buffs_MULE[0].Value = config.globals_config.Health.stims.MULE.Value;

                globalsFile.Health.Effects.Stimulator.Buffs.BuffsSJ6TGLabs[0].Duration = config.globals_config.Health.stims.SJ6.Duration;
                globalsFile.Health.Effects.Stimulator.Buffs.BuffsSJ6TGLabs[0].Value = config.globals_config.Health.stims.SJ6.Value;

                globalsFile.Health.Effects.Stimulator.Buffs.BuffsSJ1TGLabs[1].Duration = config.globals_config.Health.stims.SJ1_Strength.Duration;
                globalsFile.Health.Effects.Stimulator.Buffs.BuffsSJ1TGLabs[1].Value = config.globals_config.Health.stims.SJ1_Strength.Value;

                globalsFile.Health.Effects.Stimulator.Buffs.Buffs_Antidote[0].Duration = config.globals_config.Health.stims.Antidote.Duration;
            }



            // Stamina Config.
            if (config.globals_config.Stamina.enabled === true) {
                globalsFile.Stamina.Capacity = config.globals_config.Stamina.Capacity;
                globalsFile.Stamina.BaseRestorationRate = config.globals_config.Stamina.BaseRestorationRate;
                globalsFile.Stamina.JumpConsumption = config.globals_config.Stamina.JumpConsumption;
                globalsFile.Stamina.OxygenCapacity = config.globals_config.Stamina.OxygenCapacity;
                globalsFile.Stamina.OxygenRestoration = config.globals_config.Stamina.OxygenRestoration;
                globalsFile.Stamina.WalkOverweightLimits.x = config.globals_config.Stamina.WalkOverweightLimits.x;
                globalsFile.Stamina.WalkOverweightLimits.y = config.globals_config.Stamina.WalkOverweightLimits.y;
                globalsFile.Stamina.BaseOverweightLimits.x = config.globals_config.Stamina.BaseOverweightLimits.x;
                globalsFile.Stamina.BaseOverweightLimits.y = config.globals_config.Stamina.BaseOverweightLimits.y;
                globalsFile.Stamina.SprintOverweightLimits.x = config.globals_config.Stamina.SprintOverweightLimits.x;
                globalsFile.Stamina.SprintOverweightLimits.y = config.globals_config.Stamina.SprintOverweightLimits.y;
                globalsFile.Stamina.WalkOverweightLimits.x = config.globals_config.Stamina.WalkSpeedOverweightLimits.x;
                globalsFile.Stamina.WalkOverweightLimits.y = config.globals_config.Stamina.WalkSpeedOverweightLimits.y;
            }



            if (config.globals_config.movements.enabled === true) {
                globalsFile.WalkSpeed.x = config.globals_config.movements.WalkSpeed.x;
                globalsFile.WalkSpeed.y = config.globals_config.movements.WalkSpeed.y;
                globalsFile.SprintSpeed.x = config.globals_config.movements.SprintSpeed.y;
                globalsFile.SprintSpeed.y = config.globals_config.movements.SprintSpeed.y
                globalsFile.EnduranceWeightThreshold = config.globals_config.EnduranceWeightThreshold;
            }







            // Skills Config.
            if (config.globals_config.SkillsSettings.enabled === true) {
                globalsFile.SkillsSettings.WeapomSkillProgressRate = config.globals_config.SkillsSettings.WeapomSkillProgressRate;
                globalsFile.SkillsSettings.HideoutManagement.EliteSlots.WaterCollector.Slots = config.globals_config.SkillsSettings.HideoutManagement.EliteSlots.WaterCollector.Slots;

                globalsFile.SkillsSettings.HideoutManagement.EliteSlots.BitcoinFarm.Slots = config.globals_config.SkillsSettings.HideoutManagement.EliteSlots.BitcoinFarm.Slots;
                globalsFile.SkillsSettings.HideoutManagement.EliteSlots.BitcoinFarm.Container = config.globals_config.SkillsSettings.HideoutManagement.EliteSlots.BitcoinFarm.Container;
                globalsFile.SkillsSettings.Crafting.CraftTimeReductionPerLevel = config.globals_config.SkillsSettings.Crafting.CraftTimeReductionPerLevel;
                globalsFile.SkillsSettings.Crafting.ProductionTimeReductionPerLevel = config.globals_config.SkillsSettings.Crafting.ProductionTimeReductionPerLevel;
                globalsFile.SkillsSettings.Crafting.CraftingPointsToInteligence = config.globals_config.SkillsSettings.Crafting.CraftingPointsToInteligence;
            }

        }
        /** Globals Modifier **/


        /** CHAMGE THE WEIGHT OF ALL ITEMS **/
        for (let i in items) {

            // 
        }
        /** CHAMGE THE WEIGHT OF ALL ITEMS **/


        for (let i in items) {
            // Global Weight Modifier
            if (config.items.item_weight_override_enabled === true)
                items[i]._props.Weight = config.items.item_weight;

            /** Magazine Config. **/
            let mags = config.items.mags;
            // INCREASE THE LOADING SPEED OF ALL MAGAZINES
            if (config.items.load_speed_override_enabled === true) {
                if (items[i]._parent === "5448bc234bdc2d3c308b4569") {
                    items[i]._props.LoadUnloadModifier = config.items.load_speed
                }
            }

            if (config.items.mags.enabled === true) {
                for (let a in mags) {
                    if (mags[a].id === items[i]._id) {
                        if (mags[a].size != "")
                            items[i]._props.Cartridges[0]._max_count = mags[a].size;
                    }
                }
            }

            /** Magazine Config. **/


            /** Meds Config **/
            if (config.items.meds.enabled === true) {
                let meds = config.items.meds;

                for (let b in meds) {
                    if (items[i]._id === meds[b].id) {
                        if (meds[b].usetime != "")
                            items[i]._props.medUseTime = meds[b].usetime;
                        if (meds[b].heal_rate != "")
                            items[i]._props.hpResourceRate = meds[b].heal_rate;
                    }
                }
            }

            /** Meds Config **/

            /** Container Config. **/
            if (config.items.container.enabled === true) {
                let container = config.items.container;
                for (let a in container) {
                    if (container[a].id === items[i]._id) {
                        items[i]._props.Grids[0]._props.cellsH = container[a].cellsH;
                        items[i]._props.Grids[0]._props.cellsV = container[a].cellsV;

                    }
                }
            }
            /** Container Config. **/

            /** Armor Config. **/
            if (config.items.armor.enabled === true) {
                let armor = config.items.armor;
                for (let a in armor) {
                    if (armor[a].id === items[i]._id) {
                        items[i]._props.Durability = armor[a].Durability;
                        items[i]._props.MaxDurability = armor[a].MaxDurability;
                        items[i]._props.armorClass = armor[a].armorClass;
                    }
                }
            }
            /** Armor Config. **/

        }

         /** Finish All Quests **/
         if (config.traders.finishAllQuests === true) {
            let base = database.templates.quests

            for (let file in base) {
                let fileData = base[file]

                fileData.conditions.AvailableForFinish = [{
                    "_parent": "Level",
                    "_props": {
                        "compareMethod": ">=",
                        "value": "1",
                        "index": 0,
                        "parentId": "",
                        "id": "GTFO"
                    }
                }]
            }
        } 
        /** Finish All Quests **/

    }

    LoopThroughThatBith(filepath) {
        const fs = require('fs');
        let baseNode = {};
        let directories = this.getDirList(filepath);
        let files = fs.readdirSync(filepath);

        // remove all directories from files
        for (let directory of directories) {
            for (let file in files) {
                if (files[file] === directory) {
                    files.splice(file, 1);
                }
            }
        }

        // make sure to remove the file extention
        for (let node in files) {
            let fileName = files[node].split('.').slice(0, -1).join('.');
            baseNode[fileName] = filepath + files[node];
        }

        // deep tree search
        for (let node of directories) {
            baseNode[node] = this.LoopThroughThatBith(filepath + node + "/");
        }

        return baseNode;
    }
    getDirList(path) {
        const fs = require('fs');
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path + "/" + file).isDirectory();
        });
    }
}

module.exports.Mod = ItemMod;