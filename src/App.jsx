import { useState, useEffect } from 'react';
import './App.css';
import { SlMagnifier } from "react-icons/sl";
import ProductosData from './data/Productos.json';
import Logo from './assets/logo.png';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    setCategories(ProductosData.categorias);
    setProducts(ProductosData.productos);
    setFilteredProducts(ProductosData.productos);
  }, []);


  useEffect(() => {
    let currentProducts = products;


    if (searchTerm) {
      currentProducts = currentProducts.filter(product =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }


    if (selectedCategory) {
      currentProducts = currentProducts.filter(product =>
        product.categoriaId === parseInt(selectedCategory)
      );
    }

  
    setFilteredProducts(currentProducts);
  }, [searchTerm, selectedCategory, products]);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  const handleResetFilters = () => {
    setSearchTerm(''); 
    setSelectedCategory(''); 
  };

  return (
    <div className="app-container">
       <header className="main-header-area">
        <div className="header-left">
          <img
            src={Logo}
            alt="Logo de Bodega"
            className="logo"
          />
        </div>
        <div className="blue-header-content">
          <div className="header-center">
            <h1>Bodega</h1>
          </div>
        </div>
      </header>
      <div className="top-controls-container pt-20">
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar Productos"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SlMagnifier className="search-icon" />
        </div>
      </div>
      <div className="filters-and-products-container">
        <div className="category-filter pt-20">
          <button className="reset-button style-k" onClick={handleResetFilters}>
          ← Regresar a Todo
        </button>
          <label htmlFor="category-select">Filtrar por Categoría:</label>
          <select id="category-select" onChange={handleCategoryChange} value={selectedCategory}>
            <option value="">Todas las Categorías</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="products-list-container">
          <h2>Listado de Productos</h2>
          {filteredProducts.length > 0 ? (
            <ul className="products-list">
              {filteredProducts.map(product => (
                <li key={product.id} className="product-item">
                  <img
                    src={product.photo}
                    alt={product.nombre}
                    className="product-image"
                
                  />
                  <h3>{product.nombre}</h3>
                  <p>{product.descripcion}</p>
                  <p className="product-price">Precio: S/. {product.precio.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
