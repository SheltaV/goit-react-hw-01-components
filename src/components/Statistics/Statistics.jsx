import { Section, StatList } from './Statistics.styled';
// import PropTypes from 'prop-types';

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

// Statistics.PropTypes = {
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired
// }