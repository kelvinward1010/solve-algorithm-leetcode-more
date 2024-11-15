
//O(n)
var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 0, maxLen = 0;
    let seen = new Set();
    
    while (right < s.length) {
        if (!seen.has(s[right])) {
            seen.add(s[right]);
            console.log(seen)
            maxLen = Math.max(maxLen, seen.size);
            right++;
        } else {
            seen.delete(s[left]);
            left++;
        }
    }
    
    return maxLen;
};


const str = "pwwkew";
console.log(lengthOfLongestSubstring(str));


/*Khởi tạo các biến:

left = 0 và right = 0: Đây là hai con trỏ xác định phạm vi của cửa sổ hiện tại trong chuỗi s.
maxLen = 0: Biến này lưu trữ độ dài của chuỗi con dài nhất không có ký tự lặp lại được tìm thấy cho đến thời điểm hiện tại.
seen = new Set(): Sử dụng Set để lưu trữ các ký tự đã xuất hiện trong cửa sổ hiện tại. Set là một cấu trúc dữ liệu lưu trữ các giá trị duy nhất.

Duyệt qua chuỗi bằng cửa sổ trượt:
while (right < s.length): Vòng lặp tiếp tục cho đến khi con trỏ right vượt qua chiều dài chuỗi s.

Kiểm tra ký tự tại vị trí right:
if (!seen.has(s[right])): Nếu ký tự tại vị trí right chưa xuất hiện trong Set (chưa có ký tự lặp lại trong cửa sổ hiện tại):
seen.add(s[right]): Thêm ký tự này vào Set.

maxLen = Math.max(maxLen, seen.size): Cập nhật độ dài chuỗi con dài nhất không có ký tự lặp lại bằng cách so sánh maxLen hiện tại và kích thước của Set.
right++: Tăng con trỏ right để mở rộng cửa sổ sang bên phải.

Xử lý ký tự lặp lại:
else: Nếu ký tự tại vị trí right đã xuất hiện trong Set:
seen.delete(s[left]): Xóa ký tự tại vị trí left khỏi Set để thu hẹp cửa sổ từ bên trái.
left++: Tăng con trỏ left để thu hẹp cửa sổ từ bên trái.

Trả về kết quả:
return maxLen: Trả về độ dài của chuỗi con dài nhất không có ký tự lặp lại.

Ví dụ
Với đầu vào s = "abcabcbb":
Ban đầu, left = 0, right = 0, maxLen = 0, seen = {}.
Khi right = 0, thêm a vào Set, seen = {a}, maxLen = 1.
Khi right = 1, thêm b vào Set, seen = {a, b}, maxLen = 2.
Khi right = 2, thêm c vào Set, seen = {a, b, c}, maxLen = 3.
Khi right = 3, a đã có trong Set, xóa a ở vị trí left = 0, left = 1.
Tiếp tục quá trình tương tự cho đến khi hết chuỗi.

Cuối cùng, chuỗi con dài nhất không có ký tự lặp lại là "abc" với độ dài là 3. */