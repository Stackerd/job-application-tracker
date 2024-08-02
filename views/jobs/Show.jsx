import React from 'react';
import DefaultLayout from '../layout/Default';

class Show extends React.Component {
    render() {
        const job = this.props.job;

        return (
            <DefaultLayout title="Show an Individual job">
                <p>The {job.jobDate} is {job.name}</p>
                {job.submittedApplication ? 'Application Submitted' : "NOT Submitted!"}
                <br />
                <a href={`/jobs/${job._id}/edit`}>Edit This job</a>
                <form action={`/jobs/${job._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/jobs">Back to Index</a>
            </DefaultLayout >

        )
    }
}

export default Show;