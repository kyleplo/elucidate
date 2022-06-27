export default {
  default: {
    strings: ["\"", "'"],
    escape: ["\\"],
    symbols: [],
    keywords: [],
    multiLineComment: null,
    singleLineComment: null
  },
  agnostic: {
    symbols: ["{", "}", "(", ")", ";", ":", "=", "+", "-", "/", "*", "[", "]", "&", "|", "!", "<", ">", "^", "%", ".", ",", "$", "#", "?"],
    keywords: ["and","or","not","important","break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var","arguments","await","catch","class","debugger","delete","do","export","extends","false","finally","from","function","in","instanceof","let","new","null","static","super","this","throw","true","try","typeof","void","while","with","yield","loop","by","unless","when","yes","no","on","off","each","label","dynamic","final","internal","native","override","private","protected","public","parameter","get","implements","namespace","set","xml","use","include","doctype","html","abstract","as","callable","clone","declare","die","echo","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","eval","exit","fn","foreach","global","include_once","insteadof","isset","list","match","print","readonly","require","require_once","trait","unset","xor","end","local","nil","repeat","then","until","begin","next","alias","elsif","undef","ensure","redo","rescue","retry","def","self","file","defined","module","line","exec","assert","pass","raise","del","elif","is","except","lambda","auto","long","enum","register","typedef","extern","union","char","float","short","unsigned","signed","sizeof","volatile","int","packed","double","base","bool","byte","checked","decimal","delegate","event","explicit","fixed","implicit","lock","object","operator","out","params","ref","sbyte","sealed","stackalloc","string","uint","ulong","unchecked","unsafe","ushort","using","virtual","add","ascending","args","async","descending","equals","group","init","into","join","managed","nameof","nint","notnull","nuint","orderby","partial","record","remove","unmanaged","value","where","do-while","inline","noexcept","friend","alignas","alignof","and_eq","asm","bitand","bitor","char8_t","char16_t","char32_t","compl","concept","consteval","constexpr","constinit","const_cast","co_await","co_return","co_yield","decltype","dynamic_cast","mutable","not_eq","nullptr","or_eq","reflexpr","reinterpret_cast","requires","static_assert","static_cast","template","thread_local","typeid","typename","wchar_t","xor_eq","boolean","strictfp","synchronized","throws","transient"],
    multiLineComment: ["/*", "*/"],
    singleLineComment: "//"
  },
  css: {
    symbols: ["{", "}", ":", "@", ";", ",", "(", ")", "!"],
    keywords: ["and", "or", "not", "important"],
    multiLineComment: ["/*", "*/"]
  },
  scss: {
    extend: "css",
    symbols: ["{", "}", ":", "@", ";", ",", "(", ")", "&", "$", "!"]
  },
  sass: {
    extend: "scss"
  },
  csv: {
    symbols: [","],
    strings: ["\""],
    escape: ["\"\""]
  },
  tsv: {
    extend: "csv",
    symbols: ["\t"]
  },
  golang: {
    strings: ["\""],
    symbols: ["{", "}", "(", ")", ";", ":", "=", "+", "-", "/", "*", "[", "]", "&", "|", "!", "<", ">", "^", "%", ".", ",", "?"],
    keywords: ["break", "case", "chan", "const", "continue", "default", "defer", "else", "fallthrough", "for", "func", "go", "goto", "if", "import", "interface", "map", "package", "range", "return", "select", "struct", "switch", "type", "var"],
    singleLineComment: "//",
    multiLineComment: ["/*", "*/"]
  },
  go: {
    extend: "golang"
  },
  json: {
    symbols: ["{", "}", "[", "]"]
  },
  javascript: {
    strings: ["\"", "'", "`"],
    symbols: ["{", "}", "(", ")", ";", ":", "=", "+", "-", "/", "*", "[", "]", "&", "|", "!", "<", ">", "^", "%", ".", ",", "?"],
    keywords: ["arguments", "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "from", "function", "if", "import", "in", "instanceof", "let", "new", "null", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"],
    singleLineComment: "//",
    multiLineComment: ["/*", "*/"]
  },
  js: {
    extend: "javascript"
  },
  jsx: {
    extend: "javascript"
  },
  coffeescript: {
    extend: "javascript",
    keywords: ["loop", "by", "unless", "when", "and", "or", "not", "yes", "no", "on", "off", "defer", "arguments", "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "from", "function", "if", "import", "in", "instanceof", "let", "new", "null", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"]
  },
  typescript: {
    extend: "javascript",
    keywords: ["interface", "type", "arguments", "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "from", "function", "if", "import", "in", "instanceof", "let", "new", "null", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"]
  },
  ts: {
    extend: "typescript"
  },
  actionscript: {
    extends: "javascript",
    keywords: ["each", "label", "dynamic", "final", "internal", "native", "override", "private", "protected", "public", "parameter", "get", "implements", "interface", "namespace", "package", "set", "xml", "use", "include", "arguments", "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "from", "function", "if", "import", "in", "instanceof", "let", "new", "null", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"]
  },
  xml: {
    symbols: ["<", ">", "!", "=", "/", "?"],
    keywords: ["doctype"],
    multiLineComment: ["<!--", "-->"]
  },
  html: {
    extend: "xml",
    symbols: ["<", ">", "!", "=", "/"],
  },
  htm: {
    extend: "html"
  },
  php: {
    extend: "html",
    symbols: ["<", ">", "!", "=", "/", "?", "$", "(", ")", "{", "}", "(", ")", "+", "-", "/", "*", "=", "%", "&", "|", "!", ".", ",", "?"],
    keywords: ["doctype", "html", "abstract", "and", "as", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "die", "do", "echo", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "eval", "exit", "extends", "final", "finally", "fn", "for", "foreach", "function", "global", "goto", "if", "implements", "include", "include_once", "instanceof", "insteadof", "interface", "isset", "list", "match", "namespace", "new", "or", "print", "private", "protected", "public", "readonly", "require", "require_once", "return", "static", "switch", "throw", "trait", "try", "unset", "use", "var", "while", "xor", "yield"]
  },
  markdown: {
    strings: ["`"],
    symbols: ["#", "*", "~", "(", ")", "[", "]", "!", "_", "|"]
  },
  md: {
    extend: "markdown"
  },
  lua: {
    keywords: ["and", "break", "do", "else", "elseif", "end", "false", "for", "function", "if", "in", "local", "nil", "not", "or", "repeat", "return", "then", "true", "until", "while"],
    symbols: ["{", "}", "(", ")", ";", ":", "=", "+", "-", "/", "*", "[", "]", "&", "|", "!", "<", ">", "^", "%", ".", ",", "?"],
    singleLineComment: "--",
    multiLineComment: ["--[", "]"]
  },
  ruby: {
    keywords: ["begin", "do", "next", "then", "end", "else", "nil", "true", "alias", "elsif", "not", "undef", "and", "end", "or", "unless", "begin", "ensure", "redo", "until", "break", "false", "rescue", "when", "case", "for", "retry", "while", "class", "if", "return", "while", "def", "in", "self", "file", "defined", "module", "super", "line"],
    symbols: ["{", "}", "(", ")", ";", ":", "=", "+", "-", "/", "*", "[", "]", "&", "|", "!", "<", ">", "^", "%", ".", ",", "?"],
    singleLineComment: "#",
    multiLineComment: ["=begin", "=end"]
  },
  python: {
    keywords: ["and", "exec", "not", "assert", "finally", "or", "break", "for", "pass", "class", "from", "print", "continue", "global", "raise", "def", "if", "return", "del", "import", "try", "elif", "in", "while", "else", "is", "with", "except", "lambda", "yield"],
    symbols: ["{", "}", "(", ")", ";", ":", "=", "+", "-", "/", "*", "[", "]", "&", "|", "~", "!", "<", ">", "^", "%", ".", ",", "?"],
    singleLineComment: "#"
  },
  py: {
    extend: "python"
  },
  c: {
    keywords: ["auto", "else", "long", "switch", "break", "enum", "register", "typedef", "case", "extern", "return", "union", "char", "float", "short", "unsigned", "const", "for", "signed", "void", "continue", "goto", "sizeof", "volatile", "default", "if", "static", "while", "do", "int", "struct", "packed", "double"],
    symbols: ["{", "}", "(", ")", ";", ":", "=", "+", "-", "/", "*", "[", "]", "&", "|", "~", "!", "<", ">", "^", "%", ".", ",", "?"],
    multiLineComment: ["/*", "*/"]
  },
  "c#": {
    extend: "c",
    keywords: ["abstract", "as", "base", "bool", "break", "byte", "case", "catch", "char", "checked", "class", "const", "continue", "decimal", "default", "delegate", "do", "double", "else", "enum", "event", "explicit", "extern", "false", "finally", "fixed", "float", "for", "foreach", "goto", "if", "implicit", "in", "int", "interface", "internal", "is", "lock", "long", "namespace", "new", "null", "object", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "ref", "return", "sbyte", "sealed", "short", "sizeof", "stackalloc", "static", "string", "struct", "switch", "this", "throw", "true", "try", "typeof", "uint", "ulong", "unchecked", "unsafe", "ushort", "using", "virtual", "void", "volatile", "while", "add", "and", "alias", "ascending", "args", "async", "await", "by", "descending", "dynamic", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "managed", "nameof", "nint", "not", "notnull", "nuint", "on", "or", "orderby", "partial", "record", "remove", "select", "set", "unmanaged", "value", "var", "when", "where", "with", "yield"]
  },
  csharp: {
    extend: "c#"
  },
  cs: {
    extend: "c#"
  },
  "c++": {
    extend: "c",
    keywords: ["for","do-while","inline","noexcept","throw","try","catch","const","volatile","typedef","new","delete","this","friend","override","final","alignas","alignof","and","and_eq","asm","auto","bitand","bitor","bool","break","case","catch","char","char8_t","char16_t","char32_t","class","compl","concept","const","consteval","constexpr","constinit","const_cast","continue","co_await","co_return","co_yield","decltype","default","delete","do","double","dynamic_cast","else","enum","explicit","export","extern","false","float","for","friend","goto","if","inline","int","long","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","private","protected","public","reflexpr","register","reinterpret_cast","requires","return","short","signed","sizeof","static","static_assert","static_cast","struct","switch","template","this","thread_local","throw","true","try","typedef","typeid","typename","union","unsigned","using","virtual","void","volatile","wchar_t","while","xor","xor_eq","and","bitor","or","xor","compl","bitand","and_eq","or_eq","xor_eq","not","not_eq","import","module","export","import","module"]
  },
  cpp: {
    extend: "c++"
  },
  java: {
    keywords: ["abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "default", "do", "double", "else", "enum", "extends", "final", "finally", "float", "for", "goto", "if", "implements", "import", "instanceof", "int", "interface", "long", "native", "new", "package", "private", "protected", "public", "return", "short", "static", "strictfp", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile", "while"],
    symbols: ["{", "}", "(", ")", ";", ":", "=", "+", "-", "/", "*", "[", "]", "&", "|", "!", "<", ">", "^", "%", ".", ",", "?"],
    singleLineComment: "//",
    multiLineComment: ["/*", "*/"]
  },
  yaml: {
    symbols: [":", ","],
    singleLineComment: "#"
  },
  yml: {
    extend: "yaml"
  }
}