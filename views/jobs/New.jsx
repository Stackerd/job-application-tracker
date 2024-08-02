import React from 'react';
import DefaultLayout from '../layout/Default';

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Job'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/jobs' method="POST">
                    Date: <input type="date" jobDate="date" /><br />
                    Name: <input type="text" name="name"/> <br />
                    Application Submitted: <input type="checkbox" name="submittedApplication"/> <br />
                    <input type="submit" name="" value="Create Job"/>
                </form>
            </DefaultLayout>
        )
    }
}

export default New;