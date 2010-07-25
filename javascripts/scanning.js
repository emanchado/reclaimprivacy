/*!
 * ReclaimPrivacy JavaScript Library
 * http://www.reclaimprivacy.org/
 *
 * Copyright 2010, ReclaimPrivacy.org
 * Licensed under the GPL Version 2 license
 */

var REQUEST_COMPLETION_DELTA_IN_MILLISECONDS = 3000;

var NUMBER_OF_DROPDOWN_OPTIONS_IF_DROPDOWN_IS_EVERYONE_OR_FRIENDS_ONLY = 2;
var NUMBER_OF_DROPDOWN_OPTIONS_IF_IN_NETWORK = 5;
var NUMBER_OF_DROPDOWN_OPTIONS_IF_NOT_IN_NETWORK = 4;
var NUMBER_OF_DROPDOWN_OPTIONS_IF_NOT_IN_NETWORK_AND_CHECKING_MESSAGE_SECTION = 3;
var DROPDOWN_INDEX_EVERYONE_WHEN_ONLY_2_OPTIONS = 0;
var DROPDOWN_INDEX_EVERYONE = 0;
var DROPDOWN_INDEX_FRIENDS_OF_FRIENDS = 1;
var DROPDOWN_INDEX_FRIENDS = 2;
var DROPDOWN_INDEX_CUSTOM = 3;
var DROPDOWN_INDEX_WITH_NETWORKS_EVERYONE = 0;
var DROPDOWN_INDEX_WITH_NETWORKS_FRIENDS_AND_NETWORKS = 1;
var DROPDOWN_INDEX_WITH_NETWORKS_FRIENDS_OF_FRIENDS = 2;
var DROPDOWN_INDEX_WITH_NETWORKS_FRIENDS = 3;
var DROPDOWN_INDEX_WITH_NETWORKS_CUSTOM = 4;

var DROPDOWN_VALUE_ALL                  = 80;
var DROPDOWN_VALUE_FRIENDS_AND_NETWORKS = 55;
var DROPDOWN_VALUE_FRIENDS_OF_FRIENDS   = 50;
var DROPDOWN_VALUE_FRIENDS              = 40;

var waitForMostRecentRequestToComplete = function(callback){
    setTimeout(callback, REQUEST_COMPLETION_DELTA_IN_MILLISECONDS);
};

// controller that can determine the state of your current privacy settings
function ScanningController () {

    // gets whether Instant Personalization is enabled
    this.isInstantPersonalizationEnabled = function(responseHandler){
        withFramedPageOnFacebook('http://www.facebook.com/settings/?tab=privacy&section=applications&field=instant_personalization', function(frameWindow){
            var active_checkboxes = jQuery('#instant_personalization_checkbox:checked', frameWindow.document);
            if (active_checkboxes.size() > 0) {
                responseHandler(true);
            } else {
                responseHandler(false);
            }
        });
    };

    // gets whether friends can share some things about you
    this.isFriendSharingLoose = function(responseHandler){
        withFramedPageOnFacebook('http://www.facebook.com/settings/?tab=privacy&section=applications&field=friends_share', function(frameWindow){
            var numActiveCheckboxes = jQuery('input:checked', frameWindow.document).size();
            if (numActiveCheckboxes > 0) {
                responseHandler(true);
            } else {
                responseHandler(false);
            }
        });
    };

    // gets a list of all currently blocked applications
    this.getListOfBlockedApps = function(responseHandler){
        jQuery.get('http://www.facebook.com/settings/?tab=privacy&section=applications&field=blocked_apps', function(html){
            var blockedAppsDom = jQuery(html);
            var appList = [];
            jQuery('.blocked_list li', blockedAppsDom).each(function(){
                var blockedAppListElement = jQuery(this);
                var appName = blockedAppListElement.text();
                var appid = null;
                jQuery('.button_wrapper input', blockedAppListElement).each(function(){
                    var input = jQuery(this);
                    appid = input.attr('name').replace('unblock[', '').replace(']', '');
                });
                appList.push({name: appName, appid: appid});
            });
            responseHandler(appList);
        });
    };

    // helper that looks through a series of dropdowns and returns "all-friends-only" (true) or "some open" (false)
    this.getInformationDropdownSettings = function(rowCssSelector, frameWindow, responseHandler){
        debug("iterating through all rows matching: " + rowCssSelector);
        var informationDom = jQuery(frameWindow.document.documentElement);
        var openSections = 0;
        jQuery(rowCssSelector, informationDom).each(function(){
            var rowDom = jQuery(this);
            var isDropdown = jQuery('select', rowDom).size() > 0 ? true : false;
            var getValueOfCheckedDropdownItem = function(options){
                var i = 0;
                var r = undefined;
                options.each(function(){
                    if (this.selected) {
                        r = this.value;
                    }
                    i++;
                });
                return r;
            };
            if (isDropdown) {
                var options = jQuery('option', rowDom);
                var chosenOption = getValueOfCheckedDropdownItem(options);
                if (chosenOption == DROPDOWN_VALUE_ALL) {
                    openSections++;
                }
            } else {
                debug("not a dropdown?:", rowDom);
            }
        });
        debug("finished parsing (", openSections, " open to everyone)");
        if (openSections > 0) {
            responseHandler(false);
        } else {
            responseHandler(true);
        }
    };

    // gets the details of all the current personal information + connections privacy settings
    this.getInformationDropdownSettingsAtPrivacySection = function(section, responseHandler){
        var self = this;
        withFramedPageOnFacebook('http://www.facebook.com/settings/?tab=privacy&section=' + section, function(frameWindow){
            self.getInformationDropdownSettings('.privacy_section_row', frameWindow, responseHandler);
        });
    };

    this.getPersonalInformationSettings = function(responseHandler){
        this.getInformationDropdownSettingsAtPrivacySection('personal_content', responseHandler);
    };

    this.getContactInformationSettings = function(responseHandler){
        this.getInformationDropdownSettingsAtPrivacySection('custom', responseHandler);
    };

    this.getFriendsTagsConnectionsSettings = function(responseHandler){
        this.getInformationDropdownSettingsAtPrivacySection('profile_display', responseHandler);
    };

    this.getPhotoAlbumSettings = function(responseHandler){
        var self = this;
        withFramedPageOnFacebook('http://www.facebook.com/privacy/?view=photos', function(frameWindow){
            self.getInformationDropdownSettings('.albumPrivacyWidget', frameWindow, responseHandler);
        });
    };

    // gets Basic Directory Info details (v2 settings)
    this.getBasicDirectoryInfoSettings = function(responseHandler){
        var self = this;
        getUrlForV2Section('basic', function(basicPageUrl){
            if (basicPageUrl) {
                debug('I get basicPageUrl = ', basicPageUrl, " for getBasicDirectoryInfoSettings");
                withFramedPageOnFacebook(basicPageUrl, function(frameWindow){
                    // debug('Inside withFramedPageOnFacebook handler');
                    self.getInformationDropdownSettings('.itemControl', frameWindow, responseHandler);
                });
            } else {
                // couldn't access the page
                debug("failed to access Basic Directory Info, could not determine URL");
                responseHandler(false);
            }
        });
    };

    return true;
}
var scanningController = new ScanningController;
