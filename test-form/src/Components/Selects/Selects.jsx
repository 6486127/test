import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { NativeSelect } from "@mui/material";
export default function Selects({ selectProporty, names, width }) {



	return (
		<>
			<FormControl width={width}>
				<InputLabel variant="standard" htmlFor="uncontrolled-native">
					{names}
				</InputLabel>
				<NativeSelect
					defaultValue={selectProporty}
					inputProps={{
						name: { selectProporty },
					}}
				>
					{selectProporty}
				</NativeSelect>
			</FormControl>
		</>
	);
}
