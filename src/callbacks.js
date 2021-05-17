"use strict";

class Callbacks {

    constructor() {
        // override a route that does nothing meaningful in the game
        HttpRouter.onStaticRoute["/client/game/start"].aki = this.godMode.bind(this);
        HttpRouter.onStaticRoute["/client/game/logout"].aki = this.resetPMCHealth.bind(this);
        this.config = require('../config.json');
    }

    godMode(url, info, sessionID) {
        const config = require('../config.json');
        const bodyParts = config.globals_config.Health.GodMode.bodyParts; 

        if (config.globals_config.Health.GodMode.enabled === true) { 
            const PMC = ProfileController.getPmcProfile(sessionID); 
            const pmcBodyParts = PMC.Health.BodyParts; 
            for (let bodyPart in pmcBodyParts) {
                Logger.info(`Gib God:${bodyPart}`);

                pmcBodyParts[bodyPart].Health.Maximum = bodyParts[bodyPart];
                pmcBodyParts[bodyPart].Health.Current = bodyParts[bodyPart];
            }
        }

        return HttpResponse.nullResponse();
    }

    resetPMCHealth(url, info, sessionID) {
        const defaults = require('../src/defaults.json');
        const bodyParts = defaults.Health.bodyParts;

        if (this.config.globals_config.Health.GodMode.enabled === true) {
            const PMC = ProfileController.getPmcProfile(sessionID);
            const pmcBodyParts = PMC.Health.BodyParts;
            for (let bodyPart in pmcBodyParts) {
                Logger.info(`Wen God:${bodyPart}`);

                pmcBodyParts[bodyPart].Health.Maximum = bodyParts[bodyPart];
                pmcBodyParts[bodyPart].Health.Current = bodyParts[bodyPart];
            }
        }


        // return the original response
        return HttpResponse.nullResponse();
    }
}

module.exports.Callbacks = Callbacks; 