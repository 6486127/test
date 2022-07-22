import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FormLabel, NativeSelect } from "@mui/material";
export default function Selects({ selectProporty, names, width }) {



	return (
		<>
			<FormControl width={width}>
			<FormLabel id="demo-row-radio-buttons-group-label">{names}</FormLabel>
				<InputLabel variant="standard" htmlFor="uncontrolled-native">
					
				</InputLabel>
				<NativeSelect
				>
					{selectProporty}
				</NativeSelect>
			</FormControl>
		</>
	);
}
