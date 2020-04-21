function toggle() {
    let extraText = $('#extra');
    let spanButton = $('span');
    if (spanButton.text() == 'More') {
        spanButton.text('Less');
        extraText.css('display', 'block');
    } else {
        spanButton.text('More');
        extraText.css('display', 'none');
    }
}