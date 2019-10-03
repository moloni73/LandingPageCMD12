import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import PropTypes from "prop-types";

let menu = [
	{
		label: "About",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	},
	{
		label: "Service",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	},
	{
		label: "Contact",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	}
];

let menuStar = [
	{
		label: "Start Bootstrap",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	}
];

let menuHome = [
	{
		label: "Home",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	}
];

const NavBar = props => {
	//I have to loop all the items and convert them into LIs

	const itStar = props.itStar.map((item1, index) => (
		<a className="navbar-brand" href={item1.url} key={index}>
			{item1.label}
		</a>
	));

	const itHome = props.itHome.map((item2, index) => (
		<li className="nav-item active" key={index}>
			<a className="nav-link" href={item2.url}>
				{item2.label}
				<span className="sr-only">(current)</span>
			</a>
		</li>
	));

	const items = props.items.map((item, index) => (
		<li className="nav-item" key={index}>
			<a className="nav-link" href={item.url}>
				{item.label}
			</a>
		</li>
	));

	//this methods says how the NavBar should look like in HTML
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
				{itStar}
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						{itHome}
						{items}
					</ul>
				</div>
			</div>
		</nav>
	);
};

NavBar.propTypes = {
	itStar: PropTypes.array,
	itHome: PropTypes.array,
	items: PropTypes.array
	// 2) add here the new properties into the proptypes object
};

let menujumbo = [
	{
		labeld: "A Warm Welcome!",
		labelp:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.",
		labelb: "Call to action!",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	}
];

const Jumbot = props => {
	const itemsj = props.itemsj.map((itemj, index) => (
		<div className="container" key={index}>
			<h1 className="display-3">{itemj.labeld}</h1>
			<p className="lead">{itemj.labelp}</p>
			<a href={itemj.url} className="btn btn-primary btn-lg">
				{itemj.labelb}
			</a>
		</div>
	));

	return <header className="jumbotron my-4">{itemsj}</header>;
};

Jumbot.propTypes = {
	itemsj: PropTypes.array
};

let menucard = [
	{
		labelt: "Card title",
		labelp:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		labelf: "Find Out More!",
		urlc: "http://placehold.it/500x325",
		urlf:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	}
];
const Cardt = props => {
	const itemsc = props.itemsc.map((itemc, index) => (
		<div className="card h-100" key={index}>
			<img className="card-img-top" src={itemc.urlc} alt="" />
			<div className="card-body">
				<h4 className="card-title">{itemc.labelt}</h4>
				<p className="card-text">{itemc.labelp}</p>
			</div>
			<div className="card-footer">
				<a href={itemc.urlf} className="btn btn-primary">
					{itemc.labelf}
				</a>
			</div>
		</div>
	));

	return <div className="col-lg-3 col-md-6 mb-4">{itemsc}</div>;
};

Cardt.propTypes = {
	itemsc: PropTypes.array
};

let menufoot = [
	{
		labelt: "Copyright © Your Website 2019"
	}
];

const Footert = props => {
	const itemsf = props.itemsf.map((itemf, index) => (
		<div className="container" key={index}>
			<p className="m-0 text-center text-white">{itemf.labelt}</p>
		</div>
	));

	return <footer className="py-5 bg-dark">{itemsf}</footer>;
};

Footert.propTypes = {
	itemsf: PropTypes.array
};

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBar itStar={menuStar} itHome={menuHome} items={menu} />
				<Jumbot itemsj={menujumbo} />
				<div className="row text-center">
					<Cardt itemsc={menucard} />
					<Cardt itemsc={menucard} />
					<Cardt itemsc={menucard} />
					<Cardt itemsc={menucard} />
				</div>
				<Footert itemsf={menufoot} />
			</div>
		);
	}
}
