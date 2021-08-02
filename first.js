// console.log("HI, It's irritating");

// const http = require('http');

// http.createServer((req, res) => {
//     console.log(req);
// }).listen();

let result = (s) => {
    const set1 = ['a', 'e', 'i', 'o', 'u'];
    const set2 = ['b', 'c', 'd', 'f', 'g'];
    const set3 = ['h', 'j', 'k', 'l', 'm'];
    const set4 = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    let sets = [set1, set2, set3, set4];
    let res = ['A', 'B', 'C', 'D'];
    
    let t = 'unassigned';
    sets.forEach(set => {
        if(set.includes(s[0])){
            t = res[sets.indexOf(set)];
        }
    }); 
    return t;   
}

console.log(result("adbk"));

const map = new Map();
map.set('milk', 200);
map.set("tea", 300);
map.set('coffee', 500);

console.log(map.has('tea'));