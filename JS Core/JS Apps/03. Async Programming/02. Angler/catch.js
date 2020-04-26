function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/';
    const endpoint = 'biggestCatches';
    const userId = 'guest';
    const userPass = 'guest';
    const appKey = 'kid_Sy2_9X2pr';
    const headers = {
        'Authorization': `Basic ${btoa(userId + ':' + userPass)}`,
        'Content-Type': 'application/json'
    }

    $('.load').on('click', loadEntries);
    $('.add').on('click', addCatch);

    async function loadEntries() {
        let entries = await $.ajax({
            url: `${baseUrl}${appKey}/${endpoint}`,
            method: 'GET',
            headers
        });
        $('#catches').empty();
        for (let entry of entries) {
            let div = $(`
            <div class="catch" data-id="${entry._id}">
                <label>Angler</label>
                <input type="text" class="angler" value="${entry.angler}"/>
                <label>Weight</label>
                <input type="number" class="weight" value="${entry.weight}"/>
                <label>Species</label>
                <input type="text" class="species" value="${entry.species}"/>
                <label>Location</label>
                <input type="text" class="location" value="${entry.location}"/>
                <label>Bait</label>
                <input type="text" class="bait" value="${entry.bait}"/>
                <label>Capture Time</label>
                <input type="number" class="captureTime" value="${entry.captureTime}"/>
            </div>
            `);
            let updateBtn = $(`<button class="update">Update</button>`);
            updateBtn.on('click', updateCatch);
            let deleteBtn = $(`<button class="delete">Delete</button>`);
            deleteBtn.on('click', deleteCatch);
            div.append(updateBtn);
            div.append(deleteBtn);
            $('#catches').append(div);
        }
    }

    async function addCatch() {
        let angler = $('#addForm .angler').val();
        let weight = +$('#addForm .weight').val();
        let species = $('#addForm .species').val();
        let location = $('#addForm .location').val();
        let bait = $('#addForm .bait').val();
        let captureTime = +$('#addForm .captureTime').val()
        let newCatch = createDataObject(angler, weight, species, location, bait, captureTime);
        $.ajax({
            method: 'POST',
            headers,
            url: `${baseUrl}${appKey}/${endpoint}`,
            data: JSON.stringify(newCatch)
        });
    }

    async function updateCatch() {
        let id = $(this).parent().data('id');
        let angler = $(this).parent().children('.angler').val();
        let weight = $(this).parent().children('.weight').val();
        let species = $(this).parent().children('.species').val();
        let location = $(this).parent().children('.location').val();
        let bait = $(this).parent().children('.bait').val();
        let captureTime = $(this).parent().children('.captureTime').val();
        let newCatch = createDataObject(angler, weight, species, location, bait, captureTime);
        
        try {
            await $.ajax({
                method: 'PUT',
                headers,
                url: `${baseUrl}${appKey}/${endpoint}/${id}`,
                data: JSON.stringify(newCatch)
            });
        } catch(err) {
            console.log(err);
        }
    }

    function deleteCatch() {
        let id = $(this).parent().data('id');
    }

    function createDataObject(angler, weight, species, location, bait, captureTime) {
        let dataObject = {
            'angler': angler,
            'weight': weight,
            'species': species,
            'location': location,
            'bait': bait,
            'captureTime': captureTime,
        };
        return dataObject;
    }

}