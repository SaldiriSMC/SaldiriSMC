#!/bin/bash

# Navigate to the project directory
cd /home/ubuntu/saldirismc

# Install dependencies
sudo npm i
sudo npm install bull
# Display the list of PM2 processes
pm2 list
# Delete all PM2 processes
pm2 delete all

# Start the Node.js application with PM2
pm2 start "npm run dev"

# Display the list of PM2 processes
pm2 list

# Sleep for 2 minutes
sleep 2m

# Display the list of PM2 processes again after 2 minutes
pm2 list
