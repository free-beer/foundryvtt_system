/**
 * This file acts as the entry point for new system into the Foundry VTT. You
 * can import elements from elsewhere in your system folder structure with some
 * examples provided below.
 */
import ThingSheet from './sheets/thing_sheet.js';
import CharacterSheet from './sheets/character_sheet.js';

async function preloadHandlebarsTemplates() {
     // A paths to this array to have them loaded as Handlebars partial
     // templates available to your system.
    const paths = ["systems/mysystem/templates/partials/simple.hbs"];

    return(loadTemplates(paths))
}

// This function will be invoked once when your system initializes and provides
// the location to do any one-time set up functionality that needs to be
// executed in support of your system.
Hooks.once("init", function() {
    console.log("Initializing the MySystem system.");

    // Register item related sheets here.
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mysystem", ThingSheet, {types: ["thing"]});

    // Register character related sheets here.
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("mysystem", CharacterSheet, {label: "sheets.labels.character", makeDefault: true, types: ["character"]});

    // Load templates.
    preloadHandlebarsTemplates();

    // By registering Handlebars helper functionss you can extend the
    // capabilities available within a Handlebars template. The value returned
    // from a helper function is what gets inserted into the template in place
    // of the helper call.
    Handlebars.registerHelper("insertBlah", function(state) {
        return(`BLAH!: ${state}`);
    });
});
