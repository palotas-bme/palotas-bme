SHELL := /usr/bin/env bash

all: shop.js parallelogram.js getstrings.ts

shop.js:
	tsc --removeComments --lib es2015,dom shop/scripts/shop.ts

parallelogram.js:
	tsc --removeComments --lib es2015,dom parallelogram/scripts/parallelogram.ts

getstrings.ts:
	tsc --removeComments --lib es2015,dom strings/scripts/getstrings.ts