import {Section, StatList} from './Statistics.styled'

export const Statistics = ({items}) => {
    return <Section>
        <h2>Upload stats</h2>
        <StatList>
        {items.map(item => (<li key={item.id}>
            <p>{item.label}</p>
            <p>{item.percentage}%</p>
        </li>))}
        </StatList>
    </Section>
}