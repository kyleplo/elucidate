import languages from "./languages";

function makeTags(cls){
  return "</span><span class=elucidate-" + cls + ">"
}

function resolveLanguageProperty(language, property){
  return property in languages[language] ? languages[language][property] : (languages[language].extend ? resolveLanguageProperty(languages[language].extend, property) : resolveLanguageProperty("default", property));
}

export default (code, languageName = "agnostic") => {
  const language = {
    strings: resolveLanguageProperty(languageName, "strings"),
    escape: resolveLanguageProperty(languageName, "escape"),
    symbols: resolveLanguageProperty(languageName, "symbols"),
    keywords: resolveLanguageProperty(languageName, "keywords"),
    singleLineComment: resolveLanguageProperty(languageName, "singleLineComment"),
    multiLineComment: resolveLanguageProperty(languageName, "multiLineComment")
  };
  var output = "";
  var i = 0;

  var multiLineComment = false;
  var stringBlock = null;
  var singleLineComment = false;
  var mayBeDefault = true;

  while(i < code.length){
    const next = code.slice(i, i + 20);
    const comment = multiLineComment || singleLineComment;
    const commentOrString = comment || stringBlock;

    if(!comment && language.strings && language.strings.find(e => next.startsWith(e)) && !stringBlock){
      stringBlock = language.strings.find(e => next.startsWith(e));
      mayBeDefault = false;
      output += makeTags("string") + stringBlock;
      i += stringBlock.length;
    }else if(!comment && stringBlock === language.strings.find(e => next.startsWith(e))){
      output += stringBlock;
      mayBeDefault = true;
      i += stringBlock.length;
      stringBlock = null;
    }else if(!comment && stringBlock && language.escape.find(e => next.startsWith(e) && next.slice(e.length).startsWith(stringBlock))){
      const escapeBlock = language.escape.find(e => next.startsWith(e)) + stringBlock;
      output += escapeBlock;
      i += escapeBlock.length;
    }else if(!commentOrString && language.multiLineComment && next.startsWith(language.multiLineComment[0])){
      multiLineComment = true;
      mayBeDefault = false;
      output += makeTags("comment") + language.multiLineComment[0];
      i += language.multiLineComment[0].length;
    }else if(multiLineComment && next.startsWith(language.multiLineComment[1])){
      multiLineComment = false;
      output += language.multiLineComment[1];
      mayBeDefault = true;
      i += language.multiLineComment[1].length;
    }else if(!commentOrString && language.singleLineComment && next.startsWith(language.singleLineComment)){
      singleLineComment = true;
      mayBeDefault = false;
      output += makeTags("comment") + language.singleLineComment;
      i += language.singleLineComment.length;
    }else if(singleLineComment && (code[i] === "\n" || code[i] === "\r")){
      singleLineComment = false;
      output += "<br>";
      mayBeDefault = true;
      i += 1;
    }else if(!commentOrString && language.symbols.find(e => next.toLowerCase().startsWith(e.toLowerCase()))){
      const symbolLength = language.symbols.find(e => next.toLowerCase().startsWith(e.toLowerCase())).length;
      output += makeTags("symbol") + next.slice(0, symbolLength);
      mayBeDefault = true;
      i += symbolLength;
    }else if(!commentOrString && language.keywords.find(e => next.toLowerCase().startsWith(e.toLowerCase()) && (!code[i + e.length] || code[i + e.length].toLowerCase() === code[i + e.length].toUpperCase())) && (i === 0 || code[i - 1].toLowerCase() === code[i - 1].toUpperCase())){
      const keywordLength = language.keywords.find(e => next.toLowerCase().startsWith(e.toLowerCase())).length;
      output += makeTags("keyword") + next.slice(0, keywordLength);
      mayBeDefault = true;
      i += keywordLength;
    }else if(!commentOrString && (!isNaN(parseFloat(next)) || !isNaN(parseInt(next)))){
      const numberLength = Math.max(parseFloat(next).toString().length, parseInt(next).toString().length);
      output += makeTags("number") + next.slice(0, numberLength);
      mayBeDefault = true;
      i += numberLength;
    }else if(!commentOrString && (code[i] === "\n" || code[i] === "\r")){
      output += "<br>";
      i += 1;
    }else{
      if(mayBeDefault && ((code[i] !== " " && code[i] !== "\t") || i === 0)){
        output += makeTags("default");
        mayBeDefault = false;
      }
      output += code[i].replace("<", "&lt;").replace(">", "&gt;").replace("\n", "\\&#8203;n").replace("\r", "\\&#8203;r");
      i += 1;
    }
  }

  return (output + "</span>").slice(7);
}