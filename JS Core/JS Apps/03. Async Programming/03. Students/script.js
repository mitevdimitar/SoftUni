function manipulateStudents() {
    const baseUrl = 'https://baas.kinvey.com/apdata/';
    const appKey = 'kid_Sy2_9X2pr';
    const user = 'guest';
    const pass = 'guest';
    const headers = {
    'Authorization': `Basic ${btoa(user + ':' + pass)}`,
    'Content-Type': 'application/json'
    }
    const endpoint = 'biggestCatches';
    
    async function loadData() {
        let data = await $.ajax({
            url: baseUrl + appKey + '/' + endpoint,
            headers,
            method: 'GET'
            });
            console.log(data);
    }
    
    loadData();
    // contentType: 'application/json'
}