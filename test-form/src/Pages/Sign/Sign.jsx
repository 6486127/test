import React from "react";
import Selects from "../../Components/Selects/Selects";
import Textfild from "../../Components/Textfild/Textfild";
import { days } from "../../constants/day";
import { nationality } from "../../constants/nationality";

export default function Sign() {
	return (
		<>
			<div className="person">
				<Textfild label="First Name" />
				<Textfild label="Last Name" />
			</div>
			<div className="nation">
				<Selects
					width="235px"
					names={"Nationality"}
					selectProporty={nationality.map((i) => {
						return <option value={i}>{i.name}</option>;
					})}
                    
				/>
                <Textfild label="Email" />
			</div>
            <Selects
					width="235px"
					names={'Day of birsday'}
					selectProporty={days.map((i) => {
						return <option value={i}>{i.id}</option>;
					})}
                    
				/>
		</>
	);
}
