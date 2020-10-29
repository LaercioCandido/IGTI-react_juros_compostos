import React, {useState, useEffect} from 'react'
import css from './form.module.css';
import Installments from '../Installments/Installments';

export default function Form() {
	const [capital, setCapital] = useState(0);
	const [juros, setJuros] = useState(0);
	const [tempo, setTempo] = useState(0);
	const [parcela, setParcela] = useState([]);

	const handleChangeCapital = (event) => {
		setCapital(event.target.value);
		//console.log(capital);
	}

	const handleChangeJuros = (event) => {
		setJuros(event.target.value)
		//console.log(juros);
	}

	const handleChangeTempo = (event) => {
		setTempo(event.target.value);
		//console.log(tempo);
	}

	//let parcelax =[]
	useEffect(() => {
		let capitalInicial = capital;
		let montante = capital;
		let jurosx = 0;
		let porcento = 0;
		let aux =[];

		for (let i = 0; i < tempo; i++)
		{
			montante = (montante * (1 + juros/100)).toFixed(2);
			jurosx = (montante - capitalInicial).toFixed(2);
			porcento = ((montante/capitalInicial - 1)*100).toFixed(2);
			aux.push({montante, jurosx, porcento});
		}
		setParcela(aux);

	}, [capital, juros, tempo])

	return (
		<div className={css.container}>
			<h3>Calculadora de Juros Compostos</h3>
			<div className={css.flexrow}>
				<div className={css.input}>
					<span>Capital inicial</span>
					<input
						autoFocus
						type="number"
						value={capital}
						onChange={handleChangeCapital}
						step="10"
						/>
				</div>
				<div className={css.input}>
					<span>Taxa de juros mensal</span>
					<input
						autoFocus
						type="number"
						value={juros}
						onChange={handleChangeJuros}
						step="0.1"
						/>
				</div>
				<div className={css.input}>
					<span>Período (em meses)</span>
					<input
					autoFocus
						type="number"
						value={tempo}
						onChange={handleChangeTempo}
						step="1"
						/>
				</div>
			</div>
			< Installments parcela={parcela} />
		</div>
	)
}
