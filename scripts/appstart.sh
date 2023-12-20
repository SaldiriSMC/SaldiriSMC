#!/bin/bash
cd /home/ubuntu/saldiriGit/backendupdate/saldirismc
git pull
docker-compose down
docker-compose up -d --build
