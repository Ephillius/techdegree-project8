window.onload = function () {

	const overlay = document.getElementById('overlay');
	overlay.style.display = "none";
	const modalCard = document.querySelector('.modal_card');

	const directory = document.getElementById('directory');
	const card = document.getElementsByClassName('card');


	// -----------------------------
	//  FETCH API
	// -----------------------------

	$.ajax({
		url: 'https://randomuser.me/api/?results=12&nat=gb',
		dataType: 'json',
		success: function(data) {
			const users = data.results;
			console.log(users);


			// -----------------------------
			//  BUILD FUNCTION
			// -----------------------------

			$(users).each(function(index, value) {
				let name = users[index].name.first;
						name += ' ';
						name += users[index].name.last;
				const pic = users[index].picture.large;
				const email = users[index].email;
				const city = users[index].location.city;

				const html = 
				`
					<div class="card">
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


			// -----------------------------
			//  MODAL
			// -----------------------------		

			$(card && users).each(function(index) {
				card[index].addEventListener('click', () => {
					console.log(`Card nº${index+1} clicked.`);

					let name = users[index].name.first;
							name += ' ';
							name += users[index].name.last;
					const pic = users[index].picture.large;
					const email = users[index].email;
					const city = users[index].location.city;
					const phone = users[index].phone;
					let address = users[index].location.street;
							address += ' - ';
							address += users[index].location.state;
							address += ' ';
							address += users[index].location.city;
							address += ', ';
							address += users[index].location.postcode;
					const birthday = users[index].dob.date;
					const html = 
					`
						<i id="close" class="fa fa-close"></i>
						<img class="photo" src="${pic}" alt>
						<div class="text">
							<h3 class="name">${name}</h3>
							<p class="email">${email}</p>
							<p class="city">${city}</p>
							<hr>
							<p class="phone">${phone}</p>
							<p class="address">${address}</p>
							<p class="birthday">${birthday}</p>
						</div>
					`;
					overlay.style.display = ''; 
					modalCard.innerHTML = html;
				});


				// -----------------------------
				//  CLOSE MODAL
				// -----------------------------				

				overlay.addEventListener('click', e => {
					if(e.target.id === "overlay" || e.target.id === "close") {
						overlay.style.display = "none";
					}
				});


				// -----------------------------
				//  SEARCH USER
				// -----------------------------
				
				let name = users[index].name.first;
					name += ' ';
					name += users[index].name.last;

				$('input').keyup(() => {
					const value = $(this).val();
					const regExp = new RegExp(value, 'i');
					$('.card').each(() => {
						const match = regexp.test($(this).data(''));
					});
				});
			});
		}
	});
};
