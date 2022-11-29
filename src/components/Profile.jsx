import styles from "./Profile.module.css";

const Profile = (props) => {
	let user = props.function();
	return (
		<div className="row">
			<div className="col-sm-3">
			<img src={user.avatar} alt=""  />
			</div>
			<div className="col-sm-9">
					<h1 style={{backgroundColor: "lightblue"}}>{user.name} {user.lastname}</h1>
					<h2 className={styles.about}>Рассказ о себе</h2>
					<p>E-mail: {user.email}</p>
					<p>ID: {user.id}</p>
					<p className={styles.paragraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
						Quae, dolorem unde, aperiam sunt, labore omnis accusantium 
						harum impedit sequi atque natus. Veniam facere nisi rem quis
						minima eum quibusdam dignissimos?</p>
			</div>
		</div>
	);
};

export {Profile};