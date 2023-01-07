import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm();

	const [successMessage, setSuccessMessage] = useState("");

	function onSubmit(data) {
		axios
			.post("https://eoslthpkyhra9ni.m.pipedream.net", data)
			.then((reponse) => {
				setSuccessMessage("Thanks for submitting");
			})
			.catch((e) => console.error(e));
	}

	return (
		<form className="mx-auto max-w-[65rem]" onSubmit={handleSubmit(onSubmit)}>
			<h4 className="h1">Contact Form</h4>
			<input className="w-full h-[5rem] text-[1.6rem]" {...register("name")}></input>
			<input className="w-full h-[5rem] text-[1.6rem]" {...register("starter")} defaultValue="leak & potato soup" readOnly></input>
			<div>
				<label>
					<input {...register("main")} type="radio" value="chicken" />
					Chicken
				</label>
			</div>
			<div>
				<label htmlFor="">
					<input {...register("main")} type="radio" value="rissotto" />
					Risotto
				</label>
			</div>

			<div>
				<label>
					<input {...register("dessert")} type="radio" value="tart" />
					Tart
				</label>
			</div>
			<div>
				<label htmlFor="">
					<input {...register("dessert")} type="radio" value="brownie" />
					Brownie
				</label>
			</div>

			<textarea {...register("dietary_requirements", {})} />

			<button className="button button--black" role="submit">
				{isSubmitting ? "Submitting" : "Submit"}
			</button>
			{successMessage && <p>{successMessage}</p>}
		</form>
	);
}
