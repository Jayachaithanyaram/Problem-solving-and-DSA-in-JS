function isomorphicString(s,t){
if (s.length !== t.length) return false;

let mapST = new Map();
let mapTS = new Map();

for (let i = 0; i < s.length; i++) {

    if (mapST.has(s[i]) || mapTS.has(t[i])) {

        if (mapST.get(s[i]) !== t[i] || mapTS.get(t[i]) !== s[i]) {
            return false;
        }

    } else {

        mapST.set(s[i], t[i]);
        mapTS.set(t[i], s[i]);

    }
}

return true;
}
console.log(isomorphicString("egg","add"))