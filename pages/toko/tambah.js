import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState} from 'react';

function tambahProduk(){
    const [postsTambah, setPostTambah] = useState({
        nama_produk:'',
		harga_produk:'',
        detail:''
    });

    const router = useRouter()

    const addTambah = (e)=>{
        setPostTambah((preValue) => ({...preValue, [e.target.name] : e.target.value}))
    }

    const handlerSubmit = async (event)=> {
        event.preventDefault();
        console.log(postsTambah)

        const res = await axios.post('http://localhost:3001/produk', {
            nama_produk: postsTambah.nama_produk,
            modal_produk: postsTambah.modal_produk,
            harga_produk:postsTambah.harga_produk,
            jumlah:postsTambah.jumlah,
            detail_produk:postsTambah.detail_produk
        });
        console.log(res);
        router.back();

		// console.log(res.data.data);
		// setPostTambah(res.data.data);

    }


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
			<div class="form-container">
            <h1 class="text-center">Tambah Produk</h1>
            <form name="frmContact" id="" method="post"
                action="" enctype="multipart/form-data"
                onSubmit={handlerSubmit}>

                {/* {
                    postsTambah.map((data)=>( */}
                        <>
                        <div class="row">
                        <div class="inline-block right-margin">
                            <div class="label">
                                Nama Produk <span id="firstName-info"
                                    class="info"></span>
                            </div>
                            <input type="text" class="input-field"
                                name="nama_produk"
                                id="nama_produk"
                                onChange={addTambah}>
                                 {/* {data.nama_produk} */}
                                </input>
                        </div>
                    </div>
    
                    
                    <div class="row">
                        <div class="inline-block right-margin">
                            <div class="label">
                                Modal Produk <span id="email-info" class="info"></span>
                            </div>
                            <input type="text" class="input-field"
                                name="modal_produk" id="modal_produk"
                                onChange={addTambah}>
                                {/* {data.modal_produk} */}
                                </input>
                        </div>
                    </div>


                    <div class="row">
                        <div class="inline-block right-margin">
                            <div class="label">
                                Harga Produk <span id="email-info" class="info"></span>
                            </div>
                            <input type="text" class="input-field"
                                name="harga_produk" id="harga_produk"
                                onChange={addTambah}>
                                {/* {data.harga_produk} */}
                                </input>
                        </div>
                    </div>


                    <div class="row">
                        <div class="inline-block right-margin">
                            <div class="label">
                                JUmlah produk <span id="email-info" class="info"></span>
                            </div>
                            <input type="text" class="input-field"
                                name="jumlah" id="jumlah"
                                onChange={addTambah}>
                                {/* {data.jumlah} */}
                                </input>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="inline-block responsive">
                            <div class="label">
                                Detail <span id="message-info" class="info"></span>
                            </div>
                            <textarea name="detail"
                                id="detail" class="input-field"
                                cols="60" rows="6"
                                onChange={addTambah}>
                                {/* {data.detail} */}
                                </textarea>
                        </div>
                    </div>
                    </>
                    {/* ))
                }
                */}


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

export default tambahProduk;