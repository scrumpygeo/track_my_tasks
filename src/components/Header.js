import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
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
