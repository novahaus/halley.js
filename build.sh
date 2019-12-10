for d in ./packages/lib/* ; do
  (cd "$d" && npm run build)
done