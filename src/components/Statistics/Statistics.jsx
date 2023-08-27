import { Section, StatList } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({stats, title}) => {
    return <Section>
        {title && <h2>Upload stats</h2>}
        <StatList>
        {stats.map(item => (<li key={item.id}>
            <p>{item.label}</p>
            <p>{item.percentage}%</p>
        </li>))}
        </StatList>
    </Section>
}

Statistics.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })  
    )}