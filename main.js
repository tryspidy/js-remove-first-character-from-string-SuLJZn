// Return a word without the first character
function newWord(str) {
	return str.replace(str[0],"");
	// or: return str.slice(1);
	// or: return str.substring(1);
}

console.log(newWord("apple"));	// "pple"   
console.log(newWord("cherry"));	// "herry"  