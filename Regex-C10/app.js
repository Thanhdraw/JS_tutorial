const rex = /hello/;

const re2 = new RegExp("hello");

// Hello world

// 1.regex.test(value) -> True or false

console.log(rex.test("hello world"));

// 2.Anchor (^ $)
    // 2.1: ^ string bat đầu với từ nào đó
    // $ string kết thúc với  từ nào đó

   
    /hi/.test("hi"); //true

    /hi$/.test("welcome to hi"); //true

    /^hi/.test("welcome to hello"); //false

    /^hi/.test("welcome to hi"); //false

    // 3. Ranage


    // [a-z]: các kí tự in thường từ a - z
    // [A - Z] : các kí tự từ A đến Z in HOA
    // [0 - 9] : các số từ 0 - 9
    //  [a-z0-9A-Z]: các số từ 0 - 9 hoặc từ a-z hoạc từ A - Z

    /[a-z]/.test("a"); // true

    /[a-z]/.test("A"); // false

    /[A-Z]/.test("Z"); // true

    /[A-Z]/.test("z"); // false

    /[0-9]/.test("1000"); // true

    /[0-9]/.test("abc"); //false

    /[0-9]/.test("asdhkashd1000asdasdaw"); // true

    // negative: phủ định

    /[^a-z]/.test("a"); //false
    

    // 4.Meta characters
    // \d:khớp với nó tương đương với [0-9]

    /\d/.test("1233");


    // Ngược lại: \D -> nguoc lai với \d tuong duong voi [0 - 9]


    /\D/.test("1242");

    //  \w: khớp với các kí tự và dấu gạch dưới và số, nó sẽ tuong duong [a-zA-Z0-9_];

    /\w/.test("_"); // true

    // \W: nguoc lại \w nó sẽ tuong duong [a-zA-Z0-9_] nhưng phủ định
    /\W/.test("_"); // false

    // \s: khớp với các kí tự khoảng trắng: spaces, tab, newline


    /\s/.test(" "); //true

    // \S: các kí tự khong phải khoảng trắng
    /\S/.test(" ");

    // /n: khớp với newLine ( xuống hàng )
    
    // \t:khớp với lại tab character

    // .: khớp với tất cả mọi thứ ngoại trừ newline (\n);

    // [^]: khớp với tất cả mọi thứ bao gồm newline (\n);


// 5.Quantifiers: {n} {n,m} + ? * 
// string.match(regex) "abx".math(/\w/) -> []
// {n}: so luong ki tu
// {n,m}: so luong trong khoang tu n toi m
// + : nó lay 1 hoac nhieu ki tu co dieu kien
const str1 = "welcome to thanh dang 202322123123123123"
console.log(str1.match(/\d\d\d\d/)[0]);
console.log(str1.match(/\d{4}/)[0]);
console.log(str1.match(/\d{4,6}/)[0]);
console.log(str1.match(/\d+/)[0]);

const str2 = "color or colour";
console.log(str2.match(/color/));

// 6.flag
// g: global
// i:case insensitive
// m: muitipe lines
// ?: có the co hoac khong có
console.log(str2.match(/colou?r/g));

// *: khong có hoặc nhiều
const str3 = "12345";

console.log(str3.match(/\d*/g));

// 6.groups ()

/(\d{3})(\w+)/.test("123"); //false


/(\d{3})?(\w+)/.test("123"); //true


// 7. Escaping \ / [ ] () {} ? + * | . ^ $

/\?/.test("?");

/\*/.test("*");


// 8.Boundaries: \d

"my name is thanhDev".match(/\bthanhDev/g);

"my name isthanhDev".match(/\BthanhDev/g);

// 9.


const str4 = "hello wellcome to my hello";

// console.log(str4.replace("hello","hi"));

// 9.string.replace(regex,value)

str4.replace(/hello/g,"thanhDev");



