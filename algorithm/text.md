Big O Notation là một khái niệm trong khoa học máy tính được sử dụng để đo lường và so sánh hiệu suất của các thuật toán. Nó giúp ta biết được mức độ tăng tốc của thuật toán khi kích thước của dữ liệu đầu vào tăng lên.

Một cách đơn giản, Big O Notation chỉ ra mức độ tệ nhất mà thời gian hoặc không gian sử dụng của thuật toán có thể tăng theo kích thước của dữ liệu đầu vào.

Ví dụ:

-> O(1) (đọc là "O một"): Thời gian thực hiện không thay đổi theo kích thước của dữ liệu. Ví dụ: truy cập một phần tử trong mảng.

-> O(n) (đọc là "O n"): Thời gian thực hiện tăng tuyến tính với kích thước của dữ liệu. Ví dụ: duyệt qua tất cả các phần tử trong mảng.

-> O(n^2) (đọc là "O n bình phương"): Thời gian thực hiện tăng bình phương với kích thước của dữ liệu. Ví dụ: thuật toán sắp xếp nổi bọt.

-> O(log n) (đọc là "O log n"): Thời gian thực hiện tăng theo logarithm của kích thước của dữ liệu. Ví dụ: tìm kiếm nhị phân trong một mảng đã sắp xếp.

-> O(n log n) (đọc là "O n log n"): Thời gian thực hiện tăng theo tích của kích thước dữ liệu và logarithm của nó. Ví dụ: các thuật toán sắp xếp hiệu quả như Merge Sort và Quick Sort.

Các ký hiệu Big O đề cập đến "kịch bản tệ nhất hợp lý" của thời gian hoặc không gian sử dụng. Điều này có ý nghĩa rằng thuật toán có thể chạy nhanh hơn, nhưng không chậm hơn so với mức độ đã được mô tả.

<!-- Theo thứ tự từ nhanh nhất đến chậm nhất -->

1. O(1) -> O(log n) -> O(n) -> O(n log n) -> O(n²).

- O(1): là nhanh nhất
- O(n2): là chập nhất

