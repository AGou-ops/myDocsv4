#/bin/bash

ls build

if [ $? -eq 0 ]
then
    rm -rf build
fi

yarn build

cd build

git init && git remote add origin git@github.com:AGou-ops/myDocsv4.git

git add -A

git commit -m "rebuilding site $(date)"

git push -f origin HEAD:gh-pages
