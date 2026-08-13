function findMax(){
    let arr = [4, 16, 3, 10, 22, 23, 7, 25, 19];
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax());

function findMaxx(){
    let arr = [4, 16, 3, 10, 22, 23, 7, 25, 19];
    let output = arr.reduce((acc, curr) => {
        if(acc > curr){
            curr = acc;
        }
        return curr;
    },0)
    return output;
}
console.log(findMaxx());