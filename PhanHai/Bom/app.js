// BOM
// Browser object Model
console.log(location);
console.log(window.location);

// params 
let params = new URLSearchParams(location.search);
console.log(params);
console.log(params.get("type"));
console.log(params.get("page"));
console.log(params.has("page"));


console.log(params.set("page",10));
console.log(params.get("page"));

    // History in BOM

console.log(window.history);
// history.back()
// history.forward()
// history.go

    // navigation in BOM => truy xuất thiết bị gì
    
    
console.log(window.navigator.userAgent);