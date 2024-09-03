# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=

# User specific aliases and functions
HISTSIZE=50000
HISTFILESIZE=100000

shopt -s histappend

# Prevents ctrl-s lockup.
stty -ixon
