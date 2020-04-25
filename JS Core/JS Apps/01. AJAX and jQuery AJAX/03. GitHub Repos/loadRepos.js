function loadRepos() {
    $("ul").empty();
    let id = $('#username').val();
    let url = `https://api.github.com/users/${id}/repos`;
    let $repos = $('#repos');
    
    $.ajax({
        url,
        success: onLoadSuccess,
        error: () => console.log('error')
    });

    function onLoadSuccess(data) {
        data.forEach((r) => {
            let link = $('<a href="' + r.url + '">' + r.name + '</a>');
            let li = $('<li>');
            li.append(link);
            $repos.append(li);
        });
    }
}