import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Track My Tasks',
}

Header.propTypes = {
  title: PropTypes.string,
}

// can use the below above via  <h1 style={headingStyle} ></h1> or
// as <h1  style={{ color: 'red' }}></h1>
// const headingStyle = {
//   color: 'grey',
// }

export default Header
