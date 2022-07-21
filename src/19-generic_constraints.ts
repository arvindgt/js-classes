
function echo<T extends number | string>(value: T): T {
    return value;
}

echo('1');
echo(1);
// echo(true);  // it throws compilation error

interface UserG {
    name: string
}

function echo1<T extends UserG>(value: T): T {
    return value;
}

echo1({name: 'sam'});
