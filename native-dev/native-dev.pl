#!/usr/bin/perl

#       Author:	John Coty Embry
# Date Created:	09-30-2016
#Date Modified:	09-30-2016


use strict;


my $text;
#get contents of file
open FH, '/Users/cotyembry/Developer/CustomProjects/native-dev/native-dev-config.txt' or die "Cannot open $!";
while(<FH>) {
	$text = $_;
}
close FH;

#this works:
# my @array = ['one', 'two'];
# print"@{$array[0]}[1]\n";

#this also works (completely):
# my $test = [ split( /,/, 'a,b,c,d,e') ];

# foreach my $k (@$test) {
#    print "k is $k\n";
# }
my $builtString = ''; #$builtString will represent the path to the project
if ($text =~ m/\./gi) {
	my $decomposedString = [split(/\//, $text)]; # creates an @answer array
	my $length = scalar @$decomposedString;
	my $inc = 0;
	print"$length\n";
	foreach my $i (@$decomposedString) {
		if($inc <= $length-2 && $inc != 0) {
			$builtString = join('/', $builtString, $i);
		}
		$inc++;
		print"$i\n";
	}
	$builtString = join('', $builtString, '/');
}
else {
	$builtString = $text;
}

# print"$builtString\n";
print"cd $builtString"; 
