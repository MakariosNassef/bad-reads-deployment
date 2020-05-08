import React, {
    Component
} from 'react';
import axios from 'axios';
import HomeCategoryTable from './homeCategoryTable';
import HomeAuthorTable from './HomeAuthorTable';
import HomeBookTable from './HomeBookTable';
import './author.css'
import DataTableErrorCategory from './data-table-error-category'
import DataTableErrorBook from './data-table-error-book'
import DataTableError from './data-table-error';



export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryCollection: [],
            bookCollection: [],
            authorCollection: []

        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/home/category')
            .then(res => {
                console.log(res.data.sort(() => Math.random() - 0.5))

                this.setState({
                    categoryCollection: res.data.slice(0, 5)
                });
                console.log(typeof (this.state.categoryCollection));
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:4000/home/author')
            .then(res => {
                console.log(res.data.sort(() => Math.random() - 0.5))

                this.setState({
                    authorCollection: res.data.slice(0, 5)
                });
                console.log(typeof (this.state.authorCollection));
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:4000/home/book')
            .then(res => {
                console.log(res.data.sort(() => Math.random() - 0.5))

                this.setState({
                    bookCollection: res.data.slice(0, 5)
                });
                console.log(typeof (this.state.bookCollection));
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    homeCategoryTable() {
        if (this.state.categoryCollection.length == 0) {
            return <DataTableErrorCategory />
        }
        else {
            return this.state.categoryCollection.map((data, i) => {
                return <HomeCategoryTable obj={data} key={i} />;
            });
        }
    }

    homeAuthorTable() {
        if (this.state.authorCollection.length == 0) {
            return <DataTableError />
        }
        else {
            return this.state.authorCollection.map((data, i) => {
                return <HomeAuthorTable obj={data} key={i} />;
            });
        }
    }

    homeBookTable() {
        if (this.state.bookCollection.length == 0) {
            return <DataTableErrorBook />
        }
        else {
            return this.state.bookCollection.map((data, i) => {
                return <HomeBookTable obj={data} key={i} />;
            });
        }
    }

    render() {
        return (
            <center>
                <h1 className="grad">Pobular Books</h1>
                <div className="i-am-centered" >
                    <div className="row boy" >

                        {
                            this.homeBookTable()
                        }

                    </div>
                </div>

                <h1 className="grad">Pobular Categories</h1>
                <div className="i-am-centered" >

                    <div className="row boy" >
                        {
                            this.homeCategoryTable()
                        }


                    </div>
                </div>


                <h1 className="grad">Pobular Authors</h1>
                <div className="i-am-centered" >

                    <div className="row boy" >
                        {
                            this.homeAuthorTable()
                        }


                    </div>
                </div>
            </center>
        )
    }
}