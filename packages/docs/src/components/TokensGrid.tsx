import '../styles/tokens-grid.css'

interface Props {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: Props) {
  return (
    <table className="tokens-grid">
      <thead>
        <th>Name</th>
        <th>Value</th>
        {hasRemValue ? <th>Pixels</th> : null}
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue ? (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              ) : null}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
