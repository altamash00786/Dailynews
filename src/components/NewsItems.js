import React from 'react';

const NewsItems = (props) => {
    let { title, description, imageUrl, newsurl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0',
                }}>
                    <span className="badge rounded-pill bg-success"> {source} </span>
                </div>
                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." style={{ width: '358px', height: '200px' }} />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More...</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItems;
