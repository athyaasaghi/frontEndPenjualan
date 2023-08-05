import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/router';

function editProdukUpdate(){
const [ editProduk, setEditProduk ] = useState([])
const refnama_produk = useRef();
const refmodal_produk = useRef();
const refharga_produk = useRef();
const refjumlah = useRef();
const refdetail = useRef();

    const route = useRouter()
    console.log(route.query.id);

    const getEdit = async(id_route)=>{
        const res = await axios.get(`http://localhost:3001/produk/${id_route}`)
        console.log(res)
        setEditProduk(res.data.data)
        refnama_produk.current.value = res.data.data.nama_produk;
        refmodal_produk.current.value = res.data.data.modal_produk;
        refharga_produk.current.value = res.data.data.harga_produk;
        refjumlah.current.value = res.data.data.jumlah;
        refdetail.current.value = res.data.data.detail_produk;
    }

    useEffect(()=>{
        if(route.query.id){
            getEdit(route.query.id);
        }
    }, [route])

    const handlerSubmit = async (event)=> {
        event.preventDefault();
        console.log(editProduk)

        const res = await axios.put(`http://localhost:3001/produk/${route.query.id}`, {
            nama_produk: editProduk.nama_produk,
            modal_produk: editProduk.modal_produk,
            harga_produk:editProduk.harga_produk,
            jumlah:editProduk.jumlah,
            detail_produk:editProduk.detail
        });
        console.log(res);
        route.back();
    }

    const addEdit = (e)=>{
        setEditProduk((preValue) => ({...preValue, [e.target.name] : e.target.value}))
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
            <h1 class="text-center">Edit Produk</h1>
            <form name="frmContact" id="" method="post"
                action="" enctype="multipart/form-data"
                onSubmit={handlerSubmit}>

                <div class="row">
                    <div class="inline-block right-margin">
                        <div class="label">
                            Nama Produk <span id="firstName-info"
                                class="info"></span>
                        </div>
                        <input type="text" class="input-field"
                            name="nama_produk"
                            id="nama_produk" 
                            ref={refnama_produk}
                            onChange={addEdit}
                            />
                    </div>
                </div>

                <div class="row">
                    <div class="inline-block right-margin">
                        <div class="label">
                            Modal Produk <span id="firstName-info"
                                class="info"></span>
                        </div>
                        <input type="text" class="input-field"
                            name="modal_produk"
                            id="modal_produk" 
                            ref={refmodal_produk}
                            onChange={addEdit}
                            />
                    </div>
                </div>


                
                <div class="row">
                    <div class="inline-block right-margin">
                        <div class="label">
                            Harga Produk <span id="email-info" class="info"></span>
                        </div>
                        <input type="text" class="input-field"
                            name="harga_produk" id="harga_produk"
                            ref={refharga_produk}
                            onChange={addEdit}
                            />
                    </div>
                </div>

                <div class="row">
                    <div class="inline-block right-margin">
                        <div class="label">
                            JUmlah Produk <span id="email-info" class="info"></span>
                        </div>
                        <input type="text" class="input-field"
                            name="jumlah" id="jumlah"
                            ref={refjumlah}
                            onChange={addEdit}
                            />
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
                            onChange={addEdit}
                            ref={refdetail}
                            >
                            </textarea>
                    </div>
                </div>


                <div class="row">

                    <input type="submit" name="send" class="btn-submit"
                        value="Send"
                        />


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

export default editProdukUpdate;