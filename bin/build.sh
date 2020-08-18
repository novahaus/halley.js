#!/usr/bin/env bash

RED='\033[0;32m'
NC='\033[00m' # No Color

for d in ./packages/lib/* ; do
  (cd "$d" && npm run build)
  printf "%60s" " " | tr ' ' '-'
  printf "${RED} \n --> $d Build successfull (\xE2\x9C\x94) \n ${NC}"
  printf "%60s" " " | tr ' ' '-'
  printf "\n \n \n \n"
done

for d in ./packages/vue/* ; do
  (cd "$d" && npm run build)
  printf "%60s" " " | tr ' ' '-'
  printf "${RED} \n --> $d Build successfull (\xE2\x9C\x94) \n ${NC}"
  printf "%60s" " " | tr ' ' '-'
  printf "\n \n \n \n"
done