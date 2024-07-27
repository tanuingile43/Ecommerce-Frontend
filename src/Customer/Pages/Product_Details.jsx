
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Box, Button, Grid, Rating } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress';

import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProductsById } from '../../State/Products/Action';
import Home_Products from '../Components/Products/Home_Products';

const product = {

    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
    ],
      highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProductDetails = () => {

    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()

    const { products } = useSelector(store => store)

    const handleAddTocart = () => {
        const data = { productId: params.productId, size: selectedSize.name }
        dispatch(addItemToCart(data))
        navigate('/cart')

    }



    useEffect(() => {
        const data = { productId: params.productId }
        dispatch(findProductsById(data))
    }, [params.productId])


    return (
        <div className="bg-white rounded-md p-5 ">
            <h2 className='text-2xl font-bold pb-5'>Product Details</h2>
            <div>


                {/* Product Details */}
                <section className='grid grid-cols  lg:grid-cols-2 px-4 pt-10'>
                    {/* Image gallery */}
                    <div className="flex flex-col ">
                        <div className="overflow-hidden border-light  border-radius max-w-[20rem] max-h-[25rem]">
                            <img
                                src={products.product?.imageUrl}
                                alt={product.images[0].alt}
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                        <div className="flex flex-wrap space-x-1 ">
                            {
                                product.images.map((item) =>
                                    <div className="aspect-h-2 aspect-w-3 overflow-hidden border-light p-1 border-radius max-w-[4.8rem] max-h-[4.8rem] mt-4">
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="lg:col-span-1 maxt-auto  max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                        <div className="lg:col-span-2 ">
                            <h1 className="text-lg  lg:text-xl font-semibold text-gray-900">{products.product?.brand}</h1>
                            <h1 className="text-lg  lg:text-xl font-semibold text-gray-900 opacity-60 pt-1">{products.product?.title}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                                <p className='font-semibold'>₹{products.product?.discountedPrice} </p>
                                <p className="opacity-50 line-through"> ₹{products.product?.price}</p>
                                <p className='text-green-600 font-semibold'>{products.product?.discountPersent}% off</p>

                            </div>
                            {/* Reviews */}
                            <div className="mt-6">
                                <h1 className='text-sm font-medium text-gray-900'>Rating & Reviews</h1>
                                <div className="flex items-center space-x-3">
                                    <Rating name="read-only" value={5.5} readOnly />
                                    <p className='opacity-50 text-sm'>78999 Rating</p>
                                    <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>567 Reviews</p>
                                </div>
                            </div>

                            <form className="mt-10">


                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Color</h3>
                                    </div>

                                    <p className='border-light border-radius mt-1 w-[5rem] text-white flex items-center justify-center p-1 bg-slate-800 :font-semibold'>{products.product?.color}</p>

                                </div>


                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>

                                    </div>

                                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                            {product.sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ active }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                            active ? 'border-light  ring-indigo-500' : '',
                                                            'group relative flex items-center justify-center border-light  border-radius  text-sm font-medium uppercase hover:box-shadow focus:outline-none sm:flex-1 sm:py-2  sm:px-3'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                            {size.inStock ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'border' : 'border-2',
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        'pointer-events-none absolute -inset-px rounded-md'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>



                                <Button onClick={handleAddTocart} variant='contained' sx={{ px: '2rem', py: '1rem', mt: "2rem", bgcolor: "#9155fd" }} >
                                    Add to Cart
                                </Button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rating & Reviews */}

                <section>
                    <h1 className='font-semibold text-lg pb-4 text-gray-900'>Recent Review & Rating</h1>
                    <div className="border p-5">
                        <Grid container spacing={7}>
                            <Grid item xs={6}>
                                <div className="space-y-5">
                                    Review Card
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <h1 className='text-xl font-semibold pb-1 text-gray-900'>Product Rating</h1>
                                <div className='flex items-center space-x-3'>
                                    <Rating readOnly value={4.6} precision={.5} />
                                    <p className='opacity-60'>6788 Ratings</p>
                                </div>
                                <Box className='mt-5 space-y-3'>
                                    <Grid container alignItems={'center'} gap={2}>
                                        <Grid item xs={2}>Excellent</Grid>
                                        <Grid item xs={7} >
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', height: 7, borderRadius: 4 }} value={60} variant='determinate' color='success'></LinearProgress>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems={'center'} gap={2}>
                                        <Grid item xs={2}>Very Good</Grid>
                                        <Grid item xs={7} >
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', height: 7, borderRadius: 4 }} value={40} variant='determinate' color='success'></LinearProgress>
                                        </Grid>
                                    </Grid>

                                    <Grid container alignItems={'center'} gap={2}>
                                        <Grid item xs={2}>Good</Grid>
                                        <Grid item xs={7} >
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', height: 7, borderRadius: 4 }} value={25} variant='determinate' ></LinearProgress>
                                        </Grid>
                                    </Grid>

                                    <Grid container alignItems={'center'} gap={2}>
                                        <Grid item xs={2}>Average</Grid>
                                        <Grid item xs={7} >
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', height: 7, borderRadius: 4 }} value={20} variant='determinate' color='warning'></LinearProgress>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems={'center'} gap={2}>
                                        <Grid item xs={2}>Poor</Grid>
                                        <Grid item xs={7} >
                                            <LinearProgress sx={{ bgcolor: '#d0d0d0', height: 7, borderRadius: 4 }} value={10} variant='determinate' color='error'></LinearProgress>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </section>

                {/* Similar Products */}

                <section className='pt-10'>
                    <h1 className='text-gray-900'>Similer Products</h1>

                    <div className="flex flex-wrap  w-full gap-2">
                        Prdocuts
                    </div>
                </section>

            </div>
        </div>
    )
}

export default ProductDetails