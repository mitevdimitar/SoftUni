$(() => {
    renderMonkeys();

    async function renderMonkeys() {
        let context = {
            monkeys
        }
        let monkeysHtml = await $.get('./monkeysTemplate.hbs');
        let template = Handlebars.compile(monkeysHtml);
        let renderedHtml = template(context);
        $('.monkeys').append(renderedHtml);
    }

})

function showInfo(id) {
    $(`#${id}`).toggle();
}