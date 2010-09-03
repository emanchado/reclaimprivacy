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

var DROPDOWN_CHECKBOX_ENABLED           = 1;
var DROPDOWN_CHECKBOX_DISABLED          = 2;

var CHECKBOX_ENABLED                    = 1;
var CHECKBOX_DISABLED                   = 0;

var NO_RECOMMENDED_VALUE                = 'none';

var waitForMostRecentRequestToComplete = function(callback){
    setTimeout(callback, REQUEST_COMPLETION_DELTA_IN_MILLISECONDS);
};

// controller that can determine the state of your current privacy settings
function ScanningController () {

    this.settings = [
        {'name':              'default',
         'type':              'dropdown',
         'id':                '*',
         'recommended_level': DROPDOWN_VALUE_FRIENDS, },

        // Custom privacy settings
        {'name':              'Posts by me',
         'type':              'dropdown',
         'id':                '8787500733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS, },
        {'name':              'Family',
         'type':              'dropdown',
         'id':                '8787585733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS, },
        {'name':              'Relationships',
         'type':              'dropdown',
         'id':                '8787550733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS, },
        {'name':              'Interested in and looking for',
         'type':              'dropdown',
         'id':                '8787590733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS, },
        {'name':              'Bio and favourite quotations',
         'type':              'dropdown',
         'id':                '8787560733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS_OF_FRIENDS, },
        {'name':              'Website',
         'type':              'dropdown',
         'id':                '8787375733',
         'recommended_level': DROPDOWN_VALUE_ALL, },
        {'name':              'Religious and political views',
         'type':              'dropdown',
         'id':                '8787555733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS_OF_FRIENDS, },
        {'name':              'Birthday',
         'type':              'dropdown',
         'id':                '8787510733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS_AND_NETWORKS, },
        {'name':              'Places I check in to',
         'type':              'dropdown',
         'id':                '8787620733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS, },
        {'name':              'Include me in "People here now"',
         'type':              'checkbox',
         'id':                'places_here_now',
         'recommended_level': CHECKBOX_DISABLED, },

        {'name':              'Photos and videos I\'m tagged in',
         'type':              'dropdown',
         'id':                '8787530733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS_OF_FRIENDS, },
        {'name':              'Can comment on posts',
         'type':              'dropdown',
         'id':                '8787535733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS_OF_FRIENDS, },
        {'name':              'Can see wall posts by friends',
         'type':              'dropdown',
         'id':                '8787370733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS_OF_FRIENDS, },
        {'name':              'Friends can post on my wall',
         'type':              'checkbox',
         'id':                'friends_can_post_on_wall',
         'recommended_level': NO_RECOMMENDED_VALUE, },

        {'name':              'Mobile phone',
         'type':              'dropdown',
         'id':                '8787340733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS, },
        {'name':              'Other phone',
         'type':              'dropdown',
         'id':                '8787345733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS, },
        {'name':              'Address',
         'type':              'dropdown',
         'id':                '8787355733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS, },
        {'name':              'IM screen name',
         'type':              'dropdown',
         'id':                '8787335733',
         'recommended_level': DROPDOWN_VALUE_FRIENDS, },
    ];

    // gets whether Instant Personalization is enabled
    this.isInstantPersonalizationEnabled = function(responseHandler){
        withFramedPageOnFacebook('http://www.facebook.com/settings/?tab=privacy&section=applications&field=instant_personalization', function(doc){
            var active_checkboxes = jQuery('#instant_personalization_checkbox:checked', doc);
            if (active_checkboxes.size() > 0) {
                responseHandler(true);
            } else {
                responseHandler(false);
            }
        });
    };

    // gets whether friends can share some things about you
    this.isFriendSharingLoose = function(responseHandler){
        withFramedPageOnFacebook('http://www.facebook.com/settings/?tab=privacy&section=applications&field=friends_share', function(doc){
            var numActiveCheckboxes = jQuery('input:checked', doc).size();
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

    // helper that looks through a series of dropdowns and returns
    // the number of them that aren't "all-friends-only"
    this.getSettingInformation = function(rowCssSelector, informationDom, responseHandler, settingConfiguration){
        debug("iterating through all rows matching: " + rowCssSelector);
        var openSections = 0;
        var totalSections = 0;
        if (settingConfiguration == undefined) {
            settingConfiguration = this.settings;
        }
        jQuery(rowCssSelector, informationDom).each(function(){
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
            var getDropdownAcceptablePrivacyLevel = function(rowDom, settingConf){
                var dropdown = jQuery('select', rowDom);
                var name = dropdown.attr('name');
                for (var i = 0; i < settingConf.length; ++i) {
                    if (settingConf[i].id) {
                        if ('UIPrivacyWidget[' + settingConf[i].id + ']' ==
                                    name) {
                            return settingConf[i].recommended_level;
                        }
                    }
                }
                // Look for the default option then
                for (var i = 0; i < settingConf.length; ++i) {
                    if (settingConf[i].id == '*') {
                        return settingConf[i].recommended_level;
                    }
                }
                return -1;
            };
            var getCheckboxAcceptablePrivacyLevel = function(rowDom, settingConf){
                var checkbox = jQuery('input', rowDom);
                var name = checkbox.attr('name');
                for (var i = 0; i < settingConf.length; ++i) {
                    if (settingConf[i].id) {
                        if (settingConf[i].id == name) {
                            return settingConf[i].recommended_level;
                        }
                    }
                }
                // Look for the default option then
                for (var i = 0; i < settingConf.length; ++i) {
                    if (settingConf[i].id == '*') {
                        return settingConf[i].recommended_level;
                    }
                }
                return -1;
            };

            var rowDom = jQuery(this);
            if (jQuery('select', rowDom).size() > 0) {
                var options = jQuery('option', rowDom);
                var chosenOption = getValueOfCheckedDropdownItem(options);
                var acceptablePrivacyLevel =
                    getDropdownAcceptablePrivacyLevel(rowDom, settingConfiguration);
                if (chosenOption > acceptablePrivacyLevel &&
                        chosenOption != 111) {
                    openSections++;
                }
                totalSections++;
            } else if (jQuery('input', rowDom).size() > 0) {
                var acceptablePrivacyLevel =
                    getCheckboxAcceptablePrivacyLevel(rowDom, settingConfiguration);
                if (acceptablePrivacyLevel != NO_RECOMMENDED_VALUE) {
                    var selected = jQuery('input', rowDom).attr('checked') ? 1 : 0;
                    if (selected != acceptablePrivacyLevel) {
                        openSections++;
                    }
                }
                totalSections++;
            } else {
                debug("Can't make sense of this HTML:", rowDom);
            }
        });
        debug("finished parsing (", openSections, " open)");
        responseHandler(openSections, totalSections);
    };

    // gets the details of all the current personal information + connections privacy settings
    this.getInformationDropdownSettingsAtPrivacySection = function(section, responseHandler){
        var self = this;
        withFramedPageOnFacebook('http://www.facebook.com/settings/?tab=privacy&section=' + section, function(doc){
            self.getSettingInformation('.privacy_section_row', doc, responseHandler);
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

    this.getPhotoAlbumSettings = function(responseHandler, source){
        var self = this;
        if (source == undefined) {
            source = 'http://www.facebook.com/privacy/?view=photos';
        }
        withFramedPageOnFacebook(source, function(doc){
            self.getSettingInformation('.photo_privacy', doc, responseHandler, self.settings);
        });
    };

    this._getSettingsFromSection = function(section, source, responseHandler){
        var self = this;
        var processingFunction = function(source){
                withFramedPageOnFacebook(source, function(doc){
                    self.getSettingInformation('.itemControl', doc, responseHandler);
                });
            };
        if (source == undefined) {
            getUrlForV2Section(section, function(basicPageUrl){
                if (basicPageUrl) {
                    processingFunction(basicPageUrl);
                } else {
                    // couldn't access the page
                    debug("failed to determine URL for section" + section);
                    responseHandler(-1);
                }
            });
        } else if (typeof(source) == 'function') {
            processingFunction(source());
        } else {
            processingFunction(source);
        }
    };

    // gets Basic Directory Info details (v2 settings)
    this.getBasicDirectoryInfoSettings = function(responseHandler, source){
        this._getSettingsFromSection('basic', source, responseHandler);
    };

    // gets privacy details (v2 settings)
    this.getPrivacySettings = function(responseHandler, source){
        this._getSettingsFromSection('custom', source, responseHandler);
    };

    return true;
}
var scanningController = new ScanningController;
