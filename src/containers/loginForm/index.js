import { connect } from 'react-redux'
import  * as actions  from '../../actions'
import LoginForm from '../../components/formLogin'
// import Footer from '../../components/footer'

const mapStateToProps = (state, ownProps) => ({
  
  })
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    onFormSubmit: (email, password) => () => {
        dispatch(actions.login(email, password))
    }
  })

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)