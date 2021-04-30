//==============================================================================
// This is an example of a character sheet functionality class.
//==============================================================================

export default class CharacterSheet extends ActorSheet {
    /**
     * Return a set of options relating to the character sheet. Note that you
     * need to incorporate elements from the ActorSheet form of this function
     * so you must merge in those data elements.
     */
    static get defaultOptions() {
        let settings = {classes:  ["mysystem", "sheet", "actor"],
                        height:   880,
                        template: "systems/mysystem/templates/sheets/character_sheet.html"};

        return(mergeObject(super.defaultOptions, settings));
    }

    /**
     * Fetch the data associated with the character entity. This presents an
     * opportunity to customize the data for use or add 'calculated' fields.
     * Note again, you must call the root class version of this method and
     * extend the value returned from that call.
     */
    getData() {
        let data = super.getData();

        data.timestamp = new Date();
        data.timestampText = data.timestamp.toTimeString();

        return(data);
    }

    /**
     * This function is invoked to add event handlers to the markup for a
     * character sheet. The markup for the sheet is passed in as a parameter to
     * this function. Note that, once again, you must call the root level
     * version of this function as part of the call.
     */
    activateListeners(html) {
        html.find(".clickable-element").click(this._nodeClicked.bind(this));
        super.activateListeners(html);
    }

    /**
     * An example on click event handler.
     */
    _nodeClicked(event) {
        event.preventDefault();
        alert("Node clicked!");
        return(false);
    }
}
