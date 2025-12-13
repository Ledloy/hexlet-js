# Makefile

.PHONY: lint fix

lint:
	npx eslint . --ext .js

fix:
	npx eslint . --ext .js --fix