---
#!/usr/bin/env python

import os

files = os.listdir('.')

for file in files:
  os.rename(file, file.replace('\r', '').replace('\n', ''))
  print 'Processed ' + file.replace('\r', '').replace('\n', '')