#!/bin/bash
export HOME=/home/ubuntu
cd /home/ubuntu/saldirismc
sudo npm i
sudo npm install bull
pm2 delete all
pm2 start "npm run dev"
