const clearValueTypeOf = {
    boolean: false,
    number: 0,
    string: ''
}

const clearAllValue = data => {
    if (typeof data === 'object' && data !== null) {
        Object.keys(data).forEach(key => {
            data[key] = clearAllValue(data[key]);
        });
        return data
    } else if (Array.isArray(data)) {
        return data.map(value => clearAllValue(value));
    }
    else {
        return clearValueTypeOf[typeof data];
    }
}

const obj = {
    name: "Trung",
    age: 18,
    isStatus: true,
    a: {
        a: [1, 2, 3],
        b: {
            c: 2
        }
    },
    c: ['a', 'b', 'c']
}

console.log(clearAllValue(obj));