import Property from '../home/PropertyCard/PropertyCard';
import Collection from './Collection';

const AppertmentsCollection = () => {
  // Load Appertments
  return (
    <Collection
      title={'Recommended'}
      collection={[]}
      renderItem={(appertment) => <Property property={appertment} />}
    />
  );
};

export default AppertmentsCollection;
