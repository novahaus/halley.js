#!/usr/bin/env bash

for d in ./packages/lib/* ; do
  basename=`basename "$d"`

  if [ -e "${d}/src/index.js" ]
  then
    (cd "$d" && ./node_modules/.bin/eslint src/index.js)
    echo "${d} - ${basename} - Linted"
  else
    echo "${d} - ${basename} - Not lint this module"
  fi
done

for d in ./packages/vue/* ; do
  basename=`basename "$d"`

  if [ -e "${d}/src/index.js" ]
  then
    (cd "$d" && ./node_modules/.bin/eslint src/index.js)
    echo "${d} - ${basename} - Linted"
  else
    echo "${d} - ${basename} - Not lint this module"
  fi
done