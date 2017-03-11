#!/usr/bin/perl

#Author:	John Coty Embry
#Date: 	12/11/15
#Program Comment:
#bookmarklets are files that are stored as a bookmark in a web browser that will
#execute JavaScript when selected. You do not want new lines or spaces in the
#code when you past the code into the bookmark filed in the web browser.
#this command line utility takes an arguemnt which will be the file name
#that needs to be stripped of the new lines and spaces and saves the new file in the
#same directory
#it also puts the new file contents in my clipboard so I can paste the file and off 
#I go


$fileToFormat = shift;
if ($fileToFormat eq undef) {
	die "Please specify the file you want to format\n";
}

open FH, "./$fileToFormat" or die "Cannot open $fileToFormat: $!";
#now to format the file as how I want to save it
($newFileName, undef) = split /\./, $fileToFormat;


open NFH, "> ./${newFileName}_bkmrklt.js" or die "Cannot open ./${newFileName}_bkmrklt: $!";
print"${newFileName}_bkmrklt.js created\n";

while(<FH>) {
	$_ =~ s/\/\/.*(\n|\Z)//g; #this takes all comments out even when its at the end of the file (EOF) without a \n newline character
	$_ =~ s/\n//g;
	$_ =~ s/\s//g;
	$_ =~ s/\t//g;

#	write a condition to properly space the return statement (even if there is
#	a function named returnXandY)
	if($_ !~ m/function[a-z]*return/gi && $_ =~ m/return/gi) {
		$_ =~ s/return/return /gi;
	}

	$_ =~ s/function/function /gi;

	print NFH "$_";
}
system"cat ${newFileName}_bkmrklt.js | pbcopy"; #this puts the whole new file in my clipboard
#system"/usr/bin/open -a /Applications/Safari.app";

close FH;
close NFH;