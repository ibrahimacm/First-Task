let map;
var flag = true;
function initMap() {
  
  const myLatLng = { lat: 34.03264123581623, lng: -118.48646245169223 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Work",
  });
}

function pass(){
  var name = document.getElementById("form-name").value;
  var email = document.getElementById("form-email").value;
  var title = document.getElementById("form-title").value;
  var comment = document.getElementById("form-textArea").value;
  var country = document.getElementById("country");
  var city = document.getElementById("city");
  var dis = document.getElementById("district");
  
  if (country.value=="usa"){
    country = country.options[country.selectedIndex].text;
    city = document.getElementById("form-city").value;
    dis = document.getElementById("form-district").value;
  } else if (country.value=="ksa"){
      country = country.options[country.selectedIndex].text;
      city = city.options[city.selectedIndex].text;
      dis = dis.options[dis.selectedIndex].text;
  }
  
  localStorage.setItem("namee", name);
  localStorage.setItem("emaill", email);
  localStorage.setItem("titlee", title);
  localStorage.setItem("commentt", comment);
  localStorage.setItem("country", country);
  localStorage.setItem("city", city);
  localStorage.setItem("dis", dis);
  return false;
}

    
function populate(country, city, dis){
    var country = document.getElementById(country);
    var city = document.getElementById(city);
    var dis = document.getElementById(dis);
    if(country != null)
    city.innerHTML = "";
    if(dis != null)
    dis.innerHTML = "";

    if(country != null){
    if(country.value == "ksa"){
      document.getElementById("city").disabled = false;
      var optionarray = ["|--select city--" , "riyadh|Riyadh" , "dammam|Dammam"];
      document.getElementById("city").style.display = "block";
      document.getElementById("district").style.display = "block";
      document.getElementById("form-city").style.display = "none";
      document.getElementById("form-district").style.display = "none";
      document.getElementById("form-city").required = false;
      document.getElementById("form-district").required = false;
      document.getElementById("city").required = true;
      document.getElementById("district").required = true;
    } else if (country.value == "usa"){
      document.getElementById("city").style.display = "none";
      document.getElementById("district").style.display = "none";
      document.getElementById("form-city").style.display = "block";
      document.getElementById("form-district").style.display = "block";
      document.getElementById("form-city").required = true;
      document.getElementById("form-district").required = true;
      document.getElementById("city").required = false;
      document.getElementById("district").required = false;
    }
    else if (country.options[country.selectedIndex].text == "--select country--"){
      document.getElementById("city").style.display = "block";
      document.getElementById("district").style.display = "block";
      document.getElementById("form-city").style.display = "none";
      document.getElementById("form-district").style.display = "none";
      var optionarray = ["selectCity|--Country not selected--", "selectDis|--City not selected--"];
      document.getElementById("district").disabled = true;
      document.getElementById("city").disabled = true;
      document.getElementById("form-city").required = false;
      document.getElementById("form-district").required = false;
      document.getElementById("city").required = true;
      document.getElementById("district").required = true;
     
    }
  }

  
    if (city.value == "riyadh") {
      document.getElementById("district").disabled = false;
      var optionarray = ["|--select district--", "taawun|Taa'wun" , "khaleej|Khaleej"];
    }
    else if (city.value == "dammam") {
      document.getElementById("district").disabled = false;
      var optionarray = ["|--select district--", "waha|Waha"];
    }
    

    for (var option in optionarray){
      var pair = optionarray[option].split("|");
      var newOption = document.createElement("option");
      newOption.value = pair[0];
      newOption.innerHTML = pair[1];
      
      if(country != null){
      city.options.add(newOption);
      if(country.options[country.selectedIndex].text == "--select country--" && newOption.value == "selectDis"){
        dis.options.add(newOption);
      }
      }
      else {
        dis.options.add(newOption);
      }
    }
}

  function show(){
    var header = document.getElementById("header");
    header.classList.toggle('active');
    var form = document.getElementById("form");
    form.classList.toggle("active");
    var footer = document.getElementById("footer");
    footer.classList.toggle("active");
    var pop = document.getElementById("popup");
    pop.classList.toggle("active");
    

    if(flag){
    var name = document.getElementById("form-name").value;
  var email = document.getElementById("form-email").value;
  var title = document.getElementById("form-title").value;
  var comment = document.getElementById("form-textArea").value;
  var country = document.getElementById("country");
  var city = document.getElementById("city");
  var dis = document.getElementById("district");
  
  if (country.value=="usa"){
    country = country.options[country.selectedIndex].text;
    city = document.getElementById("form-city").value;
    dis = document.getElementById("form-district").value;
  } else{
      country = country.options[country.selectedIndex].text;
      city = city.options[city.selectedIndex].text;
      dis = dis.options[dis.selectedIndex].text;
  }
  

    console.log(name);
    console.log(email);
    console.log(title);
    console.log(comment);
    console.log(country);
    console.log(city);
    console.log(dis);
    flag = false;
    }
    else{
      flag = true;
      location.reload();
    }

    
}

function scrolldown(){
  document.documentElement.scrollTop +=100;
}

$(document).ready(function(){

  // jQuery methods go here...
  

});

