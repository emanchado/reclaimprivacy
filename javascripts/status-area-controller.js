/*!
 * ReclaimPrivacy JavaScript Library
 * http://www.reclaimprivacy.org/
 *
 * Copyright 2010, ReclaimPrivacy.org
 * Licensed under the GPL Version 2 license
 */

var TRANSIENT_STATUS_DELTA_IN_MILLISECONDS = 4000;

// controller for the status area
function StatusAreaController () {
    this.statusAreaIsDisplayed = false;

    this.updateStatusArea = function(message) {
        var statusArea = $('.privacy-scanner-status');
        if (this.statusAreaIsDisplayed) {
            statusArea.fadeOut(function(){
                statusArea.text(message);
                statusArea.fadeIn();
                this.statusAreaIsDisplayed = true;
            });
        } else {
            statusArea.text(message);
            statusArea.fadeIn();
            this.statusAreaIsDisplayed = true;
        }
    };

    this.hideStatusArea = function(){
        var statusArea = $('.privacy-scanner-status');
        if (this.statusAreaIsDisplayed) {
            statusArea.fadeOut(function(){
                statusArea.text("working...");
            });
            this.statusAreaIsDisplayed = false;
        }
    };

    this.bindStatusFromAnotherController = function(controller) {
        $(controller).bind('ongoingStatus', function(event, data){
            debug("ongoingStatus: ", data.message);
            this.updateStatusArea(data.message);
        });
        $(controller).bind('transientStatus', function(event, data){
            debug("transientStatus: ", data.message);
            this.updateStatusArea(data.message);
            setTimeout(function(){this.hideStatusArea();}, TRANSIENT_STATUS_DELTA_IN_MILLISECONDS);
        });
    };

}
var statusAreaController = new StatusAreaController();
