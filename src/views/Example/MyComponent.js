import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {

    state = {

        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '600' },
            { id: 'abcJob2', title: 'Tester', salary: '500' },
            { id: 'abcJob3', title: 'Project Manager', salary: '600' },
        ]

    }

    addNewJob = (job) => {
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            //  arrJobs: currentJobs
        })
        console.log('check job from parent: ', job);

    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('run didUpdate: ', 'pre state: ', prevState, 'current state: ', this.state);

    }
    componentDidMount() {
        console.log('componentDidMount is run');

    }
    render() {
        console.log('Call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent

                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}

                />

            </>


        )
    }
}
export default MyComponent