import * as S from './styles'

type Props = {
  title?: string
  description?: string
}

export const Main = ({
  title = 'React Avançado',
  description = 'Boilerplate Nextjs'
}: Props) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <p>{description}</p>
    </S.Wrapper>
  )
}
