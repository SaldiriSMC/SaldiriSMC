#!/bin/bash
cd /home/ubuntu/saldirismc
sudo npm i
sudo npm install bull
pm2 start "npm run dev"
