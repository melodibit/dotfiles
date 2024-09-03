#!/bin/bash

cp ~/.bashrc homefiles
cp ~/.inputrc homefiles
cp ~/.tmux.conf homefiles
cp ~/.vimrc homefiles
rsync -a --exclude='plugged' ~/.vim homefiles
