"use strict";

class Callbacks {

    constructor() {
        // override a route that does nothing meaningful in the game
        HttpRouter.onStaticRoute["/client/game/start"].aki = this.makePmcStrong.bind(this);
        HttpRouter.onStaticRoute["/client/game/logout"].aki = this.resetPMCHealth.bind(this);
        this.config = require('../config.json');
    }

    makePmcStrong(url, info, sessionID) {
        if (this.config.globals_config.Health.super === true) { // check if the config for super pmc is enabled
            // get the PMC super body parts only if the super option is enabled so we don't waste time
            const bodyParts = this.config.globals_config.Health.bodyParts; 
            const pmc = ProfileController.getPmcProfile(sessionID); // get the current logged in player's profile
            const pmcBodyParts = pmc.Health.BodyParts; // get the current player body parts
            for (let bodyPart in pmcBodyParts) { // loop through the parts and update the value to the super ones
                pmcBodyParts[bodyPart].Health.Maximum = bodyParts[bodyPart].new;
                pmcBodyParts[bodyPart].Health.Current = bodyParts[bodyPart].new;
            }
        }

        // return the original response
        return HttpResponse.nullResponse();
    }

    resetPMCHealth(url, info, sessionID) {
        if (this.config.globals_config.Health.super === true) {
            const bodyParts = this.config.globals_config.Health.bodyParts; 
            const pmc = ProfileController.getPmcProfile(sessionID);
            const pmcBodyParts = pmc.Health.BodyParts;

            for (let bodyPart in pmcBodyParts) {
                pmcBodyParts[bodyPart].Health.Maximum = bodyParts[bodyPart].default;
                pmcBodyParts[bodyPart].Health.Current = bodyParts[bodyPart].default;
            }
        }
        
        // return the original response
        return HttpResponse.nullResponse();
    }
}

module.exports.Callbacks = Callbacks;