import React from 'react'
// Card, Row, Input, Text
// themecontext

export default class NotUsingHooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Mary',
            surname: 'Poppins',
            width: window.innerWidth
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
        document.title = this.state.name + ' ' + this.state.surname
    }

    componentDidUpdate() {
        document.title = this.state.name + ' ' + this.state.surname
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    handleSurnameChange(event) {
        this.setState({ surname: event.target.value })
    }

    handleResize() {
        this.setState({ width: window.innerWidth })
    }

    render() {
        const { name, surname, width } = this.state

        return (
            <div>
                <div label="Name">
                    <input value={name} onChange={this.handleNameChange} />
                </div>
                <div label="Surname">
                <input value={surname} onChange={this.handleSurnameChange} />
                </div>
                <div label="Width">{width}</div>
            </div>
        )
    }
}