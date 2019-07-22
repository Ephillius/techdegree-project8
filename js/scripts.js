const directory = document.getElementById('directory');

// -----------------------------
//  FETCH API
// -----------------------------

$.ajax({
	url: 'https://randomuser.me/api/?results=12&nat=gb',
	dataType: 'json',
	success: function(data) {
		const users = data.results;
		console.log(users);

		$.each(users, function(index, value) {
			const name = users[index].name.first + ' ' + users[index].name.last;
			const pic = users[index].picture.large;
			const email = users[index].email;
			const city = users[index].location.city;
			const phone = users[index].phone;
			const address = users[index].location.street + ' ' + users[index].location.state + ' ' + users[index].location.city + ' ' + users[index].location.postcode;
			const birthday = users[index].dob.date;

			const html = 
			`
				<div id="${index+1}" class="card">
					<img class="photo" src="${pic}" alt>
					<div class="text">
						<h3 class="name">${name}</h3>
						<p class="email">${email}</p>
						<p class="city">${city}</p>
					</div>
				</div>
			`;
			directory.innerHTML += html;
		});
	}
})

// -----------------------------
//  BUILD FUNCTIONS
// -----------------------------


// -----------------------------
//  MODAL
// -----------------------------


// -----------------------------
//  SEARCH USER
// -----------------------------