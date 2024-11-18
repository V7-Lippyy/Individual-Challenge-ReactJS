import { useEffect, useState, useRef, useTransition } from 'react'
import { getAllProducts } from '../../services/getAllProducts'
import ProductList from '../../components/ProductList/ProductList'
import Navbar from '../../components/Navbar/Navbar'
import RadioButton from '../../components/RadioButton/RadioButton'

function Products() {
  const [products, setProducts] = useState([])
  const RadioButtonOpts = useRef([
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Figure',
      value: 'figure'
    },
    {
      label: 'Nendroid',
      value: 'nendroid'
    },
    {
      label: 'Clothes',
      value: 'clothes'
    },
    {
      label: 'Keychain',
      value: 'keychain'
    }
  ])

  const originalProducts = useRef([])
  const [isPending, startTransition] = useTransition()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    function fetchProducts() {
      let allProducts = getAllProducts()
      allProducts = (allProducts.length > 0 ? allProducts : [])
      originalProducts.current = allProducts;
      setProducts(allProducts);
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    startTransition(() => {
      const filtered = originalProducts.current
        .filter(product => {
          const matchedCategory =
            selectedCategory === 'all' || product.categorySlug === selectedCategory
          const matchesSearch = product.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())

          return matchedCategory && matchesSearch
        })
      setProducts(filtered)
    })
  }, [selectedCategory, searchQuery])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query)
  }

  return (
    <>
      <Navbar onSearchChange={handleSearchChange} />

      <div className="px-24 py-4 gap-4 mt-4 flex-wrap">
        {/* Title above the filter */}
        <h1 className="text-6xl font-bold text-center text-[#F2F4FF] mb-8 text-shadow-lg">HOLOLIVE MERCH SHOP</h1>

        {/* Filter Container with Glassmorphism */}
        <div
          className="flex gap-2 flex-wrap p-4 rounded-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.2)', // Transparan putih
            backdropFilter: 'blur(10px)', // Efek blur di belakang
            WebkitBackdropFilter: 'blur(10px)', // Blur untuk Safari
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow untuk depth
            border: '1px solid rgba(255, 255, 255, 0.3)' // Border halus
          }}
        >
          <RadioButton
            options={RadioButtonOpts.current}
            defaultValue={'all'}
            onChange={handleCategoryChange}
          />
        </div>
      </div>

      <section className="container px-24 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mx-auto">
          <ProductList products={products} isPending={isPending} />
        </div>
      </section>
    </>
  )
}

export default Products