"use strict";

class Callbacks {

    constructor() {
        // override a route that does nothing meaningful in the game
        HttpRouter.onStaticRoute["/client/game/start"].aki = this.makePmcStrong.bind(this);
    }

    makePmcStrong(url, info, sessionID) {
        const config = require('../config.json');
        // get the PMC super body parts
        const bodyParts = config.globals_config.Health.bodyParts; 

        if (config.globals_config.Health.super === true) { // check if the config for super pmc is enabled
            const pmc = ProfileController.getPmcProfile(sessionID); // get the current logged in player's profile
            const pmcBodyParts = pmc.Health.BodyParts; // get the current player body parts
            for (let bodyPart in pmcBodyParts) { // loop through the parts and update the value to the super ones
                pmcBody[bodyPart].Health.Maximum = bodyParts[bodyPart];
                pmcBody[bodyPart].Health.Current = bodyParts[bodyPart];
            }
        }

        // return the original response
        return HttpResponse.nullResponse();
    }
}

module.exports.Callbacks = Callbacks;