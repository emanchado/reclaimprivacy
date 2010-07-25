#!/usr/bin/perl

use strict;
use warnings;

print '"';
while (<>) {
    chomp;
    s/\\/\\\\/g;
    s/"/\\"/g;
    print;
}
print '"';
