JAVASCRIPT_SOURCES = libs.js translations.js utils.js status-area-controller.js scanning.js loader.js

privacyscanner.js: $(JAVASCRIPT_SOURCES)
	echo -n "" >$@
	for file in $(JAVASCRIPT_SOURCES); do \
	    perl -MJavaScript::Minifier::XS -e \
	    	 'print JavaScript::Minifier::XS::minify(join("", <STDIN>))' \
		 <$$file >>$@; \
	done
