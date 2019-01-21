#!/bin/bash
set -e

USER="maro"
SITE="staging-red-blue"
SITE_FOLDER="/home/$USER/sites/$SITE"
REPO_URL="git@github.com:elaich/redblue.git"

mkdir -p $SITE_FOLDER
echo "Made Directory"
cd $SITE_FOLDER
if [ -d "$SITE_FOLDER/.git" ]; then
  git pull
else
  git clone $REPO_URL .
fi
echo "Updated Repository"

current_commit=`git log -n 1 --format=%H`
git reset --hard $current_commit

docker-compose down
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up --build --detach
echo "Deployed"
