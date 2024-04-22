import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class NewsItems extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-2">
                <div className="card">
                    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{ left: '82%', zIndex: '1' }}>{source}</span>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." style={{ width: '263px', height: '200px' }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <Link rel="noreferrer" to={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More...</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems