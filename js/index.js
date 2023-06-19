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
      if (typeof jsonObject[key] === 'string') {
        return `<br /><div class='form-element'><label class='form-label'>${key}: &nbsp;</label><input class='form-input-text' type='text' value=${jsonObject[key]} /><br /></div>`;
      } else if (typeof jsonObject[key] === 'object') {
        return createSection(key, jsonObject[key]);
      }
    })
    .join('');
}

function createSection(key, object) {
  let section = `<fieldset><legend>${key}</legend>`;
  let sectionBody = Object.keys(object)
    .map((key) => {
      return `<br /><div class='form-element'><label class='form-label'>${key}: &nbsp;</label><input class='form-input-text' type='text' value=${object[key]} /><br /></div>`;
    })
    .join('');
  section = `${section}${sectionBody}</fieldset>`;
  return section;
}

function buildForm(key, value) {
  if (typeof value === 'string') {
  }
}
