import React from 'react'
import css from './installments.module.css'

export default function Installments({parcela}) {
	//const {parcela} = props;
	/*
	let html = '<ul>';
	for (let i = 0; i < parcela.length; i++)
		html += `<li> ${parcela[i].montante} </li>`
	html += '</ul>'
	*/
	/*
	parcela.forEach(parcelax => {
		//console.log(parcelax.montante)
		//console.log(parcelax.jurosx)
		//console.log(parcelax.porcento)
		<Installment parcelax={parcelax} />
	});
	*/
	console.log(parcela)

	return (
		<div className={css.container}>
			{parcela.map((parcelax, index) => (
				<div className={css.cards}>
					<span>{index + 1}</span><br></br>
					<span>R$ {parcelax.montante}</span><br></br>
					<span>{parcelax.jurosx}</span><br></br>
					<span>{parcelax.porcento}%</span><br></br><br></br>
				</div>
			))}
		</div>
	)

}
