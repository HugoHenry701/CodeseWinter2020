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
            listClass: [],
            message: '',
        }
    }
    async fetchData() {
        const res = await api.user.getAllClass()
        if (res.status) {
            this.setState({
                listClass: res.data,
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

    render() {
        const { history } = this.props

        return (
            <div>
                <h1>Class include:</h1>

                {
                    this.state.listClass.map(c => (
                        <div >
                            <Button
                                variant="outlined"
                                onClick={() => {
                                    history.push(`/class/${c.idClass}`)
                                }}
                            >{c.className}</Button>
                        </div>
                    ))
                }

                <h1>{this.state.message}</h1>
            </div>
        )
    }
}
export default withRouter(index)