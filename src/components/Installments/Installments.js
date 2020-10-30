import React from 'react'
import css from './installments.module.css'
import * as formatter from '../../helpers/formatter';

export default function Installments({parcelas}) {
	//const classParcela = 0; = parcelas[0] > 0 ? 'green-text darken-4' : 'red-text darken-4';
	return (
		<div className={css.container}>
			{parcelas.map((parcela, index) => (
				<div key={index} className={css.cards}>
					<span className={css.classIndex}>{index + 1}</span><br></br>
					<span>{formatter.formatMoney(parcela.montante)}</span><br></br>
					<span>{formatter.formatMoneyPositiveNegative(parcela.juro)}</span><br></br>
					<span className={css.classPorcento}>{formatter.formatPercent(parcela.porcento)}%</span><br></br>
				</div>
			))}
		</div>
	)

}
