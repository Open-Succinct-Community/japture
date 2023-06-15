function beautifyJson() {
  let json = document.getElementById('json-input-textarea').value;
  if (json.length !== 0) {
    document.getElementById('json-input-textarea').value = JSON.stringify(
      JSON.parse(json),
      null,
      4
    );
  } else {
    return;
  }
}

function clearJson() {
  document.getElementById('json-input-textarea').value = '';
}

function convertToForm() {
  beautifyJson();
  let jsonObject = JSON.parse(
    document.getElementById('json-input-textarea').value
  );
  let formOutput = document.getElementById('form-output');
  formOutput.innerHTML = Object.keys(jsonObject)
    .map((key) => {
      return `<div class='form-element'><label class='form-label'>${key}: &nbsp;</label><input class='form-input-text' type='text' value=${jsonObject[key]} /><br /><br /></div>`;
    })
    .join('');
}
