window.QUESTIONS = [
  {
    "id": "hello-world",
    "level": "Starter",
    "topic": {
      "en": "Getting Started",
      "ja": "はじめに"
    },
    "title": {
      "en": "First greeting",
      "ja": "最初のあいさつ"
    },
    "prompt": {
      "en": "Write a hello() function that returns exactly Hello, World!. Do not print it; use return.",
      "ja": "hello() 関数を作成し、文字列 'Hello, World!' を正確に返してください。画面に出力せず、return を使用してください。"
    },
    "starter": "def hello():\n    # Return: Hello, World!\n    pass",
    "example": "hello()  →  'Hello, World!'",
    "hint": {
      "en": "Use return with a string literal.",
      "ja": "文字列リテラルを return で返します。"
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
      "en": "Getting Started",
      "ja": "はじめに"
    },
    "title": {
      "en": "Greet by name",
      "ja": "名前を使ったあいさつ"
    },
    "prompt": {
      "en": "Write greet(name) returning Hello, <name>! using the provided name.",
      "ja": "受け取った name を使い、'Hello, <name>!' という形式の文字列を返す greet(name) を作成してください。"
    },
    "starter": "def greet(name):\n    pass",
    "example": "greet('Binh')  →  'Hello, Binh!'",
    "hint": {
      "en": "An f-string is a good fit.",
      "ja": "f-string を使うと簡単です。"
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
      "en": "Getting Started",
      "ja": "はじめに"
    },
    "title": {
      "en": "Add two numbers",
      "ja": "2つの数の加算"
    },
    "prompt": {
      "en": "Write add(a, b) that returns the sum of a and b.",
      "ja": "a と b の合計を返す add(a, b) を作成してください。"
    },
    "starter": "def add(a, b):\n    pass",
    "example": "add(4, 7)  →  11",
    "hint": {
      "en": "Use the + operator.",
      "ja": "+ 演算子を使用します。"
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
      "en": "Variables & Data Types",
      "ja": "変数とデータ型"
    },
    "title": {
      "en": "Data type name",
      "ja": "データ型の名前"
    },
    "prompt": {
      "en": "Write type_name(value) that returns the value's type name as a string, such as int, str, or list.",
      "ja": "値の型名（int、str、list など）を文字列で返す type_name(value) を作成してください。"
    },
    "starter": "def type_name(value):\n    pass",
    "example": "type_name(42)  →  'int'",
    "hint": {
      "en": "Use type(...) and its __name__ attribute.",
      "ja": "type(...) の __name__ 属性を使います。"
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
      "en": "Numbers & Casting",
      "ja": "数値と型変換"
    },
    "title": {
      "en": "Cast text to integer",
      "ja": "文字列を整数に変換"
    },
    "prompt": {
      "en": "Write to_int(text) that converts numeric text to int and returns it.",
      "ja": "数値を表す文字列を int に変換して返す to_int(text) を作成してください。"
    },
    "starter": "def to_int(text):\n    pass",
    "example": "to_int('125')  →  125",
    "hint": {
      "en": "Use int(...).",
      "ja": "int(...) を使用します。"
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
      "en": "Numbers & Casting",
      "ja": "数値と型変換"
    },
    "title": {
      "en": "Rectangle area",
      "ja": "長方形の面積"
    },
    "prompt": {
      "en": "Write rectangle_area(width, height) and return the rectangle area.",
      "ja": "長方形の面積を返す rectangle_area(width, height) を作成してください。"
    },
    "starter": "def rectangle_area(width, height):\n    pass",
    "example": "rectangle_area(5, 3)  →  15",
    "hint": {
      "en": "Area = width × height.",
      "ja": "面積 = 幅 × 高さ です。"
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
      "en": "Strings",
      "ja": "文字列"
    },
    "title": {
      "en": "First and last character",
      "ja": "最初と最後の文字"
    },
    "prompt": {
      "en": "Write first_last(text) returning a tuple containing the first and last characters of a non-empty string.",
      "ja": "空でない文字列から、最初と最後の文字を含むタプルを返す first_last(text) を作成してください。"
    },
    "starter": "def first_last(text):\n    pass",
    "example": "first_last('Python')  →  ('P', 'n')",
    "hint": {
      "en": "Use indexes 0 and -1.",
      "ja": "インデックス 0 と -1 を使います。"
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
      "en": "Strings",
      "ja": "文字列"
    },
    "title": {
      "en": "Normalize a name",
      "ja": "名前の表記を整える"
    },
    "prompt": {
      "en": "Write normalize_name(name): trim outer whitespace, then capitalize the first letter of each word.",
      "ja": "normalize_name(name) を作成してください。文字列の両端の空白を削除し、各単語の先頭文字を大文字にします。"
    },
    "starter": "def normalize_name(name):\n    pass",
    "example": "normalize_name('  le van binh  ')  →  'Le Van Binh'",
    "hint": {
      "en": "Combine strip() and title().",
      "ja": "strip() と title() を組み合わせます。"
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
      "en": "Strings",
      "ja": "文字列"
    },
    "title": {
      "en": "Reverse text",
      "ja": "文字列を逆順にする"
    },
    "prompt": {
      "en": "Write reverse_text(text) returning the text in reverse order.",
      "ja": "文字列を逆順にした結果を返す reverse_text(text) を作成してください。"
    },
    "starter": "def reverse_text(text):\n    pass",
    "example": "reverse_text('Python')  →  'nohtyP'",
    "hint": {
      "en": "Try slicing with a negative step.",
      "ja": "負のステップを使ったスライスを試しましょう。"
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
      "en": "Strings",
      "ja": "文字列"
    },
    "title": {
      "en": "Count a character",
      "ja": "文字の出現回数"
    },
    "prompt": {
      "en": "Write count_char(text, char) returning how many times char appears in text.",
      "ja": "text 内に char が何回現れるかを返す count_char(text, char) を作成してください。"
    },
    "starter": "def count_char(text, char):\n    pass",
    "example": "count_char('banana', 'a')  →  3",
    "hint": {
      "en": "Strings have a count() method.",
      "ja": "文字列には count() メソッドがあります。"
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
      "en": "Strings",
      "ja": "文字列"
    },
    "title": {
      "en": "Substring membership",
      "ja": "部分文字列の確認"
    },
    "prompt": {
      "en": "Write contains_word(text, word) returning True when word occurs in text, otherwise False. Keep matching case-sensitive.",
      "ja": "word が text に含まれれば True、含まれなければ False を返す contains_word(text, word) を作成してください。大文字と小文字は区別します。"
    },
    "starter": "def contains_word(text, word):\n    pass",
    "example": "contains_word('Learn Python', 'Python')  →  True",
    "hint": {
      "en": "Use the in operator.",
      "ja": "in 演算子を使用します。"
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
      "en": "Strings",
      "ja": "文字列"
    },
    "title": {
      "en": "Format a profile",
      "ja": "プロフィールの書式設定"
    },
    "prompt": {
      "en": "Write profile(name, age) returning exactly: <name> is <age> years old.",
      "ja": "'<name> is <age> years old.' という形式の文字列を正確に返す profile(name, age) を作成してください。"
    },
    "starter": "def profile(name, age):\n    pass",
    "example": "profile('An', 15)  →  'An is 15 years old.'",
    "hint": {
      "en": "Use an f-string.",
      "ja": "f-string を使用します。"
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
      "en": "Booleans & Operators",
      "ja": "真偽値と演算子"
    },
    "title": {
      "en": "Even number",
      "ja": "偶数かどうか"
    },
    "prompt": {
      "en": "Write is_even(n) returning True if n is even.",
      "ja": "n が偶数なら True を返す is_even(n) を作成してください。"
    },
    "starter": "def is_even(n):\n    pass",
    "example": "is_even(12)  →  True",
    "hint": {
      "en": "Check the remainder after division by 2.",
      "ja": "2 で割った余りを確認します。"
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
      "en": "Booleans & Operators",
      "ja": "真偽値と演算子"
    },
    "title": {
      "en": "Compare two numbers",
      "ja": "2つの数を比較"
    },
    "prompt": {
      "en": "Write compare(a, b): return -1 if a < b, 0 if equal, and 1 if a > b.",
      "ja": "compare(a, b) を作成してください。a < b なら -1、等しければ 0、a > b なら 1 を返します。"
    },
    "starter": "def compare(a, b):\n    pass",
    "example": "compare(9, 3)  →  1",
    "hint": {
      "en": "Use if / elif / else.",
      "ja": "if / elif / else を使います。"
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
      "en": "Booleans & Operators",
      "ja": "真偽値と演算子"
    },
    "title": {
      "en": "Inside a range",
      "ja": "範囲内かどうか"
    },
    "prompt": {
      "en": "Write in_range(n, low, high) returning True when low <= n <= high.",
      "ja": "low <= n <= high のとき True を返す in_range(n, low, high) を作成してください。"
    },
    "starter": "def in_range(n, low, high):\n    pass",
    "example": "in_range(5, 1, 10)  →  True",
    "hint": {
      "en": "Python supports chained comparisons.",
      "ja": "Python では比較演算子を連結できます。"
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
      "en": "Booleans & Operators",
      "ja": "真偽値と演算子"
    },
    "title": {
      "en": "Three operations",
      "ja": "3つの算術演算"
    },
    "prompt": {
      "en": "Write calc_ops(a, b) returning a tuple of (sum, a-b difference, product).",
      "ja": "合計、差 (a-b)、積をタプルで返す calc_ops(a, b) を作成してください。"
    },
    "starter": "def calc_ops(a, b):\n    pass",
    "example": "calc_ops(6, 2)  →  (8, 4, 12)",
    "hint": {
      "en": "You can return multiple values as a tuple.",
      "ja": "複数の値をタプルとして返せます。"
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
      "en": "Lists",
      "ja": "リスト"
    },
    "title": {
      "en": "List total",
      "ja": "リストの合計"
    },
    "prompt": {
      "en": "Write list_total(numbers) returning the sum of all list items.",
      "ja": "リスト内のすべての値の合計を返す list_total(numbers) を作成してください。"
    },
    "starter": "def list_total(numbers):\n    pass",
    "example": "list_total([1, 2, 3, 4])  →  10",
    "hint": {
      "en": "You may use sum().",
      "ja": "sum() を使えます。"
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
      "en": "Lists",
      "ja": "リスト"
    },
    "title": {
      "en": "List average",
      "ja": "リストの平均"
    },
    "prompt": {
      "en": "Write average(numbers) returning the arithmetic mean of a non-empty list.",
      "ja": "空でないリストの算術平均を返す average(numbers) を作成してください。"
    },
    "starter": "def average(numbers):\n    pass",
    "example": "average([2, 4, 6])  →  4.0",
    "hint": {
      "en": "Sum divided by the number of items.",
      "ja": "合計を要素数で割ります。"
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
      "en": "Lists",
      "ja": "リスト"
    },
    "title": {
      "en": "Unique and sorted",
      "ja": "重複を除いて並べ替え"
    },
    "prompt": {
      "en": "Write unique_sorted(items) returning an ascending list with duplicates removed.",
      "ja": "重複を除外し、昇順に並べた新しいリストを返す unique_sorted(items) を作成してください。"
    },
    "starter": "def unique_sorted(items):\n    pass",
    "example": "unique_sorted([3, 1, 3, 2])  →  [1, 2, 3]",
    "hint": {
      "en": "You can combine set() and sorted().",
      "ja": "set() と sorted() を組み合わせられます。"
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
      "en": "Lists",
      "ja": "リスト"
    },
    "title": {
      "en": "Second largest",
      "ja": "2番目に大きい値"
    },
    "prompt": {
      "en": "Write second_largest(numbers) returning the second distinct largest value. Assume at least two distinct values exist.",
      "ja": "異なる値のうち2番目に大きいものを返す second_largest(numbers) を作成してください。異なる値は必ず2種類以上あります。"
    },
    "starter": "def second_largest(numbers):\n    pass",
    "example": "second_largest([5, 1, 5, 3])  →  3",
    "hint": {
      "en": "Remove duplicates before sorting.",
      "ja": "並べ替える前に重複を取り除きます。"
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
      "en": "Lists",
      "ja": "リスト"
    },
    "title": {
      "en": "Squares of even numbers",
      "ja": "偶数の二乗"
    },
    "prompt": {
      "en": "Write even_squares(numbers) returning squares of even values while preserving order.",
      "ja": "偶数だけを二乗し、元の順序を保ったリストを返す even_squares(numbers) を作成してください。"
    },
    "starter": "def even_squares(numbers):\n    pass",
    "example": "even_squares([1, 2, 3, 4])  →  [4, 16]",
    "hint": {
      "en": "A list comprehension fits this task.",
      "ja": "リスト内包表記が適しています。"
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
      "en": "Lists",
      "ja": "リスト"
    },
    "title": {
      "en": "Rotate a list left",
      "ja": "リストを左に回転"
    },
    "prompt": {
      "en": "Write rotate_left(items) moving the first item to the end. An empty list must return [].",
      "ja": "リストの先頭要素を末尾に移動する rotate_left(items) を作成してください。空リストの場合は [] を返します。"
    },
    "starter": "def rotate_left(items):\n    pass",
    "example": "rotate_left([1, 2, 3])  →  [2, 3, 1]",
    "hint": {
      "en": "Use slicing; remember the empty-list case.",
      "ja": "スライスを使い、空リストにも対応します。"
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
      "en": "Tuples",
      "ja": "タプル"
    },
    "title": {
      "en": "Tuple swap",
      "ja": "タプルの要素を交換"
    },
    "prompt": {
      "en": "Write swap_pair(pair) for a 2-item tuple and return the items swapped.",
      "ja": "2要素のタプルを受け取り、順番を入れ替えたタプルを返す swap_pair(pair) を作成してください。"
    },
    "starter": "def swap_pair(pair):\n    pass",
    "example": "swap_pair((10, 20))  →  (20, 10)",
    "hint": {
      "en": "You can unpack the tuple into two variables.",
      "ja": "タプルを2つの変数にアンパックできます。"
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
      "en": "Tuples",
      "ja": "タプル"
    },
    "title": {
      "en": "Coordinate quadrant",
      "ja": "座標の象限"
    },
    "prompt": {
      "en": "Write quadrant(point), where point=(x,y). Return 1,2,3,4 for the quadrant; return 0 when the point lies on an axis.",
      "ja": "point=(x,y) を受け取る quadrant(point) を作成してください。第1〜第4象限なら 1〜4、座標軸上なら 0 を返します。"
    },
    "starter": "def quadrant(point):\n    pass",
    "example": "quadrant((3, -2))  →  4",
    "hint": {
      "en": "Unpack x, y and use conditions.",
      "ja": "x と y をアンパックして条件分岐します。"
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
      "en": "Sets",
      "ja": "集合（set）"
    },
    "title": {
      "en": "Set intersection",
      "ja": "集合の共通部分"
    },
    "prompt": {
      "en": "Write common(a, b) returning the set intersection of two iterables.",
      "ja": "2つのイテラブルの共通部分を set で返す common(a, b) を作成してください。"
    },
    "starter": "def common(a, b):\n    pass",
    "example": "common([1,2,3], [2,3,4])  →  {2, 3}",
    "hint": {
      "en": "Convert to sets and use intersection.",
      "ja": "set に変換して積集合を求めます。"
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
      "en": "Sets",
      "ja": "集合（set）"
    },
    "title": {
      "en": "Symmetric difference",
      "ja": "対称差集合"
    },
    "prompt": {
      "en": "Write only_one(a, b) returning items present in exactly one of the two sets.",
      "ja": "2つの集合のどちらか一方にだけ含まれる要素を set で返す only_one(a, b) を作成してください。"
    },
    "starter": "def only_one(a, b):\n    pass",
    "example": "only_one({1,2}, {2,3})  →  {1, 3}",
    "hint": {
      "en": "Use symmetric difference (^ or symmetric_difference).",
      "ja": "対称差（^ または symmetric_difference）を使います。"
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
      "en": "Dictionaries",
      "ja": "辞書"
    },
    "title": {
      "en": "Safe dictionary lookup",
      "ja": "辞書から安全に値を取得"
    },
    "prompt": {
      "en": "Write get_value(data, key) returning the value when the key exists, otherwise None.",
      "ja": "キーが存在すればその値を返し、なければ None を返す get_value(data, key) を作成してください。"
    },
    "starter": "def get_value(data, key):\n    pass",
    "example": "get_value({'x': 5}, 'y')  →  None",
    "hint": {
      "en": "Dictionaries have a get() method.",
      "ja": "辞書の get() メソッドを使います。"
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
      "en": "Dictionaries",
      "ja": "辞書"
    },
    "title": {
      "en": "Word frequency",
      "ja": "単語の出現頻度"
    },
    "prompt": {
      "en": "Write word_frequency(words) returning a dictionary that counts each word.",
      "ja": "各単語の出現回数を数える辞書を返す word_frequency(words) を作成してください。"
    },
    "starter": "def word_frequency(words):\n    pass",
    "example": "word_frequency(['a','b','a'])  →  {'a': 2, 'b': 1}",
    "hint": {
      "en": "Loop through words and increment a dictionary counter.",
      "ja": "単語を順に調べて辞書のカウンターを増やします。"
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
      "en": "Dictionaries",
      "ja": "辞書"
    },
    "title": {
      "en": "Merge dictionaries",
      "ja": "辞書を結合"
    },
    "prompt": {
      "en": "Write merge_dicts(a, b) returning a new dictionary containing both; b wins on duplicate keys. Do not mutate a or b.",
      "ja": "a と b の内容を結合した新しい辞書を返す merge_dicts(a, b) を作成してください。同じキーは b の値を優先し、元の辞書は変更しないでください。"
    },
    "starter": "def merge_dicts(a, b):\n    pass",
    "example": "merge_dicts({'x':1}, {'x':2,'y':3})  →  {'x':2,'y':3}",
    "hint": {
      "en": "You can use copying, unpacking, or the | operator.",
      "ja": "辞書のコピー、アンパック、| 演算子などを使えます。"
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
      "en": "Dictionaries",
      "ja": "辞書"
    },
    "title": {
      "en": "Top scoring student",
      "ja": "最高得点の生徒"
    },
    "prompt": {
      "en": "Write best_student(scores) for a non-empty {name: score} dict and return the name with the highest score.",
      "ja": "空でない {名前: 点数} の辞書から、最高得点の生徒名を返す best_student(scores) を作成してください。"
    },
    "starter": "def best_student(scores):\n    pass",
    "example": "best_student({'An':8, 'Binh':9})  →  'Binh'",
    "hint": {
      "en": "max() can accept a key= function.",
      "ja": "max() の key= 引数が使えます。"
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
      "en": "Conditions",
      "ja": "条件分岐"
    },
    "title": {
      "en": "Grade a score",
      "ja": "点数の成績評価"
    },
    "prompt": {
      "en": "Write grade(score): >=90 'A', >=80 'B', >=70 'C', >=60 'D', otherwise 'F'.",
      "ja": "grade(score) を作成してください。90以上なら 'A'、80以上なら 'B'、70以上なら 'C'、60以上なら 'D'、それ以外は 'F' を返します。"
    },
    "starter": "def grade(score):\n    pass",
    "example": "grade(85)  →  'B'",
    "hint": {
      "en": "Check thresholds from highest to lowest.",
      "ja": "高い基準から順に判定します。"
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
      "en": "Conditions",
      "ja": "条件分岐"
    },
    "title": {
      "en": "Leap year",
      "ja": "うるう年の判定"
    },
    "prompt": {
      "en": "Write is_leap_year(year) using Gregorian rules: divisible by 400, or divisible by 4 but not by 100.",
      "ja": "グレゴリオ暦の規則に従う is_leap_year(year) を作成してください。400 で割り切れる年、または 4 で割り切れて 100 では割り切れない年がうるう年です。"
    },
    "starter": "def is_leap_year(year):\n    pass",
    "example": "is_leap_year(2000)  →  True",
    "hint": {
      "en": "Combine and/or with modulo.",
      "ja": "剰余演算と and/or を組み合わせます。"
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
      "en": "Conditions",
      "ja": "条件分岐"
    },
    "title": {
      "en": "Single-number FizzBuzz",
      "ja": "1つの数で FizzBuzz"
    },
    "prompt": {
      "en": "Write fizzbuzz(n): divisible by 3 and 5 → 'FizzBuzz'; only 3 → 'Fizz'; only 5 → 'Buzz'; otherwise return n.",
      "ja": "fizzbuzz(n) を作成してください。3と5の両方で割り切れれば 'FizzBuzz'、3のみなら 'Fizz'、5のみなら 'Buzz'、それ以外は n を返します。"
    },
    "starter": "def fizzbuzz(n):\n    pass",
    "example": "fizzbuzz(30)  →  'FizzBuzz'",
    "hint": {
      "en": "Check divisibility by both 3 and 5 first.",
      "ja": "最初に 3 と 5 の両方で割り切れるか確認します。"
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
      "en": "Conditions",
      "ja": "条件分岐"
    },
    "title": {
      "en": "Classify a day with match",
      "ja": "match による曜日の分類"
    },
    "prompt": {
      "en": "Write day_type(day) for lowercase English day names. Mon-Fri → 'weekday', Sat/Sun → 'weekend', otherwise 'invalid'. Prefer match.",
      "ja": "英語の小文字の曜日名を受け取る day_type(day) を作成してください。月〜金なら 'weekday'、土・日なら 'weekend'、それ以外は 'invalid' を返します。match の使用を推奨します。"
    },
    "starter": "def day_type(day):\n    # day: 'monday', 'tuesday', ...\n    pass",
    "example": "day_type('sunday')  →  'weekend'",
    "hint": {
      "en": "match can combine patterns with |.",
      "ja": "match では | を使って複数のパターンをまとめられます。"
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
      "en": "Loops",
      "ja": "ループ"
    },
    "title": {
      "en": "Sum 1..n with while",
      "ja": "while で 1 から n までの合計"
    },
    "prompt": {
      "en": "Write sum_to_n(n) using a while loop to compute 1 + 2 + ... + n for n >= 0.",
      "ja": "while ループを使って 1 + 2 + ... + n（n >= 0）を計算する sum_to_n(n) を作成してください。"
    },
    "starter": "def sum_to_n(n):\n    pass",
    "example": "sum_to_n(5)  →  15",
    "hint": {
      "en": "Use an accumulator and a counter.",
      "ja": "累積用の変数とカウンターを用意します。"
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
      "en": "Loops",
      "ja": "ループ"
    },
    "title": {
      "en": "Count digits with while",
      "ja": "while で桁数を数える"
    },
    "prompt": {
      "en": "Write digit_count(n) returning the number of digits using while. Ignore the sign; 0 has one digit.",
      "ja": "while を使って整数 n の桁数を返す digit_count(n) を作成してください。負号は数えず、0 は1桁です。"
    },
    "starter": "def digit_count(n):\n    pass",
    "example": "digit_count(-1205)  →  4",
    "hint": {
      "en": "Use abs(); repeatedly integer-divide by 10.",
      "ja": "abs() で符号を除き、10 での整数除算を繰り返します。"
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
      "en": "Loops",
      "ja": "ループ"
    },
    "title": {
      "en": "First divisible number",
      "ja": "最初に割り切れる整数"
    },
    "prompt": {
      "en": "Write first_divisible(start, divisor) returning the smallest integer >= start divisible by divisor. divisor is non-zero.",
      "ja": "start 以上で divisor で割り切れる最小の整数を返す first_divisible(start, divisor) を作成してください。divisor は 0 ではありません。"
    },
    "starter": "def first_divisible(start, divisor):\n    pass",
    "example": "first_divisible(10, 6)  →  12",
    "hint": {
      "en": "Increment from start in a while loop and stop when the condition is met.",
      "ja": "while で start から増やし、条件を満たしたら終了します。"
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
      "en": "Loops",
      "ja": "ループ"
    },
    "title": {
      "en": "Sum evens with for",
      "ja": "for で偶数の合計"
    },
    "prompt": {
      "en": "Write sum_even_to_n(n) summing even integers from 0 through n using for/range.",
      "ja": "for/range を使い、0 から n までの偶数を合計する sum_even_to_n(n) を作成してください。n が偶数なら含めます。"
    },
    "starter": "def sum_even_to_n(n):\n    pass",
    "example": "sum_even_to_n(10)  →  30",
    "hint": {
      "en": "range() has a step argument.",
      "ja": "range() ではステップ幅を指定できます。"
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
      "en": "Loops",
      "ja": "ループ"
    },
    "title": {
      "en": "Multiplication table",
      "ja": "掛け算表"
    },
    "prompt": {
      "en": "Write multiplication_table(n) returning the 10 products [n*1, n*2, ..., n*10].",
      "ja": "[n*1, n*2, ..., n*10] という10個の積をリストで返す multiplication_table(n) を作成してください。"
    },
    "starter": "def multiplication_table(n):\n    pass",
    "example": "multiplication_table(3)  →  [3,6,...,30]",
    "hint": {
      "en": "Loop over range(1, 11).",
      "ja": "range(1, 11) を順に処理します。"
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
      "en": "Loops",
      "ja": "ループ"
    },
    "title": {
      "en": "Flatten a matrix",
      "ja": "二重リストを平坦化"
    },
    "prompt": {
      "en": "Write flatten(matrix) using nested loops to turn a list of lists into one flat list.",
      "ja": "ネストしたループでリストのリストを1つの平坦なリストに変換する flatten(matrix) を作成してください。"
    },
    "starter": "def flatten(matrix):\n    pass",
    "example": "flatten([[1,2],[3],[4,5]])  →  [1,2,3,4,5]",
    "hint": {
      "en": "Use one loop for rows and another for items.",
      "ja": "外側のループで行、内側で各要素を処理します。"
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
      "en": "Loops",
      "ja": "ループ"
    },
    "title": {
      "en": "Prime check",
      "ja": "素数の判定"
    },
    "prompt": {
      "en": "Write is_prime(n) returning True for prime numbers. Values below 2 are not prime.",
      "ja": "n が素数なら True を返す is_prime(n) を作成してください。2未満の数は素数ではありません。"
    },
    "starter": "def is_prime(n):\n    pass",
    "example": "is_prime(29)  →  True",
    "hint": {
      "en": "You only need to test divisors up to sqrt(n).",
      "ja": "約数は n の平方根まで確認すれば十分です。"
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
      "en": "Functions",
      "ja": "関数"
    },
    "title": {
      "en": "Factorial",
      "ja": "階乗を計算"
    },
    "prompt": {
      "en": "Write factorial(n) returning n! for n >= 0. A loop is fine.",
      "ja": "n >= 0 に対して n! を返す factorial(n) を作成してください。ループを使って構いません。"
    },
    "starter": "def factorial(n):\n    pass",
    "example": "factorial(5)  →  120",
    "hint": {
      "en": "0! = 1; multiply values from 1 to n.",
      "ja": "0! = 1 です。1 から n まで順に掛けます。"
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
      "en": "Functions",
      "ja": "関数"
    },
    "title": {
      "en": "Default parameter",
      "ja": "デフォルト引数"
    },
    "prompt": {
      "en": "Write greet_person(name, greeting='Hello') returning '<greeting>, <name>!'.",
      "ja": "greet_person(name, greeting='Hello') を作成し、'<greeting>, <name>!' という文字列を返してください。"
    },
    "starter": "def greet_person(name, greeting='Hello'):\n    pass",
    "example": "greet_person('An')  →  'Hello, An!'",
    "hint": {
      "en": "Put the default value in the function signature.",
      "ja": "引数の初期値を関数定義に指定します。"
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
      "en": "Functions",
      "ja": "関数"
    },
    "title": {
      "en": "*args statistics",
      "ja": "*args で統計量を計算"
    },
    "prompt": {
      "en": "Write stats(*numbers) returning (min, max, sum). Assume at least one number.",
      "ja": "stats(*numbers) を作成し、(最小値, 最大値, 合計) を返してください。数値は1つ以上渡されます。"
    },
    "starter": "def stats(*numbers):\n    pass",
    "example": "stats(3,1,5)  →  (1,5,9)",
    "hint": {
      "en": "*args arrives as a tuple.",
      "ja": "*args はタプルとして受け取ります。"
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
      "en": "Functions",
      "ja": "関数"
    },
    "title": {
      "en": "**kwargs profile",
      "ja": "**kwargs でプロフィール作成"
    },
    "prompt": {
      "en": "Write build_profile(**kwargs) returning a new dictionary containing exactly the supplied key/value pairs.",
      "ja": "渡されたすべてのキーワード引数をそのまま含む新しい辞書を返す build_profile(**kwargs) を作成してください。"
    },
    "starter": "def build_profile(**kwargs):\n    pass",
    "example": "build_profile(name='An', age=15)  →  {'name':'An','age':15}",
    "hint": {
      "en": "**kwargs is a dictionary; return a new copy.",
      "ja": "**kwargs は辞書です。新しい辞書として返します。"
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
      "en": "Functions",
      "ja": "関数"
    },
    "title": {
      "en": "Recursive sum",
      "ja": "再帰で合計を求める"
    },
    "prompt": {
      "en": "Write recursive_sum(numbers) using recursion. An empty list returns 0.",
      "ja": "再帰を使ってリストの合計を計算する recursive_sum(numbers) を作成してください。空リストは 0 を返します。"
    },
    "starter": "def recursive_sum(numbers):\n    pass",
    "example": "recursive_sum([1,2,3])  →  6",
    "hint": {
      "en": "Use the empty list as the base case, then add the first item to the recursive result.",
      "ja": "空リストを基本ケースとし、先頭要素と残りの再帰結果を足します。"
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
      "en": "Lambda & Scope",
      "ja": "lambda とスコープ"
    },
    "title": {
      "en": "Sort with lambda",
      "ja": "lambda を使った並べ替え"
    },
    "prompt": {
      "en": "Write sort_by_second(pairs) returning a new list sorted by each tuple's second item.",
      "ja": "各タプルの2番目の要素を基準に昇順で並べた新しいリストを返す sort_by_second(pairs) を作成してください。"
    },
    "starter": "def sort_by_second(pairs):\n    pass",
    "example": "sort_by_second([('a',3),('b',1)])  →  [('b',1),('a',3)]",
    "hint": {
      "en": "Use sorted(..., key=lambda ...).",
      "ja": "sorted(..., key=lambda ...) を使います。"
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
      "en": "Lambda & Scope",
      "ja": "lambda とスコープ"
    },
    "title": {
      "en": "Simple higher-order behavior",
      "ja": "演算を選択する関数"
    },
    "prompt": {
      "en": "Write apply_operation(a, b, op), where op is '+', '*', or 'max'. Return the corresponding result.",
      "ja": "op が '+'、'*'、'max' のいずれかとなる apply_operation(a, b, op) を作成し、それぞれの演算結果を返してください。"
    },
    "starter": "def apply_operation(a, b, op):\n    pass",
    "example": "apply_operation(4,7,'max')  →  7",
    "hint": {
      "en": "You can map operation names to lambdas/functions.",
      "ja": "演算名を lambda や関数に対応させられます。"
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
      "en": "Lambda & Scope",
      "ja": "lambda とスコープ"
    },
    "title": {
      "en": "Multiplier closure",
      "ja": "乗算するクロージャ"
    },
    "prompt": {
      "en": "Write make_multiplier(n) returning a new function that takes x and returns x*n.",
      "ja": "x を受け取って x*n を返す新しい関数を生成する make_multiplier(n) を作成してください。"
    },
    "starter": "def make_multiplier(n):\n    pass",
    "example": "make_multiplier(3)(4)  →  12",
    "hint": {
      "en": "Define an inner function or return a lambda.",
      "ja": "内部関数を定義するか、lambda を返します。"
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
      "en": "Lambda & Scope",
      "ja": "lambda とスコープ"
    },
    "title": {
      "en": "Filter positive numbers",
      "ja": "正の数だけ抽出"
    },
    "prompt": {
      "en": "Write positive_numbers(numbers) returning only values > 0 while preserving order.",
      "ja": "0 より大きい値だけを元の順序で返す positive_numbers(numbers) を作成してください。"
    },
    "starter": "def positive_numbers(numbers):\n    pass",
    "example": "positive_numbers([-1,0,3,2])  →  [3,2]",
    "hint": {
      "en": "Use filter + lambda or a list comprehension.",
      "ja": "filter と lambda、またはリスト内包表記を使います。"
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
      "en": "Classes & OOP",
      "ja": "クラスとオブジェクト指向"
    },
    "title": {
      "en": "Student class",
      "ja": "Student クラス"
    },
    "prompt": {
      "en": "Create a Student class with __init__(name, score), store both attributes, and add passed() returning True when score >= 5.",
      "ja": "__init__(name, score) で2つの属性を保存し、score >= 5 のとき True を返す passed() メソッドを持つ Student クラスを作成してください。"
    },
    "starter": "class Student:\n    def __init__(self, name, score):\n        pass\n\n    def passed(self):\n        pass",
    "example": "Student('An', 8).passed()  →  True",
    "hint": {
      "en": "Use self.name and self.score.",
      "ja": "self.name と self.score を使います。"
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
      "en": "Classes & OOP",
      "ja": "クラスとオブジェクト指向"
    },
    "title": {
      "en": "Rectangle class",
      "ja": "Rectangle クラス"
    },
    "prompt": {
      "en": "Create Rectangle(width, height) with area() and perimeter() methods.",
      "ja": "width と height を受け取る Rectangle クラスを作成し、area() と perimeter() メソッドを実装してください。"
    },
    "starter": "class Rectangle:\n    def __init__(self, width, height):\n        pass\n\n    def area(self):\n        pass\n\n    def perimeter(self):\n        pass",
    "example": "Rectangle(5,3).area()  →  15",
    "hint": {
      "en": "Perimeter = 2*(width+height).",
      "ja": "周長 = 2*(width+height) です。"
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
      "en": "Classes & OOP",
      "ja": "クラスとオブジェクト指向"
    },
    "title": {
      "en": "Animal → Dog inheritance",
      "ja": "Animal から Dog への継承"
    },
    "prompt": {
      "en": "Create Animal.speak() returning '...'. Create Dog inheriting Animal and override speak() to return 'Woof'.",
      "ja": "'...' を返す Animal.speak() を作成し、Animal を継承する Dog クラスで speak() をオーバーライドして 'Woof' を返してください。"
    },
    "starter": "class Animal:\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        pass",
    "example": "Dog().speak()  →  'Woof'",
    "hint": {
      "en": "Declare class Dog(Animal).",
      "ja": "class Dog(Animal) と定義します。"
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
      "en": "Classes & OOP",
      "ja": "クラスとオブジェクト指向"
    },
    "title": {
      "en": "Polymorphism via speak()",
      "ja": "speak() を使ったポリモーフィズム"
    },
    "prompt": {
      "en": "Create Cat.speak() → 'Meow', Dog.speak() → 'Woof', and animal_sound(animal) that only calls animal.speak().",
      "ja": "Cat.speak() は 'Meow'、Dog.speak() は 'Woof' を返すようにし、animal.speak() を呼ぶだけの animal_sound(animal) を作成してください。"
    },
    "starter": "class Cat:\n    def speak(self):\n        pass\n\nclass Dog:\n    def speak(self):\n        pass\n\ndef animal_sound(animal):\n    pass",
    "example": "animal_sound(Cat())  →  'Meow'",
    "hint": {
      "en": "animal_sound does not need type checks.",
      "ja": "animal_sound 内で型を判定する必要はありません。"
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
      "en": "Classes & OOP",
      "ja": "クラスとオブジェクト指向"
    },
    "title": {
      "en": "Countdown iterator",
      "ja": "カウントダウンのイテレータ"
    },
    "prompt": {
      "en": "Create Countdown(start) as an iterator yielding start, start-1, ..., 1 and then stopping.",
      "ja": "start、start-1、...、1 を順に返して終了する Countdown(start) イテレータクラスを作成してください。"
    },
    "starter": "class Countdown:\n    def __init__(self, start):\n        pass\n\n    def __iter__(self):\n        pass\n\n    def __next__(self):\n        pass",
    "example": "list(Countdown(3))  →  [3,2,1]",
    "hint": {
      "en": "__iter__ can return self; __next__ raises StopIteration when finished.",
      "ja": "__iter__ は self を返し、__next__ は終了時に StopIteration を送出します。"
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
      "en": "Modules & Standard Library",
      "ja": "モジュールと標準ライブラリ"
    },
    "title": {
      "en": "Use the math module",
      "ja": "math モジュールを使う"
    },
    "prompt": {
      "en": "Write circle_area(radius) using math.pi and return the area rounded to 2 decimal places.",
      "ja": "math.pi を使って円の面積を計算し、小数点以下2桁に丸めて返す circle_area(radius) を作成してください。"
    },
    "starter": "import math\n\ndef circle_area(radius):\n    pass",
    "example": "circle_area(2)  →  12.57",
    "hint": {
      "en": "Use round(value, 2).",
      "ja": "round(value, 2) を使います。"
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
      "en": "Modules & Standard Library",
      "ja": "モジュールと標準ライブラリ"
    },
    "title": {
      "en": "Days between dates",
      "ja": "2つの日付の差"
    },
    "prompt": {
      "en": "Write days_between(date1, date2) for two YYYY-MM-DD strings and return the absolute number of days between them.",
      "ja": "YYYY-MM-DD 形式の2つの文字列を受け取り、その間の日数の絶対値を返す days_between(date1, date2) を作成してください。"
    },
    "starter": "from datetime import datetime\n\ndef days_between(date1, date2):\n    pass",
    "example": "days_between('2026-01-01','2026-01-10')  →  9",
    "hint": {
      "en": "Use datetime.strptime(..., '%Y-%m-%d') and subtract.",
      "ja": "datetime.strptime(..., '%Y-%m-%d') で変換し、差を求めます。"
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
      "en": "JSON & RegEx",
      "ja": "JSON と正規表現"
    },
    "title": {
      "en": "Read JSON",
      "ja": "JSON の読み込み"
    },
    "prompt": {
      "en": "Write json_field(text, key), parse the JSON string, and return the value for key; return None if missing.",
      "ja": "JSON 文字列を解析し、key に対応する値を返す json_field(text, key) を作成してください。キーがなければ None を返します。"
    },
    "starter": "import json\n\ndef json_field(text, key):\n    pass",
    "example": "json_field('{\"name\":\"An\"}', 'name')  →  'An'",
    "hint": {
      "en": "Use json.loads() then dict.get().",
      "ja": "json.loads() の後に dict.get() を使います。"
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
      "en": "JSON & RegEx",
      "ja": "JSON と正規表現"
    },
    "title": {
      "en": "Validate email with RegEx",
      "ja": "正規表現でメール形式を確認"
    },
    "prompt": {
      "en": "Write is_simple_email(text) returning True for a basic local@domain.tld shape without spaces. Use re.fullmatch.",
      "ja": "空白を含まない基本的な local@domain.tld 形式なら True を返す is_simple_email(text) を作成してください。re.fullmatch を使います。"
    },
    "starter": "import re\n\ndef is_simple_email(text):\n    pass",
    "example": "is_simple_email('a@b.com')  →  True",
    "hint": {
      "en": "A basic pattern can match non-space/non-@ text, @, domain, dot, and suffix.",
      "ja": "空白や @ 以外の文字、@、ドメイン、ドット、末尾部分を正規表現で指定します。"
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
      "en": "Exceptions & Formatting",
      "ja": "例外処理と書式設定"
    },
    "title": {
      "en": "Safe division with try/except",
      "ja": "try/except で安全に除算"
    },
    "prompt": {
      "en": "Write safe_divide(a, b) returning a/b; when b=0 return None by handling ZeroDivisionError.",
      "ja": "a/b を返す safe_divide(a, b) を作成してください。b=0 なら ZeroDivisionError を処理して None を返します。"
    },
    "starter": "def safe_divide(a, b):\n    pass",
    "example": "safe_divide(10, 0)  →  None",
    "hint": {
      "en": "Use try / except ZeroDivisionError.",
      "ja": "try / except ZeroDivisionError を使います。"
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
      "en": "Exceptions & Formatting",
      "ja": "例外処理と書式設定"
    },
    "title": {
      "en": "Format numbers in an f-string",
      "ja": "f-string で数値を整形"
    },
    "prompt": {
      "en": "Write format_price(name, price) returning '<name>: <price>' with thousands separators and exactly 2 decimal places.",
      "ja": "'<name>: <price>' という文字列を返す format_price(name, price) を作成してください。価格は桁区切り付き、小数点以下ちょうど2桁にします。"
    },
    "starter": "def format_price(name, price):\n    pass",
    "example": "format_price('Laptop', 1234.5)  →  'Laptop: 1,234.50'",
    "hint": {
      "en": "In an f-string, use the :,.2f format specifier.",
      "ja": "f-string の書式指定 :,.2f を使います。"
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
      "en": "Exceptions & Formatting",
      "ja": "例外処理と書式設定"
    },
    "title": {
      "en": "Simulate user input parsing",
      "ja": "input の入力値を解析"
    },
    "prompt": {
      "en": "Write parse_age(text) to simulate input() data: trim whitespace and convert it to int.",
      "ja": "input() の入力を想定した parse_age(text) を作成してください。前後の空白を削除し、整数に変換します。"
    },
    "starter": "def parse_age(text):\n    pass",
    "example": "parse_age(' 18 ')  →  18",
    "hint": {
      "en": "input() returns a string; here text plays that role.",
      "ja": "input() の戻り値は文字列です。この課題では text がそれに相当します。"
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
      "en": "Exceptions & Formatting",
      "ja": "例外処理と書式設定"
    },
    "title": {
      "en": "Work with None",
      "ja": "None の扱い"
    },
    "prompt": {
      "en": "Write value_or_default(value, default) returning default only when value is None; keep 0, False, and '' unchanged.",
      "ja": "value が None の場合だけ default を返す value_or_default(value, default) を作成してください。0、False、'' はそのまま返します。"
    },
    "starter": "def value_or_default(value, default):\n    pass",
    "example": "value_or_default(None, 10)  →  10",
    "hint": {
      "en": "Use is None rather than truthiness.",
      "ja": "真偽値判定ではなく is None を使います。"
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
      "en": "File Handling",
      "ja": "ファイル操作"
    },
    "title": {
      "en": "Write then read a file",
      "ja": "ファイルに書いて読み込む"
    },
    "prompt": {
      "en": "Write write_and_read(path, text): write text to path using mode 'w' and encoding='utf-8', then read it back and return the content.",
      "ja": "write_and_read(path, text) を作成してください。encoding='utf-8'、モード 'w' で text を path に書き込み、再び読み取って内容を返します。"
    },
    "starter": "def write_and_read(path, text):\n    pass",
    "example": "write_and_read('/tmp/demo.txt', 'Python')  →  'Python'",
    "hint": {
      "en": "Use two with open(...) blocks: one for writing and one for reading.",
      "ja": "with open(...) を2回使い、最初は書き込み、次に読み込みます。"
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
      "en": "Functions",
      "ja": "関数"
    },
    "title": {
      "en": "Even-number generator",
      "ja": "偶数を生成するジェネレータ"
    },
    "prompt": {
      "en": "Write even_numbers(n) as a generator yielding even values from 0 through n.",
      "ja": "0 から n までの偶数を yield するジェネレータ even_numbers(n) を作成してください。n が偶数なら含めます。"
    },
    "starter": "def even_numbers(n):\n    pass",
    "example": "list(even_numbers(6))  →  [0,2,4,6]",
    "hint": {
      "en": "Use yield inside a loop.",
      "ja": "ループ内で yield を使います。"
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
      "en": "Functions",
      "ja": "関数"
    },
    "title": {
      "en": "Decorator that doubles a result",
      "ja": "結果を2倍にするデコレータ"
    },
    "prompt": {
      "en": "Write a double_result(func) decorator whose wrapper doubles func's result. Apply @double_result to add(a,b), where add normally returns a+b.",
      "ja": "関数の戻り値を2倍にする wrapper を返す double_result(func) デコレータを作成してください。通常 a+b を返す add(a,b) に @double_result を適用します。"
    },
    "starter": "def double_result(func):\n    pass\n\n@double_result\ndef add(a, b):\n    return a + b",
    "example": "add(2, 3)  →  10",
    "hint": {
      "en": "The wrapper can take *args, **kwargs and return 2 * func(...).",
      "ja": "wrapper に *args と **kwargs を受け取り、2 * func(...) を返せます。"
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
      "en": "Advanced Challenges",
      "ja": "応用課題"
    },
    "title": {
      "en": "Normalized palindrome",
      "ja": "正規化した回文判定"
    },
    "prompt": {
      "en": "Write is_palindrome(text) ignoring non-alphanumeric characters and letter case.",
      "ja": "英数字以外の文字と大文字・小文字の違いを無視して回文かどうか判定する is_palindrome(text) を作成してください。"
    },
    "starter": "def is_palindrome(text):\n    pass",
    "example": "is_palindrome('A man, a plan, a canal: Panama!')  →  True",
    "hint": {
      "en": "isalnum() plus lower()/casefold() are useful.",
      "ja": "isalnum() と lower()/casefold() が役立ちます。"
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
      "en": "Advanced Challenges",
      "ja": "応用課題"
    },
    "title": {
      "en": "Analyze numbers",
      "ja": "数値リストの分析"
    },
    "prompt": {
      "en": "Write analyze_numbers(numbers) for a non-empty list, returning a dict with count, min, max, sum, average.",
      "ja": "空でない数値リストについて、count、min、max、sum、average を含む辞書を返す analyze_numbers(numbers) を作成してください。"
    },
    "starter": "def analyze_numbers(numbers):\n    pass",
    "example": "analyze_numbers([1,2,3])  →  {'count':3,...,'average':2.0}",
    "hint": {
      "en": "Combine len, min, max, and sum.",
      "ja": "len、min、max、sum を組み合わせます。"
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
      "en": "Advanced Challenges",
      "ja": "応用課題"
    },
    "title": {
      "en": "Shopping cart total",
      "ja": "ショッピングカートの合計"
    },
    "prompt": {
      "en": "Write cart_total(cart, prices, discount=0). cart maps item→quantity and prices maps item→unit price; compute total then apply discount percent. Return rounded to 2 decimals.",
      "ja": "cart_total(cart, prices, discount=0) を作成してください。cart は商品と数量、prices は商品と単価の辞書です。合計から discount % を割り引き、小数点以下2桁に丸めて返します。"
    },
    "starter": "def cart_total(cart, prices, discount=0):\n    pass",
    "example": "cart_total({'pen':2}, {'pen':10}, 10)  →  18.0",
    "hint": {
      "en": "Loop through cart.items(), multiply quantity by prices[item], then apply the discount percentage.",
      "ja": "cart.items() を巡回し、数量と単価を掛けてから割引率を適用します。"
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
      "en": "Advanced Challenges",
      "ja": "応用課題"
    },
    "title": {
      "en": "Password strength",
      "ja": "パスワードの強度判定"
    },
    "prompt": {
      "en": "Write strong_password(text) returning True when length >= 8 and it contains at least one uppercase, lowercase, digit, and non-alphanumeric character.",
      "ja": "長さが8文字以上で、大文字・小文字・数字・英数字以外の記号をそれぞれ1つ以上含む場合に True を返す strong_password(text) を作成してください。"
    },
    "starter": "def strong_password(text):\n    pass",
    "example": "strong_password('PyQuiz#26')  →  True",
    "hint": {
      "en": "any() with isupper/islower/isdigit/isalnum works well.",
      "ja": "any() と isupper/islower/isdigit/isalnum を組み合わせます。"
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
