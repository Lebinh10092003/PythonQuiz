# PythonQuiz IDE

IDE kiểm tra kiến thức Python dạng tự luận/code, song ngữ Việt - Anh, chạy hoàn toàn trên GitHub Pages.

## Tính năng

- Chạy Python trực tiếp trong trình duyệt bằng Pyodide.
- Python chạy trong Web Worker để có thể ngắt khi code bị treo/vòng lặp vô hạn.
- Trình soạn thảo Ace Editor.
- Bài tập song ngữ VI/EN, có chế độ VI + EN.
- Chấm tự động bằng test case.
- Lưu tiến độ, mã đang làm, ngôn ngữ và theme bằng LocalStorage.
- Lọc bài theo cấp độ/chủ đề, tìm kiếm nhanh.
- Responsive cho laptop, tablet và điện thoại.
- Không cần backend, database hoặc API key.

## Nội dung

Bộ bài tập được tự biên soạn theo lộ trình kiến thức chính trong W3Schools Python Tutorial: syntax, variables, data types, numbers, strings, operators, lists, tuples, sets, dictionaries, conditions, loops, functions, lambda, classes/OOP, iterators, modules, dates, math, JSON, RegEx, exceptions, formatting và file handling.

> Không sao chép nguyên văn bài tập W3Schools.

## Chạy local

Có thể dùng bất kỳ static server nào, ví dụ:

```bash
python -m http.server 8000
```

Mở `http://localhost:8000`.

## GitHub Pages

Workflow `.github/workflows/pages.yml` tự deploy nhánh `main` lên GitHub Pages. Nếu Pages chưa từng được bật cho repository, workflow dùng `actions/configure-pages` với `enablement: true`.

## Cấu trúc

```
index.html
styles.css
questions.js
app.js
python-worker.js
.github/workflows/pages.yml
```

## Lưu ý

Đây là hệ thống chấm phía client. Test case nằm trong mã nguồn nên phù hợp cho luyện tập/kiểm tra kiến thức, không phải hệ thống thi bảo mật cao.
