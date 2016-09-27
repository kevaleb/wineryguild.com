splitLen = 9         # 20 lines per file
outputBase = 'winery' # output.1.txt, output.2.txt, etc.

# This is shorthand and not friendly with memory
# on very large files (Sean Cavanagh), but it works.
input = open('/Volumes/Storage/Projects/wineryguild/Database/counties.yaml', 'r').read().split('\n')

at = 1
for lines in range(0, len(input), splitLen):
    # First, get the list slice
    outputData = input[lines:lines+splitLen]

    # Now open the output file, join the new slice with newlines
    # and write it out. Then close the file.
    output = open(outputBase + str(at) + '.md', 'w')
    output.write('\n'.join(outputData))
    output.close()

    # Increment the counter
    at += 1