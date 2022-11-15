import {Link} from 'react-router-dom';
function Notfound(){
    return(
        <>
        <section className="container">
		<div className="page404Wrap">
			<img src="images/404.png" alt="Francoise img" />
			<p>The requested page has <br /> not been found</p>
			<Link to={'/'} className="homePageLink">homepage</Link>
		</div>
		<div className="clear"></div>
		<div className="ourInstagram">
			<div id="sb_instagram">
				<div className="sb_instagram_header">
					<a href="#" className="sbi_header_link">Follow on instagram</a>
				</div>
				<div id="sbi_images">
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" className="sbi_photo">
								<img src="images/content/inst.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" className="sbi_photo">
								<img src="images/content/inst2.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" className="sbi_photo">
								<img src="images/content/inst3.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" className="sbi_photo">
								<img src="images/content/inst4.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" className="sbi_photo">
								<img src="images/content/inst5.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    )
}
export default Notfound;