for f in *; do 
  echo "---" > tmpfile
  cat $f >> tmpfile
  mv tmpfile $f
done