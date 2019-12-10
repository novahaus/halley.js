for d in ./packages/lib/* ; do
  (cd "$d" && npm install)
done