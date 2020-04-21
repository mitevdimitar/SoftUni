function addItem() {
    let text = $('#newItemText');
    let value = $('#newItemValue');
    let menu = $('#menu');
    let option = $('<option></option>');
    option.text(text.val());
    option.val(value.val());
    menu.append(option);
    text.val('');
    value.val('');
}