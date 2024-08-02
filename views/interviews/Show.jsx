const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')

class Show extends React.Component {
    render() {
        const  interview = this.props. interview;

        return (
            <DefaultLayout title="Show an Individual  interview">
                <p>The { interview.date} is { interview.name}</p>
                { interview.interviewComplete ? 'Interview is complete' : "Inteview is Not complete!"}
                <br />
                <a href={`/ interviews/${ interview._id}/edit`}>Edit This interview</a>
                <form action={`/ interviews/${ interview._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/ interviews">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;