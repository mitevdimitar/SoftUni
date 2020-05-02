$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {

        let context = {
            cats
        }
    
        let templateHTML = await $.get("./catsTemplate.hbs");
        let template = Handlebars.compile(templateHTML);
        let renderedHTML = template(context);
    
        $('#allCats').append(renderedHTML);

        let btnCollection = document.getElementsByTagName("button");
        let btnArr = Array.from(btnCollection);
        for (let btn of btnArr) {
            btn.addEventListener("click", displayInfo);
        }
    
        function displayInfo() {
            $(this).closest('.card-block').children('div').toggle();
        }
    
    }
    
        
        
});
