#!/usr/bin/perl

#       Author:	John Coty Embry
# Date Created:	09-30-2016
#Date Modified:	09-30-2016

#the alias that calls this code is: set-web-dev

#1. set the current directory that im in in the terminal to be
#   my current web dev project

#get the value of the command and store it in a variable
$pwd = qx(pwd);
chomp($pwd);
$slash = '/';
$pwd = join('', $pwd, $slash);

#the config file sits at:
# /Users/cotyember/Developer/web-dev/web-dev-config.txt

#2. add the path to my web-dev configuration file
# system"$pwd > /Users/cotyembry/Developer/web-dev/web-dev-config.txt";

print"$pwd";
