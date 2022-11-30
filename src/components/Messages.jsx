import gooseImg from "../assets/img/goose.jpg"
import siberCat from "../assets/img/siberpankCat.jpg"
const Messages = () => {
	return (
		<>
			<div className="row">
				<div className="col-md-6">
					<img src={gooseImg} width='50%' alt="" />
				</div>
				<div className="col-md-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Fugiat repudiandae ratione libero eligendi quae earum eius 
					quasi totam, temporibus dolore reprehenderit numquam unde 
					qui possimus similique ullam a odit? Fugit.
					Nostrum fugiat non est quas excepturi aperiam temporibus, 
					perferendis incidunt labore. At earum cupiditate eos quod debitis 
					eveniet possimus corrupti necessitatibus, aliquid officia atque 
					mollitia tempora, animi libero, enim odio?
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 offset-6" style={{backgroundImage: `url(${siberCat})`}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Fugiat repudiandae ratione libero eligendi quae earum eius 
						quasi totam, temporibus dolore reprehenderit numquam unde 
						qui possimus similique ullam a odit? Fugit.
						Nostrum fugiat non est quas excepturi aperiam temporibus, 
						perferendis incidunt labore. At earum cupiditate eos quod debitis 
						eveniet possimus corrupti necessitatibus, aliquid officia atque 
						mollitia tempora, animi libero, enim odio?
				</div>
			</div>
		</>
	);
};

export {Messages};