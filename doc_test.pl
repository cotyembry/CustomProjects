#!/usr/bin/perl

#Author: John Coty Embry
#Date: November 15th
#This script will pull the latest .mp3 files from the 6640 website archive as they come in every day and download the files
#.mp3 file directory location: /Users/cotyembry/ChuckMissler_mp3s/

use LWP::Simple; #this is used to get the html code from the url provided after the get function

$html_code = get 'http://6640.khouse.org/resources/radio/6640/archive';
open(HTML, ">./htmldocument.txt");
print HTML "$html_code\n";
close HTML;

################get the .mp3 urls out of the html###############
#now for the code that actually gets the .mp3 url links from the html document
open FH, "./htmldocument.txt" or die "Cannot open file htmldocument.txt: $!\n";
$i = 0;
@url_array = []; #this will have the urls that reference the mp3 files
while(<FH>) {
	chomp $_;
	if($_ =~ m/file:/gi) {
		($_, $array[0]) = split('file: "', $_);
		($url, $_) = split("\"", $array[0]);
		$url_array[$i] = $url;
		$i++;
	}
}
close FH; #now all urls that were in that html code are in the @url_array

################Download Section##########################

system"date '+%m-%d-%Y' > ./date.txt";
open DATE, "./date.txt";
$date = "";
while(<DATE>) {
	$date = $_;
	chomp $date;
}
close DATE;

#now to actually download the files if I don't already have them downloaded and to format them to name them correctly
foreach $current_url_in_the_array (@url_array) {
	$current_url_in_the_array =~ s/\s/\%20/gi; #this formats the url to remove spaces
	$url_to_download = $current_url_in_the_array;
	
	#continue here to finish the naming of the file since I already have the date part lined out
	($_, $_, $_, $_, $_, $unique_id_of_url, $I_care) = split('/', $current_url_in_the_array); #I only care about the $I_care part of the string after splitting it
	($_, $file_name) = split('%20_', $I_care);
	$file_name =~ s/%20//;
	$endofthedayfilenameforthiscurrenturl = "${date}_${unique_id_of_url}_${file_name}";

	#check to see if the file I'm working with and about to download is already in the directory
	$the_file_already_exists = 0;
	system"ls /Users/cotyembry/ChuckMissler_mp3s/ > ./files_in_destination_directory.txt";
	open FH, "./files_in_destination_directory.txt";
	while(<FH>) {
		if($_ =~ m/$unique_id_of_url/gi) {
			$the_file_already_exists = 1;
		}
	}
	close FH;

	if($the_file_already_exists == 0) {
		$mp3 = get($url_to_download);
		open MP3, "> /Users/cotyembry/ChuckMissler_mp3s/${date}_${unique_id_of_url}_${file_name}";
		print MP3 "$mp3\n";
		close MP3;	
	}
	else{
		#just reset the variable and reiterate
#		print"${date}_${unique_id_of_url}_${file_name} already exists\n";
		$the_file_already_exists = 0;
	}
}

#now to clean up the directory this script is located in: I'm removing the files created that I used to help me make all this happen
system"rm date.txt files_in_destination_directory.txt htmldocument.txt";