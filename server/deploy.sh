#!/bin/bash

echo Version?
read VERSION

docker build -t zireael13/seeing-science:$VERSION .
docker push zireael13/seeing-science:$VERSION

cd ~/.ssh

ssh -i digitalocean root@167.172.140.37 "docker pull zireael13/seeing-science:$VERSION && docker tag zireael13/seeing-science:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"