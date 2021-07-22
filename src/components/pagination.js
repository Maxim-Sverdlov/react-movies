import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/actions';

const Pagination = () => {
  const dispatch = useDispatch();
  const { totalPages } = useSelector((state) => state.page);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <section className="pagination">
        {pages.map((page, index) => {
        return (
          <button
            key={index}
            className="pagination__btn"
            onClick={() => {
              dispatch(setPage(page));
            }
          }
          >
            {page}
          </button>
        );
      })}
    </section>
  );
};

export default Pagination;
