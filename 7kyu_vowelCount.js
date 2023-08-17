function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').reduce((a,c) => {if (vowels.includes(c)) a++; return a}, 0);
}

["abracadabra", "epizootiologies ","autobiographies"].forEach(x => console.log(getCount(x), getCountfromMatching(x), getCountfromSplitting(x), getCountfromReplacing(x)))

// can also use match, filter, or replace in combination with length property

function getCountfromMatching(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

function getCountfromSplitting(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

function getCountfromReplacing(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}
