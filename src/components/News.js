import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
    }

    async componentDidMount() {
        this.fetchNews();
    }

    async fetchNews() {
        const { country, category, pageSize } = this.props;
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 }, () => this.fetchNews());
    };

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 }, () => this.fetchNews());
    };

    render() {
        const centerStyle = {
            textAlign: 'center',
            marginTop: '20px',
        };

        return (
            <div>
                <div className="container my-3">
                    <div style={centerStyle}>
                        <h1>News - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
                        {this.state.loading && <Spinner />}
                    </div>
                    <div className="row">
                        {this.state.articles && this.state.articles.map((element) => {
                            const title = element.title ? element.title.slice(0, 40) : '';
                            const description = element.description ? element.description.slice(0, 80) : '';
                            return (
                                <div className="col-md-4" style={{ padding: "10px" }} key={element.url}>
                                    <NewsItems title={title} description={description} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="container d-flex justify-content-evenly">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
