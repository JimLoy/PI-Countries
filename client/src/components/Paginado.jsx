export default function Paginado ({countriesPerPage, countries, paginado}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul>
        {
          pageNumbers && pageNumbers.map(num => {
            <a onClick={() => paginado(num)}>{num}</a>
          })
        }
      </ul>
    </nav>
  )
}
