//DPT: O(n!)

function permute(nums) {
    const result = [];
    backtrack(nums, [], result);
    return result;
}

function backtrack(nums, path, result) {
    if (path.length === nums.length) {
        result.push([...path]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (path.includes(nums[i])) continue;
        path.push(nums[i]);
        backtrack(nums, path, result);
        path.pop();
    }
}

console.log(permute([1,2]))


/* Bước 1: Khởi tạo
nums = [1,2]
result = []
call backtrack(nums, [], result =[])

Vòng for đầu tiên với path = []
- vòng for bắt đầu từ i = 0
    + thêm 1 vào path: path = [1]
    call backtrack(nums, [1], result = [])

Vòng for thứ hai với path = [1]
- path = [1]
- vòng for bắt đầu từ i = 0:
    + If (path.includes[nums[0]]): bỏ qua vì 1 đã có trong path
- i = 1:
    + thêm 2 vào path: path = [1,2]
    gọi backtrack[núm,[1,2], result]

Vòng for thứ ba với path = [1,2]
- path = [1,2]
- path.length === nums.length:
    + thêm [1,2] vào result: result = [[1,2]]
- quay lại lần call trước:
    + path = [1,2]
    + thực hiện path.pop(): path = [1]

Vòng lặp for thứ hai với path = [1]
- path = [1]
- Vòng for tiếp tục với i = 1 đã kết thúc.
- Quay lại lần gọi đầu:
    + path = [1]
    + Thực hiện path.pop(): path = []

Vòng lặp for đầu tiên tiếp tục với path = []
- path = []
- Vòng for tiếp tục với i = 1:
    + Thêm 2 vào path: path = [2]
    + Gọi backtrack(nums, [2], result)

Vòng lặp for thứ hai với path = [2]
- path = [2]
- Vòng for bắt đầu với i = 0:
    + thêm 1 vào path: path = [2,1]
    + call backtrack(nums, [2,1], result)

Vòng lặp for thứ ba với path = [2, 1]
- path = [2, 1]
- path.length === nums.length:
    +Thêm [2, 1] vào result: result = [[1, 2], [2, 1]]
- Quay lại lần gọi trước:
    + path = [2, 1]
    + Thực hiện path.pop(): path = [2]

Tiếp tục vòng lặp for thứ hai với path = [2]
- path = [2]
- Vòng for tiếp tục với i = 1 đã kết thúc.
- Quay lại lần gọi đầu:
    + path = [2]
    + Thực hiện path.pop(): path = []

Kết thúc 

*/
