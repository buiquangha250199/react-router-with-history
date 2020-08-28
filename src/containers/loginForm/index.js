import { connect } from 'react-redux'
import  * as actions  from '../../actions'
import LoginForm from '../../components/formLogin'
import Footer from '../../components/footer'

const mapStateToProps = (state, ownProps) => ({
  
  })
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    onFormSubmit: (email, password) => () => {
        // dispatch(actions.login(email,password))
        let data = {email, password}
        console.log(data)
        fetch('https://rain-land.glitch.me/login', {
            method: 'POST',
            data
        }).then(response => response.json())
          .then(data => {
              console.log(data)
              if(data.status === "True") window.location.href = "/home"
          })
    }
  })

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)