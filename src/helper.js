function genticket(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;

}
function sum(arr)
{
    let sum1=0;
    for(let i=0;i<arr.length;i++)
        {
           sum1=sum1+arr[i];
        }
    return sum1;
    // return arr.reduce((sum,curr) => sum+curr,0);
}
export { genticket,sum };