window.QUESTIONS = [
  {
    "id": "hello-world",
    "level": "Starter",
    "topic": {
      "vi": "Bắt đầu",
      "en": "Getting Started"
    },
    "title": {
      "vi": "Lời chào đầu tiên",
      "en": "First greeting"
    },
    "prompt": {
      "vi": "Viết hàm hello() trả về đúng chuỗi Hello, World!. Không in ra màn hình; hãy dùng return.",
      "en": "Write a hello() function that returns exactly Hello, World!. Do not print it; use return."
    },
    "starter": "def hello():\n    # Trả về / Return: Hello, World!\n    pass",
    "example": "hello()  →  'Hello, World!'",
    "hint": {
      "vi": "Dùng return với một chuỗi ký tự.",
      "en": "Use return with a string literal."
    },
    "checks": [
      {
        "expr": "hello()",
        "expected": "'Hello, World!'"
      }
    ]
  },
  {
    "id": "greet-name",
    "level": "Starter",
    "topic": {
      "vi": "Bắt đầu",
      "en": "Getting Started"
    },
    "title": {
      "vi": "Chào theo tên",
      "en": "Greet by name"
    },
    "prompt": {
      "vi": "Viết greet(name) trả về chuỗi Hello, <name>! với tên được truyền vào.",
      "en": "Write greet(name) returning Hello, <name>! using the provided name."
    },
    "starter": "def greet(name):\n    pass",
    "example": "greet('Binh')  →  'Hello, Binh!'",
    "hint": {
      "vi": "Có thể dùng f-string.",
      "en": "An f-string is a good fit."
    },
    "checks": [
      {
        "expr": "greet('Binh')",
        "expected": "'Hello, Binh!'"
      },
      {
        "expr": "greet('Python')",
        "expected": "'Hello, Python!'"
      }
    ]
  },
  {
    "id": "add-two",
    "level": "Starter",
    "topic": {
      "vi": "Bắt đầu",
      "en": "Getting Started"
    },
    "title": {
      "vi": "Cộng hai số",
      "en": "Add two numbers"
    },
    "prompt": {
      "vi": "Viết add(a, b) trả về tổng của a và b.",
      "en": "Write add(a, b) that returns the sum of a and b."
    },
    "starter": "def add(a, b):\n    pass",
    "example": "add(4, 7)  →  11",
    "hint": {
      "vi": "Dùng toán tử +.",
      "en": "Use the + operator."
    },
    "checks": [
      {
        "expr": "add(4, 7)",
        "expected": "11"
      },
      {
        "expr": "add(-3, 8)",
        "expected": "5"
      },
      {
        "expr": "add(2.5, 1.5)",
        "expected": "4.0"
      }
    ]
  },
  {
    "id": "type-name",
    "level": "Starter",
    "topic": {
      "vi": "Biến & kiểu dữ liệu",
      "en": "Variables & Data Types"
    },
    "title": {
      "vi": "Tên kiểu dữ liệu",
      "en": "Data type name"
    },
    "prompt": {
      "vi": "Viết type_name(value) trả về tên kiểu dữ liệu của value dưới dạng chuỗi, ví dụ int, str, list.",
      "en": "Write type_name(value) that returns the value's type name as a string, such as int, str, or list."
    },
    "starter": "def type_name(value):\n    pass",
    "example": "type_name(42)  →  'int'",
    "hint": {
      "vi": "Dùng type(...) và thuộc tính __name__.",
      "en": "Use type(...) and its __name__ attribute."
    },
    "checks": [
      {
        "expr": "type_name(42)",
        "expected": "'int'"
      },
      {
        "expr": "type_name('abc')",
        "expected": "'str'"
      },
      {
        "expr": "type_name([1,2])",
        "expected": "'list'"
      }
    ]
  },
  {
    "id": "to-int",
    "level": "Starter",
    "topic": {
      "vi": "Số & ép kiểu",
      "en": "Numbers & Casting"
    },
    "title": {
      "vi": "Ép chuỗi sang số nguyên",
      "en": "Cast text to integer"
    },
    "prompt": {
      "vi": "Viết to_int(text) chuyển chuỗi số sang int và trả về kết quả.",
      "en": "Write to_int(text) that converts numeric text to int and returns it."
    },
    "starter": "def to_int(text):\n    pass",
    "example": "to_int('125')  →  125",
    "hint": {
      "vi": "Dùng int(...).",
      "en": "Use int(...)."
    },
    "checks": [
      {
        "expr": "to_int('125')",
        "expected": "125"
      },
      {
        "expr": "to_int('-7')",
        "expected": "-7"
      }
    ]
  },
  {
    "id": "rectangle-area",
    "level": "Starter",
    "topic": {
      "vi": "Số & ép kiểu",
      "en": "Numbers & Casting"
    },
    "title": {
      "vi": "Diện tích hình chữ nhật",
      "en": "Rectangle area"
    },
    "prompt": {
      "vi": "Viết rectangle_area(width, height) trả về diện tích hình chữ nhật.",
      "en": "Write rectangle_area(width, height) and return the rectangle area."
    },
    "starter": "def rectangle_area(width, height):\n    pass",
    "example": "rectangle_area(5, 3)  →  15",
    "hint": {
      "vi": "Diện tích = chiều rộng × chiều cao.",
      "en": "Area = width × height."
    },
    "checks": [
      {
        "expr": "rectangle_area(5,3)",
        "expected": "15"
      },
      {
        "expr": "rectangle_area(2.5,4)",
        "expected": "10.0"
      }
    ]
  },
  {
    "id": "first-last",
    "level": "Basic",
    "topic": {
      "vi": "Chuỗi",
      "en": "Strings"
    },
    "title": {
      "vi": "Ký tự đầu và cuối",
      "en": "First and last character"
    },
    "prompt": {
      "vi": "Viết first_last(text) trả về tuple gồm ký tự đầu tiên và ký tự cuối cùng của chuỗi không rỗng.",
      "en": "Write first_last(text) returning a tuple containing the first and last characters of a non-empty string."
    },
    "starter": "def first_last(text):\n    pass",
    "example": "first_last('Python')  →  ('P', 'n')",
    "hint": {
      "vi": "Dùng chỉ số 0 và -1.",
      "en": "Use indexes 0 and -1."
    },
    "checks": [
      {
        "expr": "first_last('Python')",
        "expected": "('P', 'n')"
      },
      {
        "expr": "first_last('abc')",
        "expected": "('a', 'c')"
      }
    ]
  },
  {
    "id": "normalize-name",
    "level": "Basic",
    "topic": {
      "vi": "Chuỗi",
      "en": "Strings"
    },
    "title": {
      "vi": "Chuẩn hóa tên",
      "en": "Normalize a name"
    },
    "prompt": {
      "vi": "Viết normalize_name(name): bỏ khoảng trắng thừa ở hai đầu rồi viết hoa chữ cái đầu mỗi từ.",
      "en": "Write normalize_name(name): trim outer whitespace, then capitalize the first letter of each word."
    },
    "starter": "def normalize_name(name):\n    pass",
    "example": "normalize_name('  le van binh  ')  →  'Le Van Binh'",
    "hint": {
      "vi": "Kết hợp strip() và title().",
      "en": "Combine strip() and title()."
    },
    "checks": [
      {
        "expr": "normalize_name('  le van binh  ')",
        "expected": "'Le Van Binh'"
      },
      {
        "expr": "normalize_name('python quiz')",
        "expected": "'Python Quiz'"
      }
    ]
  },
  {
    "id": "reverse-text",
    "level": "Basic",
    "topic": {
      "vi": "Chuỗi",
      "en": "Strings"
    },
    "title": {
      "vi": "Đảo chuỗi",
      "en": "Reverse text"
    },
    "prompt": {
      "vi": "Viết reverse_text(text) trả về chuỗi theo thứ tự ngược lại.",
      "en": "Write reverse_text(text) returning the text in reverse order."
    },
    "starter": "def reverse_text(text):\n    pass",
    "example": "reverse_text('Python')  →  'nohtyP'",
    "hint": {
      "vi": "Thử slicing với bước nhảy âm.",
      "en": "Try slicing with a negative step."
    },
    "checks": [
      {
        "expr": "reverse_text('Python')",
        "expected": "'nohtyP'"
      },
      {
        "expr": "reverse_text('abc 123')",
        "expected": "'321 cba'"
      }
    ]
  },
  {
    "id": "count-char",
    "level": "Basic",
    "topic": {
      "vi": "Chuỗi",
      "en": "Strings"
    },
    "title": {
      "vi": "Đếm ký tự",
      "en": "Count a character"
    },
    "prompt": {
      "vi": "Viết count_char(text, char) trả về số lần char xuất hiện trong text.",
      "en": "Write count_char(text, char) returning how many times char appears in text."
    },
    "starter": "def count_char(text, char):\n    pass",
    "example": "count_char('banana', 'a')  →  3",
    "hint": {
      "vi": "Chuỗi có phương thức count().",
      "en": "Strings have a count() method."
    },
    "checks": [
      {
        "expr": "count_char('banana','a')",
        "expected": "3"
      },
      {
        "expr": "count_char('Mississippi','s')",
        "expected": "4"
      }
    ]
  },
  {
    "id": "contains-word",
    "level": "Basic",
    "topic": {
      "vi": "Chuỗi",
      "en": "Strings"
    },
    "title": {
      "vi": "Kiểm tra chuỗi con",
      "en": "Substring membership"
    },
    "prompt": {
      "vi": "Viết contains_word(text, word) trả về True nếu word xuất hiện trong text, ngược lại False. Phân biệt hoa thường.",
      "en": "Write contains_word(text, word) returning True when word occurs in text, otherwise False. Keep matching case-sensitive."
    },
    "starter": "def contains_word(text, word):\n    pass",
    "example": "contains_word('Learn Python', 'Python')  →  True",
    "hint": {
      "vi": "Dùng toán tử in.",
      "en": "Use the in operator."
    },
    "checks": [
      {
        "expr": "contains_word('Learn Python','Python')",
        "expected": "True"
      },
      {
        "expr": "contains_word('Learn Python','python')",
        "expected": "False"
      }
    ]
  },
  {
    "id": "profile-text",
    "level": "Basic",
    "topic": {
      "vi": "Chuỗi",
      "en": "Strings"
    },
    "title": {
      "vi": "Định dạng hồ sơ",
      "en": "Format a profile"
    },
    "prompt": {
      "vi": "Viết profile(name, age) trả về đúng mẫu: <name> is <age> years old.",
      "en": "Write profile(name, age) returning exactly: <name> is <age> years old."
    },
    "starter": "def profile(name, age):\n    pass",
    "example": "profile('An', 15)  →  'An is 15 years old.'",
    "hint": {
      "vi": "Dùng f-string.",
      "en": "Use an f-string."
    },
    "checks": [
      {
        "expr": "profile('An',15)",
        "expected": "'An is 15 years old.'"
      },
      {
        "expr": "profile('Binh',23)",
        "expected": "'Binh is 23 years old.'"
      }
    ]
  },
  {
    "id": "is-even",
    "level": "Basic",
    "topic": {
      "vi": "Boolean & toán tử",
      "en": "Booleans & Operators"
    },
    "title": {
      "vi": "Số chẵn",
      "en": "Even number"
    },
    "prompt": {
      "vi": "Viết is_even(n) trả về True nếu n là số chẵn.",
      "en": "Write is_even(n) returning True if n is even."
    },
    "starter": "def is_even(n):\n    pass",
    "example": "is_even(12)  →  True",
    "hint": {
      "vi": "Kiểm tra phần dư khi chia cho 2.",
      "en": "Check the remainder after division by 2."
    },
    "checks": [
      {
        "expr": "is_even(12)",
        "expected": "True"
      },
      {
        "expr": "is_even(7)",
        "expected": "False"
      },
      {
        "expr": "is_even(-4)",
        "expected": "True"
      }
    ]
  },
  {
    "id": "compare",
    "level": "Basic",
    "topic": {
      "vi": "Boolean & toán tử",
      "en": "Booleans & Operators"
    },
    "title": {
      "vi": "So sánh hai số",
      "en": "Compare two numbers"
    },
    "prompt": {
      "vi": "Viết compare(a, b): trả về -1 nếu a < b, 0 nếu bằng nhau, 1 nếu a > b.",
      "en": "Write compare(a, b): return -1 if a < b, 0 if equal, and 1 if a > b."
    },
    "starter": "def compare(a, b):\n    pass",
    "example": "compare(9, 3)  →  1",
    "hint": {
      "vi": "Dùng if / elif / else.",
      "en": "Use if / elif / else."
    },
    "checks": [
      {
        "expr": "compare(2,5)",
        "expected": "-1"
      },
      {
        "expr": "compare(5,5)",
        "expected": "0"
      },
      {
        "expr": "compare(9,3)",
        "expected": "1"
      }
    ]
  },
  {
    "id": "in-range",
    "level": "Basic",
    "topic": {
      "vi": "Boolean & toán tử",
      "en": "Booleans & Operators"
    },
    "title": {
      "vi": "Nằm trong khoảng",
      "en": "Inside a range"
    },
    "prompt": {
      "vi": "Viết in_range(n, low, high) trả về True khi low <= n <= high.",
      "en": "Write in_range(n, low, high) returning True when low <= n <= high."
    },
    "starter": "def in_range(n, low, high):\n    pass",
    "example": "in_range(5, 1, 10)  →  True",
    "hint": {
      "vi": "Python cho phép chained comparison.",
      "en": "Python supports chained comparisons."
    },
    "checks": [
      {
        "expr": "in_range(5,1,10)",
        "expected": "True"
      },
      {
        "expr": "in_range(1,1,10)",
        "expected": "True"
      },
      {
        "expr": "in_range(12,1,10)",
        "expected": "False"
      }
    ]
  },
  {
    "id": "calc-ops",
    "level": "Basic",
    "topic": {
      "vi": "Boolean & toán tử",
      "en": "Booleans & Operators"
    },
    "title": {
      "vi": "Ba phép toán",
      "en": "Three operations"
    },
    "prompt": {
      "vi": "Viết calc_ops(a, b) trả về tuple (tổng, hiệu a-b, tích).",
      "en": "Write calc_ops(a, b) returning a tuple of (sum, a-b difference, product)."
    },
    "starter": "def calc_ops(a, b):\n    pass",
    "example": "calc_ops(6, 2)  →  (8, 4, 12)",
    "hint": {
      "vi": "Có thể return nhiều giá trị bằng tuple.",
      "en": "You can return multiple values as a tuple."
    },
    "checks": [
      {
        "expr": "calc_ops(6,2)",
        "expected": "(8, 4, 12)"
      },
      {
        "expr": "calc_ops(-3,4)",
        "expected": "(1, -7, -12)"
      }
    ]
  },
  {
    "id": "list-total",
    "level": "Basic",
    "topic": {
      "vi": "List",
      "en": "Lists"
    },
    "title": {
      "vi": "Tổng phần tử List",
      "en": "List total"
    },
    "prompt": {
      "vi": "Viết list_total(numbers) trả về tổng các phần tử trong list.",
      "en": "Write list_total(numbers) returning the sum of all list items."
    },
    "starter": "def list_total(numbers):\n    pass",
    "example": "list_total([1, 2, 3, 4])  →  10",
    "hint": {
      "vi": "Có thể dùng sum().",
      "en": "You may use sum()."
    },
    "checks": [
      {
        "expr": "list_total([1,2,3,4])",
        "expected": "10"
      },
      {
        "expr": "list_total([])",
        "expected": "0"
      }
    ]
  },
  {
    "id": "list-average",
    "level": "Basic",
    "topic": {
      "vi": "List",
      "en": "Lists"
    },
    "title": {
      "vi": "Trung bình cộng",
      "en": "List average"
    },
    "prompt": {
      "vi": "Viết average(numbers) trả về trung bình cộng của list không rỗng.",
      "en": "Write average(numbers) returning the arithmetic mean of a non-empty list."
    },
    "starter": "def average(numbers):\n    pass",
    "example": "average([2, 4, 6])  →  4.0",
    "hint": {
      "vi": "Tổng chia cho số phần tử.",
      "en": "Sum divided by the number of items."
    },
    "checks": [
      {
        "expr": "average([2,4,6])",
        "expected": "4.0"
      },
      {
        "expr": "average([1,2])",
        "expected": "1.5"
      }
    ]
  },
  {
    "id": "unique-sorted",
    "level": "Basic",
    "topic": {
      "vi": "List",
      "en": "Lists"
    },
    "title": {
      "vi": "Loại trùng và sắp xếp",
      "en": "Unique and sorted"
    },
    "prompt": {
      "vi": "Viết unique_sorted(items) trả về list tăng dần, loại bỏ phần tử trùng.",
      "en": "Write unique_sorted(items) returning an ascending list with duplicates removed."
    },
    "starter": "def unique_sorted(items):\n    pass",
    "example": "unique_sorted([3, 1, 3, 2])  →  [1, 2, 3]",
    "hint": {
      "vi": "Có thể kết hợp set() và sorted().",
      "en": "You can combine set() and sorted()."
    },
    "checks": [
      {
        "expr": "unique_sorted([3,1,3,2])",
        "expected": "[1, 2, 3]"
      },
      {
        "expr": "unique_sorted([5,5,5])",
        "expected": "[5]"
      }
    ]
  },
  {
    "id": "second-largest",
    "level": "Core",
    "topic": {
      "vi": "List",
      "en": "Lists"
    },
    "title": {
      "vi": "Số lớn thứ hai",
      "en": "Second largest"
    },
    "prompt": {
      "vi": "Viết second_largest(numbers) trả về giá trị lớn thứ hai khác biệt trong list. Giả sử luôn có ít nhất 2 giá trị khác nhau.",
      "en": "Write second_largest(numbers) returning the second distinct largest value. Assume at least two distinct values exist."
    },
    "starter": "def second_largest(numbers):\n    pass",
    "example": "second_largest([5, 1, 5, 3])  →  3",
    "hint": {
      "vi": "Loại trùng trước khi sắp xếp.",
      "en": "Remove duplicates before sorting."
    },
    "checks": [
      {
        "expr": "second_largest([5,1,5,3])",
        "expected": "3"
      },
      {
        "expr": "second_largest([10,9,8,10])",
        "expected": "9"
      }
    ]
  },
  {
    "id": "even-squares",
    "level": "Core",
    "topic": {
      "vi": "List",
      "en": "Lists"
    },
    "title": {
      "vi": "Bình phương số chẵn",
      "en": "Squares of even numbers"
    },
    "prompt": {
      "vi": "Viết even_squares(numbers) trả về list bình phương của các số chẵn, giữ nguyên thứ tự.",
      "en": "Write even_squares(numbers) returning squares of even values while preserving order."
    },
    "starter": "def even_squares(numbers):\n    pass",
    "example": "even_squares([1, 2, 3, 4])  →  [4, 16]",
    "hint": {
      "vi": "List comprehension phù hợp cho bài này.",
      "en": "A list comprehension fits this task."
    },
    "checks": [
      {
        "expr": "even_squares([1,2,3,4])",
        "expected": "[4, 16]"
      },
      {
        "expr": "even_squares([-2,3,6])",
        "expected": "[4, 36]"
      }
    ]
  },
  {
    "id": "rotate-left",
    "level": "Core",
    "topic": {
      "vi": "List",
      "en": "Lists"
    },
    "title": {
      "vi": "Xoay List sang trái",
      "en": "Rotate a list left"
    },
    "prompt": {
      "vi": "Viết rotate_left(items) đưa phần tử đầu xuống cuối. List rỗng phải trả về [].",
      "en": "Write rotate_left(items) moving the first item to the end. An empty list must return []."
    },
    "starter": "def rotate_left(items):\n    pass",
    "example": "rotate_left([1, 2, 3])  →  [2, 3, 1]",
    "hint": {
      "vi": "Kết hợp slicing; nhớ xử lý list rỗng.",
      "en": "Use slicing; remember the empty-list case."
    },
    "checks": [
      {
        "expr": "rotate_left([1,2,3])",
        "expected": "[2, 3, 1]"
      },
      {
        "expr": "rotate_left([])",
        "expected": "[]"
      },
      {
        "expr": "rotate_left(['a'])",
        "expected": "['a']"
      }
    ]
  },
  {
    "id": "swap-tuple",
    "level": "Basic",
    "topic": {
      "vi": "Tuple",
      "en": "Tuples"
    },
    "title": {
      "vi": "Đổi chỗ bằng Tuple",
      "en": "Tuple swap"
    },
    "prompt": {
      "vi": "Viết swap_pair(pair) nhận tuple 2 phần tử và trả về tuple với thứ tự đảo lại.",
      "en": "Write swap_pair(pair) for a 2-item tuple and return the items swapped."
    },
    "starter": "def swap_pair(pair):\n    pass",
    "example": "swap_pair((10, 20))  →  (20, 10)",
    "hint": {
      "vi": "Có thể unpack tuple thành hai biến.",
      "en": "You can unpack the tuple into two variables."
    },
    "checks": [
      {
        "expr": "swap_pair((10,20))",
        "expected": "(20, 10)"
      },
      {
        "expr": "swap_pair(('a','b'))",
        "expected": "('b', 'a')"
      }
    ]
  },
  {
    "id": "point-quadrant",
    "level": "Core",
    "topic": {
      "vi": "Tuple",
      "en": "Tuples"
    },
    "title": {
      "vi": "Góc phần tư tọa độ",
      "en": "Coordinate quadrant"
    },
    "prompt": {
      "vi": "Viết quadrant(point) với point=(x,y). Trả về 1,2,3,4 theo góc phần tư; trả về 0 nếu điểm nằm trên trục.",
      "en": "Write quadrant(point), where point=(x,y). Return 1,2,3,4 for the quadrant; return 0 when the point lies on an axis."
    },
    "starter": "def quadrant(point):\n    pass",
    "example": "quadrant((3, -2))  →  4",
    "hint": {
      "vi": "Unpack x, y rồi dùng điều kiện.",
      "en": "Unpack x, y and use conditions."
    },
    "checks": [
      {
        "expr": "quadrant((2,3))",
        "expected": "1"
      },
      {
        "expr": "quadrant((-2,3))",
        "expected": "2"
      },
      {
        "expr": "quadrant((-2,-3))",
        "expected": "3"
      },
      {
        "expr": "quadrant((3,-2))",
        "expected": "4"
      },
      {
        "expr": "quadrant((0,5))",
        "expected": "0"
      }
    ]
  },
  {
    "id": "set-intersection",
    "level": "Basic",
    "topic": {
      "vi": "Set",
      "en": "Sets"
    },
    "title": {
      "vi": "Giao hai tập hợp",
      "en": "Set intersection"
    },
    "prompt": {
      "vi": "Viết common(a, b) trả về set là phần giao của hai iterable.",
      "en": "Write common(a, b) returning the set intersection of two iterables."
    },
    "starter": "def common(a, b):\n    pass",
    "example": "common([1,2,3], [2,3,4])  →  {2, 3}",
    "hint": {
      "vi": "Chuyển về set và dùng phép giao.",
      "en": "Convert to sets and use intersection."
    },
    "checks": [
      {
        "expr": "common([1,2,3],[2,3,4])",
        "expected": "{2, 3}"
      },
      {
        "expr": "common('abc','bcd')",
        "expected": "{'b', 'c'}"
      }
    ]
  },
  {
    "id": "set-symmetric",
    "level": "Core",
    "topic": {
      "vi": "Set",
      "en": "Sets"
    },
    "title": {
      "vi": "Hiệu đối xứng",
      "en": "Symmetric difference"
    },
    "prompt": {
      "vi": "Viết only_one(a, b) trả về set các phần tử chỉ xuất hiện ở một trong hai tập, không xuất hiện ở cả hai.",
      "en": "Write only_one(a, b) returning items present in exactly one of the two sets."
    },
    "starter": "def only_one(a, b):\n    pass",
    "example": "only_one({1,2}, {2,3})  →  {1, 3}",
    "hint": {
      "vi": "Dùng symmetric difference (^ hoặc symmetric_difference).",
      "en": "Use symmetric difference (^ or symmetric_difference)."
    },
    "checks": [
      {
        "expr": "only_one({1,2},{2,3})",
        "expected": "{1, 3}"
      },
      {
        "expr": "only_one({'a'},{'a'})",
        "expected": "set()"
      }
    ]
  },
  {
    "id": "dict-get",
    "level": "Basic",
    "topic": {
      "vi": "Dictionary",
      "en": "Dictionaries"
    },
    "title": {
      "vi": "Lấy giá trị an toàn",
      "en": "Safe dictionary lookup"
    },
    "prompt": {
      "vi": "Viết get_value(data, key) trả về value nếu key tồn tại, nếu không trả về None.",
      "en": "Write get_value(data, key) returning the value when the key exists, otherwise None."
    },
    "starter": "def get_value(data, key):\n    pass",
    "example": "get_value({'x': 5}, 'y')  →  None",
    "hint": {
      "vi": "Dictionary có phương thức get().",
      "en": "Dictionaries have a get() method."
    },
    "checks": [
      {
        "expr": "get_value({'x':5},'x')",
        "expected": "5"
      },
      {
        "expr": "get_value({'x':5},'y')",
        "expected": "None"
      }
    ]
  },
  {
    "id": "word-frequency",
    "level": "Core",
    "topic": {
      "vi": "Dictionary",
      "en": "Dictionaries"
    },
    "title": {
      "vi": "Tần suất từ",
      "en": "Word frequency"
    },
    "prompt": {
      "vi": "Viết word_frequency(words) trả về dictionary đếm số lần xuất hiện của từng từ.",
      "en": "Write word_frequency(words) returning a dictionary that counts each word."
    },
    "starter": "def word_frequency(words):\n    pass",
    "example": "word_frequency(['a','b','a'])  →  {'a': 2, 'b': 1}",
    "hint": {
      "vi": "Duyệt từng từ và tăng bộ đếm trong dict.",
      "en": "Loop through words and increment a dictionary counter."
    },
    "checks": [
      {
        "expr": "word_frequency(['a','b','a'])",
        "expected": "{'a': 2, 'b': 1}"
      },
      {
        "expr": "word_frequency([])",
        "expected": "{}"
      }
    ]
  },
  {
    "id": "merge-dicts",
    "level": "Core",
    "topic": {
      "vi": "Dictionary",
      "en": "Dictionaries"
    },
    "title": {
      "vi": "Gộp Dictionary",
      "en": "Merge dictionaries"
    },
    "prompt": {
      "vi": "Viết merge_dicts(a, b) trả về dictionary mới chứa dữ liệu của a và b; nếu trùng key thì giá trị từ b được ưu tiên. Không sửa a hoặc b.",
      "en": "Write merge_dicts(a, b) returning a new dictionary containing both; b wins on duplicate keys. Do not mutate a or b."
    },
    "starter": "def merge_dicts(a, b):\n    pass",
    "example": "merge_dicts({'x':1}, {'x':2,'y':3})  →  {'x':2,'y':3}",
    "hint": {
      "vi": "Có thể dùng copy/unpacking | operator.",
      "en": "You can use copying, unpacking, or the | operator."
    },
    "checks": [
      {
        "expr": "merge_dicts({'x':1},{'x':2,'y':3})",
        "expected": "{'x': 2, 'y': 3}"
      },
      {
        "expr": "merge_dicts({}, {'a':1})",
        "expected": "{'a': 1}"
      }
    ]
  },
  {
    "id": "best-student",
    "level": "Core",
    "topic": {
      "vi": "Dictionary",
      "en": "Dictionaries"
    },
    "title": {
      "vi": "Học sinh điểm cao nhất",
      "en": "Top scoring student"
    },
    "prompt": {
      "vi": "Viết best_student(scores) nhận dict {tên: điểm} không rỗng và trả về tên có điểm cao nhất.",
      "en": "Write best_student(scores) for a non-empty {name: score} dict and return the name with the highest score."
    },
    "starter": "def best_student(scores):\n    pass",
    "example": "best_student({'An':8, 'Binh':9})  →  'Binh'",
    "hint": {
      "vi": "max() có thể nhận key=...",
      "en": "max() can accept a key= function."
    },
    "checks": [
      {
        "expr": "best_student({'An':8,'Binh':9,'Chi':7})",
        "expected": "'Binh'"
      },
      {
        "expr": "best_student({'A':1})",
        "expected": "'A'"
      }
    ]
  },
  {
    "id": "grade",
    "level": "Basic",
    "topic": {
      "vi": "Điều kiện",
      "en": "Conditions"
    },
    "title": {
      "vi": "Xếp loại điểm",
      "en": "Grade a score"
    },
    "prompt": {
      "vi": "Viết grade(score): >=90 'A', >=80 'B', >=70 'C', >=60 'D', còn lại 'F'.",
      "en": "Write grade(score): >=90 'A', >=80 'B', >=70 'C', >=60 'D', otherwise 'F'."
    },
    "starter": "def grade(score):\n    pass",
    "example": "grade(85)  →  'B'",
    "hint": {
      "vi": "Kiểm tra từ ngưỡng cao xuống thấp.",
      "en": "Check thresholds from highest to lowest."
    },
    "checks": [
      {
        "expr": "grade(95)",
        "expected": "'A'"
      },
      {
        "expr": "grade(85)",
        "expected": "'B'"
      },
      {
        "expr": "grade(75)",
        "expected": "'C'"
      },
      {
        "expr": "grade(65)",
        "expected": "'D'"
      },
      {
        "expr": "grade(50)",
        "expected": "'F'"
      }
    ]
  },
  {
    "id": "leap-year",
    "level": "Core",
    "topic": {
      "vi": "Điều kiện",
      "en": "Conditions"
    },
    "title": {
      "vi": "Năm nhuận",
      "en": "Leap year"
    },
    "prompt": {
      "vi": "Viết is_leap_year(year) theo quy tắc Gregorian: chia hết 400 hoặc chia hết 4 nhưng không chia hết 100.",
      "en": "Write is_leap_year(year) using Gregorian rules: divisible by 400, or divisible by 4 but not by 100."
    },
    "starter": "def is_leap_year(year):\n    pass",
    "example": "is_leap_year(2000)  →  True",
    "hint": {
      "vi": "Kết hợp and/or với phép chia dư.",
      "en": "Combine and/or with modulo."
    },
    "checks": [
      {
        "expr": "is_leap_year(2000)",
        "expected": "True"
      },
      {
        "expr": "is_leap_year(1900)",
        "expected": "False"
      },
      {
        "expr": "is_leap_year(2024)",
        "expected": "True"
      },
      {
        "expr": "is_leap_year(2023)",
        "expected": "False"
      }
    ]
  },
  {
    "id": "fizzbuzz-one",
    "level": "Basic",
    "topic": {
      "vi": "Điều kiện",
      "en": "Conditions"
    },
    "title": {
      "vi": "FizzBuzz một số",
      "en": "Single-number FizzBuzz"
    },
    "prompt": {
      "vi": "Viết fizzbuzz(n): chia hết 3 và 5 → 'FizzBuzz'; chỉ 3 → 'Fizz'; chỉ 5 → 'Buzz'; còn lại trả về n.",
      "en": "Write fizzbuzz(n): divisible by 3 and 5 → 'FizzBuzz'; only 3 → 'Fizz'; only 5 → 'Buzz'; otherwise return n."
    },
    "starter": "def fizzbuzz(n):\n    pass",
    "example": "fizzbuzz(30)  →  'FizzBuzz'",
    "hint": {
      "vi": "Kiểm tra điều kiện chia hết cả 3 và 5 trước.",
      "en": "Check divisibility by both 3 and 5 first."
    },
    "checks": [
      {
        "expr": "fizzbuzz(30)",
        "expected": "'FizzBuzz'"
      },
      {
        "expr": "fizzbuzz(9)",
        "expected": "'Fizz'"
      },
      {
        "expr": "fizzbuzz(10)",
        "expected": "'Buzz'"
      },
      {
        "expr": "fizzbuzz(7)",
        "expected": "7"
      }
    ]
  },
  {
    "id": "match-day",
    "level": "Core",
    "topic": {
      "vi": "Điều kiện",
      "en": "Conditions"
    },
    "title": {
      "vi": "Phân loại ngày bằng match",
      "en": "Classify a day with match"
    },
    "prompt": {
      "vi": "Viết day_type(day) nhận tên ngày tiếng Anh viết thường. Mon-Fri → 'weekday', Sat/Sun → 'weekend', khác → 'invalid'. Khuyến khích dùng match.",
      "en": "Write day_type(day) for lowercase English day names. Mon-Fri → 'weekday', Sat/Sun → 'weekend', otherwise 'invalid'. Prefer match."
    },
    "starter": "def day_type(day):\n    # day: 'monday', 'tuesday', ...\n    pass",
    "example": "day_type('sunday')  →  'weekend'",
    "hint": {
      "vi": "match hỗ trợ nhiều pattern bằng ký hiệu |.",
      "en": "match can combine patterns with |."
    },
    "checks": [
      {
        "expr": "day_type('monday')",
        "expected": "'weekday'"
      },
      {
        "expr": "day_type('saturday')",
        "expected": "'weekend'"
      },
      {
        "expr": "day_type('holiday')",
        "expected": "'invalid'"
      }
    ]
  },
  {
    "id": "sum-to-n",
    "level": "Basic",
    "topic": {
      "vi": "Vòng lặp",
      "en": "Loops"
    },
    "title": {
      "vi": "Tổng từ 1 đến n bằng while",
      "en": "Sum 1..n with while"
    },
    "prompt": {
      "vi": "Viết sum_to_n(n) dùng vòng lặp while để tính 1 + 2 + ... + n với n >= 0.",
      "en": "Write sum_to_n(n) using a while loop to compute 1 + 2 + ... + n for n >= 0."
    },
    "starter": "def sum_to_n(n):\n    pass",
    "example": "sum_to_n(5)  →  15",
    "hint": {
      "vi": "Tạo biến tổng và biến đếm.",
      "en": "Use an accumulator and a counter."
    },
    "checks": [
      {
        "expr": "sum_to_n(5)",
        "expected": "15"
      },
      {
        "expr": "sum_to_n(0)",
        "expected": "0"
      },
      {
        "expr": "sum_to_n(100)",
        "expected": "5050"
      }
    ]
  },
  {
    "id": "digit-count",
    "level": "Core",
    "topic": {
      "vi": "Vòng lặp",
      "en": "Loops"
    },
    "title": {
      "vi": "Đếm chữ số bằng while",
      "en": "Count digits with while"
    },
    "prompt": {
      "vi": "Viết digit_count(n) trả về số chữ số của số nguyên n bằng while. Giá trị âm bỏ dấu; 0 có 1 chữ số.",
      "en": "Write digit_count(n) returning the number of digits using while. Ignore the sign; 0 has one digit."
    },
    "starter": "def digit_count(n):\n    pass",
    "example": "digit_count(-1205)  →  4",
    "hint": {
      "vi": "abs() giúp bỏ dấu; chia nguyên cho 10 trong vòng lặp.",
      "en": "Use abs(); repeatedly integer-divide by 10."
    },
    "checks": [
      {
        "expr": "digit_count(-1205)",
        "expected": "4"
      },
      {
        "expr": "digit_count(0)",
        "expected": "1"
      },
      {
        "expr": "digit_count(99)",
        "expected": "2"
      }
    ]
  },
  {
    "id": "first-divisible",
    "level": "Core",
    "topic": {
      "vi": "Vòng lặp",
      "en": "Loops"
    },
    "title": {
      "vi": "Tìm số chia hết đầu tiên",
      "en": "First divisible number"
    },
    "prompt": {
      "vi": "Viết first_divisible(start, divisor) tìm số nguyên nhỏ nhất >= start chia hết cho divisor. divisor luôn khác 0.",
      "en": "Write first_divisible(start, divisor) returning the smallest integer >= start divisible by divisor. divisor is non-zero."
    },
    "starter": "def first_divisible(start, divisor):\n    pass",
    "example": "first_divisible(10, 6)  →  12",
    "hint": {
      "vi": "Có thể tăng dần từ start trong while và break/return khi đạt điều kiện.",
      "en": "Increment from start in a while loop and stop when the condition is met."
    },
    "checks": [
      {
        "expr": "first_divisible(10,6)",
        "expected": "12"
      },
      {
        "expr": "first_divisible(12,6)",
        "expected": "12"
      },
      {
        "expr": "first_divisible(-3,5)",
        "expected": "0"
      }
    ]
  },
  {
    "id": "sum-even",
    "level": "Basic",
    "topic": {
      "vi": "Vòng lặp",
      "en": "Loops"
    },
    "title": {
      "vi": "Tổng số chẵn với for",
      "en": "Sum evens with for"
    },
    "prompt": {
      "vi": "Viết sum_even_to_n(n) tính tổng các số chẵn từ 0 đến n (bao gồm n nếu chẵn) bằng for/range.",
      "en": "Write sum_even_to_n(n) summing even integers from 0 through n using for/range."
    },
    "starter": "def sum_even_to_n(n):\n    pass",
    "example": "sum_even_to_n(10)  →  30",
    "hint": {
      "vi": "range() có tham số bước nhảy.",
      "en": "range() has a step argument."
    },
    "checks": [
      {
        "expr": "sum_even_to_n(10)",
        "expected": "30"
      },
      {
        "expr": "sum_even_to_n(1)",
        "expected": "0"
      },
      {
        "expr": "sum_even_to_n(6)",
        "expected": "12"
      }
    ]
  },
  {
    "id": "times-table",
    "level": "Core",
    "topic": {
      "vi": "Vòng lặp",
      "en": "Loops"
    },
    "title": {
      "vi": "Bảng nhân",
      "en": "Multiplication table"
    },
    "prompt": {
      "vi": "Viết multiplication_table(n) trả về list 10 tích [n*1, n*2, ..., n*10].",
      "en": "Write multiplication_table(n) returning the 10 products [n*1, n*2, ..., n*10]."
    },
    "starter": "def multiplication_table(n):\n    pass",
    "example": "multiplication_table(3)  →  [3,6,...,30]",
    "hint": {
      "vi": "Duyệt range(1, 11).",
      "en": "Loop over range(1, 11)."
    },
    "checks": [
      {
        "expr": "multiplication_table(3)",
        "expected": "[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]"
      },
      {
        "expr": "multiplication_table(0)",
        "expected": "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]"
      }
    ]
  },
  {
    "id": "flatten-matrix",
    "level": "Core",
    "topic": {
      "vi": "Vòng lặp",
      "en": "Loops"
    },
    "title": {
      "vi": "Làm phẳng ma trận",
      "en": "Flatten a matrix"
    },
    "prompt": {
      "vi": "Viết flatten(matrix) dùng vòng lặp lồng nhau để biến list các list thành một list phẳng.",
      "en": "Write flatten(matrix) using nested loops to turn a list of lists into one flat list."
    },
    "starter": "def flatten(matrix):\n    pass",
    "example": "flatten([[1,2],[3],[4,5]])  →  [1,2,3,4,5]",
    "hint": {
      "vi": "Một vòng for cho từng hàng, một vòng for cho từng phần tử.",
      "en": "Use one loop for rows and another for items."
    },
    "checks": [
      {
        "expr": "flatten([[1,2],[3],[4,5]])",
        "expected": "[1, 2, 3, 4, 5]"
      },
      {
        "expr": "flatten([[],[1],[]])",
        "expected": "[1]"
      }
    ]
  },
  {
    "id": "is-prime",
    "level": "Core",
    "topic": {
      "vi": "Vòng lặp",
      "en": "Loops"
    },
    "title": {
      "vi": "Kiểm tra số nguyên tố",
      "en": "Prime check"
    },
    "prompt": {
      "vi": "Viết is_prime(n) trả về True nếu n là số nguyên tố. n < 2 không phải số nguyên tố.",
      "en": "Write is_prime(n) returning True for prime numbers. Values below 2 are not prime."
    },
    "starter": "def is_prime(n):\n    pass",
    "example": "is_prime(29)  →  True",
    "hint": {
      "vi": "Chỉ cần thử ước đến căn bậc hai của n.",
      "en": "You only need to test divisors up to sqrt(n)."
    },
    "checks": [
      {
        "expr": "is_prime(2)",
        "expected": "True"
      },
      {
        "expr": "is_prime(29)",
        "expected": "True"
      },
      {
        "expr": "is_prime(1)",
        "expected": "False"
      },
      {
        "expr": "is_prime(21)",
        "expected": "False"
      }
    ]
  },
  {
    "id": "factorial",
    "level": "Basic",
    "topic": {
      "vi": "Hàm",
      "en": "Functions"
    },
    "title": {
      "vi": "Giai thừa",
      "en": "Factorial"
    },
    "prompt": {
      "vi": "Viết factorial(n) trả về n! với n >= 0. Có thể dùng vòng lặp.",
      "en": "Write factorial(n) returning n! for n >= 0. A loop is fine."
    },
    "starter": "def factorial(n):\n    pass",
    "example": "factorial(5)  →  120",
    "hint": {
      "vi": "0! = 1; nhân dồn từ 1 đến n.",
      "en": "0! = 1; multiply values from 1 to n."
    },
    "checks": [
      {
        "expr": "factorial(0)",
        "expected": "1"
      },
      {
        "expr": "factorial(5)",
        "expected": "120"
      },
      {
        "expr": "factorial(7)",
        "expected": "5040"
      }
    ]
  },
  {
    "id": "default-arg",
    "level": "Core",
    "topic": {
      "vi": "Hàm",
      "en": "Functions"
    },
    "title": {
      "vi": "Tham số mặc định",
      "en": "Default parameter"
    },
    "prompt": {
      "vi": "Viết greet_person(name, greeting='Hello') trả về '<greeting>, <name>!'.",
      "en": "Write greet_person(name, greeting='Hello') returning '<greeting>, <name>!'."
    },
    "starter": "def greet_person(name, greeting='Hello'):\n    pass",
    "example": "greet_person('An')  →  'Hello, An!'",
    "hint": {
      "vi": "Khai báo giá trị mặc định ngay trong chữ ký hàm.",
      "en": "Put the default value in the function signature."
    },
    "checks": [
      {
        "expr": "greet_person('An')",
        "expected": "'Hello, An!'"
      },
      {
        "expr": "greet_person('Binh','Hi')",
        "expected": "'Hi, Binh!'"
      }
    ]
  },
  {
    "id": "args-stats",
    "level": "Core",
    "topic": {
      "vi": "Hàm",
      "en": "Functions"
    },
    "title": {
      "vi": "Tham số *args",
      "en": "*args statistics"
    },
    "prompt": {
      "vi": "Viết stats(*numbers) trả về tuple (min, max, sum). Giả sử luôn có ít nhất một số.",
      "en": "Write stats(*numbers) returning (min, max, sum). Assume at least one number."
    },
    "starter": "def stats(*numbers):\n    pass",
    "example": "stats(3,1,5)  →  (1,5,9)",
    "hint": {
      "vi": "*args được nhận như một tuple.",
      "en": "*args arrives as a tuple."
    },
    "checks": [
      {
        "expr": "stats(3,1,5)",
        "expected": "(1, 5, 9)"
      },
      {
        "expr": "stats(-2,4)",
        "expected": "(-2, 4, 2)"
      }
    ]
  },
  {
    "id": "kwargs-profile",
    "level": "Core",
    "topic": {
      "vi": "Hàm",
      "en": "Functions"
    },
    "title": {
      "vi": "Tham số **kwargs",
      "en": "**kwargs profile"
    },
    "prompt": {
      "vi": "Viết build_profile(**kwargs) trả về một dictionary mới chứa đúng các cặp key/value được truyền vào.",
      "en": "Write build_profile(**kwargs) returning a new dictionary containing exactly the supplied key/value pairs."
    },
    "starter": "def build_profile(**kwargs):\n    pass",
    "example": "build_profile(name='An', age=15)  →  {'name':'An','age':15}",
    "hint": {
      "vi": "**kwargs là dictionary; nên trả về bản sao mới.",
      "en": "**kwargs is a dictionary; return a new copy."
    },
    "checks": [
      {
        "expr": "build_profile(name='An',age=15)",
        "expected": "{'name': 'An', 'age': 15}"
      },
      {
        "expr": "build_profile()",
        "expected": "{}"
      }
    ]
  },
  {
    "id": "recursive-sum",
    "level": "Intermediate",
    "topic": {
      "vi": "Hàm",
      "en": "Functions"
    },
    "title": {
      "vi": "Đệ quy tính tổng",
      "en": "Recursive sum"
    },
    "prompt": {
      "vi": "Viết recursive_sum(numbers) tính tổng list bằng đệ quy. List rỗng trả về 0.",
      "en": "Write recursive_sum(numbers) using recursion. An empty list returns 0."
    },
    "starter": "def recursive_sum(numbers):\n    pass",
    "example": "recursive_sum([1,2,3])  →  6",
    "hint": {
      "vi": "Base case là list rỗng; sau đó cộng phần tử đầu với lời gọi cho phần còn lại.",
      "en": "Use the empty list as the base case, then add the first item to the recursive result."
    },
    "checks": [
      {
        "expr": "recursive_sum([])",
        "expected": "0"
      },
      {
        "expr": "recursive_sum([1,2,3,4])",
        "expected": "10"
      }
    ]
  },
  {
    "id": "lambda-sort",
    "level": "Intermediate",
    "topic": {
      "vi": "Lambda & phạm vi",
      "en": "Lambda & Scope"
    },
    "title": {
      "vi": "Sắp xếp bằng lambda",
      "en": "Sort with lambda"
    },
    "prompt": {
      "vi": "Viết sort_by_second(pairs) trả về list mới sắp xếp các tuple theo phần tử thứ hai tăng dần.",
      "en": "Write sort_by_second(pairs) returning a new list sorted by each tuple's second item."
    },
    "starter": "def sort_by_second(pairs):\n    pass",
    "example": "sort_by_second([('a',3),('b',1)])  →  [('b',1),('a',3)]",
    "hint": {
      "vi": "Dùng sorted(..., key=lambda ...).",
      "en": "Use sorted(..., key=lambda ...)."
    },
    "checks": [
      {
        "expr": "sort_by_second([('a',3),('b',1),('c',2)])",
        "expected": "[('b', 1), ('c', 2), ('a', 3)]"
      },
      {
        "expr": "sort_by_second([])",
        "expected": "[]"
      }
    ]
  },
  {
    "id": "apply-operation",
    "level": "Intermediate",
    "topic": {
      "vi": "Lambda & phạm vi",
      "en": "Lambda & Scope"
    },
    "title": {
      "vi": "Hàm bậc cao đơn giản",
      "en": "Simple higher-order behavior"
    },
    "prompt": {
      "vi": "Viết apply_operation(a, b, op) với op là '+', '*', hoặc 'max'. Trả về kết quả tương ứng.",
      "en": "Write apply_operation(a, b, op), where op is '+', '*', or 'max'. Return the corresponding result."
    },
    "starter": "def apply_operation(a, b, op):\n    pass",
    "example": "apply_operation(4,7,'max')  →  7",
    "hint": {
      "vi": "Có thể ánh xạ tên phép toán sang lambda/function.",
      "en": "You can map operation names to lambdas/functions."
    },
    "checks": [
      {
        "expr": "apply_operation(2,3,'+')",
        "expected": "5"
      },
      {
        "expr": "apply_operation(2,3,'*')",
        "expected": "6"
      },
      {
        "expr": "apply_operation(4,7,'max')",
        "expected": "7"
      }
    ]
  },
  {
    "id": "closure-multiplier",
    "level": "Intermediate",
    "topic": {
      "vi": "Lambda & phạm vi",
      "en": "Lambda & Scope"
    },
    "title": {
      "vi": "Closure tạo bộ nhân",
      "en": "Multiplier closure"
    },
    "prompt": {
      "vi": "Viết make_multiplier(n) trả về một hàm mới; hàm đó nhận x và trả về x*n.",
      "en": "Write make_multiplier(n) returning a new function that takes x and returns x*n."
    },
    "starter": "def make_multiplier(n):\n    pass",
    "example": "make_multiplier(3)(4)  →  12",
    "hint": {
      "vi": "Định nghĩa hàm bên trong hoặc trả về lambda.",
      "en": "Define an inner function or return a lambda."
    },
    "checks": [
      {
        "expr": "make_multiplier(3)(4)",
        "expected": "12"
      },
      {
        "expr": "make_multiplier(-2)(5)",
        "expected": "-10"
      }
    ]
  },
  {
    "id": "filter-positive",
    "level": "Core",
    "topic": {
      "vi": "Lambda & phạm vi",
      "en": "Lambda & Scope"
    },
    "title": {
      "vi": "Lọc số dương",
      "en": "Filter positive numbers"
    },
    "prompt": {
      "vi": "Viết positive_numbers(numbers) trả về list chỉ gồm các số > 0, giữ nguyên thứ tự.",
      "en": "Write positive_numbers(numbers) returning only values > 0 while preserving order."
    },
    "starter": "def positive_numbers(numbers):\n    pass",
    "example": "positive_numbers([-1,0,3,2])  →  [3,2]",
    "hint": {
      "vi": "Có thể dùng filter + lambda hoặc list comprehension.",
      "en": "Use filter + lambda or a list comprehension."
    },
    "checks": [
      {
        "expr": "positive_numbers([-1,0,3,2])",
        "expected": "[3, 2]"
      },
      {
        "expr": "positive_numbers([-5,-1])",
        "expected": "[]"
      }
    ]
  },
  {
    "id": "student-class",
    "level": "Intermediate",
    "topic": {
      "vi": "Lập trình hướng đối tượng",
      "en": "Classes & OOP"
    },
    "title": {
      "vi": "Lớp Student",
      "en": "Student class"
    },
    "prompt": {
      "vi": "Tạo class Student có __init__(name, score), lưu hai thuộc tính và method passed() trả về True khi score >= 5.",
      "en": "Create a Student class with __init__(name, score), store both attributes, and add passed() returning True when score >= 5."
    },
    "starter": "class Student:\n    def __init__(self, name, score):\n        pass\n\n    def passed(self):\n        pass",
    "example": "Student('An', 8).passed()  →  True",
    "hint": {
      "vi": "Dùng self.name và self.score.",
      "en": "Use self.name and self.score."
    },
    "checks": [
      {
        "expr": "Student('An',8).passed()",
        "expected": "True"
      },
      {
        "expr": "Student('Binh',4.5).passed()",
        "expected": "False"
      },
      {
        "expr": "Student('Chi',7).name",
        "expected": "'Chi'"
      }
    ]
  },
  {
    "id": "rectangle-class",
    "level": "Intermediate",
    "topic": {
      "vi": "Lập trình hướng đối tượng",
      "en": "Classes & OOP"
    },
    "title": {
      "vi": "Lớp Rectangle",
      "en": "Rectangle class"
    },
    "prompt": {
      "vi": "Tạo class Rectangle(width, height) với area() và perimeter().",
      "en": "Create Rectangle(width, height) with area() and perimeter() methods."
    },
    "starter": "class Rectangle:\n    def __init__(self, width, height):\n        pass\n\n    def area(self):\n        pass\n\n    def perimeter(self):\n        pass",
    "example": "Rectangle(5,3).area()  →  15",
    "hint": {
      "vi": "Chu vi = 2*(width+height).",
      "en": "Perimeter = 2*(width+height)."
    },
    "checks": [
      {
        "expr": "Rectangle(5,3).area()",
        "expected": "15"
      },
      {
        "expr": "Rectangle(5,3).perimeter()",
        "expected": "16"
      }
    ]
  },
  {
    "id": "inheritance-dog",
    "level": "Intermediate",
    "topic": {
      "vi": "Lập trình hướng đối tượng",
      "en": "Classes & OOP"
    },
    "title": {
      "vi": "Kế thừa Animal → Dog",
      "en": "Animal → Dog inheritance"
    },
    "prompt": {
      "vi": "Tạo Animal có speak() trả về '...'. Tạo Dog kế thừa Animal và override speak() để trả về 'Woof'.",
      "en": "Create Animal.speak() returning '...'. Create Dog inheriting Animal and override speak() to return 'Woof'."
    },
    "starter": "class Animal:\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        pass",
    "example": "Dog().speak()  →  'Woof'",
    "hint": {
      "vi": "Khai báo class Dog(Animal).",
      "en": "Declare class Dog(Animal)."
    },
    "checks": [
      {
        "expr": "Animal().speak()",
        "expected": "'...'"
      },
      {
        "expr": "Dog().speak()",
        "expected": "'Woof'"
      },
      {
        "expr": "isinstance(Dog(), Animal)",
        "expected": "True"
      }
    ]
  },
  {
    "id": "polymorphism",
    "level": "Intermediate",
    "topic": {
      "vi": "Lập trình hướng đối tượng",
      "en": "Classes & OOP"
    },
    "title": {
      "vi": "Đa hình qua speak()",
      "en": "Polymorphism via speak()"
    },
    "prompt": {
      "vi": "Tạo Cat.speak() → 'Meow', Dog.speak() → 'Woof', và animal_sound(animal) chỉ gọi animal.speak().",
      "en": "Create Cat.speak() → 'Meow', Dog.speak() → 'Woof', and animal_sound(animal) that only calls animal.speak()."
    },
    "starter": "class Cat:\n    def speak(self):\n        pass\n\nclass Dog:\n    def speak(self):\n        pass\n\ndef animal_sound(animal):\n    pass",
    "example": "animal_sound(Cat())  →  'Meow'",
    "hint": {
      "vi": "animal_sound không cần kiểm tra kiểu đối tượng.",
      "en": "animal_sound does not need type checks."
    },
    "checks": [
      {
        "expr": "animal_sound(Cat())",
        "expected": "'Meow'"
      },
      {
        "expr": "animal_sound(Dog())",
        "expected": "'Woof'"
      }
    ]
  },
  {
    "id": "countdown-iterator",
    "level": "Advanced",
    "topic": {
      "vi": "Lập trình hướng đối tượng",
      "en": "Classes & OOP"
    },
    "title": {
      "vi": "Iterator Countdown",
      "en": "Countdown iterator"
    },
    "prompt": {
      "vi": "Tạo class Countdown(start) là iterator trả lần lượt start, start-1, ..., 1 rồi dừng.",
      "en": "Create Countdown(start) as an iterator yielding start, start-1, ..., 1 and then stopping."
    },
    "starter": "class Countdown:\n    def __init__(self, start):\n        pass\n\n    def __iter__(self):\n        pass\n\n    def __next__(self):\n        pass",
    "example": "list(Countdown(3))  →  [3,2,1]",
    "hint": {
      "vi": "__iter__ có thể trả self; __next__ raise StopIteration khi kết thúc.",
      "en": "__iter__ can return self; __next__ raises StopIteration when finished."
    },
    "checks": [
      {
        "expr": "list(Countdown(3))",
        "expected": "[3, 2, 1]"
      },
      {
        "expr": "list(Countdown(1))",
        "expected": "[1]"
      },
      {
        "expr": "list(Countdown(0))",
        "expected": "[]"
      }
    ]
  },
  {
    "id": "circle-area",
    "level": "Intermediate",
    "topic": {
      "vi": "Module & thư viện chuẩn",
      "en": "Modules & Standard Library"
    },
    "title": {
      "vi": "Dùng module math",
      "en": "Use the math module"
    },
    "prompt": {
      "vi": "Viết circle_area(radius) dùng math.pi và trả về diện tích làm tròn 2 chữ số thập phân.",
      "en": "Write circle_area(radius) using math.pi and return the area rounded to 2 decimal places."
    },
    "starter": "import math\n\ndef circle_area(radius):\n    pass",
    "example": "circle_area(2)  →  12.57",
    "hint": {
      "vi": "Dùng round(value, 2).",
      "en": "Use round(value, 2)."
    },
    "checks": [
      {
        "expr": "circle_area(2)",
        "expected": "12.57"
      },
      {
        "expr": "circle_area(1)",
        "expected": "3.14"
      }
    ]
  },
  {
    "id": "days-between",
    "level": "Intermediate",
    "topic": {
      "vi": "Module & thư viện chuẩn",
      "en": "Modules & Standard Library"
    },
    "title": {
      "vi": "Khoảng cách ngày",
      "en": "Days between dates"
    },
    "prompt": {
      "vi": "Viết days_between(date1, date2) nhận hai chuỗi YYYY-MM-DD và trả về số ngày tuyệt đối giữa chúng.",
      "en": "Write days_between(date1, date2) for two YYYY-MM-DD strings and return the absolute number of days between them."
    },
    "starter": "from datetime import datetime\n\ndef days_between(date1, date2):\n    pass",
    "example": "days_between('2026-01-01','2026-01-10')  →  9",
    "hint": {
      "vi": "Dùng datetime.strptime(..., '%Y-%m-%d') rồi lấy hiệu.",
      "en": "Use datetime.strptime(..., '%Y-%m-%d') and subtract."
    },
    "checks": [
      {
        "expr": "days_between('2026-01-01','2026-01-10')",
        "expected": "9"
      },
      {
        "expr": "days_between('2026-02-01','2026-01-30')",
        "expected": "2"
      }
    ]
  },
  {
    "id": "json-field",
    "level": "Intermediate",
    "topic": {
      "vi": "JSON & RegEx",
      "en": "JSON & RegEx"
    },
    "title": {
      "vi": "Đọc JSON",
      "en": "Read JSON"
    },
    "prompt": {
      "vi": "Viết json_field(text, key) parse chuỗi JSON và trả về giá trị tương ứng với key; nếu thiếu key trả về None.",
      "en": "Write json_field(text, key), parse the JSON string, and return the value for key; return None if missing."
    },
    "starter": "import json\n\ndef json_field(text, key):\n    pass",
    "example": "json_field('{\"name\":\"An\"}', 'name')  →  'An'",
    "hint": {
      "vi": "Dùng json.loads() rồi dict.get().",
      "en": "Use json.loads() then dict.get()."
    },
    "checks": [
      {
        "expr": "json_field('{\"name\":\"An\",\"age\":15}','name')",
        "expected": "'An'"
      },
      {
        "expr": "json_field('{\"name\":\"An\"}','age')",
        "expected": "None"
      }
    ]
  },
  {
    "id": "regex-email",
    "level": "Intermediate",
    "topic": {
      "vi": "JSON & RegEx",
      "en": "JSON & RegEx"
    },
    "title": {
      "vi": "Kiểm tra email bằng RegEx",
      "en": "Validate email with RegEx"
    },
    "prompt": {
      "vi": "Viết is_simple_email(text) trả về True nếu chuỗi có dạng cơ bản local@domain.tld, không chứa khoảng trắng. Dùng re.fullmatch.",
      "en": "Write is_simple_email(text) returning True for a basic local@domain.tld shape without spaces. Use re.fullmatch."
    },
    "starter": "import re\n\ndef is_simple_email(text):\n    pass",
    "example": "is_simple_email('a@b.com')  →  True",
    "hint": {
      "vi": "Mẫu đơn giản: ký tự không phải khoảng trắng/@, dấu @, domain, dấu chấm, phần đuôi.",
      "en": "A basic pattern can match non-space/non-@ text, @, domain, dot, and suffix."
    },
    "checks": [
      {
        "expr": "is_simple_email('a@b.com')",
        "expected": "True"
      },
      {
        "expr": "is_simple_email('user.name@test.org')",
        "expected": "True"
      },
      {
        "expr": "is_simple_email('bad email@test.com')",
        "expected": "False"
      },
      {
        "expr": "is_simple_email('abc@test')",
        "expected": "False"
      }
    ]
  },
  {
    "id": "safe-divide",
    "level": "Intermediate",
    "topic": {
      "vi": "Ngoại lệ & định dạng",
      "en": "Exceptions & Formatting"
    },
    "title": {
      "vi": "Chia an toàn với try/except",
      "en": "Safe division with try/except"
    },
    "prompt": {
      "vi": "Viết safe_divide(a, b) trả về a/b; nếu b=0 thì trả về None bằng cách xử lý ZeroDivisionError.",
      "en": "Write safe_divide(a, b) returning a/b; when b=0 return None by handling ZeroDivisionError."
    },
    "starter": "def safe_divide(a, b):\n    pass",
    "example": "safe_divide(10, 0)  →  None",
    "hint": {
      "vi": "Dùng try / except ZeroDivisionError.",
      "en": "Use try / except ZeroDivisionError."
    },
    "checks": [
      {
        "expr": "safe_divide(10,2)",
        "expected": "5.0"
      },
      {
        "expr": "safe_divide(10,0)",
        "expected": "None"
      }
    ]
  },
  {
    "id": "format-price",
    "level": "Intermediate",
    "topic": {
      "vi": "Ngoại lệ & định dạng",
      "en": "Exceptions & Formatting"
    },
    "title": {
      "vi": "Định dạng số trong f-string",
      "en": "Format numbers in an f-string"
    },
    "prompt": {
      "vi": "Viết format_price(name, price) trả về '<name>: <price>' với price có dấu phân tách hàng nghìn và đúng 2 chữ số thập phân.",
      "en": "Write format_price(name, price) returning '<name>: <price>' with thousands separators and exactly 2 decimal places."
    },
    "starter": "def format_price(name, price):\n    pass",
    "example": "format_price('Laptop', 1234.5)  →  'Laptop: 1,234.50'",
    "hint": {
      "vi": "Trong f-string có thể dùng định dạng :,.2f.",
      "en": "In an f-string, use the :,.2f format specifier."
    },
    "checks": [
      {
        "expr": "format_price('Laptop',1234.5)",
        "expected": "'Laptop: 1,234.50'"
      },
      {
        "expr": "format_price('Mouse',25)",
        "expected": "'Mouse: 25.00'"
      }
    ]
  },
  {
    "id": "parse-age",
    "level": "Core",
    "topic": {
      "vi": "Ngoại lệ & định dạng",
      "en": "Exceptions & Formatting"
    },
    "title": {
      "vi": "Mô phỏng dữ liệu input",
      "en": "Simulate user input parsing"
    },
    "prompt": {
      "vi": "Viết parse_age(text) mô phỏng dữ liệu nhận từ input(): bỏ khoảng trắng và chuyển thành int.",
      "en": "Write parse_age(text) to simulate input() data: trim whitespace and convert it to int."
    },
    "starter": "def parse_age(text):\n    pass",
    "example": "parse_age(' 18 ')  →  18",
    "hint": {
      "vi": "input() luôn cho chuỗi; ở đây text đóng vai trò chuỗi đó.",
      "en": "input() returns a string; here text plays that role."
    },
    "checks": [
      {
        "expr": "parse_age(' 18 ')",
        "expected": "18"
      },
      {
        "expr": "parse_age('007')",
        "expected": "7"
      }
    ]
  },
  {
    "id": "none-default",
    "level": "Core",
    "topic": {
      "vi": "Ngoại lệ & định dạng",
      "en": "Exceptions & Formatting"
    },
    "title": {
      "vi": "Làm việc với None",
      "en": "Work with None"
    },
    "prompt": {
      "vi": "Viết value_or_default(value, default) trả về default chỉ khi value is None; các giá trị 0, False, '' vẫn phải giữ nguyên.",
      "en": "Write value_or_default(value, default) returning default only when value is None; keep 0, False, and '' unchanged."
    },
    "starter": "def value_or_default(value, default):\n    pass",
    "example": "value_or_default(None, 10)  →  10",
    "hint": {
      "vi": "Dùng is None thay vì kiểm tra truthy/falsy.",
      "en": "Use is None rather than truthiness."
    },
    "checks": [
      {
        "expr": "value_or_default(None,10)",
        "expected": "10"
      },
      {
        "expr": "value_or_default(0,10)",
        "expected": "0"
      },
      {
        "expr": "value_or_default('', 'x')",
        "expected": "''"
      }
    ]
  },
  {
    "id": "write-read-file",
    "level": "Intermediate",
    "topic": {
      "vi": "Xử lý tệp",
      "en": "File Handling"
    },
    "title": {
      "vi": "Ghi rồi đọc tệp",
      "en": "Write then read a file"
    },
    "prompt": {
      "vi": "Viết write_and_read(path, text): ghi text vào path ở chế độ 'w' với encoding='utf-8', sau đó đọc lại và trả về nội dung.",
      "en": "Write write_and_read(path, text): write text to path using mode 'w' and encoding='utf-8', then read it back and return the content."
    },
    "starter": "def write_and_read(path, text):\n    pass",
    "example": "write_and_read('/tmp/demo.txt', 'Python')  →  'Python'",
    "hint": {
      "vi": "Dùng hai khối with open(...): một để ghi, một để đọc.",
      "en": "Use two with open(...) blocks: one for writing and one for reading."
    },
    "checks": [
      {
        "expr": "write_and_read('/tmp/pythonquiz_1.txt','Python')",
        "expected": "'Python'"
      },
      {
        "expr": "write_and_read('/tmp/pythonquiz_2.txt','Xin chào')",
        "expected": "'Xin chào'"
      }
    ]
  },
  {
    "id": "even-generator",
    "level": "Advanced",
    "topic": {
      "vi": "Hàm",
      "en": "Functions"
    },
    "title": {
      "vi": "Generator số chẵn",
      "en": "Even-number generator"
    },
    "prompt": {
      "vi": "Viết even_numbers(n) là generator yield các số chẵn từ 0 đến n, bao gồm n nếu chẵn.",
      "en": "Write even_numbers(n) as a generator yielding even values from 0 through n."
    },
    "starter": "def even_numbers(n):\n    pass",
    "example": "list(even_numbers(6))  →  [0,2,4,6]",
    "hint": {
      "vi": "Dùng yield trong vòng lặp.",
      "en": "Use yield inside a loop."
    },
    "checks": [
      {
        "expr": "list(even_numbers(6))",
        "expected": "[0, 2, 4, 6]"
      },
      {
        "expr": "list(even_numbers(1))",
        "expected": "[0]"
      }
    ]
  },
  {
    "id": "double-decorator",
    "level": "Advanced",
    "topic": {
      "vi": "Hàm",
      "en": "Functions"
    },
    "title": {
      "vi": "Decorator nhân đôi kết quả",
      "en": "Decorator that doubles a result"
    },
    "prompt": {
      "vi": "Viết decorator double_result(func) trả về wrapper nhân đôi kết quả func. Sau đó áp dụng @double_result cho hàm add(a,b) trả về a+b.",
      "en": "Write a double_result(func) decorator whose wrapper doubles func's result. Apply @double_result to add(a,b), where add normally returns a+b."
    },
    "starter": "def double_result(func):\n    pass\n\n@double_result\ndef add(a, b):\n    return a + b",
    "example": "add(2, 3)  →  10",
    "hint": {
      "vi": "wrapper nhận *args, **kwargs rồi trả về 2 * func(...).",
      "en": "The wrapper can take *args, **kwargs and return 2 * func(...)."
    },
    "checks": [
      {
        "expr": "add(2,3)",
        "expected": "10"
      },
      {
        "expr": "add(-1,4)",
        "expected": "6"
      }
    ]
  },
  {
    "id": "palindrome-clean",
    "level": "Advanced",
    "topic": {
      "vi": "Thử thách tổng hợp",
      "en": "Advanced Challenges"
    },
    "title": {
      "vi": "Palindrome bỏ ký tự thừa",
      "en": "Normalized palindrome"
    },
    "prompt": {
      "vi": "Viết is_palindrome(text) bỏ mọi ký tự không phải chữ/số và không phân biệt hoa thường.",
      "en": "Write is_palindrome(text) ignoring non-alphanumeric characters and letter case."
    },
    "starter": "def is_palindrome(text):\n    pass",
    "example": "is_palindrome('A man, a plan, a canal: Panama!')  →  True",
    "hint": {
      "vi": "isalnum() và lower()/casefold() sẽ hữu ích.",
      "en": "isalnum() plus lower()/casefold() are useful."
    },
    "checks": [
      {
        "expr": "is_palindrome('A man, a plan, a canal: Panama!')",
        "expected": "True"
      },
      {
        "expr": "is_palindrome('Python')",
        "expected": "False"
      },
      {
        "expr": "is_palindrome('12321')",
        "expected": "True"
      }
    ]
  },
  {
    "id": "analyze-numbers",
    "level": "Advanced",
    "topic": {
      "vi": "Thử thách tổng hợp",
      "en": "Advanced Challenges"
    },
    "title": {
      "vi": "Phân tích dãy số",
      "en": "Analyze numbers"
    },
    "prompt": {
      "vi": "Viết analyze_numbers(numbers) cho list không rỗng, trả dict gồm count, min, max, sum, average.",
      "en": "Write analyze_numbers(numbers) for a non-empty list, returning a dict with count, min, max, sum, average."
    },
    "starter": "def analyze_numbers(numbers):\n    pass",
    "example": "analyze_numbers([1,2,3])  →  {'count':3,...,'average':2.0}",
    "hint": {
      "vi": "Kết hợp len, min, max, sum.",
      "en": "Combine len, min, max, and sum."
    },
    "checks": [
      {
        "expr": "analyze_numbers([1,2,3])",
        "expected": "{'count': 3, 'min': 1, 'max': 3, 'sum': 6, 'average': 2.0}"
      },
      {
        "expr": "analyze_numbers([2.5,5.5])",
        "expected": "{'count': 2, 'min': 2.5, 'max': 5.5, 'sum': 8.0, 'average': 4.0}"
      }
    ]
  },
  {
    "id": "cart-total",
    "level": "Advanced",
    "topic": {
      "vi": "Thử thách tổng hợp",
      "en": "Advanced Challenges"
    },
    "title": {
      "vi": "Tính tổng giỏ hàng",
      "en": "Shopping cart total"
    },
    "prompt": {
      "vi": "Viết cart_total(cart, prices, discount=0). cart là dict {sản phẩm: số lượng}, prices là dict {sản phẩm: đơn giá}; tính tổng rồi giảm discount phần trăm. Trả về số làm tròn 2 chữ số.",
      "en": "Write cart_total(cart, prices, discount=0). cart maps item→quantity and prices maps item→unit price; compute total then apply discount percent. Return rounded to 2 decimals."
    },
    "starter": "def cart_total(cart, prices, discount=0):\n    pass",
    "example": "cart_total({'pen':2}, {'pen':10}, 10)  →  18.0",
    "hint": {
      "vi": "Duyệt cart.items(), nhân quantity với prices[item], rồi áp dụng phần trăm giảm.",
      "en": "Loop through cart.items(), multiply quantity by prices[item], then apply the discount percentage."
    },
    "checks": [
      {
        "expr": "cart_total({'pen':2},{'pen':10},10)",
        "expected": "18.0"
      },
      {
        "expr": "cart_total({'a':2,'b':1},{'a':5,'b':12})",
        "expected": "22.0"
      }
    ]
  },
  {
    "id": "password-strength",
    "level": "Advanced",
    "topic": {
      "vi": "Thử thách tổng hợp",
      "en": "Advanced Challenges"
    },
    "title": {
      "vi": "Kiểm tra mật khẩu",
      "en": "Password strength"
    },
    "prompt": {
      "vi": "Viết strong_password(text) trả về True khi mật khẩu dài ít nhất 8 ký tự và có ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 ký tự không phải chữ/số.",
      "en": "Write strong_password(text) returning True when length >= 8 and it contains at least one uppercase, lowercase, digit, and non-alphanumeric character."
    },
    "starter": "def strong_password(text):\n    pass",
    "example": "strong_password('PyQuiz#26')  →  True",
    "hint": {
      "vi": "any() kết hợp isupper/islower/isdigit/isalnum rất phù hợp.",
      "en": "any() with isupper/islower/isdigit/isalnum works well."
    },
    "checks": [
      {
        "expr": "strong_password('PyQuiz#26')",
        "expected": "True"
      },
      {
        "expr": "strong_password('python123')",
        "expected": "False"
      },
      {
        "expr": "strong_password('PYTHON#1')",
        "expected": "False"
      },
      {
        "expr": "strong_password('Short#1')",
        "expected": "False"
      }
    ]
  }
];
