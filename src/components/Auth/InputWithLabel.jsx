import React from "react";

const InputWithLabel = ({
	children = "",
	inputType = "text",
	backendName = "",
	isRequired = true,
	noValidate = false,
	defaultValue = "",
}) => {
	return (
		<label className="text-xl md:text-2xl font-medium">
			{children}
			<input
				type={inputType}
				name={backendName}
				placeholder={`Type the ${children} here...`}
				required={isRequired}
				formNoValidate={noValidate}
				d
				defaultValue={defaultValue}
				className="mt-1 w-full p-3 text-xl font-normal rounded-lg border border-neutral-800 caret-primary focus:outline-none focus:bg-[#121212] focus:border-primary"
			/>
		</label>
	);
};

export default InputWithLabel;
