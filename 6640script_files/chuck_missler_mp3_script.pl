#!/usr/bin/perl
#Date: 11/14/15
#this scripts rips out the .mp3 urls from the http://6640.khouse.org/resources/radio/6640/archive play it again website
open FH, "./6640webpage.html" or die "Cannot open file 6640webpage.html: $!";
while(<FH>) {
	chomp $_;
	if($_ =~ m/file:/gi) {
		($_, $array[0]) = split('file: "', $_);
		($url, $_) = split("\"", $array[0]);
		print"$url\n";
	}
}
close FH;