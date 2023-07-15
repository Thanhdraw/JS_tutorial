Chương 8: DOM
-Selectors là gì: .header, p , body, #heading
    1. document.querySelector: trả về 1 node nếu nó tồn tai ngược lại thì trả về null.

    2. document.querysdelectorAll(): trả về danh sách các nodelist, nếu không trả về emty, nó có thể sử dụng for, foreach.

    3. document.getElementByClassName():trả về danh sách các HTMLCollection, nếu không trả về emty, nó có thể sử dụng for, foreach.

    4. document.getElementsByTagName("tagname"): Truyền vào các thể tagname: li, ul , body, a. Trả về danh sách các HTMLCollection, nếu không trả về emty, nó có thể sử dụng for, foreach.

    5. document.getElementById(): cái nào id thì truyền vào id -> trả về 1 node có id đó

    6.GetAttribute: href, class, style, src



    7.setAttribute: set giá trị nào đó cho attribute 


    8.removeAttribute(): xoá phần tư attribute

    9.hasAttribute(): kiểm tra selector có attibute hay ko , nếu co trả về true , chưa thì trả false.
