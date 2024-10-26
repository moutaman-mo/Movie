import "./PaginationFooter.css";
import ReactPaginate from "react-paginate";
export default function PaginationFooter({ getPage, pageCount  }) {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  return (
    <div className="pagination-show" >
    <div className="pagination-bar">
      <ReactPaginate
        className=" d-flex justify-content-center p-3"
        breakLabel="..."
        nextLabel=" > "
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=" <"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        previousClassName={"page-link"}
        nextClassName={"page-link"}
      />
    </div>
    </div>
  );
}
