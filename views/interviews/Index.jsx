const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')

class Index extends React.Component {
    render() {
        const {  interviews } = this.props;
        

        return (
            <DefaultLayout title={" interviews Index Page"}>
                <nav>
                    <a href="/" >Home</a>
                    <br />
                    <a href="/interviews/new">Create a New Interview</a>
                </nav>
                <ul>
                    { interviews.map(( interview, i) => {
                        return (
                            <li key={ interview._id}>
                                The {' '}
                                <a href={`/interviews/${ interview._id}`}>
                                    { interview.date}
                                </a> {' '}
                                is { interview.name} <br></br>
                                { interview. interviewComplete
                                ? `Interview is complete`
                            :   `Inteview is Not complete`}
                            <br />
                            <a href={`/interviews/${ interview._id}/edit`}>Edit This  Interview</a>
                            <form action={`/interviews/${ interview._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;