import{ useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
function Recent(){
    const[ Post , SetPost ] = useState([]);
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getrecentpost.php')
        .then(res => res.json())
        .then((m)=>{
            console.log(m[0]);
            SetPost(m[0])
        })
    },[])
    return(
        <> 
        <div className="sidebar-widget">
        <h3>Recent post</h3>
					<div className="popularPostsWidget">
						<div className="popularPostsWidgetItem">
							<Link to={'/single/' + Post.id }className="popularPostsItemImg"><img src={'https://webeetec.com/itsharks24/blog/admin/'  + Post.image} alt="Francoise img" /></Link>
							<time datetime="2015-05-15">{Post.date}</time>
							<h4><Link to={'/single/' + Post.id } >{Post.title}</Link></h4>
						</div>
					</div>
				</div>
        </>
    )

}
export default Recent;