const evaluate = expression => {
    const operator = expression[1];
    switch (operator) {
        case '+':
            return (left, right) => left + right;
        case '-':
            return (left, right) => left - right;
        case '*':
            return (left, right) => left * right;
        case '/':
            return (left, right) => left / right;
        case '^':
            return (left, right) => Math.pow(left, right);
        case '%':
            return (left, right) => left % right;
    }
};

let parse = expression => {
    let [left, right] = expression.split(expression[1]);
    return {left: Number(left), right: Number(right)};
};

const expressions = ['8%3', '4+2', '5*7', '6-1', '9/2', '2^8'];
expressions.forEach(expression => {
    let operator = evaluate(expression);
    console.log(`${expression} = ${operator(parse(expression).left, parse(expression).right)}`);
});
