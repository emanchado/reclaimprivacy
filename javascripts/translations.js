var TRANSLATIONS = new Object;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //              GERMAN
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    TRANSLATIONS.german = [
        "<div class='privacy-scanner-titlebar'>",
        " <h1>Datenschutz-Scanner</h1>",
        " &nbsp;&nbsp;<span class='soft'>von <a href='http://www.reclaimprivacy.org/facebook' target='_blank'>reclaimprivacy.org</a></span>",
        " <span class='source'>",
        " <span><a href='#' class='privacy-translation-english'>English</a> &middot; <a href='#' class='privacy-translation-german'>Deutsch</a> &middot; <a href='#' class='privacy-translation-italian'>Italiano</a> &middot; <a href='#' class='privacy-translation-french'>Fran&ccedil;ais</a></span>",
        " </span>",
        "</div>",

        "<div class='wrongdomain-splash'>",
        " Um den Datenschutz-Scanner zu nutzen, musst du auf <a href='http://www.facebook.com/settings/?tab=privacy&ref=mb'>Facebook</a> angemeldet sein.",
        " <a class='close' href='#'>x</a>",
        "</div>",

        // Scanners for V1 of the Facebook Privacy Interface
        "<div class='scanners scanners-v1'>",

        // Photo Album privacy scanner UI
        // FIXME: translate this to German
        "       <div class='scanner-photoalbum state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;repariert&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;&nbsp;&nbsp;pr&uuml;ft&nbsp;&nbsp;&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;unsicher&nbsp;&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;&nbsp;gut&nbsp;&nbsp;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;&nbsp;Achtung&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>photo album privacy information...</span></span>",
        "           <span class='content fixing'><span class='soft'>photo albums to friends-only...</span></span>",
        "           <span class='content insecure'>some of your photos are exposed outside your friend circle, you should tweak your <a href='http://www.facebook.com/privacy/?view=photos' target='_blank'>photo settings</a> and then <a class='privacy-rescan-photoalbum uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content caution'>some of your photos are exposed outside your friend circle, you should tweak your <a href='http://www.facebook.com/privacy/?view=photos' target='_blank'>photo settings</a> and then <a class='privacy-rescan-photoalbum uiButton uiButtonConfirm' href='#'>Re-scan</a></span>",
        "           <span class='content good'><span class='soft'>all of your photos are restricted to your friends or closer</span></span>",
        "       </div>",

        // Instant Personalization scanner UI
        " <div class='scanner-instantpersonalization state-inprogress'>",
        " <span class='indicator fixing indicator-fixing'>&nbsp;repariert&nbsp;</span>",
        " <span class='indicator inprogress indicator-inprogress'>&nbsp;&nbsp;&nbsp;pr&uuml;ft&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator insecure indicator-insecure'>&nbsp;unsicher&nbsp;&nbsp;</span>",
        " <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;&nbsp;gut&nbsp;&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator caution indicator-caution'>&nbsp;&nbsp;Achtung&nbsp;&nbsp;</span>",

        " <span class='content inprogress'><span class='soft'>pr&uuml;ft die Umgehende Personalisierung Einstellungen...</span></span>",
        " <span class='content fixing'><span class='soft'>repariert die Umgehende Personalisierung Einstellungen...</span></span>",
        " <span class='content insecure'><a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=instant_personalization'>Umgehende Personalisierung</a> teilt momentan pers&ouml;nliche Informationen mit fremden Webseiten. <a class='action-optoutinstantpersonalization uiButton uiButtonConfirm' href='#'>Umgehende Personalisierung ausschalten</a></span>",
        " <span class='content caution'><a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=instant_personalization'>Umgehende Personalisierung</a> teilt momentan pers&ouml;nliche Informationen mit fremden Webseiten. <a class='action-optoutinstantpersonalization uiButton uiButtonConfirm' href='#'>Umgehende Personalisierung ausschalten</a></span>",
        " <span class='content good'><span class='soft'>Umgehende Personalisierung ist ausgeschaltet</span></span>",
        " </div>",

        // Personal Information scanner UI
        " <div class='scanner-personalinfo state-inprogress'>",
        " <span class='indicator fixing indicator-fixing'>&nbsp;repariert&nbsp;</span>",
        " <span class='indicator inprogress indicator-inprogress'>&nbsp;&nbsp;&nbsp;pr&uuml;ft&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator insecure indicator-insecure'>&nbsp;unsicher&nbsp;&nbsp;</span>",
        " <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;&nbsp;gut&nbsp;&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator caution indicator-caution'>&nbsp;&nbsp;Achtung&nbsp;&nbsp;</span>",

        " <span class='content inprogress'><span class='soft'>pr&uuml;ft die pers&ouml;nlichen Informationen</span></span>",
        " <span class='content fixing'><span class='soft'>macht die pers&ouml;nlichen Informationen nur f&uuml;r Freunde sichtbar...</span></span>",
        " <span class='content insecure'>einige deiner pers&ouml;nlichen Informationen sind f&uuml;r das ganze Internet sichtbar, du solltest die <a href='http://www.facebook.com/settings/?tab=privacy&section=personal_content' target='_blank'>pers&ouml;nlichen Einstellungen</a> optimieren und dann <a class='privacy-rescan-personalinfo uiButton uiButtonConfirm' href='#'>neu scannen</a></span>",
        " <span class='content caution'>einige deiner pers&ouml;nlichen Informationen sind f&uuml;r das ganze Internet sichtbar, du solltest die <a href='http://www.facebook.com/settings/?tab=privacy&section=personal_content' target='_blank'>pers&ouml;nlichen Einstellungen</a> optimieren und dann <a class='privacy-rescan-personalinfo uiButton uiButtonConfirm' href='#'>neu scannen</a></span>",
        " <span class='content good'><span class='soft'>alle deine pers&ouml;nlichen Informationen sind h&ouml;chstens f&uuml;r Freunde sichtbar</span></span>",
        " </div>",

        // Contact Information scanner UI
        " <div class='scanner-contactinfo state-inprogress'>",
        " <span class='indicator fixing indicator-fixing'>&nbsp;repariert&nbsp;</span>",
        " <span class='indicator inprogress indicator-inprogress'>&nbsp;&nbsp;&nbsp;pr&uuml;ft&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator insecure indicator-insecure'>&nbsp;unsicher&nbsp;&nbsp;</span>",
        " <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;&nbsp;gut&nbsp;&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator caution indicator-caution'>&nbsp;&nbsp;Achtung&nbsp;&nbsp;</span>",

        " <span class='content inprogress'><span class='soft'>pr&uuml;ft die Kontaktinformationen...</span></span>",
        " <span class='content fixing'><span class='soft'>macht die Kontaktinformationen nur f&uuml;r Freunde sichtbar...</span></span>",
        " <span class='content insecure'>einige deiner Kontaktinformationen sind f&uuml;r das ganze Internet sichtbar, du solltest die <a href='http://www.facebook.com/settings/?tab=privacy&section=contact' target='_blank'>Kontaktinformationen</a> optimieren und dann <a class='privacy-rescan-contactinfo uiButton uiButtonConfirm' href='#'>neu scannen</a></span>",
        " <span class='content caution'>einige deiner Kontaktinformationen sind f&uuml;r das ganze Internet sichtbar, du solltest die <a href='http://www.facebook.com/settings/?tab=privacy&section=contact' target='_blank'>Kontaktinformationen</a> optimieren und dann <a class='privacy-rescan-contactinfo uiButton uiButtonConfirm' href='#'>neu scannen</a></span>",
        " <span class='content good'><span class='soft'>alle deine Kontaktinformationen sind h&ouml;chstens f&uuml;r Freunde sichtbar</span></span>",
        " </div>",

        // Friends/Tags/Connections Information scanner UI
        " <div class='scanner-friendstagsconnections state-inprogress'>",
        " <span class='indicator fixing indicator-fixing'>&nbsp;repariert&nbsp;</span>",
        " <span class='indicator inprogress indicator-inprogress'>&nbsp;&nbsp;&nbsp;pr&uuml;ft&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator insecure indicator-insecure'>&nbsp;unsicher&nbsp;&nbsp;</span>",
        " <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;&nbsp;gut&nbsp;&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator caution indicator-caution'>&nbsp;&nbsp;Achtung&nbsp;&nbsp;</span>",

        " <span class='content inprogress'><span class='soft'>pr&uuml;ft Freunde, Markierungen und Verbindungen...</span></span>",
        " <span class='content fixing'><span class='soft'>macht Freunde, Markierungen und Verbindungen nur f&uuml;r Freunde sichtbar...</span></span>",
        " <span class='content insecure'>einige deiner Freunde, Markierungen und Verbindungen sind f&uuml;r das ganze Internet sichtbar, du solltest die <a href='http://www.facebook.com/settings/?tab=privacy&section=profile_display' target='_blank'>Freunde, Markierungen und Verbindungen Einstellungen</a> optimieren und dann <a class='privacy-rescan-friendstagsconnections uiButton uiButtonConfirm' href='#'>neu scannen</a></span>",
        " <span class='content caution'>einige deiner Freunde, Markierungen und Verbindungen sind f&uuml;r das ganze Internet sichtbar, du solltest die <a href='http://www.facebook.com/settings/?tab=privacy&section=profile_display' target='_blank'>Freunde, Markierungen und Verbindungen Einstellungen</a> optimieren und dann <a class='privacy-rescan-friendstagsconnections uiButton uiButtonConfirm' href='#'>neu scannen</a></span>",
        " <span class='content good'><span class='soft'>alle deine Freunde, Markierungen und Verbindungen sind h&ouml;chstens f&uuml;r Freunde sichtbar</span></span>",
        " </div>",

        // Friend Sharing scanner UI
        " <div class='scanner-friendsharing state-inprogress'>",
        " <span class='indicator fixing indicator-fixing'>&nbsp;repariert&nbsp;</span>",
        " <span class='indicator inprogress indicator-inprogress'>&nbsp;&nbsp;&nbsp;pr&uuml;ft&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator insecure indicator-insecure'>&nbsp;unsicher&nbsp;&nbsp;</span>",
        " <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;&nbsp;gut&nbsp;&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator caution indicator-caution'>&nbsp;&nbsp;Achtung&nbsp;&nbsp;</span>",

        " <span class='content inprogress'><span class='soft'>pr&uuml;ft, ob Freunde deine Daten weitergeben k&ouml;nnen...</span></span>",
        " <span class='content fixing'><span class='soft'>&auml;ndert die Einstellungen...</span></span>",
        " <span class='content insecure'>Freunde k&ouml;nnten <a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=friends_share'>versehentlich</a> pers&ouml;nliche Informationen weitergeben. <a class='action-disablefriendsharing uiButton uiButtonConfirm' href='#'>Hindere sie daran</a></span>",
        " <span class='content caution'>Freunde k&ouml;nnten <a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=friends_share'>versehentlich</a> pers&ouml;nliche Informationen weitergeben. <a class='action-disablefriendsharing uiButton uiButtonConfirm' href='#'>Hindere sie daran</a></span>",
        " <span class='content good'><span class='soft'>deine Freunde sind davor gesch&uuml;tzt, versehentlich deine pers&ouml;nlichen Daten weiterzugeben</span></span>",
        " </div>",

        // Blocked Apps scanner UI
        " <div class='scanner-blockedapps state-inprogress'>",
        " <span class='indicator fixing indicator-fixing'>&nbsp;repariert&nbsp;</span>",
        " <span class='indicator inprogress indicator-inprogress'>&nbsp;&nbsp;&nbsp;pr&uuml;ft&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator insecure indicator-insecure'>&nbsp;unsicher&nbsp;&nbsp;</span>",
        " <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;&nbsp;gut&nbsp;&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator caution indicator-caution'>&nbsp;&nbsp;Achtung&nbsp;&nbsp;</span>",

        " <span class='content inprogress'><span class='soft'>pr&uuml;ft die blockierten Anwendungen...</span></span>",
        " <span class='content fixing'><span class='soft'>blockiert Anwendungen...</span></span>",
        " <span class='content insecure'>bestimmte Webseiten k&ouml;nnen automatisch auf pers&ouml;nliche Informationen zugreifen. <a class='action-blockdocs uiButton uiButtonConfirm' href='#'>blockiere Microsoft Docs</a>, <a class='action-blockpandora uiButton uiButtonConfirm' href='#'>blockiere Pandora</a>, und<a class='action-blockyelp uiButton uiButtonConfirm' href='#'>blockiere Yelp</a>.</span>",
        " <span class='content caution'>bestimmte Webseiten k&ouml;nnen automatisch auf pers&ouml;nliche Informationen zugreifen. <a class='action-blockdocs uiButton uiButtonConfirm' href='#'>blockiere Microsoft Docs</a>, <a class='action-blockpandora uiButton uiButtonConfirm' href='#'>blockiere Pandora</a>, und<a class='action-blockyelp uiButton uiButtonConfirm' href='#'>blockiere Yelp</a>.</span>",
        " <span class='content good'><span class='soft'>du hast alle bekannten Anwendungen blockiert, die deine pers&ouml;nlichen Daten weitergeben k&ouml;nnten</span></span>",
        " </div>",

        "</div>",

        // Scanners for V2 of the Facebook Privacy Interface
        "<div class='scanners scanners-v2'>",

        // Basic Directory Information scanner UI (v2)
        "       <div class='scanner-basicdirinfo state-inprogress'>",
        " <span class='indicator fixing indicator-fixing'>&nbsp;repariert&nbsp;</span>",
        " <span class='indicator inprogress indicator-inprogress'>&nbsp;&nbsp;&nbsp;pr&uuml;ft&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator insecure indicator-insecure'>&nbsp;unsicher&nbsp;&nbsp;</span>",
        " <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;&nbsp;gut&nbsp;&nbsp;&nbsp;&nbsp;</span>",
        " <span class='indicator caution indicator-caution'>&nbsp;&nbsp;Achtung&nbsp;&nbsp;</span>",

        " <span class='content inprogress'><span class='soft'>pr&uuml;ft die Kontaktinformationen...</span></span>",
        " <span class='content fixing'><span class='soft'>macht die Kontaktinformationen nur f&uuml;r Freunde sichtbar...</span></span>",
        " <span class='content insecure'>einige deiner Kontaktinformationen sind f&uuml;r das ganze Internet sichtbar, du solltest die <a class='scanner-section-replacement-basic' href='#' target='_blank'>Kontaktinformationen</a> optimieren und dann <a class='privacy-rescan-basicdirinfo uiButton uiButtonConfirm' href='#'>neu scannen</a></span>",
        " <span class='content caution'>einige deiner Kontaktinformationen sind f&uuml;r das ganze Internet sichtbar, du solltest die <a class='scanner-section-replacement-basic' href='#' target='_blank'>Kontaktinformationen</a> optimieren und dann <a class='privacy-rescan-basicdirinfo uiButton uiButtonConfirm' href='#'>neu scannen</a></span>",
        " <span class='content good'><span class='soft'>alle deine Kontaktinformationen sind h&ouml;chstens f&uuml;r Freunde sichtbar</span></span>",
        "       </div>",

        // FIXME: translate this
        "   <div class='note'>",
        "       You have the new Facebook settings.  This is an early version of our new compatibility, so please be patient if it doesn't work yet. <br/><strong>Please",
        "       <a href='http://www.facebook.com/pages/Reclaim-Privacy/121897834504447?v=app_4949752878' target='_blank'>follow our Facebook page</a>",
        "       to hear about compatibility updates to this privacy scanner.</strong>",
        "   </div>",

        "</div>",

        // loading interface
        // FIXME: translate this
        "<div class='scanners scanners-loading'>",
        "   <div class='banner'>loading privacy scanner, should only take a moment...</div>",
        "</div>",

        // common footer
        "<div class='privacy-scanner-footer'>",
        " Deine Freunde sollten auch auf ihre Privatsph&auml;re achten: ",
        "   <a class='scanner-footer-button uiButton uiButtonConfirm' href='http://www.facebook.com/pages/Reclaim-Privacy/121897834504447?v=app_4949752878' target='_blank'>abonnieren um immer auf dem neusten Stand zu sein</a>",
        ' <a name="fb_share" type="button_count" share_url="http://www.reclaimprivacy.org/facebook" href="http://www.facebook.com/sharer.php">Teilen</a><script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>',
        " <a class='close-privacy-scanner uiButton uiButtonConfirm' href='#'>schlie&szlig;en</a>",
        "</div>",

        "<div class='privacy-scanner-status'>arbeitet...</div>",

        ""
    ].join('');

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //              ITALIAN
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    TRANSLATIONS.italian = [
        "<div class='privacy-scanner-titlebar'>",
        "   <h1>privacy scanner</h1>",
        "   &nbsp;&nbsp;<span class='soft'>da <a href='http://www.reclaimprivacy.org/facebook' target='_blank'>reclaimprivacy.org</a></span>",
        "   <span class='source'>",
        "       <span><a href='#' class='privacy-translation-english'>English</a> &middot; <a href='#' class='privacy-translation-german'>Deutsch</a> &middot; <a href='#' class='privacy-translation-italian'>Italiano</a> &middot; <a href='#' class='privacy-translation-french'>Fran&ccedil;ais</a></span>",
        "   </span>",
        "</div>",

        "<div class='wrongdomain-splash'>",
        "   Dopo aver aggiunto il segnalibro, dovrai <a href='http://www.facebook.com/settings/?tab=privacy&ref=mb'>aprire la pagina delle impostazioni sulla privacy di Facebook</a>, e <strong>una volta che sei su Facebook</strong> eseguire nuovamente il privacy scanner.",
        "   <a class='close' href='#'>x</a>",
        "</div>",

        // Scanners for V1 of the Facebook Privacy Interface
        "<div class='scanners scanners-v1'>",

        // Photo Album privacy scanner UI
        "       <div class='scanner-photoalbum state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;correggendo</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scansione&nbsp;&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;non sicuro&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;sicuro&nbsp;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attenzione&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scansione delle informazioni sulla privacy degli album fotografici...</span></span>",
        "           <span class='content fixing'><span class='soft'>sto impostando la visualizzazione degli album fotografici solo agli amici...</span></span>",
        "           <span class='content insecure'>alcune delle tue foto sono visibili anche al di fuori del tuo gruppo di amici, dovresti correggere le tue <a href='http://www.facebook.com/privacy/?view=photos' target='_blank'>impostazioni sulle foto</a> e successivamente <a class='privacy-rescan-photoalbum uiButton uiButtonConfirm' href='#'>Riscansiona</a></span>",
        "           <span class='content caution'>alcune delle tue foto sono visibili anche al di fuori del tuo gruppo di amici, dovresti correggere le tue <a href='http://www.facebook.com/privacy/?view=photos' target='_blank'>impostazioni sulle foto</a> e successivamente <a class='privacy-rescan-photoalbum uiButton uiButtonConfirm' href='#'>Riscansiona</a></span>",
        "           <span class='content good'><span class='soft'>la visualizzazione delle tue foto è limitata, al massimo, ai tuoi amici</span></span>",
        "       </div>",

        // Instant Personalization scanner UI
        "       <div class='state-inprogress scanner-instantpersonalization'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;correggendo</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scansione&nbsp;&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;non sicuro&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;sicuro&nbsp;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attenzione&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scansione delle impostazioni sulla Personalizzazione Istantanea...</span></span>",
        "           <span class='content fixing'><span class='soft'>sto correggendo le impostazioni sulla Personalizzazione Istantanea...</span></span>",
        "           <span class='content insecure'><a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=instant_personalization'>il programma di Personalizzazione Istantanea</a> sta attualmente condividendo informazioni personali con siti esterni a Facebook. <a class='action-optoutinstantpersonalization uiButton uiButtonConfirm' href='#'>Risolvi il problema</a></span>",
        "           <span class='content caution'><a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=instant_personalization'>il programma di Personalizzazione Istantanea</a> sta attualmente condividendo informazioni personali con siti esterni a Facebook. <a class='action-optoutinstantpersonalization uiButton uiButtonConfirm' href='#'>Risolvi il problema</a></span>",
        "           <span class='content good'><span class='soft'>hai abbandonato il programma di Personalizzazione Istantanea</span></span>",
        "       </div>",

        // Personal Information scanner UI
        "       <div class='scanner-personalinfo state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;correggendo</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scansione&nbsp;&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;non sicuro&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;sicuro&nbsp;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attenzione&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scansione delle impostazioni sulle informazioni personali...</span></span>",
        "           <span class='content fixing'><span class='soft'>restrizione delle informazioni personali solo agli amici...</span></span>",
        "           <span class='content insecure'>alcune delle tue informazioni personali sono visibili da chiunque, dovresti correggere le tue <a href='http://www.facebook.com/settings/?tab=privacy&section=personal_content' target='_blank'>impostazioni sulle informazioni personali</a> e successivamente <a class='privacy-rescan-personalinfo uiButton uiButtonConfirm' href='#'>Riscansiona</a></span>",
        "           <span class='content caution'>alcune delle tue informazioni personali sono visibili da chiunque, dovresti correggere le tue <a href='http://www.facebook.com/settings/?tab=privacy&section=personal_content' target='_blank'>impostazioni sulle informazioni personali</a> e successivamente <a class='privacy-rescan-personalinfo uiButton uiButtonConfirm' href='#'>Riscansiona</a></span>",
        "           <span class='content good'><span class='soft'>la visualizzazione delle tue informazioni personali è limitata, al massimo, ai tuoi amici</span></span>",
        "       </div>",

        // Contact Information scanner UI
        "       <div class='scanner-contactinfo state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;correggendo</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scansione&nbsp;&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;non sicuro&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;sicuro&nbsp;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attenzione&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scansione delle impostazioni sulle informazioni di contatto...</span></span>",
        "           <span class='content fixing'><span class='soft'>restrizione delle informazioni di contatto solo agli amici...</span></span>",
        "           <span class='content insecure'>alcune delle tue informazioni di contatto sono visibili da chiunque, dovresti correggere le tue <a href='http://www.facebook.com/settings/?tab=privacy&section=contact' target='_blank'>impostazioni sulle informazioni di contatto</a> e successivamente <a class='privacy-rescan-contactinfo uiButton uiButtonConfirm' href='#'>Riscansiona</a></span>",
        "           <span class='content caution'>alcune delle tue informazioni di contatto sono visibili da chiunque, dovresti correggere le tue <a href='http://www.facebook.com/settings/?tab=privacy&section=contact' target='_blank'>impostazioni sulle informazioni di contatto</a> e successivamente <a class='privacy-rescan-contactinfo uiButton uiButtonConfirm' href='#'>Riscansiona</a></span>",
        "           <span class='content good'><span class='soft'>la visualizzazione delle tue informazioni di contatto è limitata, al massimo, ai tuoi amici</span></span>",
        "       </div>",

        // Friends/Tags/Connections Information scanner UI
        "       <div class='scanner-friendstagsconnections state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;correggendo</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scansione&nbsp;&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;non sicuro&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;sicuro&nbsp;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attenzione&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scansione delle impostazioni su amici, tag e connessioni...</span></span>",
        "           <span class='content fixing'><span class='soft'>restrizione delle informazioni su amici, tag e connessioni solo agli amici...</span></span>",
        "           <span class='content insecure'>alcune delle tue informazioni su amici, tag e connessioni sono visibili da chiunque, dovresti correggere le tue <a href='http://www.facebook.com/settings/?tab=privacy&section=profile_display' target='_blank'>impostazioni su amici, tag e connessioni</a> e successivamente <a class='privacy-rescan-friendstagsconnections uiButton uiButtonConfirm' href='#'>Riscansiona</a></span>",
        "           <span class='content caution'>alcune delle tue informazioni su amici, tag e connessioni sono visibili da chiunque, dovresti correggere le tue <a href='http://www.facebook.com/settings/?tab=privacy&section=profile_display' target='_blank'>impostazioni su amici, tag e connessioni</a> e successivamente <a class='privacy-rescan-friendstagsconnections uiButton uiButtonConfirm' href='#'>Riscansiona</a></span>",
        "           <span class='content good'><span class='soft'>la visualizzazione delle tue informazioni su amici, tag e connessioni è limitata, al massimo, ai tuoi amici</span></span>",
        "       </div>",

        // Friend Sharing scanner UI
        "       <div class='scanner-friendsharing state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;correggendo</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scansione&nbsp;&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;non sicuro&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;sicuro&nbsp;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attenzione&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scansione delle impostazioni sulle informazioni che i tuoi amici possono condividere di te...</span></span>",
        "           <span class='content fixing'><span class='soft'>sto correggendo le impostazioni sulle informazioni che i tuoi amici possono condividere di te...</span></span>",
        "           <span class='content insecure'>i tuoi amici possono <a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=friends_share'>condividere accidentalmente</a> le tue informazioni personali. <a class='action-disablefriendsharing uiButton uiButtonConfirm' href='#'>Previeni la condivisione delle tue informazioni da parte degli amici</a></span>",
        "           <span class='content caution'>i tuoi amici possono <a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=friends_share'>condividere accidentalmente</a> le tue informazioni personali. <a class='action-disablefriendsharing uiButton uiButtonConfirm' href='#'>Previeni la condivisione delle tue informazioni da parte degli amici</a></span>",
        "           <span class='content good'><span class='soft'>i tuoi amici non possono condividere accidentalmente nessuna tua informazione pesonale</span></span>",
        "       </div>",

        // Blocked Apps scanner UI
        "       <div class='scanner-blockedapps state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;correggendo</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scansione&nbsp;&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;non sicuro&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;sicuro&nbsp;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attenzione&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scansione delle applicazioni bloccate...</span></span>",
        "           <span class='content fixing'><span class='soft'>sto bloccando le applicazioni...</span></span>",
        "           <span class='content insecure'>alcuni siti possono avere accesso alle tue informazioni personali. <a class='action-blockdocs uiButton uiButtonConfirm' href='#'>Blocca Microsoft Docs</a>, <a class='action-blockpandora uiButton uiButtonConfirm' href='#'>Blocca Pandora</a>, e<a class='action-blockyelp uiButton uiButtonConfirm' href='#'>Blocca Yelp</a>.</span>",
        "           <span class='content caution'>alcuni siti possono avere accesso alle tue informazioni personali. <a class='action-blockdocs uiButton uiButtonConfirm' href='#'>Blocca Microsoft Docs</a>, <a class='action-blockpandora uiButton uiButtonConfirm' href='#'>Blocca Pandora</a>, e<a class='action-blockyelp uiButton uiButtonConfirm' href='#'>Blocca Yelp</a>.</span>",
        "           <span class='content good'><span class='soft'>hai bloccato tutte le applicazioni che potrebbero accedere alle tue informazioni personali</span></span>",
        "       </div>",

        "</div>",

        // Scanners for V2 of the Facebook Privacy Interface
        "<div class='scanners scanners-v2'>",

        // Basic Directory Information scanner UI (v2)
        "       <div class='scanner-basicdirinfo state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;correggendo</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;scansione&nbsp;&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;non sicuro&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;&nbsp;sicuro&nbsp;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attenzione&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>scansione delle impostazioni sulle informazioni di contatto...</span></span>",
        "           <span class='content fixing'><span class='soft'>restrizione delle informazioni di contatto solo agli amici...</span></span>",
        "           <span class='content insecure'>alcune delle tue informazioni di contatto sono visibili da chiunque, dovresti correggere le tue <a class='scanner-section-replacement-basic' href='#' target='_blank'>impostazioni sulle informazioni di contatto</a> e successivamente <a class='privacy-rescan-basicdirinfo uiButton uiButtonConfirm' href='#'>Riscansiona</a></span>",
        "           <span class='content caution'>alcune delle tue informazioni di contatto sono visibili da chiunque, dovresti correggere le tue <a class='scanner-section-replacement-basic' href='#' target='_blank'>impostazioni sulle informazioni di contatto</a> e successivamente <a class='privacy-rescan-basicdirinfo uiButton uiButtonConfirm' href='#'>Riscansiona</a></span>",
        "           <span class='content good'><span class='soft'>la visualizzazione delle tue informazioni di contatto è limitata, al massimo, ai tuoi amici</span></span>",
        "       </div>",

        // FIXME: translate this
        "   <div class='note'>",
        "       You have the new Facebook settings.  This is an early version of our new compatibility, so please be patient if it doesn't work yet. <br/><strong>Please",
        "       <a href='http://www.facebook.com/pages/Reclaim-Privacy/121897834504447?v=app_4949752878' target='_blank'>follow our Facebook page</a>",
        "       to hear about compatibility updates to this privacy scanner.</strong>",
        "   </div>",

        "</div>",

        // loading interface
        // FIXME: translate this
        "<div class='scanners scanners-loading'>",
        "   <div class='banner'>loading privacy scanner, should only take a moment...</div>",
        "</div>",

        // common footer
        "<div class='privacy-scanner-footer'>",
        "   consiglia anche ai tuoi amici di proteggere la loro privacy",
        "   <a class='scanner-footer-button uiButton uiButtonConfirm' href='http://www.facebook.com/pages/Reclaim-Privacy/121897834504447?v=app_4949752878' target='_blank'>seguirci per rimanere informato sugli ultimi aggiornamenti</a>",
        '   <a name="fb_share" type="button_count" share_url="http://www.reclaimprivacy.org/facebook" href="http://www.facebook.com/sharer.php">Condividi</a><script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>',
        "   <a class='close-privacy-scanner uiButton uiButtonConfirm' href='#'>Chiudi</a>",
        "</div>",

        "<div class='privacy-scanner-status'>sto eseguendo la scansione...</div>",

        ""
    ].join('');

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //              FRENCH
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    TRANSLATIONS.french = [
        "<div class='privacy-scanner-titlebar'>",
        "   <h1>privacy scanner</h1>",
        "   &nbsp;&nbsp;<span class='soft'>par <a href='http://www.reclaimprivacy.org/facebook' target='_blank'>reclaimprivacy.org</a></span>",
        "   <span class='source'>",
        "       <span><a href='#' class='privacy-translation-english'>English</a> &middot; <a href='#' class='privacy-translation-german'>Deutsch</a> &middot; <a href='#' class='privacy-translation-italian'>Italiano</a> &middot; <a href='#' class='privacy-translation-french'>Fran&ccedil;ais</a></span>",
        "   </span>",
        "</div>",

        "<div class='wrongdomain-splash'>",
        "   Apr&egrave;s avoir ajout&eacute; le favori vous devez <a href='http://www.facebook.com/settings/?tab=privacy&ref=mb'>vous rendre sur vos param&egrave;tres de confidentialit&eacute;</a>, et <strong>une fois que vous &ecirc;tes sur Facebook</strong> lancer cette analyse &agrave; nouveau.",
        "   <a class='close' href='#'>x</a>",
        "</div>",

        // Scanners for V1 of the Facebook Privacy Interface
        "<div class='scanners scanners-v1'>",

        // Photo Album privacy scanner UI
        "       <div class='scanner-photoalbum state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;r&eacute;glage&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;analyse&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;vuln&eacute;rable&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;verrouill&eacute;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attention&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>analyse de la confidentialit&eacute; des albums photo...</span></span>",
        "           <span class='content fixing'><span class='soft'>r&eacute;glage de la confidentialit&eacute; des albums photo vers...</span></span>",
        "           <span class='content insecure'>certaines de vos photos sont visibles au-del&agrave; de votre cercle d'amis, vous devriez changer vos <a href='http://www.facebook.com/privacy/?view=photos' target='_blank'>param&egrave;tres de photos</a> puis lancer une <a class='privacy-rescan-photoalbum uiButton uiButtonConfirm' href='#'>Nouvelle analyse</a></span>",
        "           <span class='content caution'>certaines de vos photos sont visibles au-del&agrave; de votre cercle d'amis, vous devriez changer vos <a href='http://www.facebook.com/privacy/?view=photos' target='_blank'>param&egrave;tres de photos</a> puis lancer une <a class='privacy-rescan-photoalbum uiButton uiButtonConfirm' href='#'>Nouvelle analyse</a></span>",
        "           <span class='content good'><span class='soft'>toutes vos photos sont visibles visibles uniquement par vos amis, ou seulement certains d'entre eux</span></span>",
        "       </div>",

        // Instant Personalization scanner UI
        "       <div class='state-inprogress scanner-instantpersonalization'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;r&eacute;glage&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;analyse&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;vuln&eacute;rable&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;verrouill&eacute;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attention&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>analyse des param&egrave;tres de personnalisation instantan&eacute;e ...</span></span>",
        "           <span class='content fixing'><span class='soft'>r&eacute;glage des param&egrave;tres de personnalisation instantan&eacute;e...</span></span>",
        "           <span class='content insecure'><a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=instant_personalization'>La personnalisation instantan&eacute;e</a> partage actuellement des informations avec des sites externes. <a class='action-optoutinstantpersonalization uiButton uiButtonConfirm' href='#'>D&eacute;sactiver la personnalisation instantan&eacute;e</a></span>",
        "           <span class='content caution'><a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=instant_personalization'>La personnalisation instantan&eacute;e</a> partage actuellement des informations avec des sites externes. <a class='action-optoutinstantpersonalization uiButton uiButtonConfirm' href='#'>D&eacute;sactiver la personnalisation instantan&eacute;e</a></span>",
        "           <span class='content good'><span class='soft'>La fonctionnalit&eacute; personnalisation instantan&eacute;e est d&eacute;sactiv&eacute;e</span></span>",
        "       </div>",

        // Personal Information scanner UI
        "       <div class='scanner-personalinfo state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;r&eacute;glage&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;analyse&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;vuln&eacute;rable&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;verrouill&eacute;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attention&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>analyse des informations personnelles et publications...</span></span>",
        "           <span class='content fixing'><span class='soft'>verrouillage des informations personnelles et publications pour les amis seulement...</span></span>",
        "           <span class='content insecure'>certaines de vos informations personnelles et publications sont visibles, vous devriez changer <a href='http://www.facebook.com/settings/?tab=privacy&section=personal_content' target='_blank'>vos param&egrave;tres personnels</a> puis lancer une <a class='privacy-rescan-personalinfo uiButton uiButtonConfirm' href='#'>Nouvelle analyse</a></span>",
        "           <span class='content caution'>certaines de vos informations personnelles et publications sont visibles, vous devriez changer <a href='http://www.facebook.com/settings/?tab=privacy&section=personal_content' target='_blank'>vos param&egrave;tres personnels</a> puis lancer une <a class='privacy-rescan-personalinfo uiButton uiButtonConfirm' href='#'>Nouvelle analyse</a></span>",
        "           <span class='content good'><span class='soft'>toutes vos informations personnelles et publications sont visibles uniquement par vos amis, ou seulement certains d'entre eux</span></span>",
        "       </div>",

        // Contact Information scanner UI
        "       <div class='scanner-contactinfo state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;r&eacute;glage&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;analyse&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;vuln&eacute;rable&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;verrouill&eacute;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attention&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>analyse des coordonn&eacute;es...</span></span>",
        "           <span class='content fixing'><span class='soft'>verrouillage des coordonn&eacute;es pour les amis seulement...</span></span>",
        "           <span class='content insecure'>certaines de vos coordonn&eacute;es sont peut-&ecirc;tre visibles par plus de personnes que vous ne le souhaiteriez, v&eacute;rifiez vos <a class='scanner-section-replacement-basic' href='#' target='_blank'>param&egrave;tres de coordonn&eacute;es</a> et si vous les modifiez, lancez une <a class='privacy-rescan-contactinfo uiButton uiButtonConfirm' href='#'>Nouvelle analyse</a></span>",
        "           <span class='content caution'>certaines de vos coordonn&eacute;es sont peut-&ecirc;tre visibles par plus de personnes que vous ne le souhaiteriez, v&eacute;rifiez vos <a class='scanner-section-replacement-basic' href='#' target='_blank'>param&egrave;tres de coordonn&eacute;es</a> et si vous les modifiez, lancez une <a class='privacy-rescan-contactinfo uiButton uiButtonConfirm' href='#'>Nouvelle analyse</a></span>",
        "           <span class='content good'><span class='soft'>toutes vos coordonn&eacute;es sont visibles uniquement par vos amis, ou seulement certains d'entre eux</span></span>",
        "       </div>",

        // Friends/Tags/Connections Information scanner UI
        "       <div class='scanner-friendstagsconnections state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;r&eacute;glage&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;analyse&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;vuln&eacute;rable&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;verrouill&eacute;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attention&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>analyse des amis, identifications et connexions...</span></span>",
        "           <span class='content fixing'><span class='soft'>verrouillage des amis, identifications et connexions pour les amis seulement...</span></span>",
        "           <span class='content insecure'>certaines de vos informations d'amis, identifications et connexions sont visibles, vous devriez changer vos <a href='http://www.facebook.com/settings/?tab=privacy&section=profile_display' target='_blank'>param&egrave;tres d'amis, identifications et connexions</a> puis lancer une <a class='privacy-rescan-friendstagsconnections uiButton uiButtonConfirm' href='#'>Nouvelle analyse</a></span>",
        "           <span class='content caution'>certaines de vos informations d'amis, identifications et connexions sont visibles, vous devriez changer vos <a href='http://www.facebook.com/settings/?tab=privacy&section=profile_display' target='_blank'>param&egrave;tres d'amis, identifications et connexions</a> puis lancer une <a class='privacy-rescan-friendstagsconnections uiButton uiButtonConfirm' href='#'>Nouvelle analyse</a></span>",
        "           <span class='content good'><span class='soft'>toutes vos informations d'amis, identifications et connexions sont visibles uniquement par vos amis, ou seulement certains d'entre eux</span></span>",
        "       </div>",

        // Friend Sharing scanner UI
        "       <div class='scanner-friendsharing state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;r&eacute;glage&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;analyse&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;vuln&eacute;rable&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;verrouill&eacute;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attention&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>analyse du partage d'informations par les amis...</span></span>",
        "           <span class='content fixing'><span class='soft'>verrouillage du partage d'informations par les amis...</span></span>",
        "           <span class='content insecure'>vos amis peuvent <a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=friends_share'>involontairement partager</a> vos informations personnelles. <a class='action-disablefriendsharing uiButton uiButtonConfirm' href='#'>Emp&ecirc;cher mes amis de partager mes informations</a></span>",
        "           <span class='content caution'>vos amis peuvent <a target='_blank' href='http://www.facebook.com/settings/?tab=privacy&section=applications&field=friends_share'>involontairement partager</a> vos informations personnelles. <a class='action-disablefriendsharing uiButton uiButtonConfirm' href='#'>Emp&ecirc;cher mes amis de partager mes informations</a></span>",
        "           <span class='content good'><span class='soft'>vos amis ne peuvent pas partager vos informations</span></span>",
        "       </div>",

        // Blocked Apps scanner UI
        "       <div class='scanner-blockedapps state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;r&eacute;glage&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;analyse&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;vuln&eacute;rable&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;verrouill&eacute;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attention&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>analyse des applications bloqu&eacute;es...</span></span>",
        "           <span class='content fixing'><span class='soft'>bloquage des applications...</span></span>",
        "           <span class='content insecure'>certains sites web peuvent automatiquement acc&eacute;der &agrave; des informations personnelles. <a class='action-blockdocs uiButton uiButtonConfirm' href='#'>Bloquer Microsoft Docs</a>, <a class='action-blockpandora uiButton uiButtonConfirm' href='#'>Bloquer Pandora</a>, and<a class='action-blockyelp uiButton uiButtonConfirm' href='#'>Bloquer Yelp</a>.</span>",
        "           <span class='content caution'>certains sites web peuvent automatiquement acc&eacute;der &agrave; des informations personnelles. <a class='action-blockdocs uiButton uiButtonConfirm' href='#'>Bloquer Microsoft Docs</a>, <a class='action-blockpandora uiButton uiButtonConfirm' href='#'>Bloquer Pandora</a>, and<a class='action-blockyelp uiButton uiButtonConfirm' href='#'>Bloquer Yelp</a>.</span>",
        "           <span class='content good'><span class='soft'>vous avez bloqu&eacute; toutes les applications connues qui pourraient diffuser vos informations personnelles</span></span>",
        "       </div>",

        "</div>",

        // Scanners for V2 of the Facebook Privacy Interface
        "<div class='scanners scanners-v2'>",

        // Basic Directory Information scanner UI (v2)
        "       <div class='scanner-basicdirinfo state-inprogress'>",
        "           <span class='indicator fixing indicator-fixing'>&nbsp;&nbsp;r&eacute;glage&nbsp;&nbsp;</span>",
        "           <span class='indicator inprogress indicator-inprogress'>&nbsp;analyse&nbsp;</span>",
        "           <span class='indicator insecure indicator-insecure'>&nbsp;vuln&eacute;rable&nbsp;</span>",
        "           <span class='indicator good indicator-good'>&nbsp;&nbsp;verrouill&eacute;&nbsp;&nbsp;</span>",
        "           <span class='indicator caution indicator-caution'>&nbsp;attention&nbsp;&nbsp;</span>",

        "           <span class='content inprogress'><span class='soft'>analyse des coordonn&eacute;es...</span></span>",
        "           <span class='content fixing'><span class='soft'>verrouillage des coordonn&eacute;es pour les amis seulement...</span></span>",
        "           <span class='content insecure'>certaines de vos coordonn&eacute;es sont peut-&ecirc;tre visibles par plus de personnes que vous ne le souhaiteriez, v&eacute;rifiez vos <a href='http://www.facebook.com/settings/?tab=privacy&section=contact' target='_blank'>param&egrave;tres de coordonn&eacute;es</a> et si vous les modifiez, lancez une <a class='privacy-rescan-basicdirinfo uiButton uiButtonConfirm' href='#'>Nouvelle analyse</a></span>",
        "           <span class='content caution'>certaines de vos coordonn&eacute;es sont peut-&ecirc;tre visibles par plus de personnes que vous ne le souhaiteriez, v&eacute;rifiez vos <a href='http://www.facebook.com/settings/?tab=privacy&section=contact' target='_blank'>param&egrave;tres de coordonn&eacute;es</a> et si vous les modifiez, lancez une <a class='privacy-rescan-basicdirinfo uiButton uiButtonConfirm' href='#'>Nouvelle analyse</a></span>",
        "           <span class='content good'><span class='soft'>toutes vos coordonn&eacute;es sont visibles uniquement par vos amis, ou seulement certains d'entre eux</span></span>",
        "       </div>",

        "   <div class='note'>",
        "       You have the new Facebook settings.  This is an early version of our new compatibility, so please be patient if it doesn't work yet. <br/><strong>Please",
        "       <a href='http://www.facebook.com/pages/Reclaim-Privacy/121897834504447?v=app_4949752878' target='_blank'>follow our Facebook page</a>",
        "       to hear about compatibility updates to this privacy scanner.</strong>",
        "   </div>",

        "</div>",

        // loading interface
        "<div class='scanners scanners-loading'>",
        "   <div class='banner'>chargement de l'analyseur de confidentialit&eacute;, ce ne devrait plus &ecirc;tre long...</div>",
        "</div>",

        // common footer
        "<div class='privacy-scanner-footer'>",
        "   dites &agrave; vos amis de prot&eacute;ger leur confidentialit&eacute;",
        "   <a class='scanner-footer-button uiButton uiButtonConfirm' href='http://www.facebook.com/pages/Reclaim-Privacy/121897834504447?v=app_4949752878' target='_blank'>nous suivre pour &ecirc;tre au courant des derni&egrave;res mises &agrave; jour</a>",
        '   <a name="fb_share" type="button_count" share_url="http://www.reclaimprivacy.org/facebook" href="http://www.facebook.com/sharer.php">Partager</a><script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>',
        "   <a class='close-privacy-scanner uiButton uiButtonConfirm' href='#'>termin&eacute;</a>",
        "</div>",

        "<div class='privacy-scanner-status'>en cours...</div>",

        ""
    ].join('');
