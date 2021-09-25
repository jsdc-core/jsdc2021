#!/usr/bin/env sh

# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist

# get package.json version to show on commit message
PKG_VERSION=`node -p "require('../package.json').version"`
commit_message="deploy $PKG_VERSION to gitPage"

# if you are deploying to a custom domain
echo '2021.jsdc.tw' > CNAME

git init
git add -A
git commit -m "$commit_message"

git push -f git@github.com:jsdc-core/jsdc2021.git master:gh-pages
echo $commit_message All done!
cd -