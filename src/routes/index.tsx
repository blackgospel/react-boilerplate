import { Route } from 'react-router-dom'
import { WebsiteRoutes } from './index.routes'
import { Container, RouteContainer } from './index.styles'

const Routes: React.FC = () => {
  return (
    <Container>
      <RouteContainer>
        {WebsiteRoutes.map(({ name, exact, path, Component }) => {
          return (
            <Route key={name} exact={exact} path={path} component={Component} />
          )
        })}
      </RouteContainer>
    </Container>
  )
}

export default Routes
