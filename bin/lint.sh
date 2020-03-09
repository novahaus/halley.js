#!/usr/bin/env bash

for d in ./packages/lib/* ; do
  basename=`basename "$d"`

  if [ -e "${d}/src/index.js" ]
  then
    (cd "$d" && ./node_modules/.bin/eslint src/index.js)
    echo "${basename} - Linted"
  else
    echo "${basename} - Not lint this module"
  fi
done