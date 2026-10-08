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
      "en": "Write a normal Python program that prints exactly Hello, World! Do not define a function. No input is required.",
      "ja": "関数を定義せず、Hello, World! と正確に表示する通常の Python プログラムを書いてください。入力は不要です。"
    },
    "starter": "# Write a Python program using print().\n",
    "example": "Output: Hello, World!",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "hello()",
        "expected": "'Hello, World!'"
      },
      {
        "expr": "isinstance(hello(), str)",
        "expected": "True"
      },
      {
        "expr": "len(hello())",
        "expected": "13"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_output.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "",
        "expected": "Hello, World!"
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
      "en": "Read a name from input() and print Hello, <name>!.",
      "ja": "input() で名前を読み取り、Hello, <name>! と表示してください。"
    },
    "starter": "# Read a name and print a greeting.\n",
    "example": "Input: Yuki  →  Output: Hello, Yuki!",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "greet('Binh')",
        "expected": "'Hello, Binh!'"
      },
      {
        "expr": "greet('Python')",
        "expected": "'Hello, Python!'"
      },
      {
        "expr": "greet('')",
        "expected": "'Hello, !'"
      },
      {
        "expr": "greet('Yuki')",
        "expected": "'Hello, Yuki!'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_user_input.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "Yuki\n",
        "expected": "Hello, Yuki!"
      },
      {
        "input": "Ken\n",
        "expected": "Hello, Ken!"
      },
      {
        "input": "\n",
        "expected": "Hello, !"
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
      "en": "Read two integers, one per line, and print their sum.",
      "ja": "整数を1行ずつ2つ読み取り、合計を表示してください。"
    },
    "starter": "# Read two integers, then print their sum.\n",
    "example": "Input: 4 ↵ 7  →  Output: 11",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "add(0,0)",
        "expected": "0"
      },
      {
        "expr": "add(-10,-5)",
        "expected": "-15"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_operators.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "4\n7\n",
        "expected": "11"
      },
      {
        "input": "-3\n8\n",
        "expected": "5"
      },
      {
        "input": "0\n0\n",
        "expected": "0"
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
      "en": "Create three variables: age = 15, name = 'Python', active = True. Print the type names of each, one per line (int, str, bool).",
      "ja": "age = 15、name = 'Python'、active = True の変数を作成し、それぞれの型名（int、str、bool）を1行ずつ表示してください。"
    },
    "starter": "# Create age, name and active, then print their type names.\n",
    "example": "Output: int ↵ str ↵ bool",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "type_name(True)",
        "expected": "'bool'"
      },
      {
        "expr": "type_name(None)",
        "expected": "'NoneType'"
      },
      {
        "expr": "type_name({'x':1})",
        "expected": "'dict'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_datatypes.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "",
        "expected": "int\nstr\nbool"
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
      "en": "Read a number as a string, convert it to int and print the integer.",
      "ja": "数値の文字列を読み取り、int に変換して表示してください。"
    },
    "starter": "# Convert input text to an integer.\n",
    "example": "Input: 007  →  Output: 7",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "to_int('125')",
        "expected": "125"
      },
      {
        "expr": "to_int('-7')",
        "expected": "-7"
      },
      {
        "expr": "to_int('0')",
        "expected": "0"
      },
      {
        "expr": "to_int(' 42 ')",
        "expected": "42"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_casting.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "125\n",
        "expected": "125"
      },
      {
        "input": "-7\n",
        "expected": "-7"
      },
      {
        "input": "007\n",
        "expected": "7"
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
      "en": "Read a width and height as integers (one per line), then print the rectangle's area.",
      "ja": "幅と高さを整数として1行ずつ入力し、長方形の面積を表示してください。"
    },
    "starter": "# Input width and height as integers.\n",
    "example": "Input: 5 ↵ 3  →  Output: 15",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "rectangle_area(5,3)",
        "expected": "15"
      },
      {
        "expr": "rectangle_area(2.5,4)",
        "expected": "10.0"
      },
      {
        "expr": "rectangle_area(0,10)",
        "expected": "0"
      },
      {
        "expr": "rectangle_area(3,7)",
        "expected": "21"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_numbers.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "5\n3\n",
        "expected": "15"
      },
      {
        "input": "0\n10\n",
        "expected": "0"
      },
      {
        "input": "8\n7\n",
        "expected": "56"
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
      "en": "Read a non-empty string and print its first and last characters separated by one space.",
      "ja": "空でない文字列を読み取り、最初と最後の文字をスペース1つで区切って表示してください。"
    },
    "starter": "# Read one non-empty string.\n",
    "example": "Input: Python  →  Output: P n",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "first_last('Python')",
        "expected": "('P', 'n')"
      },
      {
        "expr": "first_last('abc')",
        "expected": "('a', 'c')"
      },
      {
        "expr": "first_last('a')",
        "expected": "('a','a')"
      },
      {
        "expr": "first_last('あいう')",
        "expected": "('あ','う')"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_strings_slicing.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "Python\n",
        "expected": "P n"
      },
      {
        "input": "a\n",
        "expected": "a a"
      },
      {
        "input": "あいう\n",
        "expected": "あ う"
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
      "en": "Read a line of text. Remove leading/trailing spaces and capitalize the first letter of each word; print the result.",
      "ja": "1行の文字列を読み、前後の空白を削除して各単語の先頭を大文字にし、表示してください。"
    },
    "starter": "# Use strip() and title().\n",
    "example": "Input:   le van binh   →  Output: Le Van Binh",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "normalize_name('  le van binh  ')",
        "expected": "'Le Van Binh'"
      },
      {
        "expr": "normalize_name('python quiz')",
        "expected": "'Python Quiz'"
      },
      {
        "expr": "normalize_name('  PYTHON  QUIZ  ')",
        "expected": "'Python  Quiz'"
      },
      {
        "expr": "normalize_name('')",
        "expected": "''"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_strings_modify.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "  le van binh  \n",
        "expected": "Le Van Binh"
      },
      {
        "input": "python quiz\n",
        "expected": "Python Quiz"
      },
      {
        "input": "   \n",
        "expected": ""
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
      "en": "Read a string and print it in reverse order.",
      "ja": "文字列を読み取り、逆順に表示してください。"
    },
    "starter": "# Reverse the input string.\n",
    "example": "Input: Python  →  Output: nohtyP",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "reverse_text('Python')",
        "expected": "'nohtyP'"
      },
      {
        "expr": "reverse_text('abc 123')",
        "expected": "'321 cba'"
      },
      {
        "expr": "reverse_text('')",
        "expected": "''"
      },
      {
        "expr": "reverse_text('たぬき')",
        "expected": "'きぬた'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_strings_slicing.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "Python\n",
        "expected": "nohtyP"
      },
      {
        "input": "abc 123\n",
        "expected": "321 cba"
      },
      {
        "input": "たぬき\n",
        "expected": "きぬた"
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
      "en": "Read a text line and then a character on the next line. Print its number of occurrences.",
      "ja": "1行目に文章、2行目に文字を読み取り、その出現回数を表示してください。"
    },
    "starter": "# Two lines: text, then character.\n",
    "example": "Input: banana ↵ a  →  Output: 3",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "count_char('banana','a')",
        "expected": "3"
      },
      {
        "expr": "count_char('Mississippi','s')",
        "expected": "4"
      },
      {
        "expr": "count_char('','x')",
        "expected": "0"
      },
      {
        "expr": "count_char('aaaa','a')",
        "expected": "4"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_strings_methods.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "banana\na\n",
        "expected": "3"
      },
      {
        "input": "Mississippi\ns\n",
        "expected": "4"
      },
      {
        "input": "abc\nz\n",
        "expected": "0"
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
      "en": "Read text and a word (two lines). Print True if the word occurs in the text, else False. Case-sensitive.",
      "ja": "文章と単語を1行ずつ読み取り、単語が含まれれば True、そうでなければ False を表示します。大文字と小文字は区別してください。"
    },
    "starter": "# Read text, then word.\n",
    "example": "Input: Learn Python ↵ Python  →  Output: True",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "contains_word('Learn Python','Python')",
        "expected": "True"
      },
      {
        "expr": "contains_word('Learn Python','python')",
        "expected": "False"
      },
      {
        "expr": "contains_word('Python','')",
        "expected": "True"
      },
      {
        "expr": "contains_word('','Python')",
        "expected": "False"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_strings.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "Learn Python\nPython\n",
        "expected": "True"
      },
      {
        "input": "Learn Python\npython\n",
        "expected": "False"
      },
      {
        "input": "abc\nz\n",
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
      "en": "Read name and age from two lines. Print '<name> is <age> years old.'.",
      "ja": "名前と年齢を2行で読み取り、'<name> is <age> years old.' と表示してください。"
    },
    "starter": "# Read name and age.\n",
    "example": "Input: An ↵ 15  →  Output: An is 15 years old.",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "profile('An',15)",
        "expected": "'An is 15 years old.'"
      },
      {
        "expr": "profile('Binh',23)",
        "expected": "'Binh is 23 years old.'"
      },
      {
        "expr": "profile('Yuki',0)",
        "expected": "'Yuki is 0 years old.'"
      },
      {
        "expr": "profile('',1)",
        "expected": "' is 1 years old.'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_string_formatting.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "An\n15\n",
        "expected": "An is 15 years old."
      },
      {
        "input": "Ken\n23\n",
        "expected": "Ken is 23 years old."
      },
      {
        "input": "Yuki\n0\n",
        "expected": "Yuki is 0 years old."
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
      "en": "Read an integer and print True if it is even, otherwise False.",
      "ja": "整数を読み取り、偶数なら True、それ以外は False を表示してください。"
    },
    "starter": "# Read one integer.\n",
    "example": "Input: 12  →  Output: True",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "is_even(0)",
        "expected": "True"
      },
      {
        "expr": "is_even(-3)",
        "expected": "False"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_operators.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "12\n",
        "expected": "True"
      },
      {
        "input": "7\n",
        "expected": "False"
      },
      {
        "input": "-4\n",
        "expected": "True"
      },
      {
        "input": "0\n",
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
      "en": "Read integers a and b (one per line). Print -1 if a<b, 0 if a==b, or 1 otherwise.",
      "ja": "整数 a と b を1行ずつ読み取り、a<b なら -1、等しければ 0、そうでなければ 1 を表示してください。"
    },
    "starter": "# Read a, then b.\n",
    "example": "Input: 9 ↵ 3  →  Output: 1",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "compare(-5,-2)",
        "expected": "-1"
      },
      {
        "expr": "compare(0,-1)",
        "expected": "1"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_conditions.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "2\n5\n",
        "expected": "-1"
      },
      {
        "input": "5\n5\n",
        "expected": "0"
      },
      {
        "input": "9\n3\n",
        "expected": "1"
      },
      {
        "input": "-5\n-2\n",
        "expected": "-1"
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
      "en": "Read n, low, high as three integers (one per line). Print whether low <= n <= high.",
      "ja": "整数 n、low、high を1行ずつ読み取り、low <= n <= high かどうか表示してください。"
    },
    "starter": "# Read n, low and high.\n",
    "example": "Input: 5 ↵ 1 ↵ 10  →  Output: True",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "in_range(10,1,10)",
        "expected": "True"
      },
      {
        "expr": "in_range(0,1,10)",
        "expected": "False"
      },
      {
        "expr": "in_range(-3,-5,0)",
        "expected": "True"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_operators.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "5\n1\n10\n",
        "expected": "True"
      },
      {
        "input": "10\n1\n10\n",
        "expected": "True"
      },
      {
        "input": "12\n1\n10\n",
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
      "en": "Read integers a and b (two lines). Print sum, difference (a-b), and product separated by spaces.",
      "ja": "整数 a、b を2行で読み取り、合計、差（a-b）、積をスペース区切りで表示してください。"
    },
    "starter": "# Read two integers.\n",
    "example": "Input: 6 ↵ 2  →  Output: 8 4 12",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "calc_ops(6,2)",
        "expected": "(8, 4, 12)"
      },
      {
        "expr": "calc_ops(-3,4)",
        "expected": "(1, -7, -12)"
      },
      {
        "expr": "calc_ops(0,5)",
        "expected": "(5,-5,0)"
      },
      {
        "expr": "calc_ops(2.5,1.5)",
        "expected": "(4.0,1.0,3.75)"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_operators.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "6\n2\n",
        "expected": "8 4 12"
      },
      {
        "input": "-3\n4\n",
        "expected": "1 -7 -12"
      },
      {
        "input": "0\n5\n",
        "expected": "5 -5 0"
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
      "en": "Read integers separated by spaces on one line. Print their sum. An empty line represents an empty list.",
      "ja": "1行のスペース区切りの整数を読み取り、合計を表示してください。空行は空リストを表します。"
    },
    "starter": "# Read space-separated integers.\n",
    "example": "Input: 1 2 3 4  →  Output: 10",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "list_total([1,2,3,4])",
        "expected": "10"
      },
      {
        "expr": "list_total([])",
        "expected": "0"
      },
      {
        "expr": "list_total([-2,2,-3])",
        "expected": "-3"
      },
      {
        "expr": "list_total([0,0])",
        "expected": "0"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_lists.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "1 2 3 4\n",
        "expected": "10"
      },
      {
        "input": "\n",
        "expected": "0"
      },
      {
        "input": "-2 2 -3\n",
        "expected": "-3"
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
      "en": "Read a non-empty list of integers separated by spaces and print the arithmetic mean as a number.",
      "ja": "スペース区切りの1個以上の整数を読み取り、算術平均を数値で表示してください。"
    },
    "starter": "# Read non-empty space-separated integers.\n",
    "example": "Input: 2 4 6  →  Output: 4.0",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "average([2,4,6])",
        "expected": "4.0"
      },
      {
        "expr": "average([1,2])",
        "expected": "1.5"
      },
      {
        "expr": "average([-2,0,2])",
        "expected": "0.0"
      },
      {
        "expr": "average([10])",
        "expected": "10.0"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_lists.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "2 4 6\n",
        "expected": "4.0"
      },
      {
        "input": "1 2\n",
        "expected": "1.5"
      },
      {
        "input": "10\n",
        "expected": "10.0"
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
      "en": "Read space-separated integers; remove duplicates, sort ascending, then print numbers separated by one space.",
      "ja": "スペース区切りの整数を読み取り、重複を除いて昇順にし、スペース1つで区切って表示してください。"
    },
    "starter": "# Read integers and print sorted unique values.\n",
    "example": "Input: 3 1 3 2  →  Output: 1 2 3",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "unique_sorted([3,1,3,2])",
        "expected": "[1, 2, 3]"
      },
      {
        "expr": "unique_sorted([5,5,5])",
        "expected": "[5]"
      },
      {
        "expr": "unique_sorted([])",
        "expected": "[]"
      },
      {
        "expr": "unique_sorted([-1,5,-1,0])",
        "expected": "[-1,0,5]"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_lists_sort.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "3 1 3 2\n",
        "expected": "1 2 3"
      },
      {
        "input": "5 5 5\n",
        "expected": "5"
      },
      {
        "input": "\n",
        "expected": ""
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
      "en": "Read space-separated integers with at least two distinct values. Print the second distinct largest value.",
      "ja": "異なる数が2種類以上あるスペース区切りの整数を読み取り、2番目に大きい異なる値を表示してください。"
    },
    "starter": "# Read integers; ignore duplicate values.\n",
    "example": "Input: 5 1 5 3  →  Output: 3",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "second_largest([5,1,5,3])",
        "expected": "3"
      },
      {
        "expr": "second_largest([10,9,8,10])",
        "expected": "9"
      },
      {
        "expr": "second_largest([-5,-1,-3])",
        "expected": "-3"
      },
      {
        "expr": "second_largest([1,1,2,2,3,3])",
        "expected": "2"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_lists_sort.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "5 1 5 3\n",
        "expected": "3"
      },
      {
        "input": "10 9 8 10\n",
        "expected": "9"
      },
      {
        "input": "-5 -1 -3\n",
        "expected": "-3"
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
      "en": "Read space-separated integers and print the squares of even values in their original order, separated by spaces.",
      "ja": "スペース区切りの整数を読み取り、偶数の二乗を元の順番でスペース区切りで表示してください。"
    },
    "starter": "# Read integers and process even numbers.\n",
    "example": "Input: 1 2 3 4  →  Output: 4 16",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "even_squares([1,2,3,4])",
        "expected": "[4, 16]"
      },
      {
        "expr": "even_squares([-2,3,6])",
        "expected": "[4, 36]"
      },
      {
        "expr": "even_squares([])",
        "expected": "[]"
      },
      {
        "expr": "even_squares([0,5,-4])",
        "expected": "[0,16]"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_lists_comprehension.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "1 2 3 4\n",
        "expected": "4 16"
      },
      {
        "input": "-2 3 6\n",
        "expected": "4 36"
      },
      {
        "input": "1 3 5\n",
        "expected": ""
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
      "en": "Read space-separated integers; move the first to the end and print the list separated by spaces. Empty input prints nothing.",
      "ja": "スペース区切りの整数を読み、先頭を末尾に移動して表示してください。空入力の場合は何も表示しません。"
    },
    "starter": "# Read integers and rotate the list to the left.\n",
    "example": "Input: 1 2 3  →  Output: 2 3 1",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "rotate_left([1,2])",
        "expected": "[2,1]"
      },
      {
        "expr": "rotate_left([0,0,1])",
        "expected": "[0,1,0]"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_lists.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "1 2 3\n",
        "expected": "2 3 1"
      },
      {
        "input": "\n",
        "expected": ""
      },
      {
        "input": "1\n",
        "expected": "1"
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
      "en": "Read two space-separated items, create a tuple, and print the items in reverse order separated by a space.",
      "ja": "スペース区切りの2つの値を読み取り、タプルを作成し、順番を逆にしてスペース区切りで表示してください。"
    },
    "starter": "# Read two items, store them in a tuple and swap.\n",
    "example": "Input: 10 20  →  Output: 20 10",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "swap_pair((10,20))",
        "expected": "(20, 10)"
      },
      {
        "expr": "swap_pair(('a','b'))",
        "expected": "('b', 'a')"
      },
      {
        "expr": "swap_pair((0,0))",
        "expected": "(0,0)"
      },
      {
        "expr": "swap_pair((None,True))",
        "expected": "(True,None)"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_tuples_unpack.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "10 20\n",
        "expected": "20 10"
      },
      {
        "input": "a b\n",
        "expected": "b a"
      },
      {
        "input": "0 0\n",
        "expected": "0 0"
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
      "en": "Read x and y as two integers (one per line). Print the quadrant (1–4); print 0 when x or y equals zero.",
      "ja": "x と y を1行ずつ整数で読み、座標の象限（1〜4）を表示してください。どちらかが 0 なら 0 を表示します。"
    },
    "starter": "# Read x and y.\n",
    "example": "Input: 3 ↵ -2  →  Output: 4",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "quadrant((1,0))",
        "expected": "0"
      },
      {
        "expr": "quadrant((0,-1))",
        "expected": "0"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_conditions.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "2\n3\n",
        "expected": "1"
      },
      {
        "input": "-2\n3\n",
        "expected": "2"
      },
      {
        "input": "-2\n-3\n",
        "expected": "3"
      },
      {
        "input": "3\n-2\n",
        "expected": "4"
      },
      {
        "input": "0\n5\n",
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
      "en": "Read two lines of space-separated integers. Print the common distinct values in ascending order, separated by spaces.",
      "ja": "スペース区切りの整数を2行で読み、共通する重複なしの値を昇順でスペース区切り表示してください。"
    },
    "starter": "# Each of the two lines contains a set of integers.\n",
    "example": "Input: 1 2 3 ↵ 2 3 4  →  Output: 2 3",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "common([1,2,3],[2,3,4])",
        "expected": "{2, 3}"
      },
      {
        "expr": "common('abc','bcd')",
        "expected": "{'b', 'c'}"
      },
      {
        "expr": "common([],[1])",
        "expected": "set()"
      },
      {
        "expr": "common([0,0,1],[1,2])",
        "expected": "{1}"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_sets_join.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "1 2 3\n2 3 4\n",
        "expected": "2 3"
      },
      {
        "input": "1 2\n3 4\n",
        "expected": ""
      },
      {
        "input": "1 1 2\n1 1\n",
        "expected": "1"
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
      "en": "Read two lines of space-separated integers. Print distinct values found in exactly one line, sorted ascending.",
      "ja": "スペース区切りの整数を2行で読み、どちらか一方にだけある値を昇順で表示してください。"
    },
    "starter": "# Read two sets of integers.\n",
    "example": "Input: 1 2 ↵ 2 3  →  Output: 1 3",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "only_one({1,2},{2,3})",
        "expected": "{1, 3}"
      },
      {
        "expr": "only_one({'a'},{'a'})",
        "expected": "set()"
      },
      {
        "expr": "only_one(set(),{1,2})",
        "expected": "{1,2}"
      },
      {
        "expr": "only_one({1,2},{3,4})",
        "expected": "{1,2,3,4}"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_sets_join.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "1 2\n2 3\n",
        "expected": "1 3"
      },
      {
        "input": "1 2\n1 2\n",
        "expected": ""
      },
      {
        "input": "\n1 2\n",
        "expected": "1 2"
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
      "en": "Use the dictionary {'x':5,'y':10}. Read a key and print its value; print None for a missing key.",
      "ja": "辞書 {'x':5,'y':10} を使います。キーを入力し、対応する値を表示してください。存在しない場合は None を表示します。"
    },
    "starter": "# Dictionary: {'x': 5, 'y': 10}\n# Read a key.\n",
    "example": "Input: x  →  Output: 5",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "get_value({'x':5},'x')",
        "expected": "5"
      },
      {
        "expr": "get_value({'x':5},'y')",
        "expected": "None"
      },
      {
        "expr": "get_value({'x':None},'x')",
        "expected": "None"
      },
      {
        "expr": "get_value({},'a')",
        "expected": "None"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_dictionaries_access.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "x\n",
        "expected": "5"
      },
      {
        "input": "y\n",
        "expected": "10"
      },
      {
        "input": "z\n",
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
      "en": "Read a line of words separated by spaces. Count each word (case-sensitive); print 'word:count', sorted alphabetically, one per line.",
      "ja": "スペース区切りの単語を1行で読み取り、出現回数を数えます。単語順に並べ、各行に '単語:回数' と表示してください。大文字小文字を区別します。"
    },
    "starter": "# Read words on one line.\n",
    "example": "Input: a b a  →  Output: a:2 ↵ b:1",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "word_frequency(['a','b','a'])",
        "expected": "{'a': 2, 'b': 1}"
      },
      {
        "expr": "word_frequency([])",
        "expected": "{}"
      },
      {
        "expr": "word_frequency(['a','A','a'])",
        "expected": "{'a':2,'A':1}"
      },
      {
        "expr": "word_frequency(['日本','日本'])",
        "expected": "{'日本':2}"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_dictionaries.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "a b a\n",
        "expected": "a:2\nb:1"
      },
      {
        "input": "b a b c\n",
        "expected": "a:1\nb:2\nc:1"
      },
      {
        "input": "\n",
        "expected": ""
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
      "en": "Start with a={'x':1,'y':2} and b={'y':3,'z':4}. Merge into a new dictionary (b wins) and print key=value pairs sorted by key on one line.",
      "ja": "a={'x':1,'y':2}、b={'y':3,'z':4} を作り、b の値を優先して新しい辞書に結合します。キー順に key=value を1行で表示してください。"
    },
    "starter": "# Create two dictionaries, merge them, and print sorted key=value pairs.\n",
    "example": "Output: x=1 y=3 z=4",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "merge_dicts({'x':1},{'x':2,'y':3})",
        "expected": "{'x': 2, 'y': 3}"
      },
      {
        "expr": "merge_dicts({}, {'a':1})",
        "expected": "{'a': 1}"
      },
      {
        "expr": "merge_dicts({'a':1,'b':2},{'b':5})",
        "expected": "{'a':1,'b':5}"
      },
      {
        "expr": "merge_dicts({}, {})",
        "expected": "{}"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_dictionaries.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "",
        "expected": "x=1 y=3 z=4"
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
      "en": "Create scores={'An':8,'Binh':9,'Chi':7}. Print the name of the student with the highest score.",
      "ja": "辞書 scores={'An':8,'Binh':9,'Chi':7} を作成し、最高得点の生徒名を表示してください。"
    },
    "starter": "# Create the scores dictionary and print the top student's name.\n",
    "example": "Output: Binh",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "best_student({'An':8,'Binh':9,'Chi':7})",
        "expected": "'Binh'"
      },
      {
        "expr": "best_student({'A':1})",
        "expected": "'A'"
      },
      {
        "expr": "best_student({'Yuki':-2,'Ken':-1})",
        "expected": "'Ken'"
      },
      {
        "expr": "best_student({'A':0,'B':10})",
        "expected": "'B'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_dictionaries.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "",
        "expected": "Binh"
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
      "en": "Read a score. Print A (>=90), B (>=80), C (>=70), D (>=60), otherwise F.",
      "ja": "点数を読み取り、90以上 A、80以上 B、70以上 C、60以上 D、それ以外 F を表示してください。"
    },
    "starter": "# Read a numeric score.\n",
    "example": "Input: 85  →  Output: B",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "grade(90)",
        "expected": "'A'"
      },
      {
        "expr": "grade(80)",
        "expected": "'B'"
      },
      {
        "expr": "grade(70)",
        "expected": "'C'"
      },
      {
        "expr": "grade(60)",
        "expected": "'D'"
      },
      {
        "expr": "grade(59)",
        "expected": "'F'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_conditions.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "95\n",
        "expected": "A"
      },
      {
        "input": "85\n",
        "expected": "B"
      },
      {
        "input": "75\n",
        "expected": "C"
      },
      {
        "input": "65\n",
        "expected": "D"
      },
      {
        "input": "50\n",
        "expected": "F"
      },
      {
        "input": "90\n",
        "expected": "A"
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
      "en": "Read a year as an integer and print True if Gregorian leap year, otherwise False.",
      "ja": "年を整数で読み取り、グレゴリオ暦のうるう年なら True、そうでなければ False を表示してください。"
    },
    "starter": "# Read the year.\n",
    "example": "Input: 2024  →  Output: True",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "is_leap_year(2100)",
        "expected": "False"
      },
      {
        "expr": "is_leap_year(2400)",
        "expected": "True"
      },
      {
        "expr": "is_leap_year(2020)",
        "expected": "True"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_conditions.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "2024\n",
        "expected": "True"
      },
      {
        "input": "1900\n",
        "expected": "False"
      },
      {
        "input": "2000\n",
        "expected": "True"
      },
      {
        "input": "2023\n",
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
      "en": "Read an integer and print FizzBuzz if divisible by 15, Fizz if by 3, Buzz if by 5, otherwise print the number.",
      "ja": "整数を読み、15で割り切れれば FizzBuzz、3なら Fizz、5なら Buzz、それ以外は整数を表示してください。"
    },
    "starter": "# Read n and use if/elif/else.\n",
    "example": "Input: 15  →  Output: FizzBuzz",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "fizzbuzz(15)",
        "expected": "'FizzBuzz'"
      },
      {
        "expr": "fizzbuzz(1)",
        "expected": "1"
      },
      {
        "expr": "fizzbuzz(0)",
        "expected": "'FizzBuzz'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_conditions.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "30\n",
        "expected": "FizzBuzz"
      },
      {
        "input": "9\n",
        "expected": "Fizz"
      },
      {
        "input": "10\n",
        "expected": "Buzz"
      },
      {
        "input": "7\n",
        "expected": "7"
      },
      {
        "input": "0\n",
        "expected": "FizzBuzz"
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
      "en": "Read a lowercase English weekday name. Print weekday for Monday–Friday, weekend for Saturday/Sunday, otherwise invalid. Try match.",
      "ja": "英語小文字の曜日を入力し、月〜金は weekday、土日は weekend、それ以外は invalid を表示します。match を使ってみましょう。"
    },
    "starter": "# Read a lowercase day name.\n",
    "example": "Input: sunday  →  Output: weekend",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "day_type('friday')",
        "expected": "'weekday'"
      },
      {
        "expr": "day_type('sunday')",
        "expected": "'weekend'"
      },
      {
        "expr": "day_type('MONDAY')",
        "expected": "'invalid'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_match.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "monday\n",
        "expected": "weekday"
      },
      {
        "input": "sunday\n",
        "expected": "weekend"
      },
      {
        "input": "holiday\n",
        "expected": "invalid"
      },
      {
        "input": "MONDAY\n",
        "expected": "invalid"
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
      "en": "Read non-negative integer n. Use a while loop to print the sum 1+2+...+n.",
      "ja": "0以上の整数 n を読み、while ループで 1+2+...+n の合計を表示してください。"
    },
    "starter": "# Read n; use while to sum integers.\n",
    "example": "Input: 5  →  Output: 15",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "sum_to_n(1)",
        "expected": "1"
      },
      {
        "expr": "sum_to_n(10)",
        "expected": "55"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_while_loops.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "5\n",
        "expected": "15"
      },
      {
        "input": "0\n",
        "expected": "0"
      },
      {
        "input": "100\n",
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
      "en": "Read an integer. Use while to print the number of its digits; ignore minus sign, and treat 0 as one digit.",
      "ja": "整数を読み取り、while を使って桁数を表示してください。負号は無視し、0 は1桁です。"
    },
    "starter": "# Read an integer and count digits with while.\n",
    "example": "Input: -1205  →  Output: 4",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "digit_count(1000)",
        "expected": "4"
      },
      {
        "expr": "digit_count(-1)",
        "expected": "1"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_while_loops.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "-1205\n",
        "expected": "4"
      },
      {
        "input": "0\n",
        "expected": "1"
      },
      {
        "input": "99\n",
        "expected": "2"
      },
      {
        "input": "1000\n",
        "expected": "4"
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
      "en": "Read start and nonzero divisor, one integer per line. Use while to find and print the smallest integer >= start divisible by divisor.",
      "ja": "start と0以外の divisor を整数で読み取り、while で start 以上で divisor で割り切れる最小の整数を表示してください。"
    },
    "starter": "# Read start, then divisor.\n",
    "example": "Input: 10 ↵ 6  →  Output: 12",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "first_divisible(1,1)",
        "expected": "1"
      },
      {
        "expr": "first_divisible(-10,4)",
        "expected": "-8"
      },
      {
        "expr": "first_divisible(5,-3)",
        "expected": "6"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_while_loops.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "10\n6\n",
        "expected": "12"
      },
      {
        "input": "12\n6\n",
        "expected": "12"
      },
      {
        "input": "-3\n5\n",
        "expected": "0"
      },
      {
        "input": "5\n-3\n",
        "expected": "6"
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
      "en": "Read non-negative n. Use for/range to print the sum of even integers from 0 through n.",
      "ja": "0以上の n を読み、for/range を使って 0 から n までの偶数の合計を表示してください。"
    },
    "starter": "# Read n, use for and range.\n",
    "example": "Input: 10  →  Output: 30",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "sum_even_to_n(0)",
        "expected": "0"
      },
      {
        "expr": "sum_even_to_n(9)",
        "expected": "20"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_for_loops.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "10\n",
        "expected": "30"
      },
      {
        "input": "1\n",
        "expected": "0"
      },
      {
        "input": "6\n",
        "expected": "12"
      },
      {
        "input": "0\n",
        "expected": "0"
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
      "en": "Read integer n. Print n*1 through n*10 on one line, separated by spaces.",
      "ja": "整数 n を読み取り、n*1 から n*10 をスペース区切りで1行に表示してください。"
    },
    "starter": "# Read n and generate ten products.\n",
    "example": "Input: 3  →  Output: 3 6 9 ... 30",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "multiplication_table(3)",
        "expected": "[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]"
      },
      {
        "expr": "multiplication_table(0)",
        "expected": "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]"
      },
      {
        "expr": "multiplication_table(-2)",
        "expected": "[-2,-4,-6,-8,-10,-12,-14,-16,-18,-20]"
      },
      {
        "expr": "multiplication_table(1)",
        "expected": "[1,2,3,4,5,6,7,8,9,10]"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_for_loops.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "3\n",
        "expected": "3 6 9 12 15 18 21 24 27 30"
      },
      {
        "input": "0\n",
        "expected": "0 0 0 0 0 0 0 0 0 0"
      },
      {
        "input": "-2\n",
        "expected": "-2 -4 -6 -8 -10 -12 -14 -16 -18 -20"
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
      "en": "Read an integer row count n, followed by n lines of space-separated integers (rows may be empty). Print all values in row order on one line.",
      "ja": "最初に行数 n を読み、続く n 行のスペース区切り整数を読みます。空行も可能です。すべての数を行順に1行で表示してください。"
    },
    "starter": "# First line: row count. Following lines: rows of integers.\n",
    "example": "Input: 3 ↵ 1 2 ↵ 3 ↵ 4 5  →  Output: 1 2 3 4 5",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
    },
    "checks": [
      {
        "expr": "flatten([[1,2],[3],[4,5]])",
        "expected": "[1, 2, 3, 4, 5]"
      },
      {
        "expr": "flatten([[],[1],[]])",
        "expected": "[1]"
      },
      {
        "expr": "flatten([])",
        "expected": "[]"
      },
      {
        "expr": "flatten([[1],[2,3],[]])",
        "expected": "[1,2,3]"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_for_loops.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "3\n1 2\n3\n4 5\n",
        "expected": "1 2 3 4 5"
      },
      {
        "input": "2\n\n1 2\n",
        "expected": "1 2"
      },
      {
        "input": "0\n",
        "expected": ""
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
      "en": "Read integer n and print True if it is prime, otherwise False. Values below 2 are not prime.",
      "ja": "整数 n を読み取り、素数なら True、それ以外は False を表示してください。2未満は素数ではありません。"
    },
    "starter": "# Read n and check divisors using a loop.\n",
    "example": "Input: 29  →  Output: True",
    "hint": {
      "en": "Write regular Python statements. Use input() for the provided data and print() for the answer. No def is needed.",
      "ja": "通常の Python の文を記述してください。input() で値を読み、print() で答えを表示します。def は必要ありません。"
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
      },
      {
        "expr": "is_prime(0)",
        "expected": "False"
      },
      {
        "expr": "is_prime(-11)",
        "expected": "False"
      },
      {
        "expr": "is_prime(4)",
        "expected": "False"
      },
      {
        "expr": "is_prime(97)",
        "expected": "True"
      },
      {
        "expr": "is_prime(49)",
        "expected": "False"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_for_loops.asp",
    "mode": "program",
    "programTests": [
      {
        "input": "2\n",
        "expected": "True"
      },
      {
        "input": "29\n",
        "expected": "True"
      },
      {
        "input": "1\n",
        "expected": "False"
      },
      {
        "input": "21\n",
        "expected": "False"
      },
      {
        "input": "97\n",
        "expected": "True"
      },
      {
        "input": "49\n",
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
      },
      {
        "expr": "factorial(1)",
        "expected": "1"
      },
      {
        "expr": "factorial(10)",
        "expected": "3628800"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_functions.asp"
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
      },
      {
        "expr": "greet_person('Yuki','こんにちは')",
        "expected": "'こんにちは, Yuki!'"
      },
      {
        "expr": "greet_person('','Hi')",
        "expected": "'Hi, !'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_arguments.asp"
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
      },
      {
        "expr": "stats(5)",
        "expected": "(5,5,5)"
      },
      {
        "expr": "stats(-5,-1,-3)",
        "expected": "(-5,-1,-9)"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_args_kwargs.asp"
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
      },
      {
        "expr": "build_profile(active=True,score=0)",
        "expected": "{'active':True,'score':0}"
      },
      {
        "expr": "build_profile(a=None)",
        "expected": "{'a':None}"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_args_kwargs.asp"
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
      },
      {
        "expr": "recursive_sum([5])",
        "expected": "5"
      },
      {
        "expr": "recursive_sum([-10,5,1])",
        "expected": "-4"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_recursion.asp"
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
      },
      {
        "expr": "sort_by_second([('x',-1),('y',0)])",
        "expected": "[('x',-1),('y',0)]"
      },
      {
        "expr": "sort_by_second([('a',2),('b',1)])",
        "expected": "[('b',1),('a',2)]"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_lambda.asp"
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
      },
      {
        "expr": "apply_operation(-1,5,'+')",
        "expected": "4"
      },
      {
        "expr": "apply_operation(0,9,'*')",
        "expected": "0"
      },
      {
        "expr": "apply_operation(-2,0,'max')",
        "expected": "0"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_lambda.asp"
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
      },
      {
        "expr": "make_multiplier(0)(10)",
        "expected": "0"
      },
      {
        "expr": "make_multiplier(5)(-2)",
        "expected": "-10"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_scope.asp"
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
      },
      {
        "expr": "positive_numbers([])",
        "expected": "[]"
      },
      {
        "expr": "positive_numbers([0,1,0,2])",
        "expected": "[1,2]"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_lambda.asp"
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
      },
      {
        "expr": "Student('Yuki',5).passed()",
        "expected": "True"
      },
      {
        "expr": "Student('Ken',0).score",
        "expected": "0"
      },
      {
        "expr": "Student('A',4.99).passed()",
        "expected": "False"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_classes.asp"
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
      },
      {
        "expr": "Rectangle(0,2).area()",
        "expected": "0"
      },
      {
        "expr": "Rectangle(2.5,3).perimeter()",
        "expected": "11.0"
      },
      {
        "expr": "Rectangle(2,4).width",
        "expected": "2"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_classes.asp"
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
      },
      {
        "expr": "isinstance(Animal(),Animal)",
        "expected": "True"
      },
      {
        "expr": "issubclass(Dog, Animal)",
        "expected": "True"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_inheritance.asp"
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
      },
      {
        "expr": "Cat().speak()",
        "expected": "'Meow'"
      },
      {
        "expr": "Dog().speak()",
        "expected": "'Woof'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_polymorphism.asp"
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
      },
      {
        "expr": "list(Countdown(5))",
        "expected": "[5,4,3,2,1]"
      },
      {
        "expr": "iter(Countdown(2)) is not None",
        "expected": "True"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_iterators.asp"
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
      },
      {
        "expr": "circle_area(0)",
        "expected": "0.0"
      },
      {
        "expr": "circle_area(3)",
        "expected": "28.27"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_math.asp"
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
      },
      {
        "expr": "days_between('2024-02-28','2024-03-01')",
        "expected": "2"
      },
      {
        "expr": "days_between('2026-01-01','2026-01-01')",
        "expected": "0"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_datetime.asp"
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
      },
      {
        "expr": "json_field('{\"a\":0,\"b\":false}','b')",
        "expected": "False"
      },
      {
        "expr": "json_field('{\"x\":null}','x')",
        "expected": "None"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_json.asp"
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
      },
      {
        "expr": "is_simple_email('a@b.co')",
        "expected": "True"
      },
      {
        "expr": "is_simple_email('abc')",
        "expected": "False"
      },
      {
        "expr": "is_simple_email('a@@b.com')",
        "expected": "False"
      },
      {
        "expr": "is_simple_email('a@b.')",
        "expected": "False"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_regex.asp"
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
      },
      {
        "expr": "safe_divide(-6,3)",
        "expected": "-2.0"
      },
      {
        "expr": "safe_divide(0,3)",
        "expected": "0.0"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_try_except.asp"
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
      },
      {
        "expr": "format_price('Item',0)",
        "expected": "'Item: 0.00'"
      },
      {
        "expr": "format_price('PC',1234567.891)",
        "expected": "'PC: 1,234,567.89'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_string_formatting.asp"
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
      },
      {
        "expr": "parse_age('-5')",
        "expected": "-5"
      },
      {
        "expr": "parse_age(' 0 ')",
        "expected": "0"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_user_input.asp"
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
      },
      {
        "expr": "value_or_default(False,True)",
        "expected": "False"
      },
      {
        "expr": "value_or_default([],['default'])",
        "expected": "[]"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_none.asp"
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
      },
      {
        "expr": "write_and_read('/tmp/pythonquiz_3.txt','')",
        "expected": "''"
      },
      {
        "expr": "write_and_read('/tmp/pythonquiz_4.txt','日本語')",
        "expected": "'日本語'"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_file_handling.asp"
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
      },
      {
        "expr": "list(even_numbers(0))",
        "expected": "[0]"
      },
      {
        "expr": "list(even_numbers(5))",
        "expected": "[0,2,4]"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_generators.asp"
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
      },
      {
        "expr": "add(0,0)",
        "expected": "0"
      },
      {
        "expr": "add(5,-7)",
        "expected": "-4"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_decorators.asp"
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
      },
      {
        "expr": "is_palindrome('')",
        "expected": "True"
      },
      {
        "expr": "is_palindrome('RaceCar')",
        "expected": "True"
      },
      {
        "expr": "is_palindrome('hello!')",
        "expected": "False"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_strings.asp"
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
      },
      {
        "expr": "analyze_numbers([-1])",
        "expected": "{'count':1,'min':-1,'max':-1,'sum':-1,'average':-1.0}"
      },
      {
        "expr": "analyze_numbers([0,0])",
        "expected": "{'count':2,'min':0,'max':0,'sum':0,'average':0.0}"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_lists.asp"
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
      },
      {
        "expr": "cart_total({},{},0)",
        "expected": "0.0"
      },
      {
        "expr": "cart_total({'a':1},{'a':12.5},20)",
        "expected": "10.0"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_dictionaries.asp"
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
      },
      {
        "expr": "strong_password('Abcdef1!')",
        "expected": "True"
      },
      {
        "expr": "strong_password('Abcdef1')",
        "expected": "False"
      },
      {
        "expr": "strong_password('abcdefgh1!')",
        "expected": "False"
      },
      {
        "expr": "strong_password('ABCDEFGH1!')",
        "expected": "False"
      }
    ],
    "lessonUrl": "https://www.w3schools.com/python/python_strings.asp"
  }
];
