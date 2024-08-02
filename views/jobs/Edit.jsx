//jobs/Edit.jsx
import React from 'react';
import DefaultLayout from '../layout/Default';

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
                <form action={`/jobs/${this.props.fruit._id}?_method=PUT`} method="POST">
                    Date: <input type="text" jobDate="date" defaultValue={this.props.job.jobDate} /><br />
                    Name: <input type="text" name="name" defaultValue={this.props.job.name} /><br />
                    Application Submitted:
                    {this.props.job.submittedApplication ? <input type="checkbox" name="submittedApplication" defaultChecked /> : <input type="checkbox" name="submittedApplication" />}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        )
    }
}
export default Edit;
