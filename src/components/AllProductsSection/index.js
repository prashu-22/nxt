// import React, { useState, useEffect } from 'react';
// import { useWishlist } from '../../context/WishlistContext';
// import Footer from '../Footer';
// import { useLocation } from 'react-router-dom';
// import './index.css';

// const FILTERS = [
//   'IDEAL FOR',
//   'OCCASION',
//   'WORK',
//   'FABRIC',
//   'SEGMENT',
//   'SUITABLE FOR',
//   'RAW MATERIALS',
//   'PATTERN',
// ];

// const OPTIONS = ['Men', 'Women', 'Baby & Kids'];

// const AllProductsSection = () => {
//   const [products, setProducts] = useState([]);
//   const [expanded, setExpanded] = useState({});
//   const [selectedFilters, setSelectedFilters] = useState({});
//   const [showFilters, setShowFilters] = useState(true);

//   const { wishlist, addToWishlist } = useWishlist();

//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const searchTerm = searchParams.get('search')?.toLowerCase() || '';

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => setProducts(data))
//       .catch(err => console.error('Failed to fetch products:', err));
//   }, []);

//   const toggleExpand = filterName =>
//     setExpanded(prev => ({ ...prev, [filterName]: !prev[filterName] }));

//   const handleCheckboxChange = (filterName, option) => {
//     setSelectedFilters(prev => {
//       const current = prev[filterName] || [];
//       return {
//         ...prev,
//         [filterName]: current.includes(option)
//           ? current.filter(item => item !== option)
//           : [...current, option],
//       };
//     });
//   };

//   const handleAddToWishlist = product => addToWishlist(product);

//   const isInWishlist = productId =>
//     wishlist.some(item => item.id === productId);

//   const applyFilterLogic = product => {
//     const matchesFilters = Object.entries(selectedFilters).every(([filter, selectedOptions]) => {
//       if (selectedOptions.length === 0) return true;
//       const content = (product.title + product.description).toLowerCase();
//       return selectedOptions.some(option =>
//         content.includes(option.toLowerCase())
//       );
//     });

//     const matchesSearch =
//       searchTerm === '' ||
//       (product.title + product.description + product.price)
//         .toLowerCase()
//         .includes(searchTerm);

//     return matchesFilters && matchesSearch;
//   };

//   const filteredProducts = products.filter(applyFilterLogic);

//   return (
//     <div>
//       <section className="discover-container">
//         <h1 className="discover-heading">DISCOVER OUR PRODUCTS</h1>
//         <p className="discover-description">
//           Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
//           Dolor integer scelerisque nibh amet mi ut elementum dolor.
//         </p>
//       </section>

//       <div className="all-products-container">
//         <div>
//       <div className="filter-toggle">
//       {showFilters && <span className="items-count">{filteredProducts.length} ITEMS</span>}
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             setShowFilters(prev => !prev);
//           }}
//           className="filter-toggle-link"
//         >
//           <span>{showFilters ? 'Hide Filters ⮜' : '⮞⮞'}</span>
//         </a>
//       </div>
//       {showFilters && (
//           <div className="sidebar">
            
//             <label className="customizable">
//               <input type="checkbox" />
//               <span>Customizable</span>
//             </label>

//             {FILTERS.map(filterName => (
//               <div className="filter-group" key={filterName}>
//                 <div
//                   className="filter-header"
//                   onClick={() => toggleExpand(filterName)}
//                   role="button"
//                   tabIndex={0}
//                   onKeyDown={e => {
//                     if (e.key === 'Enter' || e.key === ' ') toggleExpand(filterName);
//                   }}
//                 >
//                   <strong>
//                     {filterName}
//                     <span className="arrow-icon">
//                       {expanded[filterName] ? '▲' : '▼'}
//                     </span>
//                   </strong>
//                 </div>

//                 {expanded[filterName] && (
//                   <div className="filter-options">
//                     {OPTIONS.map(option => (
//                       <label key={option}>
//                         <input
//                           type="checkbox"
//                           checked={selectedFilters[filterName]?.includes(option) || false}
//                           onChange={() => handleCheckboxChange(filterName, option)}
//                         />
//                         {option}
//                       </label>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
          
//         )}
//         </div>

//         <div className="products-section">
//           <p>ldfj</p>
//           <div className="products-grid">
//             {filteredProducts.length === 0 ? (
//               <p>No products found.</p>
//             ) : (
//               filteredProducts.map(product => (
//                 <div key={product.id} className="product-card">
//                   <img src={product.image} alt={product.title} />
//                   <h4>{product.title.substring(0, 25)}...</h4>
//                   <p>${product.price}</p>
//                   <button
//                     className={`wishlist ${isInWishlist(product.id) ? 'added' : ''}`}
//                     onClick={() => handleAddToWishlist(product)}
//                   >
//                     ♡
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default AllProductsSection;

import React, { useState, useEffect } from 'react';
import { useWishlist } from '../../context/WishlistContext';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';
import './index.css';

const FILTERS = [
  'IDEAL FOR',
  'OCCASION',
  'WORK',
  'FABRIC',
  'SEGMENT',
  'SUITABLE FOR',
  'RAW MATERIALS',
  'PATTERN',
];

const OPTIONS = ['Men', 'Women', 'Baby & Kids'];

const AllProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [showFilters, setShowFilters] = useState(true);
  const [sortOption, setSortOption] = useState('recommends'); // Added state for sorting

  const { wishlist, addToWishlist } = useWishlist();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search')?.toLowerCase() || '';

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const toggleExpand = filterName =>
    setExpanded(prev => ({ ...prev, [filterName]: !prev[filterName] }));

  const handleCheckboxChange = (filterName, option) => {
    setSelectedFilters(prev => {
      const current = prev[filterName] || [];
      return {
        ...prev,
        [filterName]: current.includes(option)
          ? current.filter(item => item !== option)
          : [...current, option],
      };
    });
  };

  const handleAddToWishlist = (product) => {
    if (!isInWishlist(product.id)) {
      addToWishlist(product);
    }
  };
  
  const isInWishlist = productId =>
    wishlist.some(item => item.id === productId);

  const applyFilterLogic = product => {
    const matchesFilters = Object.entries(selectedFilters).every(([filter, selectedOptions]) => {
      if (selectedOptions.length === 0) return true;
      const content = (product.title + product.description).toLowerCase();
      return selectedOptions.some(option =>
        content.includes(option.toLowerCase())
      );
    });

    const matchesSearch =
      searchTerm === '' ||
      (product.title + product.description + product.price)
        .toLowerCase()
        .includes(searchTerm);

    return matchesFilters && matchesSearch;
  };

  const filteredProducts = products.filter(applyFilterLogic);

  // Sorting Function
  const sortProducts = (products, option) => {
    switch (option) {
      case 'priceLowToHigh':
        return [...products].sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return [...products].sort((a, b) => b.price - a.price);
      case 'recommends':
      default:
        return products; // Default recommendation logic
    }
  };

  const sortedProducts = sortProducts(filteredProducts, sortOption);

  return (
    <div>
      <section className="discover-container">
        <h1 className="discover-heading">DISCOVER OUR PRODUCTS</h1>
        <p className="discover-description">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>

      <div className="all-products-container">
        <div>
          <div className="filter-toggle">
            {showFilters && <span className="items-count">{filteredProducts.length} ITEMS</span>}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowFilters(prev => !prev);
              }}
              className="filter-toggle-link"
            >
              <span>{showFilters ? 'Hide Filters ⮜' : '⮞⮞'}</span>
            </a>
          </div>

          {showFilters && (
            <div className="sidebar">
              <label className="customizable">
                <input type="checkbox" />
                <span>Customizable</span>
              </label>

              {FILTERS.map(filterName => (
                <div className="filter-group" key={filterName}>
                  <div
                    className="filter-header"
                    onClick={() => toggleExpand(filterName)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') toggleExpand(filterName);
                    }}
                  >
                    <strong>
                      {filterName}
                      <span className="arrow-icon">
                        {expanded[filterName] ? '▲' : '▼'}
                      </span>
                    </strong>
                  </div>

                  {expanded[filterName] && (
                    <div className="filter-options">
                      {OPTIONS.map(option => (
                        <label key={option}>
                          <input
                            type="checkbox"
                            checked={selectedFilters[filterName]?.includes(option) || false}
                            onChange={() => handleCheckboxChange(filterName, option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="products-section">
        <div className="sort-dropdown">
          <label htmlFor="sort-options">Sort By:</label>
          <select
            id="sort-options"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="recommends">Recommends</option>
            <option value="priceLowToHigh">Price Low to High</option>
            <option value="priceHighToLow">Price High to Low</option>
          </select>
        </div>
          <div className="products-grid">
            {sortedProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              sortedProducts.map(product => (
                <div key={product.id} className="product-card">
                  
                <img src={product.image} alt={product.title} />
                <button
                  className={`wishlist ${
                    isInWishlist(product.id) ? 'added' : ''
                  }`}
                  onClick={() => handleAddToWishlist(product)}
                >
                  ♡
                </button>
                <h4>{product.title.substring(0, 25)}...</h4>
                <p>${product.price}</p>
               
              </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllProductsSection;
