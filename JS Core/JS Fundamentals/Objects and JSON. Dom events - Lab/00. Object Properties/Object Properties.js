 <script>
   document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
   });
   let obj = {};
   function addProperty() {
    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;
	  let result = document.getElementById("result");
	  obj[key] = value;
	  result.textContent = JSON.stringify(obj);
   }
 </script>
