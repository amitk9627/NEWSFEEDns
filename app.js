const url="https://inshorts.deta.dev/news?category=science";
let response=fetch(url);
response.then((value)=>{
    return value.json();
}).then((science)=>{
    console.log(science);
    for(item in science){
        console.log(science[item]);
    }
});