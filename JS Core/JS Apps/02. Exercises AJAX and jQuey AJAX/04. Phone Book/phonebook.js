function loadContacts() {
    $("ul").empty();
    let url = `https://phoneboook-87898.firebaseio.com/.json`;
    $.ajax({
        method: 'GET',
        url,
        success: onLoadSuccess
    });

    function onLoadSuccess(data) {
        Object.entries(data).forEach(element => {
            if(element[1] != null) {
                let id = element[0];
                let $phonebook = $('#phonebook');
                let deleteButton = $('<button>Delete</button>').on("click", deleteLi);
                let $li = $(`<li id="${id}"></li>`);
                $li.text(`${element[1].Person}: ${element[1].Phone} `);
                $li.append(deleteButton);
                $phonebook.append($li);
            }
        });

        function deleteLi() {
            let parent = $(this).parent();
            let id = parent.attr('id');
            let url = `https://phoneboook-87898.firebaseio.com/${id}.json`;
            $.ajax({
                url,
                type: 'DELETE'
            });
            parent.remove();
        }
        
    }
}

function createContact() {
    let personName = $('#person').val();
    let personPhone = $('#phone').val();
    let url = `https://phoneboook-87898.firebaseio.com/.json`;
        $.ajax({
            method: "POST",
            url,
            data: JSON.stringify({
                Person: personName,
                Phone: personPhone
            }),
        });
}