import Link from "next/link";

function editProduk(){
    return(
        <>
        <section id="sidebar">
		<a href="#" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text">Admin</span>
		</a>
		<ul class="side-menu top">
			<li class="active">
			<Link href={'/toko/dashboard'}>
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link href={'/toko/produk'}>
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">produk</span>
				</Link>
			</li>
		</ul>
		<ul class="side-menu">
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>





	<section id="content">
	
		<nav>
			<i class='bx bx-menu' ></i>
			<a href="#" class="nav-link">Categories</a>
			<form action="#">
				<div class="form-input">
					<input type="search" placeholder="Search..."/>
					<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden/>
			<label for="switch-mode" class="switch-mode"></label>
			<a href="#" class="notification">
				<i class='bx bxs-bell' ></i>
				<span class="num">8</span>
			</a>
			<a href="#" class="profile">
				<img src="img/people.png"/>
			</a>
		</nav>

		<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Home</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="form-container">
            <h1 class="text-center">Edit Produk</h1>
            <form name="frmContact" id="" method="post"
                action="" enctype="multipart/form-data"
                onsubmit="return validateContactForm()">

                <div class="row">
                    <div class="inline-block right-margin">
                        <div class="label">
                            Nama Produk <span id="firstName-info"
                                class="info"></span>
                        </div>
                        <input type="text" class="input-field"
                            name="contact-first-name"
                            id="contact-first-name" />
                    </div>
                </div>

                
                <div class="row">
                    <div class="inline-block right-margin">
                        <div class="label">
                            Harga Produk <span id="email-info" class="info"></span>
                        </div>
                        <input type="text" class="input-field"
                            name="contact-email" id="contact-email" />
                    </div>
                </div>
                
                <div class="row">
                    <div class="inline-block responsive">
                        <div class="label">
                            Detail <span id="message-info" class="info"></span>
                        </div>
                        <textarea name="contact-message"
                            id="contact-message" class="input-field"
                            cols="60" rows="6"></textarea>
                    </div>
                </div>


                <div class="row">
                    <input type="submit" name="send" class="btn-submit"
                        value="Send" />
                </div>
                <div class="row">
                    <div id="statusMessage">
                        </div>
            </div>
        </form>
    </div>
			
		</main>
	</section>
        </>
    )
   
}

export default editProduk;