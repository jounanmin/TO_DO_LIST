import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: ["house", "car", "pet"],
			poetFilter: ""
		};
	}
	handleChange = e => {
		this.setState({
			poetFilter: e.target.value
		});
	};

	removeItem = parrot => {
		console.log(parrot);
		const unicorn = this.state.todos;

		const filtered = unicorn.filter((element, index) => {
			return parrot !== index;
		});
		//console.log(unicorn);
		//console.log(filtered);

		this.setState({ todos: filtered });
	};
	addItem = () => {
		console.log("###$$$");
		this.setState({
			todos: this.state.todos.concat(this.state.poetFilter)
		});
		// this.state.poetFilter(this.state.todos);
	};

	render() {
		// YOU CAN USE THE SAME METHOD HERE BUT WHEN YOU CALL IT YOU DON'Y NEED THE WORD this
		//     let addItem = () => {
		// 	console.log("###$$$");
		// 	this.setState({
		// 		todos: this.state.todos.concat(this.state.poetFilter)
		// 	});
		// 	// this.state.poetFilter(this.state.todos);
		// };
		return (
			<div className="bigBox">
				<div className="list">
					<h1>To-Do List</h1>
					<div className="input d-flex justify-content-center">
						<input
							value={this.state.poetFilter}
							onChange={this.handleChange}
						/>
						<div
							className="btn btn-success"
							onClick={() => this.addItem()}>
							Add
						</div>
					</div>
					<ul>
						{this.state.todos.map((item, index) => (
							<li key={index}>
								{item}
								<span
									className="btn btn-danger ml-5"
									onClick={() => this.removeItem(index)}>
									X
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
