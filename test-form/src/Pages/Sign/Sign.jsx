import React, { useState } from "react";
import Selects from "../../Components/Selects/Selects";
import Textfild from "../../Components/Textfild/Textfild";
import { days } from "../../constants/day";
import { month } from "../../constants/month";
import { nationality } from "../../constants/nationality";
import { year } from "../../constants/year";
import RowRadioButtonsGroup from "../../Components/Radio/Radio";
import FormPropsTextFields from "../../Components/Password/Password";
import "./Sign.css";
import Btn from "../../Components/Btn/Btn";
import {Link} from 'react-router-dom'
export default function Sign({onClick}) {
	const [validPass, setValidPass] = useState(false)
	const [validMail, setValidMail] = useState(false)


	const handleMail = (e) => {
		const regEmail =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  if (!e.target.value.match(regEmail)) {
		e.target.style.border='2px solid red'
		setValidMail(false)
	  } else {
		e.target.style.border='2px solid green'
		setValidMail(true)
		
	  }
	}

	const [pas1, setPas1] = useState('')

const handlePass1 = (e) =>{
  setPas1(e.target.value)
  const pasRed = 
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
  if(!e.target.value.match(pasRed)){
    e.target.style.border = '2px solid red'
	setValidPass(false)
  }else{
    e.target.style.border = '2px solid green'
	setValidPass(true)
  }
}

  const handlePass2 = (e) =>{


	if(e.target.value == pas1){
		e.target.style.border = '2px solid green'
		setValidPass(true)
	  }else{
		e.target.style.border = '2px solid red'
		setValidPass(false)
	  }
  }


  
	


	return (
		<>
		<div className="text">
			<h1 className="title">New user? </h1>
			<p className="subtitle">Use the form below to create your account.</p>
		</div>
			<form action="#" className="form">
				<div className="person">
					<Textfild textlable="First Name" id="firstname" />
					<Textfild textlable="Last Name" id="lastname" />
				</div>
				<div className="nation">
					<Selects
						width="235px"
						names={"Nationality"}
						selectProporty={nationality.map((i) => {
							return (
								<option key={i.name} value={i}>
									{i.name}
								</option>
							);
						})}
					/>
			
						<Textfild   onInput={handleMail} textlable="Email" id="email" />
				</div>
				<div className="date">
					<div className="dateofbirsday">
						<Selects
							width="235px"
							names={"Day of birsday"}
							selectProporty={days.map((i) => {
								return (
									<option key={i.id} value={i}>
										{i.id}
									</option>
								);
							})}
						/>
						<Selects
							width="235px"
							names={""}
							selectProporty={month.map((i) => {
								return (
									<option key={i.month} value={i}>
										{i.month}
									</option>
								);
							})}
						/>
						<Selects
							width="235px"
							names={" "}
							selectProporty={year.map((i) => {
								return (
									<option key={i.year} value={i}>
										{i.year}
									</option>
								);
							})}
						/>
					</div>
					<RowRadioButtonsGroup />
				</div>
				<FormPropsTextFields onInput2={handlePass2} onInput1={handlePass1} />

			</form>
			<div className="submit">
					<p className="submit__subtitle">Have an account? <a href="##">Login</a></p>
					{validPass && validMail? <Link to={`/regcomplite`}> <Btn clas={'btn'} onClick={onClick}/></Link> : <Btn clas={'unactiv'} disabled onClick={onClick}/>}
					
				</div>
		</>
	);
}
