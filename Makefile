.PHONY: start tests

.EXPORT_ALL_VARIABLES:

SHELL := /bin/bash

all:	clear upfluence yarn_link_ls echo start ## Runs yarn_link_ls & starts the dev server

clear:
	@clear

install: ## Runs 'yarn' to install dependencies
	@echo 'Installing dependencies'
	yarn
	@echo ""; echo "\n-------------------------------\n"; echo ""

echo:
	@echo Starting OSS-Components

start: ## Starts the dev server
	ember serve --port 0

clean: ## Cleans ./node_modules && ./dist
	@echo "Cleaning up ./node_modules & ./dist folders"
	-rm -r ./node_modules
	-rm -r ./dist
	@echo ""; echo "-------------------------------"; echo ""

re:	clean install echo start ## Reinstalls dependencies & starts the dev server

tests: ## Runs tests once
	@echo "Running tests once"
	ember test --silent -r dot

testserver: ## Runs the test server
	@echo "Starting Test Server"
	ember test -s

yarn_link_ls: ## Displays all the current projects linked using 'yarn link'
	@echo Checking for yarn-links
	@echo $(shell a=`find node_modules node_modules/\@* -maxdepth 1 -type l -print`; if [[ -n $$a ]]; then echo $$a; else echo "There are no linked modules."; fi)
	@echo ""; echo "-------------------------------"; echo ""

enable_pre_hook: ## Enables git pre-hook on the project. Will run Linter & Tests before pushing.
	@echo "Installing git pre-push hook"
	@echo ""; echo "-------------------------------"; echo ""
	yarn install-pre-push-hook

disable_pre_hook: ## Disables the git pre-push hook.
	@echo "Removing git pre-push hook"
	@echo ""; echo "-------------------------------"; echo ""
	yarn remove-pre-push-hook

help: ## Displays the help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

h: help ## Displays the help message

version_patch: ## Creates & pushes a new patch tag
	./scripts/new-version-tag patch

version_minor: ## Creates & pushes a new minor tag
	./scripts/new-version-tag minor

version_major: ## Creates & pushes a new major tag
	./scripts/new-version-tag major

upfluence: ## Displays the UPF logo :)
	@sh ./scripts/upf_logo
	@echo ""
	@echo ""
