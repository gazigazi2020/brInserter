import $ from "jquery";

export let lineAdjust = (text) => {
  return text.replace(/\r?\n/g, "");
};

export let insertAfter = (text, insertText, beforeText) => {
  let splitedText = text.split(beforeText);
  let value = "";
  for (let i = 0; i < splitedText.length; i++) {
    if (i == splitedText.length - 1) {
      value += splitedText[i];
      break;
    }
    value += splitedText[i] + beforeText + insertText;
  }
  return value;
};

export let insertBefore = (text, insertText, afterText) => {
  let splitedText = text.split(afterText);
  let value = "";
  for (let i = 0; i < splitedText.length; i++) {
    if (i == splitedText.length - 1) {
      value += splitedText[i];
      break;
    }
    value += splitedText[i] + insertText + afterText;
  }
  return value;
};

export let checkText = (text, check) => {
  let value = [];
  for (let i = 0; i < check.length; i++) {
    if (!text.includes(check[i])) {
      value.push(check[i]);
    }
  }
  return value;
};

$("#run").on("click", (e) => {
  const text = $("#text").val();
  const text2 = $("#text2").val();
  let output = "";
  switch ($("#functions").value) {
    case "brInserter":
      output = _brInserter(text);
    case "deleteLine":
      output = _deleteLine(text);
    case "checkText":
      checkText = _checkText(text, text2);
    default:
      output = _brInserter(text);
  }
  $("#outputArea").text(output);
});

export let _brInserter = (text) => {
  let output = lineAdjust(text);
  output = insertAfter(output, "<br>", "。");
  return output;
};

export let _deleteLine = (text) => {
  return lineAdjust(text);
};

export let _checkText = (text, check) => {
  let checkList = check.split(" ");
  let outputList = checkText(text, checkList);
  var output = "";
  for (let i = 0; i < outputList; i++) {
    output += outputList[i] + " ";
  }
  return output;
};
