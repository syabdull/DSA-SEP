//js program to find the square root of numeber using binary search
// for binary search the array should be in sorted form

//let s=0; and e equal to last indx of an array
// e=arr.length-1;
//take the middle value by doing  mid=s+e/2
// check if the midde value of an array is equal to the number that we are searching for , if equal return else
// if the number is less search on right side because the number which are no left side of array are still smaller
//than the value of middle so  make s=mid+1;
//in the same way if  the value is more do not search on right side just reduce the value of e to mid-1
// do this until s and end  points do not cross each other i.e s<=e;
// finall return false or -1 accordingly if you are not able to find the number

let arr = [2, 4, 6, 8, 10, 12, 14, 15, 19, 20, 25, 100];
let b = 8;

function binSearch(arr, b) {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (arr[mid] == b) {
      return mid;
    } else if (arr[mid] > b) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return -1;
}

console.log(binSearch(arr, b));
