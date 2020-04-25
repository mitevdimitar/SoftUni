function solve() {
    let nextId = '';
    let currentId = '';
    let infoBox = $('#info span');
    let departButton = $('#depart');
    let arriveButton = $('#arrive');
    function depart() {
        let baseUrl = 'https://judgetests.firebaseio.com/schedule/';
        let url;
        if (nextId == '') {
            url = 'https://judgetests.firebaseio.com/schedule/depot.json';
        } else {
            url = baseUrl + nextId + '.json';
        }
        $.ajax({
            method: 'GET',
            url,
            success: nextStopReceived,
            error: errorHandle
        });

        function nextStopReceived(data) {
            nextId = data.next;
            currentId = data.name;
            infoBox.text(`Next stop ${currentId}`);
            departButton.prop('disabled', true);
            arriveButton.prop('disabled', false);
        }

        function errorHandle() {
            infoBox.text(`Error`);
        }
    }

    function arrive() {
        infoBox.text(`Arriving at ${currentId}`);
        departButton.prop('disabled', false);
        arriveButton.prop('disabled', true);
    }

    return {
      depart,
      arrive
    };
  }