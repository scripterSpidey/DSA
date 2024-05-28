


var subsets = function(nums) {
    let result = [];
    dfs(0,[]);

    function dfs(ind,subset){
        if(ind===nums.length){
            result.push([...subset]);
            return
        }
        subset.push(nums[ind]);
        dfs(ind+1,subset);
        subset.pop();
        dfs(ind+1,subset);
    }
    console.log(result)
    return result;
};

subsets([1,2,3])