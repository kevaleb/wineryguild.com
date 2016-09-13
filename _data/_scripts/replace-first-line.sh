for f in *.md; do
    perl -i -lne '$.==1 ? print "---" : print' "$f"
done