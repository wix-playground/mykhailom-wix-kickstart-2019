const sum = arr => arr.reduce((s, n) => s + n, 0);

const average = arr => arr.length ? arr.reduce((sum, n) => sum + n, 0) / arr.length : 0;

const removeValue = (arr, n) => arr.filter(elem => elem !== n);

const flatten = arrayOfArray => arrayOfArray.reduce((res, arr) => res.concat(arr), []);

const deepFlatten = arrayOfArray => {
    return Array.isArray(arrayOfArray) ?
        arrayOfArray.reduce((res, arr) => res.concat(deepFlatten(arr)), []) :
        arrayOfArray;
};

const insertValue = (array, index, value) => {
    const resArr = array.slice();
    resArr.splice(index, 0, value);
    return resArr;
};

const isSorted = arr => {
    let prev = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < prev) return false;
        prev = arr[i];
    }
    return true;
};

const crossProduct = (vec1, vec2) => vec1.reduce((acum, elem, i) => acum + elem * vec2[i], 0);

const sameMembers = (array1, array2) => {
    if (array1.length === array2.length) {
        const map = {};

        array1.forEach(elem => {
            if (map[elem]) {
                map[elem]++;
            } else {
                map[elem] = 1;
            }
        });

        array2.forEach(elem => {
            if (map[elem]) {
                map[elem]--;
            }
        });
        return !Object.values(map).reduce((acum, val) => acum + val, 0);
    }
    return false;
};

const books = [
    {
        author: 'Samuel R. Delany',
        title: 'Stars in my pockets like grains of sand',
        read: 2001
    },
    {
        author: 'J.K Rowling',
        title: 'Harry Potter and the philosoper\'s stone',
        read: 1998
    },
    {
        author: 'J.G. Ballard',
        title: 'Stars in my pockets like grains of sand',
        read: 2001
    },
    {
        author: 'Samuel R. Delany',
        title: 'Dhalgren',
        read: 2001
    },
    {
        author: 'Philip K. Dick',
        title: 'Do androids dream of Electric Sheep',
        read: 1998
    },
    {
        author: 'Margaret Atwood',
        title: 'The handmaiden\'s tale',
        read: 1997
    }
];

const authorsByYear = books => {
    const booksByYear = {};
    books.forEach(book => {
        const {read, author} = book;
        if (booksByYear[read]) {
            if (!booksByYear[read].includes(author)) {
                booksByYear[read].push(author);
            }
        } else {
            booksByYear[read] = [author];
        }
    });

    Object.keys(booksByYear).forEach(key => {
        booksByYear[key].sort((a, b) => a > b);
    });

    return booksByYear;
};

console.log(sum([4, 4, 4]));
console.log(average([4, 4, 4], 4));
console.log(removeValue([4, 4, 4], 4));
console.log(flatten([[1, 3], [3, 4]]));
console.log(deepFlatten([[1, 2], [2, [3, 4]], [5, [[6, 7]]]]));
console.log(isSorted([1, 2, 3, 9, 0]));
console.log(insertValue([1, 2, 3], 0, 999));
console.log(crossProduct([2, 4], [5, 8]));
console.log(sameMembers([1, 2, 2, 3], [3, 2, 1, 1]));
console.log(authorsByYear(books));