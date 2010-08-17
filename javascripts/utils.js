/*!
 * ReclaimPrivacy JavaScript Library
 * http://www.reclaimprivacy.org/
 *
 * Copyright 2010, ReclaimPrivacy.org
 * Licensed under the GPL Version 2 license
 */

var MAX_RETRIES_FOR_FRAMEWINDOW_DOCUMENT = 4;
var FRAME_JAVASCRIPT_LOAD_DELTA_IN_MILLISECONDS = 3000;

function debug() {
    try {
        if (opera && opera.postError) {
            var string = "";
            for (var i in arguments) {
                string += arguments[i];
            }
            opera.postError(string);
        } else {
            window.console.debug.apply(console, arguments);
        }
    } catch(e) {}
}

function _extractUrlsFromPrivacySettingsPage(html, sectionName, responseHandler) {
    // find 'basic' section URL
    var privacyAnchors = jQuery('.fbPrivacyPage a', html);
    privacyAnchors.each(function(){
        var anchor = jQuery(this);
        var href = anchor.attr ? anchor.attr('href') : anchor;
        var regExp = new RegExp(".*section=" + sectionName + ".*");
        if (regExp.test(href)){
            debug("setting section for '" + sectionName + " (href=", href, ")");
            urlForSection[sectionName] = href;
        }
    });
    responseHandler(urlForSection[sectionName]);
}

var urlForSection = {};
function getUrlForV2Section(sectionName, responseHandler, options) {
    if (urlForSection[sectionName]) {
        // already cached, just respond with it
        responseHandler(urlForSection[sectionName]);
    } else {
        if (options && options.test) {
            _extractUrlsFromPrivacySettingsPage(options.test, sectionName, responseHandler);
        } else {
            // need to grab the signed URLs first (and cache them)
            jQuery.ajax({
                type: 'GET',
                url: 'http://www.facebook.com/settings/?tab=privacy',
                success: function(html){
                    _extractUrlsFromPrivacySettingsPage(html, sectionName, responseHandler);
                },
                error: function(){
                    debug("failed to load main privacy tab for analysis.");
                    responseHandler(false);
                }
            });
        }
    }
}

// helper that returns true if we are on facebook.com
function isOnFacebook() {
    return /(facebook.com)/.test(document.location.toString());
}

// helper to deal with a Facebook page inside an iframe
function withFramedPageOnFacebook(source, handler) {
    if (typeof(source) == 'string') {
        // Assume URL
        if (isOnFacebook()) {
            loadUrlInIframe(source, handler);
        } else {
            debug("cannot perform checks on a non-Facebook URL");
        }
    } else if (typeof(source) == 'function') {
        handler(source());
    } else {
        handler(source);
    }
}

function loadUrlInIframe(url, handler) {
    debug("loading framed page ", url, "...");
    var iframe = jQuery('<iframe/>');
    jQuery('body').append(iframe);
    jQuery(iframe).load(function(){
        debug("framed page ", url, " loaded...");
        var tries = 0;
        var tryToCallHandlerAndRetryAfterWaiting = function(){
            // ensure the document works
            try {
                debug("trying to handle loaded framed page ", url, "...");
                var frameWindow = iframe[0].contentWindow;
                jQuery(frameWindow.document);
                handler(frameWindow);
            } catch(e) {
                // failed, reschedule another try
                tries += 1;
                if (tries < MAX_RETRIES_FOR_FRAMEWINDOW_DOCUMENT) {
                    debug("failed to load page, retrying...");
                    setTimeout(tryToCallHandlerAndRetryAfterWaiting, FRAME_JAVASCRIPT_LOAD_DELTA_IN_MILLISECONDS);
                } else {
                    debug("failed to load page, done retrying, just moving forward as a failsafe.");
                    var frameWindow = iframe[0].contentWindow;
                    handler(frameWindow);
                }
            }
        };
        setTimeout(tryToCallHandlerAndRetryAfterWaiting, FRAME_JAVASCRIPT_LOAD_DELTA_IN_MILLISECONDS);
    });
    jQuery(iframe).attr('src', url);
    jQuery(iframe).addClass('utility-frame');
}
