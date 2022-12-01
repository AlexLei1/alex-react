import { useEffect, useState } from "react";

const Settings = () => {
	const [advice, setAdvice] = useState("");

	// Запустить функциию в течении жизненного цикла нашего компонента
	useEffect(() =>  {
		const url = 'https://api.adviceslip.com/advice';

		const fetchData = async () => {
			try {
				let response = await fetch(url);
				let json = await response.json();
				setAdvice(json.slip.advice);

			} catch (error) {
				console.log('error', error);
			}
		};
		fetchData();
	}, []);
	return (
		<div>{advice}</div>
	);
};
// function Settings() {
// 	const [count, setCount] = useState(0);

// 	return (
// 		<div className="row">
// 			<div className="col-6">Количестов кликов: {count}</div>
// 			<div className="col-6">
// 				<button className="btn btn-warning" onClick={()=>{
// 					setCount(count + 1);
// 				}}>Нажми на мен</button>
// 			</div>
// 		</div>
// 	)
//}


export {Settings};