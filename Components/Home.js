import {Link} from 'react-router-dom';
import Recent from './RecentPost';
import { useState , useEffect  } from 'react';
function Home(){
	const [post , setPost] = useState([]);
	useEffect(()=>{
fetch('https://webeetec.com/itsharks24/blog/api/getposts.php')
.then(res => res.json())
.then((s)=>{
	console.log(s);
	setPost(s);
})

	},[]);
    return(
		<>
        <section className="container mt-5">
		<div className="wrapper clear">
			
			<div className="clear"></div>
			<div className="contentLeft">
				<div className="blogPostListWrap">

				{
					post.map((item)=>{
						return(
							<div className="blogPostListItem clear" key={item.id}>
						<Link to={'/single/' + item.id } className="blogPostListImg">
							<img src={'https://webeetec.com/itsharks24/blog/admin/' + item.image} alt="Francoise img" />
						</Link>
						<div className="blogPostListText">
							<div className="blogPostListTime">{item.date}</div>
							<h3><Link to={'/single/' + item.id }>{item.title}</Link></h3>
							<p>{item.description}</p>
						</div>
					</div>
						);
					})
				}

					

				</div>
				<div className="postPagination">
					<ul className="clear">
						<li className="newPosts"><a href="#">New posts</a></li>
						<li className="olderPosts"><a href="#">Older posts</a></li>
					</ul>
				</div>
			</div>
			<div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
					<img src="images/ourlogo.png" alt="Francoise img" />
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				<div className="sidebar-widget">
					<h3>follow me</h3>
					<div className="followMeSocialLinks">
						<a href="#"><i className="fa fa-instagram"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-facebook"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-heart"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-pinterest"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-google-plus"></i></a>
					</div>
				</div>
				
				<Recent/>
				
				
			</div>
		</div>
		<div className="clear"></div>
		
	</section>
		</>
    )
}
export default Home;