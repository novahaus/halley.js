#!/usr/bin/env bash

RED='\033[31m'
NC='\033[00m' # No Color

for d in ./packages/lib/* ; do
  (cd "$d" && npm run build)
  printf "${RED}$d Build successfull \n \n \n \n ${NC}"
done