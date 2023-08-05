import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect} from 'react';


function produk(){
    const [posts, setPost] = useState([]);


	const getPosts = async () => {
		const res = await axios.get('http://localhost:3001/produk');
		console.log(res.data.data);
		setPost(res.data.data);
	};

    useEffect(()=>{
       
        getPosts();
    }, []);

	const hapusProduk = async (id) => {
		const res = await axios.delete(`http://localhost:3001/produk/${id}`);
		getPosts();
		
	}

	const router = useRouter()

    return(
      <>
      <section id="sidebar">
		<a href="#" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text">Admin</span>
		</a>
		<ul class="side-menu top">
			<li>
				<Link href={'/toko/produk'}>
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">produk</span>
				</Link>
			</li>
		</ul>
		<ul class="side-menu">
			<li>
			    <Link href={'/toko/home'}>
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</Link>
			</li>
		</ul>
	</section>


	<section id="content">
	

		<main>

			
			<div class='kesatu'>
				<p>1</p>
				<p>2</p>
				<p>3</p>
				<p>4</p>
			</div>
			<div class="table-data">
				<div class="order">
					<div class="head">
					 <h3>STOK BARANG</h3><br></br>
					  <h2>terdapat {posts.length} data dalam database</h2>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>


					<nav>
						<form action="#">
							<div class="form-input">
								<input type="search" placeholder="Search..."/>
								<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
							</div>
						</form>

						<button className="btn btn-primary me-2"  onClick={()=> { router.push(`/toko/tambah`)}}>Tambah Barang</button>
						<div></div>
					</nav>
					

                <table className="tabel_produk">
                <thead>
                    <tr className="tr_produk">
                    <th>Kode</th>
                    <th>Nama</th>
                    <th>Modal</th>
                    <th>Harga</th>
					<th>Jumlah</th>
					<th>Aksi</th>
                    </tr>
                </thead>
                <tbody className="td_produk">
					{
						posts.map((data)=>(
							<tr>
							<td>{data.id}</td>
							<td>{data.nama_produk}</td>
							<td>{data.modal_produk}</td>
							<td>{data.harga_produk}</td>
							<td>{data.jumlah}</td>
							<td>
{/* 
							<Link href={`/toko/update/${data.id}`}> */}
								<button className="btn btn-secondary me-2" onClick={()=> { router.push(`/toko/update/${data.id}`)}}>Edit</button>
							{/* </Link> */}

								<button onClick={()=>hapusProduk(data.id)} className="btn btn-danger">Hapus</button>

							</td>						
							</tr>
						))
					}
					    
                </tbody>
                </table>

				</div>
				
			</div>
		</main>
	</section>
      </>
    )
}

export default produk;