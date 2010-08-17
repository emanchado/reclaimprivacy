// build the view
(function($){
    var BAR_HEIGHT_IN_PX = 220;

    var HTMLCONTENT = {};
    // English strings ///////////////////////////////////////////////////////
    HTMLCONTENT['english'] = [
        "<div class='privacy-scanner-titlebar'>",
        "   <h1>privacy scanner</h1>",
        "   &nbsp;&nbsp;<span class='soft'>service provided by <a href='http://www.reclaimprivacy.org/facebook' target='_blank'>reclaimprivacy.org</a></span>",
        "   <span class='source'>",
        "       <span><a href='#' class='privacy-translation-english'>English</a> &middot; <a href='#' class='privacy-translation-german'>Deutsch</a> &middot; <a href='#' class='privacy-translation-italian'>Italiano</a> &middot; <a href='#' class='privacy-translation-french'>Fran&ccedil;ais</a></span>",
        "   </span>",
        "</div>",

        "<div class='wrongdomain-splash'>",
        "   After adding the bookmark, you must <a href='http://www.facebook.com/settings/?tab=privacy&ref=mb'>go to your Facebook privacy settings</a>, and <strong>once you are on Facebook</strong> run this privacy scanner again.",
        "   <a class='close' href='#'>x</a>",
        "</div>",

        // Scanners for V1 of the Facebook Privacy Interface
        "<div class='scanners scanners-v1'>",

        // Photo Album privacy scanner UI
        "       <div class='scanner-photoalbum state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;fixing&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scanning&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;insecure&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;secure&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;caution&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>photo album privacy information...</span></span>",
        "           <span class='content fixing'><span class='soft'>photo albums to friends-only...</span></span>",
        "           <span class='content insecure'>some of your photos are exposed outside your friend circle, you should tweak your <a href='http://www.facebook.com/privacy/?view=photos' target='_blank'>photo settings</a> and then <a class='privacy-rescan-photoalbum uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content caution'>some of your photos are exposed outside your friend circle, you should tweak your <a href='http://www.facebook.com/privacy/?view=photos' target='_blank'>photo settings</a> and then <a class='privacy-rescan-photoalbum uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content good'><span class='soft'>all of your photos are restricted to your friends or closer</span></span>",
        "       </div>",

        // Instant Personalization scanner UI
        "       <div class='state-inprogress scanner-instantpersonalization'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;fixing&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scanning&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;insecure&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;secure&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;caution&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scanning Instant Personalization settings...</span></span>",
        "           <span class='content fixing'><span class='soft'>fixing Instant Personalization settings...</span></span>",
        "           <span class='content insecure'><a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=instant_personalization'>Instant Personalization</a> is currently sharing personal information with non-Facebook websites. <a class='action-optoutinstantpersonalization uiButton uiButtonConfirm' href='#'>Opt-out of Instant Personalization</a></span>",
        "           <span class='content caution'><a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=instant_personalization'>Instant Personalization</a> is currently sharing personal information with non-Facebook websites. <a class='action-optoutinstantpersonalization uiButton uiButtonConfirm' href='#'>Opt-out of Instant Personalization</a></span>",
        "           <span class='content good'><span class='soft'>you are opted-out of the Instant Personalization feature</span></span>",
        "       </div>",

        // Personal Information scanner UI
        "       <div class='scanner-personalinfo state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;fixing&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scanning&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;insecure&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;secure&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;caution&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scanning personal information and posts...</span></span>",
        "           <span class='content fixing'><span class='soft'>locking personal information and posts to friends-only...</span></span>",
        "           <span class='content insecure'>some of your personal information and posts are exposed, you should tweak <a href='http://www.facebook.com/settings/?tab=privacy&section=personal_content' target='_blank'>personal settings</a> and then <a class='privacy-rescan-personalinfo uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content caution'>some of your personal information and posts are exposed, you should tweak <a href='http://www.facebook.com/settings/?tab=privacy&section=personal_content' target='_blank'>personal settings</a> and then <a class='privacy-rescan-personalinfo uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content good'><span class='soft'>all of your personal information and posts are restricted to your friends or closer</span></span>",
        "       </div>",

        // Contact Information scanner UI
        "       <div class='scanner-contactinfo state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;fixing&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scanning&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;insecure&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;secure&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;caution&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scanning contact information...</span></span>",
        "           <span class='content fixing'><span class='soft'>locking contact information to friends-only...</span></span>",
        "           <span class='content insecure'>some contact info might be exposed to more people than you expected, go and check your <a href='http://www.facebook.com/settings/?tab=privacy&section=contact' target='_blank'>contact settings</a> and if you decide to change anything then <a class='privacy-rescan-contactinfo uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content caution'>some contact info might be exposed to more people than you expected, go and check your <a href='http://www.facebook.com/settings/?tab=privacy&section=contact' target='_blank'>contact settings</a>, and if you decide to change anything then <a class='privacy-rescan-contactinfo uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content good'><span class='soft'>all of your contact information is at restricted to your friends or closer</span></span>",
        "       </div>",

        // Friends/Tags/Connections Information scanner UI
        "       <div class='scanner-friendstagsconnections state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;fixing&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scanning&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;insecure&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;secure&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;caution&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scanning friends, tags, and connections information...</span></span>",
        "           <span class='content fixing'><span class='soft'>locking friends, tags, and connections information to friends-only...</span></span>",
        "           <span class='content insecure'>some of your friends, tags, and connections information is exposed, you should tweak your <a href='http://www.facebook.com/settings/?tab=privacy&section=profile_display' target='_blank'>friends, tags, and connections settings</a> and then <a class='privacy-rescan-friendstagsconnections uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content caution'>some of your friends, tags, and connections information is exposed, you should tweak <a href='http://www.facebook.com/settings/?tab=privacy&section=profile_display' target='_blank'>friends, tags, and connections settings</a> and then <a class='privacy-rescan-friendstagsconnections uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content good'><span class='soft'>all of your friends, tags, and connections information is restricted to your friends or closer</span></span>",
        "       </div>",

        // Friend Sharing scanner UI
        "       <div class='scanner-friendsharing state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;fixing&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scanning&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;insecure&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;secure&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;caution&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scanning friendship sharing settings...</span></span>",
        "           <span class='content fixing'><span class='soft'>fixing friendship sharing settings...</span></span>",
        "           <span class='content insecure'>your friends can <a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=friends_share'>accidentally share</a> your personal information. <a class='action-disablefriendsharing uiButton uiButtonConfirm' href='#'>Prevent friends from sharing your data</a></span>",
        "           <span class='content caution'>your friends can <a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=friends_share'>accidentally share</a> your personal information. <a class='action-disablefriendsharing uiButton uiButtonConfirm' href='#'>Prevent friends from sharing your data</a></span>",
        "           <span class='content good'><span class='soft'>your friends are protected from accidentally sharing your personal information</span></span>",
        "       </div>",

        // Blocked Apps scanner UI
        "       <div class='scanner-blockedapps state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;fixing&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scanning&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;insecure&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;secure&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;caution&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scanning blocked applications...</span></span>",
        "           <span class='content fixing'><span class='soft'>blocking applications...</span></span>",
        "           <span class='content insecure'>certain websites can automatically access personal information. <a class='action-blockdocs uiButton uiButtonConfirm' href='#'>Block Microsoft Docs</a>, <a class='action-blockpandora uiButton uiButtonConfirm' href='#'>Block Pandora</a>, and<a class='action-blockyelp uiButton uiButtonConfirm' href='#'>Block Yelp</a>.</span>",
        "           <span class='content caution'>certain websites can automatically access personal information. <a class='action-blockdocs uiButton uiButtonConfirm' href='#'>Block Microsoft Docs</a>, <a class='action-blockpandora uiButton uiButtonConfirm' href='#'>Block Pandora</a>, and<a class='action-blockyelp uiButton uiButtonConfirm' href='#'>Block Yelp</a>.</span>",
        "           <span class='content good'><span class='soft'>you have blocked all known applications that could leak your personal information</span></span>",
        "       </div>",

        "</div>",

        // Scanners for V2 of the Facebook Privacy Interface
        "<div class='scanners scanners-v2'>",

        // Basic Directory Information scanner UI (v2)
        "       <div class='scanner-basicdirinfo state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;fixing&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scanning&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;insecure&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;secure&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;caution&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scanning contact information (v2)...</span></span>",
        "           <span class='content fixing'><span class='soft'>locking contact information to friends-only...</span></span>",
        "           <span class='content insecure'>some contact info might be exposed to more people than you expected, go and check your <a class='scanner-section-replacement-basic' href='#' target='_blank'>contact settings</a> and if you decide to change anything then <a class='privacy-rescan-basicdirinfo uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content caution'>some contact info (<span class='scanner-basicdirinfo-extra-info'></span>) might be exposed to more people than you expected, go and check your <a class='scanner-section-replacement-basic' href='#' target='_blank'>contact settings</a>, and if you decide to change anything then <a class='privacy-rescan-basicdirinfo uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content good'><span class='soft'>all of your contact information is at restricted to your friends or closer</span></span>",
        "       </div>",

        // Photo Album privacy scanner UI (v2)
        "       <div class='scanner-photoalbum state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;fixing&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scanning&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;insecure&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;secure&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;caution&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>photo album privacy information...</span></span>",
        "           <span class='content fixing'><span class='soft'>photo albums to friends-only...</span></span>",
        "           <span class='content insecure'>some of your photos (<span class='scanner-photoalbum-extra-info'></span>) are exposed outside your friend circle, you should tweak your <a href='http://www.facebook.com/privacy/?view=photos' target='_blank'>photo settings</a> and then <a class='privacy-rescan-photoalbum uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content caution'>some of your photos (<span class='scanner-photoalbum-extra-info'></span>) are exposed outside your friend circle, you should tweak your <a href='http://www.facebook.com/privacy/?view=photos' target='_blank'>photo settings</a> and then <a class='privacy-rescan-photoalbum uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content good'><span class='soft'>all of your photos are restricted to your friends or closer</span></span>",
        "       </div>",

        // Privacy settings scanner UI (v2)
        "       <div class='scanner-privacysettings state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;fixing&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scanning&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;insecure&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;secure&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;caution&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>generic privacy information...</span></span>",
        "           <span class='content fixing'><span class='soft'>photo albums to friends-only...</span></span>",
        "           <span class='content insecure'>some of your privacy settings (<span class='scanner-privacysettings-extra-info'></span>) are exposed outside your friend circle, you should tweak your <a class='scanner-section-replacement-custom' href='#' target='_blank'>privacy settings</a> and then <a class='privacy-rescan-privacysettings uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content caution'>some of your privacy settings (<span class='scanner-privacysettings-extra-info'></span>) are exposed outside your friend circle, you should tweak your <a class='scanner-section-replacement-custom' href='#' target='_blank'>privacy settings</a> and then <a class='privacy-rescan-privacysettings uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content good'><span class='soft'>all of your privacy settings are restricted enough</span></span>",
        "       </div>",

        "   <div class='note'>",
        "       You have the new Facebook settings.  This is an early version of our new compatibility, so please be patient if it doesn't work yet. <br/><strong>Please",
        "       <a href='http://www.facebook.com/pages/Reclaim-Privacy/121897834504447?v=app_4949752878' target='_blank'>follow our Facebook page</a>",
        "       to hear about compatibility updates to this privacy scanner.</strong>",
        "   </div>",

        "</div>",

        // loading interface
        "<div class='scanners scanners-loading'>",
        "   <div class='banner'>loading privacy scanner, should only take a moment...</div>",
        "</div>",

        // common footer
        "<div class='privacy-scanner-footer'>",
        "   tell your friends to protect their privacy too",
        "   <a class='scanner-footer-button uiButton uiButtonConfirm' href='http://www.facebook.com/pages/Reclaim-Privacy/121897834504447?v=app_4949752878' target='_blank'>follow us for updates</a>",
        '   <a name="fb_share" type="button_count" share_url="http://www.reclaimprivacy.org/facebook" href="http://www.facebook.com/sharer.php">Share</a><script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>',
        "   <a class='scanner-footer-button close-privacy-scanner uiButton uiButtonConfirm' href='#'>done</a>",
        "</div>",

        "<div class='privacy-scanner-status'>working...</div>",

        ""
    ].join('');

    // Import translations, if available
    if (typeof(TRANSLATIONS) != "undefined") {
        for (lang in TRANSLATIONS) {
            HTMLCONTENT[lang] = TRANSLATIONS[lang];
        }
    }

    // helper to set a translation
    var previousLanguage = null;
    var setInterfaceTranslation = function(newLanguage){
        if (previousLanguage) {
            $('.privacy-scanner').removeClass('language-' + previousLanguage);
        }
        $('.privacy-scanner').addClass('language-' + newLanguage);
        previousLanguage = newLanguage;
    };

    // helper that detects the language desired, and returns the translation
    // that should be used
    var determineProperLocalization = function(resultCallback){
        // we do this in an async fashion for now, so that if we find it is
        // better to use the Facebook localization (instead of the browser
        // localization), we can do that easily with AJAX calls
        try {
            var language = navigator.language ? navigator.language :
                                                navigator.userLanguage;
            var languageCode = language.substring(0, 2);
            switch(languageCode){
                case 'it':
                    resultCallback('italian');
                    break;
                case 'de':
                    resultCallback('german');
                    break;
                case 'fr':
                    resultCallback('french');
                    break;
                case 'en':
                default:
                    resultCallback('english');
                    break;
            }
        } catch(e) {
            resultCallback('english');
        }
    };

    // display/hide the interface
    var showPrivacyScannerInterface = function(){
        $('#globalContainer').addClass('globalContainer-shifted');
        $('.privacy-scanner').addClass('privacy-scanner-shown');
    };
    var hidePrivacyScannerInterface = function(){
        $('#globalContainer').removeClass('globalContainer-shifted');
        $('.privacy-scanner').removeClass('privacy-scanner-shown');
    };

    // controller that manages our UX indicators
    var indicatorController = {};
    (function(c){

        // helpers for changing scanner state
        var showScannerDomAsScanning = function(dom){
            dom.each(function(){$(this).removeClass('state-insecure');});
            dom.each(function(){$(this).removeClass('state-good');});
            dom.each(function(){$(this).addClass('state-inprogress');});
            dom.each(function(){$(this).removeClass('state-caution');});
            dom.each(function(){$(this).removeClass('state-fixing');});
        };
        var showScannerDomAsGood = function(dom){
            dom.each(function(){$(this).removeClass('state-insecure');});
            dom.each(function(){$(this).addClass('state-good');});
            dom.each(function(){$(this).removeClass('state-inprogress');});
            dom.each(function(){$(this).removeClass('state-caution');});
            dom.each(function(){$(this).removeClass('state-fixing');});
        };
        var showScannerDomAsInsecure = function(dom){
            dom.each(function(){$(this).addClass('state-insecure');});
            dom.each(function(){$(this).removeClass('state-good');});
            dom.each(function(){$(this).removeClass('state-inprogress');});
            dom.each(function(){$(this).removeClass('state-caution');});
            dom.each(function(){$(this).removeClass('state-fixing');});
        };
        var showScannerDomAsCaution = function(dom){
            dom.each(function(){$(this).removeClass('state-insecure');});
            dom.each(function(){$(this).removeClass('state-good');});
            dom.each(function(){$(this).removeClass('state-inprogress');});
            dom.each(function(){$(this).addClass('state-caution');});
            dom.each(function(){$(this).removeClass('state-fixing');});
        };
        var showScannerDomAsFixing = function(dom){
            dom.each(function(){$(this).removeClass('state-insecure');});
            dom.each(function(){$(this).removeClass('state-good');});
            dom.each(function(){$(this).removeClass('state-inprogress');});
            dom.each(function(){$(this).removeClass('state-caution');});
            dom.each(function(){$(this).addClass('state-fixing');});
        };

        // shows we are fixing Instant Personalization
        c.showFixingInstantPersonalization = function(){
            var scannerDom = $('.scanner-instantpersonalization');
            showScannerDomAsFixing(scannerDom);
        };

        // shows we are fixing friendship leaks
        c.showFixingFriendSharing = function(){
            var scannerDom = $('.scanner-friendsharing');
            showScannerDomAsFixing(scannerDom);
        };

        // shows we are fixing Blocked Apps
        c.showFixingBlockedApps = function(){
            var scannerDom = $('.scanner-blockedapps');
            showScannerDomAsFixing(scannerDom);
        };

        // runs all scans at once
        c.refreshAll = function(){
            debug('Before refreshPhotoAlbumPrivacy');
            c.refreshPhotoAlbumPrivacy();
            debug('Before refreshInstantPersonalization');
            c.refreshInstantPersonalization();
            debug('Before refreshFriendSharing');
            c.refreshFriendSharing();
            debug('Before refreshBlockedApps');
            c.refreshBlockedApps();
            debug('Before refreshPersonalInfoPrivacy');
            c.refreshPersonalInfoPrivacy();
            debug('Before refreshContactInfoPrivacy');
            c.refreshContactInfoPrivacy();
            debug('Before refreshFriendsTagsConnectionsPrivacy');
            c.refreshFriendsTagsConnectionsPrivacy();
        };

        // runs all the scans for v2 of the settings
        c.refreshAllForV2 = function(){
            c.refreshBasicDirectoryInfo();
            c.refreshPhotoAlbumPrivacy();
            c.refreshPrivacySettings();
        };

        // scans for Instant Personalization
        c.refreshInstantPersonalization = function(){
            var scannerDom = $('.scanner-instantpersonalization');
            showScannerDomAsScanning(scannerDom);
            scanningController.isInstantPersonalizationEnabled(function(yes){
                if (yes) {
                    showScannerDomAsInsecure(scannerDom);
                } else {
                    showScannerDomAsGood(scannerDom);
                }
            });
        };

        // scans for friendship leaks
        c.refreshFriendSharing = function(){
            var scannerDom = $('.scanner-friendsharing');
            showScannerDomAsScanning(scannerDom);
            scanningController.isFriendSharingLoose(function(yes){
                if (yes) {
                    showScannerDomAsInsecure(scannerDom);
                } else {
                    showScannerDomAsGood(scannerDom);
                }
            });
        };

        // scans for blocked applications
        c.refreshBlockedApps = function(){
            var scannerDom = $('.scanner-blockedapps');
            showScannerDomAsScanning(scannerDom);
            scanningController.getListOfBlockedApps(function(apps){
                debug("blocked apps: ", apps);
                // FIXME: this test is broken
                var neededApps = {};
                $.extend(true, neededApps, BLOCKABLE_APPS);
                $(apps).each(function(){
                    var app = this;
                    neededApps[app.name] = null;
                });
                var someAppsAreNotBlocked = false;
                $(neededApps).each(function(){
                    var key = this;
                    if (neededApps[key]) {
                        someAppsAreNotBlocked = true;
                    }
                });
                if (someAppsAreNotBlocked) {
                    debug("still apps remaining to be blocked.");
                    showScannerDomAsCaution(scannerDom);
                } else {
                    debug("all apps are blocked now.");
                    showScannerDomAsGood(scannerDom);
                }
            });
        };

        // scans for personal info privacy
        c.refreshPersonalInfoPrivacy = function(){
            var scannerDom = $('.scanner-personalinfo');
            showScannerDomAsScanning(scannerDom);
            scanningController.getPersonalInformationSettings(function(isSafe){
                if (isSafe) {
                    showScannerDomAsGood(scannerDom);
                } else {
                    showScannerDomAsCaution(scannerDom);
                }
            });
        };

        // scans for contact info privacy
        c.refreshContactInfoPrivacy = function(){
            var scannerDom = $('.scanner-contactinfo');
            showScannerDomAsScanning(scannerDom);
            scanningController.getContactInformationSettings(function(isSafe){
                if (isSafe) {
                    showScannerDomAsGood(scannerDom);
                } else {
                    showScannerDomAsCaution(scannerDom);
                }
            });
        };

        // scans for personal info + connections privacy
        c.refreshFriendsTagsConnectionsPrivacy = function(){
            var scannerDom = $('.scanner-friendstagsconnections');
            showScannerDomAsScanning(scannerDom);
            scanningController.getFriendsTagsConnectionsSettings(function(isSafe){
                if (isSafe) {
                    showScannerDomAsGood(scannerDom);
                } else {
                    showScannerDomAsCaution(scannerDom);
                }
            });
        };

        c._genericRefresh = function(options){
            var scannerDomSelector   = '.' + options.baseName;
            var extraInfoDomSelector = '.' + options.baseName + '-extra-info';
            var scannerDom   = $(scannerDomSelector);
            var extraInfoDom = $(extraInfoDomSelector);
            showScannerDomAsScanning(scannerDom);
            scanningController[options.methodName](function(openSections){
                if (openSections == 0) {
                    showScannerDomAsGood(scannerDom);
                } else {
                    if (options.extraInfoFunc) {
                        options.extraInfoFunc(openSections, extraInfoDom);
                    }
                    showScannerDomAsCaution(scannerDom);
                }
            });
        };

        // scans for photo album privacy
        c.refreshPhotoAlbumPrivacy = function(){
            c._genericRefresh({'baseName':   'scanner-photoalbum',
                               'methodName': 'getPhotoAlbumSettings',
                               'extraInfoFunc': function(openSections, extraInfoDom){
                                        if (openSections == -1) {
                                            extraInfoDom.html("couldn't check photo privacy settings");
                                        } else {
                                            extraInfoDom.html(openSections + " open album(s)");
                                        }
                                   }
                              });
        };

        // scans general privacy settings
        c.refreshPrivacySettings = function(){
            var extraInfoDom = $('.scanner-privacysettings-extra-info');
            var scannerDom = $('.scanner-privacysettings');
            showScannerDomAsScanning(scannerDom);
            scanningController.getPrivacySettings(function(openSettings,
                                                           totalSettings){
                if (openSettings == 0) {
                    showScannerDomAsGood(scannerDom);
                } else {
                    if (openSettings == -1) {
                        extraInfoDom.html("couldn't check privacy settings");
                    } else {
                        extraInfoDom.html(openSettings + "/" +
                                            totalSettings +
                                            " open settings(s)");
                    }
                    showScannerDomAsCaution(scannerDom);
                }
            });
        };

        // scans for Basic Directory Info (v2 settings)
        c.refreshBasicDirectoryInfo = function(){
            // TODO: separate DOM? or keep reusing DOM since we have translations already?
            var extraInfoDom = $('.scanner-basicdirinfo-extra-info');
            var scannerDom = $('.scanner-basicdirinfo');
            showScannerDomAsScanning(scannerDom);
            scanningController.getBasicDirectoryInfoSettings(function(openDropdowns){
                if (openDropdowns == 0) {
                    showScannerDomAsGood(scannerDom);
                } else {
                    if (openDropdowns == -1) {
                        extraInfoDom.html("could not check settings");
                    } else {
                        extraInfoDom.html(openDropdowns + " item(s)");
                    }
                    showScannerDomAsCaution(scannerDom);
                }
            });
        };

    })(indicatorController);

    // helper that builds the user interface
    function injectPrivacyToolbarInterface() {
        // build the actual CSS styling for the privacy bar
        stylingContent = [

            // position the privacy scanner bar at the top
            ".privacy-scanner {",
            "   z-index: 99999 !important;",
            "   display: none;",
            "   position: fixed !important;",
            "   left: 0px !important;",
            "   top: 0px !important;",
            "   margin: 0px !important;",
            "   padding: 0px !important;",
            "   height: " + BAR_HEIGHT_IN_PX + "px !important;",
            "   width: 100% !important;",
            "   background-color: #EDEFF4 !important;",
            "   border-bottom: 1px solid #314371 !important;",
            "   -webkit-box-shadow: 0px 2px 10px #081623 !important;",
            "}",

            // make the Facebook-blue titlebar (above the scanners) look nice
            ".privacy-scanner .privacy-scanner-titlebar {",
            "   background-color: #3B5998 !important;",
            "   color: white;",
            // "   border-bottom: 1px solid #081623 !important;",
            // "   -webkit-box-shadow: 0px 4px 25px #081623 !important;",
            "   padding: 5px 5px 10px 5px !important;",
            "}",

            ".privacy-scanner .privacy-scanner-titlebar h1 {",
            "   display: inline !important;",
            "   color: white !important;",
            "}",

            ".privacy-scanner .privacy-scanner-titlebar .source {",
            "   position: absolute !important;",
            "   top: 0px !important;",
            "   right: 0px !important;",
            "   padding: 8px !important;",
            "}",

            ".privacy-scanner .privacy-scanner-titlebar .soft {",
            "   color: #748BD3 !important;",
            "}",

            ".privacy-scanner .privacy-scanner-titlebar a {",
            "   color: #B4BFFF !important;",
            "}",

            // make the footer look small and unassuming
            ".privacy-scanner .privacy-scanner-footer {",
            "   position: absolute !important;",
            "   bottom: 0px !important;",
            "   right: 0px !important;",
            "   padding: 5px !important;",
            "   color: #999 !important;",
            "}",

            // have a "softer" coloring for nonimportant text
            ".privacy-scanner .soft {",
            "   color: #aaa !important;",
            "}",

            // vertically center the "done" button
            ".scanner-footer-button {",
            "   margin-bottom: 2px;",
            "   padding-bottom: 1px;",
            "}",

            // style the "status" bar (the black bar that fades in/out)
            ".privacy-scanner-status {",
            "   display: none !important;", // used !important to disable display of the status bar for now
            "   position: absolute !important;",
            "   left: 0px !important;",
            "   bottom: -30px !important;",
            "   height: 20px !important;",
            "   width: 100% !important;",
            "   margin: 0px !important;",
            "   padding: 5px !important;",
            "   background-color: black !important;",
            "   color: white !important;",
            "   text-align: center !important;",
            "   opacity: 0.85;",
            "}",

            // when not running this on facebook, we style the .wrongdomain-splash div
            ".privacy-scanner .wrongdomain-splash {",
            "    padding: 50px 50px 0px 50px;",
            "    display: none;",
            "    font-size: 1.6em;",
            "    text-align: center;",
            "}",

            ".privacy-scanner .wrongdomain-splash .close {",
            "   display: block;",
            "   position: absolute;",
            "   top: 5px;",
            "   right: 5px;",
            "   font-size: 12pt;",
            "   font-family: monospace;",
            "   text-decoration: none;",
            "   padding: 7px 10px 7px 10px;",
            "   background-color: #425995;",
            "   color: white;",
            "}",

            // the scanners container has some padding
            ".privacy-scanner .scanners {",
            "   padding: 10px !important;",
            "}",

            // indicators are little boxes that read (on the left):
            // "good", "caution", "insecure", "scanning", "fixing"
            ".privacy-scanner .indicator {",
            "   font-family: monospace !important;",
            "   font-style: italic !important;",
            "   padding: 1px 0px 1px 0px !important;",
            "   margin-right: 5px;",
            "   line-height: 2.0em !important;",
            "   -webkit-box-shadow: 0px 0px 3px #081623 !important;",
            "}",

            // tweak the Facebook uiButton a bit to look nicer on the lines
            // with the scanner details
            ".privacy-scanner .scanners .uiButton {",
            // "   margin-bottom: 0.5em !important;",
            "}",

            ".privacy-scanner .source .uiButton {",
            "   margin-bottom: 0.2em !important;",
            "}",

            // give distinct colors to each scanner indicator
            // ("good", "caution", "insecure", "scanning", "fixing")
            ".privacy-scanner .indicator-good {",
            "   border: 1px solid #194109 !important;",
            "   background-color: #338013 !important;",
            "   color: #62FF25 !important;",
            "}",

            ".privacy-scanner .indicator-caution {",
            "   border: 1px solid #634A11 !important;",
            "   background-color: #9C7018 !important;",
            "   color: #FFB528 !important;",
            "}",

            ".privacy-scanner .indicator-insecure {",
            "   border: 1px solid #69100D !important;",
            "   background-color: #AD1A14 !important;",
            "   color: #FF281F !important;",
            "}",

            ".privacy-scanner .indicator-inprogress {",
            "   border: 1px solid #0B1C2E !important;",
            "   background-color: #0F2439 !important;",
            "   color: #409FFF !important;",
            "}",

            ".privacy-scanner .indicator-fixing {",
            "   border: 1px solid black !important;",
            "   background-color: #444 !important;",
            "   color: #ccc !important;",
            "}",

            // make sure our scanner states only show the ACTIVE state, and
            // hide the INACTIVE state
            ".privacy-scanner .state-inprogress .fixing,",
            ".privacy-scanner .state-inprogress .insecure,",
            ".privacy-scanner .state-inprogress .caution,",
            ".privacy-scanner .state-inprogress .good {",
            "   display: none !important",
            "}",

            ".privacy-scanner .state-insecure .fixing,",
            ".privacy-scanner .state-insecure .inprogress,",
            ".privacy-scanner .state-insecure .caution,",
            ".privacy-scanner .state-insecure .good {",
            "   display: none !important",
            "}",

            ".privacy-scanner .state-caution .fixing,",
            ".privacy-scanner .state-caution .inprogress,",
            ".privacy-scanner .state-caution .insecure,",
            ".privacy-scanner .state-caution .good {",
            "   display: none !important",
            "}",

            ".privacy-scanner .state-good .fixing,",
            ".privacy-scanner .state-good .inprogress,",
            ".privacy-scanner .state-good .insecure,",
            ".privacy-scanner .state-good .caution {",
            "   display: none !important",
            "}",

            ".privacy-scanner .state-fixing .inprogress,",
            ".privacy-scanner .state-fixing .insecure,",
            ".privacy-scanner .state-fixing .good,",
            ".privacy-scanner .state-fixing .caution {",
            "   display: none !important",
            "}",

            // make sure our testing frames are hidden from view
            "iframe.utility-frame {display: none !important;}",

            // make sure the Facebook globalContainer is shifted down enough to not conflict
            // with our privacy bar, and then inject our privacy bar in there
            // TODO: consider a nice slide-in animation
            ".globalContainer-shifted {",
            "   margin-top: " + BAR_HEIGHT_IN_PX + "px !important;",
            "}",

            ".privacy-scanner-shown {display: block !important;}",

            // handle the new Facebook settings
            ".privacy-scanner .scanners-loading {display: none;}",
            ".privacy-scanner .scanners-v1 {display: none;}",
            ".privacy-scanner .scanners-v2 {display: none;}",
            ".scanner-version-loading .scanners-loading {display: block !important;}",
            ".scanner-version-v1 .scanners-v1 {display: block !important;}",
            ".scanner-version-v2 .scanners-v2 {display: block !important;}",

            // nice class for showing a note inside the scanner
            ".scanners .note {",
            "   border: 1px solid #9C7018;",
            "   background-color: #FCF0BA;",
            "   padding: 10px;",
            "   margin: 10px 0px 10px 0px;",
            "}",

            // nice class for showing a banner inside the scanner
            ".scanners .banner {",
            "   text-align: center;",
            "   color: #999;",
            "   font-size: 20px;",
            "   margin: 50px 0px 0px 0px;",
            "}",

            ""
        ].join('');

        // enable translation swapping by creating the HTML content and setting
        // custom CSS for the swaps
        var translationsCss = '';
        var translationsHtml = '';
        var possibleLanguageNames = [];
        for (var languageName in HTMLCONTENT) {
            // create the HTML DOM for each language
            if (typeof HTMLCONTENT[languageName] != 'function') {
                possibleLanguageNames.push(languageName);
                translationsHtml += '<div class="language-' + languageName + '">' + HTMLCONTENT[languageName] + '</div>';
            }
        }
        for (var thisNameIndex=0; thisNameIndex<possibleLanguageNames.length; thisNameIndex++) {
            // create the CSS for each language
            var thisLanguageName = possibleLanguageNames[thisNameIndex];
            translationsCss += '.language-' + thisLanguageName + ' .language-' + thisLanguageName + ' {display: block;}\n';
            for (var otherNameIndex=0; otherNameIndex<possibleLanguageNames.length; otherNameIndex++){
                var otherLanguageName = possibleLanguageNames[otherNameIndex];
                if (otherLanguageName != thisLanguageName) {
                    translationsCss += '.language-' + thisLanguageName + ' .language-' + otherLanguageName + ' {display: none;}\n';
                }
            }
        }

        // kill the scanners section when not being displayed on facebook
        if (!isOnFacebook()) {
            stylingContent += ".privacy-scanner .wrongdomain-splash {display: block;}";
            stylingContent += ".privacy-scanner .scanners {display: none !important;}";
            stylingContent += ".privacy-scanner .privacy-scanner-titlebar {display: none;}";
            stylingContent += ".privacy-scanner .privacy-scanner-footer {display: none;}";
        }

        // add the translations CSS styles
        stylingContent += translationsCss;

        // append our styling information into the <head> tag
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        if (style.styleSheet) {
            style.styleSheet.cssText = stylingContent;
        } else {
            $(style).text(stylingContent);
        }
        $('head').append(style);
        $('body').append($('<div class="privacy-scanner-padding"></div>'));
        $('body').append($('<div class="privacy-scanner"></div>'));

        // set the translation we will use (before we add in the DOM, avoiding interface "popping")
        setInterfaceTranslation('english');

        // now we can set the translation DOM
        $('.privacy-scanner').html(translationsHtml);
    }

    // execute our loading callack (if it exists)
    if (window.__facebook_privacy_load_callback) {
        // a custom load callback was set, use that instead of
        // the default loading
        var loadCallback = window.__facebook_privacy_load_callback;
        window.__facebook_privacy_load_callback = null;
        loadCallback();
    } else {
        // no alternative loading callback was given, use default loading...
        // inject the actual DOM interface
        injectPrivacyToolbarInterface();
        $('.privacy-rescan-personalinfo').click(function(){
            indicatorController.refreshPersonalInfoPrivacy();
            return false;
        });
        $('.privacy-rescan-contactinfo').click(function(){
            indicatorController.refreshContactInfoPrivacy();
            return false;
        });
        $('.privacy-rescan-friendstagsconnections').click(function(){
            indicatorController.refreshFriendsTagsConnectionsPrivacy();
            return false;
        });
        $('.privacy-rescan-photoalbum').click(function(){
            indicatorController.refreshPhotoAlbumPrivacy();
            return false;
        });

        // make sure the close button works
        $('.close-privacy-scanner, .wrongdomain-splash .close').click(function(){
            debug("closing privacy scanner...");
            hidePrivacyScannerInterface();
            return false;
        });

        // link up V2 scan buttons
        $('.privacy-rescan-basicdirinfo').click(function(){
            indicatorController.refreshBasicDirectoryInfo();
            return false;
        });

        // allow translations to be selected
        for (var languageName in HTMLCONTENT) {
            if (typeof HTMLCONTENT[languageName] != 'function') {
                (function(frozenLanguageName){
                    $('.privacy-translation-' + frozenLanguageName).click(function(){
                        setInterfaceTranslation(frozenLanguageName);
                    });
                })(languageName);
            }
        }

        // helper that fixes up all the V2 UI with URLs (since they are now signed)
        var updateV2Urls = function(){
            $(['basic', 'custom']).each(function(){
                var section = this;
                getUrlForV2Section(section, function(url){
                    var anchors = $('.scanner-section-replacement-' + section);
                    anchors.attr('href', url);
                });
            });
        };

        // make sure default loading of this javascript refreshes our indicators
        var refreshAndScheduleFutureRefresh = function(){
            debug("refreshing and scheduling future refresh...");
            window.__facebook_privacy_load_callback = refreshAndScheduleFutureRefresh;
            $('.privacy-scanner').addClass('scanner-version-loading');
            showPrivacyScannerInterface();
            if (isOnFacebook()) {
                updateV2Urls();
                indicatorController.refreshAllForV2();
            }
            $('.privacy-scanner').removeClass('scanner-version-loading');
            $('.privacy-scanner').addClass('scanner-version-v2');
        };
        determineProperLocalization(function(language){
            setInterfaceTranslation(language);
            refreshAndScheduleFutureRefresh();
        });
    }

})(jQuery.noConflict());
