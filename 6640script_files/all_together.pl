#!/usr/bin/perl
#this script information comes from http://6640.khouse.org/resources/radio/6640/archive
#screen scraping
system"/usr/bin/open -a '/Applications/Google Chrome.app'";
sleep(3);
system"/usr/bin/open -a '/Users/cotyembry/Developer/CustomProjects/6640script_files/alt_command_I'";
sleep(5);
system"osascript tab.scpt";
system"osascript tab.scpt";
system"osascript tab.scpt";
system"osascript tab.scpt";
system"osascript tab.scpt";
sleep(3);
system"/usr/bin/open -a '/Users/cotyembry/Developer/CustomProjects/6640script_files/Copy'";
system"pbpaste > ./6640webpage.html";
system"perl chuck_missler_mp3_script.pl";