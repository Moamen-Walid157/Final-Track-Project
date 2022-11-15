import{ useState , useEffect } from 'react';
import Recent from './RecentPost';
import { useParams , Link } from 'react-router-dom';
function Mycategory(){
    var myparm = useParams();
    var category = myparm.category;
    const[Post , setPost] = useState([]);
    useEffect((myid)=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getpostsbycategory.php?category=' + category)
        .then(res=> res.json())
        .then((r)=>{
            console.log(r)
            setPost(r)
            console.log(category)
        })
    } , [category])
    return(
        <>
        <section className="container">
		<div className="wrapper clear">
			<div className="contentLeft">
				<div className="archivePageTitle"><span>Lifestyle</span></div>
				<div className="archivePostWrap">
                    {
                    Post.map((item)=>{
                        return(
                            <>
                            <div className="archivePostItem"  key={item.id}>
                            <div className="archivePostTime">{item.date}</div>
                            <h3 className="archivePostTitle"><Link to={'/single/' + item.id}>{item.title}</Link></h3>
                            <a href="single.html" className="archivePostCategory">Lifestyle</a>
                            <Link to={'/single/' + item.id } className="archivePostImg">
                                <img src={'https://webeetec.com/itsharks24/blog/admin/' + item.image} alt="Francoise img"/>
                            </Link>
                            <p>{item.description}</p>
                            <div className="archivePostItemMeta">
                                <a href="#" className="archivePostItemComments">124 Comments</a>
                                <div className="archivePostItemShareLinks">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </div>
                                <a href="single.html" className="archivePostReadMore">Read More</a>
                            </div>
                        </div>
                        </>
                        );
                    })}
				
					

					</div>
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
                    <img src="/images/ourlogo.png" alt="Francoise img"/>				
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
				
                <Recent />
				
				
			</div>
            
		<div className="clear"></div>
		
	</section>
        </>
    )
}
export default Mycategory;