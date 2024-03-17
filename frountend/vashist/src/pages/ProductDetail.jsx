import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import productData from '../components/details';


function ProductDetail() {
    const { id }  = useParams()
    const [product, setProduct] = useState(null);
    const foundProduct = productData.find(item => item.id == (id));

    useEffect(() => {

    if (foundProduct) {
      setProduct(foundProduct);
    }
    
    }, [id]);

    if (!product) {
        return (
        <div>
            <button type="button" class="bg-indigo-500 ..." disabled>
              <svg class="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24"></svg>
              Processing...
            </button>
        </div>
        );
    }else {
        console.log(`Product with ID ${id} not found`);
      }

  return (
    <div>
      <Navbar />
      <div className='product sm:py-30 lg:py-30 py-30'>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={product.name}
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={product.imageSrc}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                {/* Other details */}
                <p className=" py-10 leading-relaxed">{product.description}</p>
                {/* Other elements */}
                <div class="flex">
                    <div class="flex items-center">
                      <span class="mr-3">Time in Hr</span>
                      <div class="relative mx-3">
                        <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                        
                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                  </div>
                    <span class="title-font  font-medium text-2xl text-gray-900">{product.price}</span>
                    <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Button</button>
                    <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{marginTop:'100px'}}>
      <Footer />
      </div>
    </div>
  );
}

export default ProductDetail;
