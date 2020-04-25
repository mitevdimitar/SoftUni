function loadRepos() {
    let req = new XMLHttpRequest();
    let url = 'https://api.github.com/users/testnakov/repos';
    req.open('get', url);
    req.onreadystatechange = function() {
       if (req.readyState == '4' && req.status == '200') {
            let text = this.responseText;
            let resultDiv = document.getElementById('res');
            let p = document.createElement('p');
            p.textContent = text;
            resultDiv.appendChild(p);
       }
    };
    req.send();
}