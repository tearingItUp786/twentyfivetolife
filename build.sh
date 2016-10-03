#!/bin/bash
grunt build
cd ./_site/images
mkdir sponsor_thumbnails
cd ./sponsor_logos
convert *.jpg -resize 200x200 -fuzz 10% -transparent white -threshold 0 -negate -set filename:base "%[base]" "%[filename:base].png"
mogrify *.png -path ../sponsor_thumbnails *.png
