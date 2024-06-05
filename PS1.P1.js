const reverse = str => {
    let letters = str.split('');
    return letters.sort().reverse().join('');
};

console.log(reverse('supercalifragilisticexpialidocious'));