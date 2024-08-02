const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New  Interview'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/interviews' method="POST">
                    Date: <input type="date" date="date" /><br />
                    Name: < input type="text" name="name"/> <br />
                    Interview Complete: <input type="checkbox" name="interviewComplete"/> <br />
                    <input type="submit" name="" value="Create  Interview"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;