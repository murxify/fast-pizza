import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className='bg-stone-800 text-stone-200 uppercase p-4 sm:px-6 text-sm md:text-base flex justify-between items-center'>
      <p className='text-stone-300 font-semibold space-x-4 sm:space-x-6'>
        <span>
          {totalCartQuantity}
          {totalCartQuantity > 1 ? ' pizzas' : ' pizza'}
        </span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;