//interviews/Edit.jsx
const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
                <form action={`/interviews/${this.props. interview._id}?_method=PUT`} method="POST">
                    Date: <input type="text" date="date" defaultValue={this.props.interview.date} /><br />
                    Name: <input type="text" name="name" defaultValue={this.props.interview.name} /><br />
                    Interview Complete:
                    {this.props.interview. interviewComplete ? <input type="checkbox" name="interviewComplete" defaultChecked /> : <input type="checkbox" name="interviewComplete" />}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit;