import React, { Component } from 'react'
import api from '../../api'
import {
    Button
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class index extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props)
        this.state = {
            listStudent: [],
            message: '',
        }
    }

    async fetchData() {
        const { match: { params } } = this.props;
        const res = await api.user.getStudentByID(params.idClass)
        if (res.status) {
            this.setState({
                listStudent: res.data.data,
            })
        } else {
            this.setState({
                message: res.message
            })
        }
    }

    async componentDidMount() {
        await this.fetchData()
    }
    onClickDirect = (url) => {
        window.location = `/student/${url}`
    }
    render() {
        const { history } = this.props
        return (
            <div>
                <h1>Hello classroom, this is the student list:</h1>
                {
                    this.state.listStudent.map(s => (
                        <div>
                            <Button
                                variant="contained" color="primary"
                                onClick={() => {
                                    history.push(`/student/${s.idStudent}`)
                                }}
                            >{s.fullName}</Button>
                        </div>
                    ))
                }

            </div>
        )
    }
}
export default withRouter(index)