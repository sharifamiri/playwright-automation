
function twoSum(nums, target){
    const map = new Map();

    for (let i = 0; i < nums.length; i++){
        const tarNum = target - nums[i];
        if (map.has(tarNum)){
            return [map.get(tarNum), i];
        }
        map.set(nums[i], i);
    }

    return [];
}

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));