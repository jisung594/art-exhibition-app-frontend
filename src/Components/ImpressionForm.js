import React, {Component} from 'react'
import { connect } from 'react-redux'
import { postToExhibitionImpressions } from '../Redux/actions'

class ImpressionForm extends Component {

  state = {
    user_id: this.props.loggedInUser.id,
    exhibition_id: this.props.exhibition.id,
    title: "",
    content: ""
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.postToExhibitionImpressions(this.state)
  }


  render () {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="title" value={this.state.title}
            onChange={this.changeHandler}
            placeholder="Title"
            className="impression-title"
          />
          <input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.changeHandler}
            placeholder="Content"
            className="impression-content"
          />
          <input
            type="submit"
            className="impression-submit"
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser,
    selectedExhibition: state.selectedExhibition
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postToExhibitionImpressions: (impressionObj) => dispatch(postToExhibitionImpressions(impressionObj))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(ImpressionForm)