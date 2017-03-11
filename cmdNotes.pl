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
	$textBody = "$possibleButNotLikelyTextBody$restOfTextBody";
}
else {
	$textBody = possibleButNotLikelyTextBody;
}
#print"$textBody\n";

system"test > ./test.txt";
#open NOTES, "./Notes.md" or die "Cannot open Notes.md: $!";
#close NOTES;