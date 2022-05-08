/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
P: -Check if the two given strings are anagrams.
    -Anagrams are when you can rearrange a string and still make a different word using the same letters.
    -S is a given string and t is a word made out of rearranged s letters.
E - Input: care output: race
D - strings
A - Split each string by letter, and sort each letter in ascending order then join the letters together. Do the same for the letter T and compare the too.
    - If both strings match, return the string.
C
*/
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};