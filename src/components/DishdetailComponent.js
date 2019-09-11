import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class Dishdetail extends Component {

	constructor(props) {
		super(props);
	}

	renderDish(dish) {
		return(
			<div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);
		
	}

	renderComments(comments)
	{
		const content = comments.map((comment) => {
			return(
				<ul className="list-unstyled">
					<li>{comment.comment}</li><br />
					<li>--{comment.author}, {new Date(comment.date).toDateString()}</li>
				</ul>
			);
		});

		return (
			<div className="col-12 col-md-5 m-1">
				<h4>Comments</h4>
				{content}
			</div>
		);
	}

	render() {
		if (this.props.selectedDish != null) {
			return(
				<div className="row">
					{this.renderDish(this.props.selectedDish)}
					{this.renderComments(this.props.selectedDish.comments)}
				</div>
			);
		}
		else
		{
			return(
				<div />
			);
		}
	}
}

export default Dishdetail;