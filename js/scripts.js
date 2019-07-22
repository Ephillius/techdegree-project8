const directory = document.getElementById('directory');

// -----------------------------
//  FETCH API
// -----------------------------

$.ajax({
	url: 'https://randomuser.me/api/?results=12',
	dataType: 'json',
	success: function(data) {
		const users = data.results;
		console.log(users);

		$.each(users, function(index, value) {
			const name = users[index].name.first + ' ' + users[index].name.last;
			const pic = users[index].picture.large;
			const email = users.email;
			const city = users[index].location.city;
			const phone = users.phone;
			const address = users[index].location.street + ' ' + users[index].location.state + ' ' + users[index].location.city + ' ' + users[index].location.postcode;
			const birthday = users[index].dob.date;

			const html = 
			`
				<div class="card">
					<img src="${pic}" alt>
					<h3 class="name">${name}</h3>
				</div>
			`;
			directory.innerHTML = html;
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