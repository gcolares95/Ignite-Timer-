import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

// Layout da página

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet /> {/* Conteúdo específico da página */}
    </LayoutContainer>
  )
}
