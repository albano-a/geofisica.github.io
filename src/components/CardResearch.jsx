import { Component } from "preact";
import { Link } from "preact-router/match";
import "../style/cardmaterials.css";

class CardResearch extends Component {
  render() {
    const { title, description, href, imgSrc } = this.props;

    return (
      <div className="card custom-card">
        <a
          className="a-placeholder"
          target="_blank"
          href={href}
          rel="noopener noreferrer"
        >
          <div className="card-image">
            <figure className="image">
              <img src={imgSrc} alt={title} />
            </figure>
          </div>
          <div className="card-content">
            <h1 className="title has-text-centered">{title}</h1>
            <p className="is-size-5 has-text-centered">{description}</p>
          </div>
          <footer className="card-footer custom-footer">
            <Link
              className="card-footer-item has-text-weight-bold "
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acesse aqui!
            </Link>
          </footer>
        </a>
      </div>
    );
  }
}

export default CardResearch;