import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('Should be render heading', () => {
    const { container } = render(<Main />)

    const heading = screen.getByRole('heading', { name: /react avançado/i })

    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
