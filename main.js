// 1. Fetch your users data

// 2. Loop over the data


// 3. Display it in the `.customers` element
(function () {

  'use strict';

  function fetchUserData() {

    fetch('https://randomuser.me/api/?inc=name,email,location,phone,picture&noinfo')
      .then(function(response){
      return response.json()
      })

      .then(function(json){
        console.log("date", json)

        const profile = json.results[0].picture.large;
        console.log(profile);
        const nameFirst = json.results[0].name.first;
        console.log(nameFirst);
        const nameLast = json.results[0].name.last;
        console.log(nameLast);
        const email = json.results[0].email;
        console.log(email);
        const locationStreet = json.results[0].location.street;
        console.log(locationStreet);
        const locationCity = json.results[0].location.city;
        console.log(locationCity);
        const locationState = json.results[0].location.state;
        console.log(locationState);
        const locationPostalCode = json.results[0].location.postcode;
        console.log(locationPostalCode);
        const phone = json.results[0].phone;
        console.log(phone);

        const html = `
          <div id="customers">
            <div class="profile_container">
              <div>
                <img src= ${profile} alt="Profile Image Here">
              </div>
              <div class="text_container">
                <div class="name">
                  <p1>${nameFirst} ${nameLast}</p1>
                </div>
                <br>
                <div class="email">
                  <p>${email}</p>
                </div>
                <div class=location>
                  <p>${locationStreet}</p>
                  <p>${locationCity}, ${locationState}, ${locationPostalCode}</p>
                </div>
                <div class="phone">
                  <p>${phone}</p>
                </div>
              </div>
            </div>
          </div>
      `
        document.querySelector("#customers").insertAdjacentHTML('afterbegin', html)

      })
  }

  // Your Code Goes Here
  for (var i = 0; i < 12; i++){

  fetchUserData(i)

  }


})();


	// for (var i = 1; i <= 100; i++) {
	//   fetchPerson(i)
	// }
  // <div class="email">
  //   <a href="${json.results[0]}">${email}</a>
  // </div>
  // <ul class=location>
  //   <li href="${json.results[0]}">${location.street}</li>
  //   <li href="${json.results[0]}">${location.city, location.state, location.postcode}</li>
  // </ul>
  // <div class="phone">
  //   <a href="${json.results[0]}">${phone}</a>
  // </div>
