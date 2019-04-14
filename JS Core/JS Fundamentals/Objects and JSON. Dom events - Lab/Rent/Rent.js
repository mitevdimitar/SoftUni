<script>
        document.getElementById("button").addEventListener("click", function(event){
        event.preventDefault()
        });
        function calculateRents() {
            let flats = document.getElementById('flats').value.split(', ').map(flatNumber => {return {'flat':flatNumber}});;
            let familyNames = document.getElementById('families').value.split(', ');
            let rents = document.getElementById('rents').value.split(', ');
            let result = document.getElementById('result');
           for (let i = 0; i < flats.length; i++) {
                let currentFlat = flats[i];
                currentFlat.familyName = familyNames[i];
                currentFlat.rent = rents[i];
           }
           let totalRent = 0;
            flats.forEach(x => {
                result.textContent += `In flat ${x.flat} family ${x.familyName} has to pay ${x.rent}.\n`;
                totalRent += Number(x.rent);
            });
            result.textContent += `Total rent paid: ${totalRent}`;
        }
    </script>
