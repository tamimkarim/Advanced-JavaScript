const nums = [ 1, -6, -7, -9,-3,5, 3, 5,6,7, 8, 9, 4];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if(nums [i]>3){
        break;
    }
}
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
    if (nums [i] <0) {
        continue;
    }
    
}