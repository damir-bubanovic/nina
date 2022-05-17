<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<title>Bebine Stvarčice</title>

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
		<link rel="stylesheet" href="css/custom.css">

		<!-- Font Awesome -->
		<script src="https://kit.fontawesome.com/4a6ce72de0.js" crossorigin="anonymous"></script>
		<!-- Vue.js -->
		<script type="text/javascript" src="https://unpkg.com/vue@3"></script>
	</head>

	<body>

		<!-- Gallery -->
		<div id="gallery" class="gallery"></div>

		<div id="app">

			<!-- Gallery Teleport -->
			<Teleport to="#gallery">
				<div v-if="gallery" class="modal is-active">
					<div class="modal-background" @click="gallery = !gallery"></div>
						<div class="modal-content">
							<p class="image">
								<img :src="galleryImageSrc" alt="">
							</p>
						</div>
				  <button @click="gallery = !gallery" class="modal-close is-large" aria-label="close"></button>
				</div>
			</Teleport>

			<!-- Social Media Icons -->
			<transition	appear enter-active-class="animate__animated animate__slideInRight animate__slow animate__delay-2s">
				<div class="social-media-icons is-flex is-align-items-center">
					<ul>
						<li>
							<a href="">
								<span class="icon">
									<i class="fa-brands fa-facebook-square fa-2x"></i>
								</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="icon">
									<i class="fa-brands fa-instagram fa-2x"></i>
								</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="icon">
									<i class="fa-regular fa-envelope fa-2x"></i>
								</span>
							</a>
						</li>
					</ul>
				</div>
			</transition>

			<!-- Navbar -->
			<section class="section main-navbar">
				<transition	appear enter-active-class="animate__animated animate__slideInDown animate__slow">
					<nav class="navbar" role="navigation" aria-label="main navigation">
						<div class="navbar-brand">
							<a class="navbar-item" href="https://bulma.io">
								<img src="https://plchldr.co/i/100x50">
							</a>
						</div>

						<div id="navbar-top" class="navbar-menu">
							<div class="navbar-start">
								<a class="navbar-item">
									Bebine Stvarčice
								</a>
							</div>

							<div class="navbar-end">
								<div class="navbar-item">
									<a class="navbar-item">
										<span class="icon-text">
											<span class="icon">
												<i class="fa-regular fa-envelope"></i>
											</span>
											<span>bebinestvarcice@gmail.com?</span>
										</span>
									</a>
								</div>
							</div>
						</div>
					</nav>
				</transition>
			</section>

			<!-- Header -->
			<section class="section">
				<div class="box">
					<div class="columns">
						<div class="column is-half is-flex is-align-self-center">
							<div class="content pl-6">
								<h1 class="rubberBand">Bebine Stvarčice</h1>
								<p>Neki srcedrapajući tekst - akcija na kupovinu / kak volimo djecu / anegdota?</p>
							</div>
						</div>
						<div class="column is-half">			  		
							<figure class="image">
							  	<img src="images/header-large.png">
							</figure>
						</div>
					</div>
				</div>
			</section>

			<hr>


			<!-- Packages -->
			<section class="section">

				<div class="columns is-multiline">

					<div class="column is-one-quarter-fullhd is-one-third-widescreen is-half-tablet package" v-for="package in packages">			
						<!-- Card -->
						<div class="card">

							<div class="card-image" @click="galleryImage">
							<!-- <div class="card-image" @click="gallery = !gallery"> -->
								<figure class="image zoom">
									<img :src="package.image" alt="Placeholder image">
								</figure>
							</div>

							<div class="card-content">
								<div class="media">
									<div class="media-content">
										<p class="title is-4" :class="package.color">{{ package.title }}</p>
									</div>
								</div>

								<div class="content">
									<p>{{ package.description }}</p>
									<ul>
										<li v-for="item in package.items">
											<div class="icon-text">
												<span class="icon has-text-success">
													<i class="fas fa-check-square"></i>
												</span>
												<span>{{ item }}</span>
											</div>
										</li>
									</ul>
									<blockquote>Cijena: {{ package.price }} kn</blockquote>
									<button class="button">Kupi Paket</button>
								</div>
							</div>
						</div>

					</div>

				</div>
			</section>


			<section class="section">
				<hr>
			</section>

			<!-- Company info & form & payment -->
			<section class="section">
				<div class="columns">
					<!-- Company -->
					<div class="column is-6">
						<section class="hero">
							<div class="hero-body">
								<div class="card">
									<div class="card-content">
										<div class="media">
											<div class="media-left">
												<figure class="image is-48x48">
													<img src="https://plchldr.co/i/100x50">
												</figure>
											</div>
											<div class="media-content">
												<p class="title bounce">Bebine Stvarčice</p>
												<p class="subtitle">
													d.o.o.
												</p>
											</div>
										</div>
									</div>
									<footer class="card-footer">
										<div class="content">
											<h3>Adresa tvrtke:?</h3>
											<p>Ilica 22</p>
											<h3>Broj poslovnog računa:?</h3>
											<p>1231414235435</p>
											<h3>Ostale Informacije:?</h3>
											<p>asdasfdsfadsfsd</p>
										</div>
									</footer>
								</div>		
							</div>
						</section>
					</div>


					<!-- Form -->
					<div class="column is-6">	

						<div class="field">
							<label class="label">Paket</label>
							<div class="control">
								<div class="select is-fullwidth">
									<select v-model="selectedPackage">
										<option disabled value="">Odaberite Paket</option>
										<option v-for="(package, index) in packages" :value="index">{{ package.title }}</option>
									</select>
								</div>
							</div>
						</div>

						<div class="field">
							<label class="label">Vaše ime i prezime</label>
							<div class="control">
								<input class="input" type="text" placeholder="Ime i prezime" aria-label="payerNameSurname" aria-describedby="payer-name-surname" id="payerNameSurname">
							</div>
						</div>

						<div class="field">
							<label class="label">Vaše adresa i kućni broj</label>
							<div class="control">
								<input class="input" type="text" placeholder="Adresa i kućni broj" aria-label="payerAddressStreetNumber" aria-describedby="payer-address-streetnumber" id="payerAddressStreetNumber">
							</div>
						</div>

						<div class="field is-horizontal">
							<div class="field-label is-normal">
								<label class="label">Poštanski broj i Vaše mjesto</label>
							</div>
							<div class="field-body">
								<div class="field">
									<p class="control is-expanded">
										<input class="input" type="number" min="10000" max="53296" size="5" placeholder="Vaš Poštanski Broj" aria-label="payerCityNumber" aria-describedby="payer-city-number" id="payerCityNumber">
									</p>
								</div>
								<div class="field">
									<p class="control is-expanded">
										<input class="input" type="text" placeholder="Vaše mjesto" aria-label="payerCity" aria-describedby="payer-city" id="payerCity">
									</p>
								</div>
							</div>
						</div>

						<div class="field">
							<label class="label">Vaša email adresa za potrebe kontakta</label>
							<div class="control">
								<input class="input" type="email" placeholder="Email" aria-describedby="email-address" >
							</div>
						</div>

						<div class="field">
							<div class="control">
								<label class="checkbox">
									<input type="checkbox" id="sendToOther" v-model="sendToOther" @click="sendToOther = !sendToOther">
									Želim poslat paket drugoj osobi
								</label>
							</div>
						</div>

						<Transition>
							<div v-if="sendToOther">
								<hr>
								<div class="field">
									<label class="label">Ime i prezime primaoca paketa</label>
									<div class="control">
										<input class="input" type="text" placeholder="Ime i prezime" aria-label="receiverNameSurname" aria-describedby="receiver-name-surname" id="receiverNameSurname">
									</div>
								</div>

								<div class="field">
									<label class="label">Adresa i kućni broj primaoca paketa</label>
									<div class="control">
										<input class="input" type="text" placeholder="Adresa i kućni broj primaoca paketa" aria-label="receiverAddressStreetNumber" aria-describedby="receiver-address-streetnumber" id="receiverAddressStreetNumber">
									</div>
								</div>

								<div class="field is-horizontal">
									<div class="field-label is-normal">
										<label class="label">Poštanski broj i Mjesto primaoca paketa</label>
									</div>
									<div class="field-body">
										<div class="field">
											<p class="control is-expanded">
												<input class="input" type="number" min="10000" max="53296" size="5" aria-label="recieverCityNumber" placeholder="Poštanski broj primaoca paketa" aria-describedby="reciever-city-number" id="recieverCityNumber">
											</p>
										</div>
										<div class="field">
											<p class="control is-expanded">
												<input class="input" type="text" placeholder="Mjesto primaoca paketa" aria-label="receiverCity" aria-describedby="reciever-city" id="receiverCity">
											</p>
										</div>
									</div>
								</div>
								<hr>
							</div>
						</Transition>

						<div class="field">
							<div class="control">
								<label class="checkbox">
									<input type="checkbox" id="termsCond" v-model="termsCond">
									Pristajem na <a href="#">Uvjete prodaje</a>
								</label>
							</div>
						</div>

						<div class="field is-grouped">
							<div class="control">
								<button class="button is-link" v-on:click="payment()">Prikaži barkod za plaćanje</button>
							</div>
						</div>

					</div>
				</div>
			</section>



			<!-- Footer -->
			<footer class="footer">
				<div class="content has-text-centered zoom">
					<span class="icon-text">
						<span class="icon">
							<i class="fa-regular fa-copyright"></i>
						</span>
						<span><strong>Bebine Stvarčice</strong>, 2022</span>
					</span>
				</div>
			</footer>


		</div>




		<!-- Icons -->
		<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
		<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

	</body>
</html>

<script>
	var app = Vue.createApp({
		data() {
			return {
				gallery: false,
				galleryImageSrc: "",
				packages: {
					S1: {
						title: "Paket S1?",
						color: "has-text-danger-dark",
						image: "images/Paket-S-1.jpg",
						description: "Opis paketa i popis stvari?",
						items: [
							"Item1?", "Item2?"
						],
						price: "100,00?",
					},
					S2: {
						title: "Paket S2?",
						color: "has-text-danger-dark",
						image: "images/Paket-S-2.jpg",
						description: "Opis paketa i popis stvari?",
						items: [
							"Item1?", "Item2?"
						],
						price: "200,00?",
					},
					M1: {
						title: "Paket M1?",
						color: "has-text-link-dark",
						image: "images/Paket-M-1.jpg",
						description: "Opis paketa i popis stvari?",
						items: [
							"Item1?", "Item2?"
						],
						price: "300,00?",
					},
					M2: {
						title: "Paket M2?",
						color: "has-text-link-dark",
						image: "images/Paket-M-2.jpg",
						description: "Opis paketa i popis stvari?",
						items: [
							"Item1?", "Item2?"
						],
						price: "400,00?",
					},

					M3: {
						title: "Paket M3?",
						color: "has-text-link-dark",
						image: "images/Paket-M-3.jpg",
						description: "Opis paketa i popis stvari?",
						items: [
							"Item1?", "Item2?"
						],
						price: "500,00?",
					},
					M4: {
						title: "Paket M4?",
						color: "has-text-link-dark",
						image: "images/Paket-M-4.jpg",
						description: "Opis paketa i popis stvari?",
						items: [
							"Item1?", "Item2?"
						],
						price: "600,00?",
					},
					L1: {
						title: "Paket L1?",
						color: "has-text-primary-dark",
						image: "images/Paket-L-1.jpg",
						description: "Opis paketa i popis stvari?",
						items: [
							"Item1?", "Item2?"
						],
						price: "700,00?",
					},
					L2: {
						title: "Paket L2?",
						color: "has-text-primary-dark",
						image: "images/Paket-L-2.jpg",
						description: "Opis paketa i popis stvari?",
						items: [
							"Item1?", "Item2?"
						],
						price: "800,00?",
					}
				},
				selectedPackage: '',
				sendToOther: false,
				termsCond: false,
				classes: [],
			}
		},
		methods: {
			payment() {
				console.log('Working');
			},
			galleryImage() {
				var source = event.target.src;
				var image = source.split("images/").pop();
				this.galleryImageSrc = "images/" + image;
				this.gallery = true;
			},
		}
	})
	app.mount("#app")
</script>
