#!/bin/bash

cp ~/.bashrc files
cp ~/.inputrc files
cp ~/.tmux.conf files
cp ~/.vimrc files
rsync -a --exclude='plugged' ~/.vim files
