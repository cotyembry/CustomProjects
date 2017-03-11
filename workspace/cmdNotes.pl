#!/usr/bin/perl

#perl script to create notes (append them to a file)
#from the command line

$possibleButNotLikelyTextBody = shift;
$checkMe = shift;
$restOfTextBody = "";
if(!($checkMe eq "")) {
	while(!($checkMe eq "")) {
		$restOfTextBody = "$restOfTextBody $checkMe";
		$checkMe = shift;
	}
	$textBody = "${possibleButNotLikelyTextBody}$restOfTextBody";
}
else {
	$textBody = possibleButNotLikelyTextBody;
}
#print"$textBody\n";

#system">> ./Notes.md"; #create the file
open NOTES, '>>', './Notes.md' or die "Cannot open Notes.md: $!";
	if(!($possibleButNotLikelyTextBody eq "possibleButNotLikelyTextBody")) {
		print NOTES "\n\n```````\n$textBody";
	}
close NOTES;

if(!($textBody eq "possibleButNotLikelyTextBody")) {
	print"wrote the following to ~/Desktop/Notes.md:\n$textBody\n";
}
else {
	print"Nothing to save.., stay blessed and have a good one ^_^\n";
}