import { useState } from "react";


function Settings() {
	const [count, setCount] = useState(0);

	return (
		<div className="row">
			<div className="col-6">Количестов кликов: {count}</div>
			<div className="col-6">
				<button className="btn btn-warning" onClick={()=>{
					setCount(count + 1);
				}}>Нажми на мен</button>
			</div>
		</div>
	)
}


export {Settings};