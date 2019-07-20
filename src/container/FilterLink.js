import {connect} from 'react-redux'
import {setVisibilityFilter} from '../store/actionCreators/actionTodo'
import Link from '../components/Link'

//para mapear la propiedades que se piensa pasar
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    } 
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink