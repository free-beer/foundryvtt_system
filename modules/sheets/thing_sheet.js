//==============================================================================
// This is an example of a item sheet functionality class.
//==============================================================================

export default class ThingSheet extends ItemSheet {
    /**
     * This function retrieves a string containing the path to the item template
     * file.
     */
	  get template() {
		    return("systems/mysystem/templates/sheets/thing_sheet.html");
	  }

    /**
     * This function fetches the data for an item. Note that you must merge
     * custom data items into the data items returned from a call to the root
     * version of this function.
     */
	  getData() {
		    let data = super.getData();
		    return(data);
	  }
}
