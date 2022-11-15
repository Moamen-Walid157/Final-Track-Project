import{ useState , useEffect } from 'react';
import Recent from './RecentPost';
import { useParams , Link } from 'react-router-dom';
function Single(){
    var myparm = useParams();
    var myid = myparm.id;
    const[Post , setPost] = useState([]);
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/singlepost.php?id='+ myid )
        .then(res => res.json())
        .then(r=>{
            console.log(r)
            setPost(r[0])
        })
    } , [myid])
    return(
        <>
        <section className="container">
		<div className="wrapper clear">
			<div className="contentLeft">
				<div className="singlePostMeta">
					<div className="singlePostTime">{Post.date}</div>
					<h1>{Post.title}</h1>
					<Link to={'/category/' +Post.category} className="singlePostCategory">{Post.category}</Link>
				</div>
				<div className="singlePostWrap">
					<div className="singlePostImg">
						<img src= {'https://webeetec.com/itsharks24/blog/admin/' + Post.image} alt="Francoise img"/>
					</div>
					<p>{Post.description}</p>
					
				</div>
				
				
				
				
				
			</div>


			<div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
                    <img src="/images/ourlogo.png" alt="Francoise img" />
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				
				
				<Recent />
				
				
			</div>
		</div>
		<div className="clear"></div>
		
	</section>
        </>
    )
}
export default Single;