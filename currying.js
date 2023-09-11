//Currying function

let concatURL = (protocol) =>
                (subDomain)=>
                (topLevelDomain)=>
                (endpoint)=>{
                    return protocol+subDomain+topLevelDomain+endpoint;
                }
                

console.log(concatURL('https://')('www.')('fullstackacademy.com')('/weather'));              
console.log(concatURL('https://')('www.')('fullstackacademy.com')('/stocks'));                