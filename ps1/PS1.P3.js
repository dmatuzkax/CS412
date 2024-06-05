const decorate = (str, decorator) => {
    return decorator(str);
}

console.log(decorate('supercalifragilisticexpialidocious', (str) => {
    return str.split(/(?=c)/g)
}));

console.table(decorate('supercalifragilisticexpialidocious', (str) => {
    return {
        originalString: str,
        modifiedString: str.replace('a', 'A'),
        numberReplaced: str.match(/a/g).length,
        length: str.length,
    }
}));
