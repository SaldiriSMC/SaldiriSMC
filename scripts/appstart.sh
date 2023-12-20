#!/bin/bash
cd /home/ubuntu/saldirismc
git pull
pm2 start "npm run dev"
