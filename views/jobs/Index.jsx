const React = require ('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
    render() {
        const { jobs } = this.props; 
        const jobsArray = jobs || [];
        return (
            <DefaultLayout title={"jobs Index Page"}>
                <nav>
                    <a href='/home'  to="/">Home</a> <br/>
                    <a href="/jobs/new">Create a New job</a>
                </nav>
                <ul>
                    {jobsArray.length &&
                    jobsArray.map((job, i) => {
                        return (
                            <li key={job._id}>
                                The {' '}
                                <Link to={`/jobs/${job._id}`}>
                                    {job.jobDate}
                                </Link> {' '}
                                is {job.name} <br></br>
                                {job.submittedApplication
                                    ? `Application is submitted`
                                    : `Application is NOT submitted`}
                                <br />
                                <Link to={`/jobs/${job._id}/edit`}>Edit This job</Link>
                                <form action={`/jobs/${job._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE"/>
                                </form>
                            </li>
                        )
                    })}
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;
