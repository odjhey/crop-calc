bundle-shared:
	cd shared && make bundle
	cp shared/bundle.js webapp/vendor/bundle.js
