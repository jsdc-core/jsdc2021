#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
echo '2021.jsdc.tw' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:jsdc-core/jsdc2021.git master:gh-pages
echo All done!
cd -