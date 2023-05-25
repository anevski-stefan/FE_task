let container1 = document.querySelector(".container1");
let container = document.querySelector(".container");
let rotate = document.querySelector(".rotate");
let save_btn = document.querySelector(".save-btn");
let cancel_btn = document.querySelector(".cancel-btn");
let first_name = document.querySelector(".f-name");
let second_name = document.querySelector(".s-name");
let office_location = document.querySelector(".office-location");
let first_name_input = document.querySelector(".first-name-input");
let second_name_input = document.querySelector(".second-name-input");
let office_location_input = document.querySelector(".office-location-input");
let image = document.querySelector(".image");
let image1 = document.querySelector(".image1");
let customAlert = document.querySelector(".custom-alert");


container1.style.display = "none";
customAlert.style.display="none";
image1.src = localStorage.getItem("imagesource")



function handleFileSelect(event) {
    const file = event.target.files[0]; 

    if (file) {
      const reader = new FileReader();

      reader.onload = function(event) {
        image.src = event.target.result;
        localStorage.setItem("imagesource", event.target.result);
      };

      reader.readAsDataURL(file);
    }
  }


if(localStorage.getItem("firstname") != null || localStorage.getItem("secondname") != null || localStorage.getItem("officelocation" != null)){
    first_name.textContent = localStorage.getItem("firstname")
    second_name.textContent = localStorage.getItem("lastname")
    office_location.textContent = localStorage.getItem("officelocation")
    image.src = localStorage.getItem("imagesource")
}

rotate.addEventListener("click", function(){
    first_name_input.value = "";
    second_name_input.value = "";
    office_location_input.value = "";

   container1.style.display="flex";
    container.style.display = "none";

    container1.classList.add("reverse-animation");

    
    setTimeout(function() {
        
        container1.classList.remove("reverse-animation");
    }, 1000); 
})

image.addEventListener("click", function() {
  const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', handleFileSelect);

    document.body.appendChild(fileInput);
    fileInput.click(); 
    document.body.removeChild(fileInput);
})

save_btn.addEventListener("click", function(){
    localStorage.setItem("firstname", first_name_input.value);
    localStorage.setItem("lastname", second_name_input.value);
    localStorage.setItem("officelocation", office_location_input.value);
    image1.src = localStorage.getItem("imagesource")

    if(first_name_input.value.length == 0 || second_name_input.value.length == 0 || office_location_input.value.length == 0){
        customAlert.style.display="block";
    } else {
        first_name.textContent = localStorage.getItem("firstname");
        second_name.textContent = localStorage.getItem("lastname");
        office_location.textContent = localStorage.getItem("officelocation");
        image1.src = localStorage.getItem("imagesource")
        container.style.display = "flex";
        container1.style.display = "none";
        customAlert.style.display="none";

        container.classList.add("reverse-animation");

    
    setTimeout(function() {
        
        container.classList.remove("reverse-animation");
    }, 1000); 
    }
})

cancel_btn.addEventListener("click", function(){
    container.style.display = "flex";
    container1.style.display = "none";
    customAlert.style.display="none";
})

