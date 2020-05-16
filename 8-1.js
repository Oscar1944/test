let arr =['RADAR','WARTER START','MILK KLIM','RESERVERED','IWI',"ABBA"];
function palindrome(arry,callback){
    for(let n of arry){
        n =Array.from(n);
        let n1 =n.reduce((acc,elem)=>acc+elem);
        let n2 =n.reduceRight((acc,elem)=>acc+elem);
        if(n1===n2){
            callback(n1);
        }
    }
}
palindrome(arr,console.log);
console.log("this file is for git test");
console.log("this file has been modified at 2020/5/16 5:24 pm");