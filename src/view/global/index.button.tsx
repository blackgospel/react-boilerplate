import styled from 'styled-components'

const BaseButton = styled.button``

const Button: React.FC = ({ children }) => {
  return <BaseButton>{children}</BaseButton>
}

export default Button
