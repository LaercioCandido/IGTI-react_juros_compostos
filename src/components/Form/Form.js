import React from 'react'
import css from './form.module.css';

export default function Form() {
	return (
		<div className={css.container}>
			<h3>Calculadora de Juros Compostos</h3>
			<div className={css.flexrow}>
				<div className={css.input}>
					<span>Capital inicial</span>
					<input
						autoFocus
						type="number"
						//value={fullSalary}						//onChange={this.handleFilter}
						step="10"
						/>
				</div>
				<div className={css.input}>
					<span>Taxa de juros mensal</span>
					<input
						autoFocus
						type="number"
						//value={fullSalary}						//onChange={this.handleFilter}
						step="0.1"
						/>
				</div>
				<div className={css.input}>
					<span>Período (em meses)</span>
					<input
					autoFocus
						type="number"
						//value={fullSalary}						//onChange={this.handleFilter}
						step="1"
						/>
				</div>
			</div>
		</div>
	)
}
