const FilterItems = ({ keyword, removeKeywords }) => (
    <div className="item-box">
      <div className='item'>{keyword}</div>
      <div className='button-remove' onClick={() => removeKeywords(keyword)}>
        <img src={'../images/icon-remove.svg'} alt='X' />
      </div>
    </div>
  )

export default FilterItems;
